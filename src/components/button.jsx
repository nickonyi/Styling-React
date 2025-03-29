import styles from '../styles/Button.module.css';

export default function Button({ type = 'primary', label = 'button' }) {
  return <button className={styles[type]}>{label}</button>;
}
