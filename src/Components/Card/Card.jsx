import PropTypes from 'prop-types'; 
import styles from './Card.module.scss';

function Card({ title, content }) {
  return (
    <div className={`${styles.card}`}>
        <h2 className={styles.cardHeader}>{title}</h2>
        <div className={styles.cardBody}>{content}</div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired, 
  content: PropTypes.string.isRequired, 
};

export default Card;
