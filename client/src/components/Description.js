import React from 'react'
import '../App.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Description() {
    //Animations
    

    
    return(
        <div className='descriptiveContainer mt-3'>
            <Container fluid>
                <Row>
                    <Col>
                        <div>
                            <div className='listDiv'>
                                <ul>
                                    <li className='listItem'></li>
                                    <li className='listItem' style={{animationDelay: '0.3s'}}></li>
                                    <li className='listItem' style={{animationDelay: '0.6s'}}></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col sm={8}>
                        <div className='text-start px-2 descripDiv'>
                            <h2>About Checkmate</h2>
                            <p>
                                Checkmate is a brand new tasking app that helps users stay organized and on track!
                            </p>
                            <p>
                                As soon as you initialize the app, you can start making your lists.
                            </p>
                            <p>
                                Each list you create will contain your main tasks, as well as the ability to have sub-tasks as well.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <footer className='bg-dark-subtle px-2 py-4 mt-5'>
                <p className='signature'>A React MERN Stack Application created by Edward, Mark, Tanner, Nathan & Josh</p>
            </footer>
        </div>
    )
}

export default Description