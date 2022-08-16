import React, { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const trash = <FontAwesomeIcon className="search" icon={faTrashCan} />

function Users(props) {

    const [data, setData] = useState([])


    // Get data from Local Storage
    useEffect(() => {
        setData(JSON.parse(localStorage.getItem("data")))
    }, [data.length])

    function deleteCard(e) {
        const users = JSON.parse(localStorage.getItem("data"))

        const newList = users.filter(u => e !== u.id)

        localStorage.setItem("data", JSON.stringify(newList))
        setData(newList)
    }


    return (
        <div className='main'>

            <h1>Dados</h1>

            {
                data &&
                <div className='users'>
                    {
                        data.map(d => {
                            return (
                                <div key={d.id} className='user-card'>

                                    <div className='user-field'>
                                        <h3>Tipo de Utilizador: </h3>
                                        {
                                            d.userType.map(type => {
                                                return (
                                                    <div key={type}>
                                                        <li>
                                                            {type}
                                                        </li>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>

                                    <div className='user-field'>
                                        <h3>Email: </h3>
                                        <span>{d.email}</span>
                                    </div>

                                    <div className='user-field'>
                                        <h3>Telefone: </h3>
                                        <span>{d.phone}</span>
                                    </div>

                                    <button onClick={() => deleteCard(d.id)} className='del'>{trash}</button>

                                </div>
                            )
                        })
                    }
                </div>
            }

        </div>
    );
}

export default Users;