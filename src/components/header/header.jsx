import shortVid from '../video/CamHire_vid.mp4'
import "./header.css"

export const Header = (props) => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h1 className="i-name">
                        {props.data ? props.data.title : 'Loading'}
                        <span></span></h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Lorem Ipsum</div>
                            <div className="i-title-item">Lorem Ipsum</div>
                            <div className="i-title-item">Lorem Ipsum</div>
                            <div className="i-title-item">Lorem Ipsum</div>
                        </div>
                    </div>
                    <p className="i-desc">
                        {props.data ? props.data.paragraph : 'Loading'}
                    </p>
                    <a
                        href='#features'
                        className='btn btn-custom btn-lg page-scroll'
                    >
                        Learn More
                    </a>{' '}
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg">

                </div>
                <video autoPlay loop muted className='i-img'>
                    <source src={shortVid} type="video/mp4" />
                </video>
            </div>
        </div>
    )
}