'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './dashboard.module.scss';

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      router.push('/auth');
    } else {
      setUser(JSON.parse(storedUser));
    }
  }, [router]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.dashboardContainer}>
      <h1>Welcome to the Dashboard</h1>
      <p>Hello, {user.name.first} {user.name.last}!</p>
      <div className={styles.userInfo}>
        <img src={user.picture.medium} alt="User" />
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
      </div>
    </div>
  );
}