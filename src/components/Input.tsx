import React from 'react';
import styles from './Input.module.scss';

interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const Input: React.FC<InputProps> = ({ type, placeholder, value, onChange, error }) => {
  return (
    <div className={styles.inputContainer}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="input-field" />
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
};

export default Input;