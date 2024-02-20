import styles from './Home.module.scss';
import Card from '../../Components/Card/Card';
import './test.css';

function Home() {
  const gameId = Math.random().toString(36).substr(2, 9);

  return (
    <div className={styles.homeContainer}>
      <h1>Bienvenue sur la page daccueil</h1>
      <div className={styles.cardContainer}>
        <a href={`/CreateGame/${gameId}`} className="test"><Card title="Créer une partie" content="Cliquez ici pour créer une nouvelle partie et invitez vos amis." size="medium" /></a>
        <a href="/join" className="test"><Card title="Rejoindre une partie" content="Cliquez ici pour rejoindre une partie existante." size="medium" /></a>
      </div>
    </div>
  );
}

export default Home;
