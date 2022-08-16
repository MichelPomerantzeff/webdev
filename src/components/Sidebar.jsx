import React from 'react';
import Footer from './Footer';

import { Link } from "react-router-dom"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faFile, faEye } from '@fortawesome/free-solid-svg-icons'

const home = <FontAwesomeIcon className="search" icon={faHouse} />
const register = <FontAwesomeIcon className="search" icon={faFile} />
const eye = <FontAwesomeIcon className="search" icon={faEye} />



function Sidebar(props) {
    return (
        <aside>
            <div className="sidebar">
               
                <div className='ul'>
                    <div className='li'>
                        <Link to="/webdev/">
                            <div className='link home-link'>
                                <span className='icon'>{home}</span> INICIO
                            </div>
                        </Link>
                    </div>

                    <div className='li'>
                        <Link to="/webdev/add-user">
                            <div className='link'>
                                <span className='icon'>{register}</span> UTILIZADOR
                            </div>
                        </Link>
                    </div>

                    <div className='li'>
                        <Link to="/webdev/users">
                        <div className='link'>
                            <span className='icon'>{eye}</span> DADOS
                        </div>
                        </Link>
                    </div>

                </div>
            </div>

            <Footer />

        </aside>
    );
}

export default Sidebar;