import React from 'react'
import './Side-Grid.css';

const SideGrid = () => {
  return (
    <div className='col-sm-4'>
        <div className="card custom-card">
            <img src="https://www.w3schools.com/w3images/avatar_g.jpg" className="card-img-top" alt="Nature" style={{width: "100%"}} />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>

        <div className="card custom-pop">
            <div className="card-header">
                Popular Posts
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item lgi-custom"><img src="https://www.w3schools.com/w3images/workshop.jpg" alt="xxx" className="w3-left w3-margin-right" style={{width:"50px"}}/>
                <div className='li-desc'>
                <span className="w3-large">Lorem</span><br/>
                    <span>Sed mattis nunc</span>
                <br/>
                </div>
                </li>
                <li className="list-group-item lgi-custom">
                    <img src="https://www.w3schools.com/w3images/gondol.jpg" alt="ttt" className="w3-left w3-margin-right" style={{width:"50px"}}/>
                    <div className='li-desc'>
                        <span className="w3-large">Ipsum</span><br/>
                        <span>Praes tinci sed</span>
                    </div>
                </li>
                <li className="list-group-item lgi-custom">
                    <img src="https://www.w3schools.com/w3images/skies.jpg" alt="pppp" className="w3-left w3-margin-right" style={{width:"50px"}}/>
                    <div className='li-desc'>
                        <span className="w3-large">Dorum</span><br/>
                        <span>Ultricies congue</span>
                    </div>
                </li>
                <li className="list-group-item lgi-custom">
                    <img src="https://www.w3schools.com/w3images/rock.jpg" alt="hhh" className="w3-left w3-margin-right" style={{width:"50px"}}/>
                    <div className='li-desc'>
                        <span className="w3-large">Mingsum</span><br/>
                        <span>Lorem ipsum dipsum</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default SideGrid