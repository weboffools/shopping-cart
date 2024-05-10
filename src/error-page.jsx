import { useRouteError } from 'react-router-dom';
import styles from './styles/error.module.css';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className={styles.center}>
      <h1 className={styles.errorHeading}>Whoa!</h1>
      <p>It seems you have encountered an error.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
