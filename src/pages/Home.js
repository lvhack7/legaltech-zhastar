import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

function Home() {

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
                                    <Form>
                                        <p className='mb-3 lead' style={{ fontSize: '1.5rem' }}>Подписать протокол</p>
                                        <Form.Select className='mb-3' aria-label="Default select example">
                                            <option>Выберите протокол</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
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
                                    <Form>
                                        <p className='mb-3 lead' style={{ fontSize: '1.5rem' }}>Создать протокол</p>
                                        <Form.Group className="mb-4" controlId="formBasicPassword">
                                            <Form.Label>Название протокола</Form.Label>
                                            <Form.Control type="text" placeholder="Введите название" />
                                        </Form.Group>
                                        <Form.Group className='mb-3'>
                                            <Form.Label>Описание</Form.Label>
                                            <Form.Control as='textarea'
                                                placeholder="Введите описание протокола"
                                                style={{ height: '100px' }} />
                                        </Form.Group>

                                        <Form.Group className="mb-4" controlId="formBasicPassword">
                                            <Form.Label>Дата создания</Form.Label>
                                            <Form.Control type="date" placeholder="Пароль" />
                                        </Form.Group>
                                        <Button variant="success" type="submit" className='float-end'>
                                            Создать
                                        </Button>
                                    </Form>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Form>
                                        <p className='mb-3 lead' style={{ fontSize: '1.5rem' }}>Создать общее собрание</p>
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
        </Container>
    )
}

export default Home