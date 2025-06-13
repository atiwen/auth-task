'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Input from '../../components/Input';
import Button from '../../components/Button';
import styles from './auth.module.scss';

export default function AuthPage() {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const validatePhone = (phone: string) => {
    const iranPhoneRegex = /^(\+98|0)?9\d{9}$/;
    return iranPhoneRegex.test(phone);
  };

  const handleLogin = async () => {
    if (!validatePhone(phone)) {
      setError('لطفا شماره تلفن معتبر ایران وارد کنید');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('https://randomuser.me/api/?results=1&nat=us');
      const data = await response.json();
      const user = data.results[0];
      
      localStorage.setItem('user', JSON.stringify(user));
      router.push('/dashboard');
    } catch (err) {
      console.error('Login failed:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.authForm}>
        <h1>ورود به سیستم</h1>
        <Input
          type="tel"
          placeholder="شماره تلفن (مثال: 09123456789)"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
            setError('');
          }}
          error={error}
        />
        <Button 
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? 'در حال ورود...' : 'ورود'}
        </Button>
      </div>
    </div>
  );
}