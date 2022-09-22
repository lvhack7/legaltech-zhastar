import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import Service from '../http/Services';

function Home() {
    const [protocols, setProtocols] = useState([])
    const [meetings, setMeatings] = useState([])
    const [users, setUsers] = useState([])

    const [sprt, setSPrt] = useState()
    const [prtTitle, setPrtTitle] = useState('')
    const [prtDes, setPrtDes] = useState('')
    const [mtsTitle, setMtsTitle] = useState('')

    useEffect(() => {
        fetchPrt()
        fetchMts()
        fetchUsers()
    }, [])

    function handleChange(e) {
        let { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    }

    async function fetchPrt() {
        const prts = await Service.getProtocols()
        console.log(prts)
        setProtocols(prts.data)
    }

    async function fetchMts() {
        const mts = await Service.getMeetings()
        setMeatings(mts.data)
    }

    async function fetchUsers() {
        const users = await Service.getUsers()
        setUsers(users.data)
    }

    async function addPrt(data) {
        const d = new Date();
        let text = d.toString();
        const prt = await Service.setProtocol({ title: prtTitle, description: prtDes, date: text, document: prtTitle + "doc1" })
        alert(prt.data.message)
    }

    async function addMts(data) {
        const d = new Date();
        let text = d.toString();
        const prt = await Service.setMeeting({ title: mtsTitle, participants: ['Хакназар', 'Адильхан', 'Магжан'], date: text })
        alert(prt.data.message)
    }

    async function passPrt(e) {
        e.preventDefault()
        const prts = await Service.passProtocol({ id: sprt })
        alert(prts.data.message)
    }


    return (
        <Container className='mt-5'>
            <div className='p-4 shadow' style={{ borderRadius: '12px' }}>
                <h3 className='mt-3' style={{ marginBottom: '2rem' }}>Главная</h3>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Подписать протокол</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Создать протокол</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Создать собрание</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Form onSubmit={passPrt}>
                                        <p className='mb-3 lead' style={{ fontSize: '1.5rem' }}>Подписать протокол</p>
                                        <Form.Select className='mb-3' aria-label="Default select example"
                                            onChange={(e) => setSPrt(e.target.value)}>
                                            <option>Выберите протокол</option>
                                            {
                                                protocols.map(prt => (
                                                    <option key={prt._id} value={prt._id}>{prt.title}</option>
                                                ))
                                            }
                                        </Form.Select>
                                        <Form.Group className="mb-4" controlId="formBasicPassword">
                                            <Form.Label>Дата подписания</Form.Label>
                                            <Form.Control type="date" placeholder="Пароль" />
                                        </Form.Group>
                                        <Button variant="success" type="submit" className='float-end'>
                                            Подписать
                                        </Button>
                                    </Form>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Form onSubmit={addPrt}>
                                        <p className='mb-3 lead' style={{ fontSize: '1.5rem' }}>Создать протокол</p>
                                        <Form.Group className="mb-4" controlId="formBasicPassword">
                                            <Form.Label>Название протокола</Form.Label>
                                            <Form.Control type="text" placeholder="Введите название" value={prtTitle} onChange={(e) => setPrtTitle(e.target.value)} />
                                        </Form.Group>
                                        <Form.Group className='mb-3'>
                                            <Form.Label>Описание</Form.Label>
                                            <Form.Control as='textarea'
                                                placeholder="Введите описание протокола"
                                                value={prtDes} onChange={(e) => setPrtDes(e.target.value)}
                                                style={{ height: '100px' }} />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Дата создания</Form.Label>
                                            <Form.Control type="date" placeholder="Пароль" />
                                        </Form.Group>
                                        <Form.Group className='mb-4'>
                                            <Form.Label>Документ подтверждающий протокол</Form.Label>
                                            <Form.Control type='file' placeholder='Выберите файл' accept=".doc,.docx,.pdf" />
                                            <Form.Text>Принимаются файлы PDF, Word.</Form.Text>
                                        </Form.Group>
                                        <Button variant="success" type="submit" className='float-end'>
                                            Создать
                                        </Button>
                                    </Form>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Form onSubmit={addMts}>
                                        <p className='mb-3 lead' style={{ fontSize: '1.5rem' }}>Создать общее собрание</p>
                                        <Form.Group className='mb-3'>
                                            <Form.Label>Тема собрания</Form.Label>
                                            <Form.Control type='text' placeholder='Введите тему собрания'
                                                value={mtsTitle} onChange={(e) => setMtsTitle(e.target.value)} />
                                        </Form.Group>
                                        <Form.Group className='mb-3'>
                                            <Form.Label>Платформа собрания</Form.Label>
                                            <Form.Select aria-label="Платформа">
                                                <option>Zoom</option>
                                            </Form.Select>
                                        </Form.Group>
                                        <Form.Group className='mb-3'>
                                            <Form.Label>Выберите участвующие лица</Form.Label>
                                            <Form.Control as='select' multiple>
                                                <option>Хакназар</option>
                                                <option>Ербол</option>
                                                <option>Адильхан</option>
                                                <option>Кенесары</option>
                                                <option>Богдан</option>
                                            </Form.Control>
                                        </Form.Group>
                                        <Form.Group className="mb-4" controlId="formBasicPassword">
                                            <Form.Label>Дата проведения</Form.Label>
                                            <Form.Control type="datetime-local" placeholder="Пароль" />
                                        </Form.Group>
                                        <Button variant="success" type="submit" className='float-end'>
                                            Создать и разослать
                                        </Button>
                                    </Form>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
            <div className='p-4 shadow mt-5' style={{ borderRadius: '12px' }}>
                <h4 className='mb-4'>Текущие встречи</h4>
                <Table striped bordered hover responsive>
                    <thead >
                        <tr>
                            <th>#</th>
                            <th>Тема встречи</th>
                            <th>Платформа конйеренций</th>
                            <th>Участники</th>
                            <th>Дата и время встречи</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            meetings.map(mts => (
                                <tr>
                                    <td>{mts.id}</td>
                                    <td>{mts.title}</td>
                                    <td>Zoom</td>
                                    <td>{mts.participants}</td>
                                    <td>{mts.date}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
        </Container>
    )
}

export default Home