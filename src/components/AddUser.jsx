import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

const minus = <FontAwesomeIcon className="search" icon={faMinus} />
const plus = <FontAwesomeIcon className="search" icon={faPlus} />

function AddUser() {

    const [contactSymbol, setContactSymbol] = useState(true)
    const [userSymbol, setUserSymbol] = useState(true)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [userType, setUserType] = useState([])

    const checkboxInput = document.querySelectorAll(".checkbox input")

    const [data, setData] = useState(JSON.parse(localStorage.getItem("data")) || [])

    const generateID = () => Math.round(Math.random() * 10000)


    // Show/hide contact field 
    function handleContact() {
        const contact = document.querySelector(".contact")
        setContactSymbol(!contactSymbol)
        if (contactSymbol) {
            contact.classList.add("off")
        } else {
            contact.classList.remove("off")
        }
    }

    // Show/hide user field 
    function handleUser() {
        const user = document.querySelector(".user")
        setUserSymbol(!userSymbol)
        if (userSymbol) {
            user.classList.add("off")
        } else {
            user.classList.remove("off")
        }
    }

    //
    function handleCheckbox(e) {
        if (e.target.checked) {
            setUserType(prevUT => [...prevUT, e.target.value])
        } else {
            setUserType(userType.filter(user => e.target.value !== user))
        }
    }

    function resetInputField() {
        setEmail("")
        setPassword("")
        setPhone("")
        setUserType("")
        checkboxInput.forEach(cb => cb.checked = false)
    }


    function save(e) {
        e.preventDefault()

        if (userType[0] === undefined || email === "" || password === "" || phone === "") {
            alert("Por favor, preencha todos os campos!")
        } else {
            let newData = JSON.parse(localStorage.getItem("data"))
            setData([...newData, { id: generateID(), userType, email, password, phone }])
            resetInputField()
        }
    }


    // Save data to Local Storage
    useEffect(() => {
        localStorage.setItem("data", JSON.stringify(data))
    }, [data.length])



    return (
        <form className='form' action="">
            <h1>Utilizador</h1>

            <h2>
                <span>Tipo de Utilizador</span>
                <span className='symbol' onClick={handleUser}>{userSymbol ? minus : plus}</span>
            </h2>

            <div className='user'>
                <div className="checkboxes">

                    <div className="checkbox">
                        <input onChange={e => handleCheckbox(e)}
                            type="checkbox"
                            name="Manager"
                            value={'Project Manager'}
                        />
                        Project Manager
                    </div>


                    <div className="checkbox">
                        <input onChange={e => handleCheckbox(e)}
                            type="checkbox"
                            name="Developer"
                            value={'Developer'}
                        />
                        Developer
                    </div>


                    <div className="checkbox">
                        <input onChange={e => handleCheckbox(e)}
                            type="checkbox"
                            name="Architect"
                            value={'Architect'}
                        />
                        Architect
                    </div>

                </div>
            </div>


            <h2>
                <span>Contacto</span>
                <span className='symbol' onClick={handleContact}>{contactSymbol ? minus : plus}</span>
            </h2>

            <div className="contact">
                <div className=' contact-field'>
                    <label>Email</label>
                    <input onChange={e => setEmail(e.target.value)} type="email" value={email} />
                    <hr />
                </div>
                <div className="password contact-field">
                    <label>Palavra-passe</label>
                    <input onChange={e => setPassword(e.target.value)} type="password" value={password}/>
                    <hr />
                </div>
                <div className=' contact-field'>
                    <label>Telefone</label>

                    <PhoneInput onChange={setPhone} type="text" value={phone}/>


                    {/* <input onChange={e => setPhone(e.target.value)} type="text" value={phone}/> */}
                    <hr />
                </div>
            </div>

            <div className='buttons'>
                <button className='cancel btn' type="reset">Cancelar</button>
                <button onClick={save} className='save btn' type="submit">GUARDAR</button>
            </div>
        </form>
    );
}

export default AddUser;