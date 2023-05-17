import california from '../images/california.png'
import './Card.css'
const Card = () => {
    return(
        <div className="card" style={{width: '18rem', textAlign: 'center'}}>
            <img src={california} className="card-img-top" alt="californiaRollImage" />
            <div className="card-body">
                <h5 className="card-title">California Roll</h5>
                <p className="card-text">€1.99</p>
                <button className="btn btn-outline-danger">Elimina</button>
            </div>
        </div>
    );
}
export default Card;