import profilePic from './assets/65490872.jpg';

function Card(cardDetails) {
    return (
        <div className="card">
            <img className="card-image" src={profilePic} width="150px" alt="profile picture"/>
            <h2 className="card-title">Mito Khoza</h2>
            <p className="card-text">I'm really cool! I'm a CS Graduate and I also play video games</p>
        </div>
    );
}

export default Card;