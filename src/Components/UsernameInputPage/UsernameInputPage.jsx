import  { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './UsernameInputPage.module.scss';

function PagePseudo({ setUsername }) {
    const [pseudo, setPseudo] = useState('');

    useEffect(() => {
        const savedPseudo = localStorage.getItem('pseudo');
        if (savedPseudo) {
            setPseudo(savedPseudo);
            setUsername(savedPseudo);
        }
    }, [setUsername]);

    const handlePseudoSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('pseudo', pseudo);
        setUsername(pseudo);
    };

    return (
        <div className={styles.pagePseudoContainer}>
            <h2>Saisir votre pseudo</h2>
            <form onSubmit={handlePseudoSubmit}>
                <input
                    type="text"
                    placeholder="Entrez votre pseudo"
                    value={pseudo}
                    onChange={(e) => setPseudo(e.target.value)}
                    className={styles.inputField}
                />
                <button type="submit" className={styles.submitButton}>Valider</button>
            </form>
        </div>
    );
}

PagePseudo.propTypes = {
    setUsername: PropTypes.func.isRequired
};

export default PagePseudo;
