// components/Input.tsx
import React from 'react'
import styles from './Input.module.scss'

interface InputProps {
  label: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  error?: string
  type?: string
}

const Input: React.FC<InputProps> = ({ label, value, onChange, placeholder, error, type = 'text' }) => {
  return (
    <div className={styles.inputGroup}>
      <label className={styles.label}>{label}</label>
      <input
        className={`${styles.input} ${error ? styles.inputError : ''}`}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  )
}

export default Input
