import react from 'react';
import '../card.css';

function Card({ title, imageUrl, body }) {
    return (
        <div className='card-container'>
            <div className='image-container'>
                <img src={imageUrl} alt='' />
            </div>
            <div className='card-content'>
                <div className='card-title'>
                    <h3>{title}</h3>
                </div>
                <div className='card-body'>
                    <p>{body}</p>
                </div>
            </div>
            <div className='btn1'>
                <a
                    href='#features'
                    className='btn btn-custom-card btn-lg page-scroll'
                >
                    View More
                </a>{' '}
            </div>
        </div>
    )
}

export default Card;