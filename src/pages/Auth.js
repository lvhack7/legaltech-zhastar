import React from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Auth() {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const login = async (e) => {
        e.preventDefault()
        // http request with Services
        // set token to local storage
        // window.location.reload() - reload the page
        //localStorage.setItem('token', "token")
        //window.location.reload()
    }

    return (
        <div className="d-flex justify-content-center">
            <Form className='shadow p-4 mb-5 bg-body rounded mt-5' style={{ width: '550px' }} onSubmit={login}>
                <h3 className='text-center mb-5 fw-bold'>Логин</h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Имя пользователя</Form.Label>
                    <Form.Control type="text" placeholder="Введите имя пользователя" value={username} onChange={(e) => setUsername(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control type="password" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Войти
                </Button>
            </Form>
        </div>
    )
}

export default Auth