import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Header() {
    const [logged, setLogged] = useState(false)

    useEffect(() => {
        setLogged(localStorage.getItem('token') ? true : false)
    }, [])

    const logOut = () => {
        localStorage.removeItem('token')
        window.location.reload()
    }

    return (
        <Navbar>
            <Container>
                <Navbar.Brand href="#home" className='text-primary fw-bold'>Zhastar</Navbar.Brand>
                <Navbar.Toggle />
                {
                    logged &&
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>
                                Вы вошли как: <a href="#login">Mark Otto</a>
                            </Navbar.Text>
                            <Button variant={'danger'} className='ms-3' onClick={logOut}>Выйти</Button>
                        </Navbar.Collapse>
                }
            </Container>
        </Navbar>
    )
}

export default Header