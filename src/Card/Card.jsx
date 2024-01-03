import profilePic from '../assets/65490872.jpg';
import styles from './Card.module.css';

function Card(cardDetails) {
    console.log(styles);
    return (
        <div className={styles["card"]}>
            <img className={styles["card-image"]} src={profilePic} width="150px" alt="profile picture"/>
            <h2 className={styles["card-title"]}>Mito Khoza</h2>
            <p className={styles["card-text"]}>I'm really cool! I'm a CS Graduate and I also play video games</p>
        </div>
    );
}

export default Card;