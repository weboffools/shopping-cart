import styles from '../styles/home.module.css';

export default function Home() {
  return (
    <>
      <h1> This is the Home page.  </h1>
      <img className={styles.homeImg} src='/shop-image.jpeg'></img>
    </>
  );
}
