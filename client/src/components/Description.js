import React, { useState, useEffect } from 'react'
import '../App.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Description() {
    const [showLI, setShowLI] = useState(false);

    useEffect(() => {
        const listItems = document.querySelectorAll('.listItem');
        listItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('scroll-reveal');
                console.log('Added scroll-reveal class to item', index);
            }, 500 * index);
        });
        setShowLI(true);
    }, []);

    return(
        <div className='descriptiveContainer mt-3'>
            <Container>
                <Row>
                    <Col sm={4} className='text-start'>
                        <ul>
                            <li className={`listItem left ${showLI ? 'scroll-reveal' : ''}`}>
                            
                            </li>
                            <li className={`listItem left ${showLI ? 'scroll-reveal' : ''}`}>
                            
                            </li>
                            <li className={`listItem left ${showLI ? 'scroll-reveal' : ''}`}>
                            
                            </li>
                            <li className={`listItem left ${showLI ? 'scroll-reveal' : ''}`}>
                            
                            </li>
                        </ul>
                    </Col>
                    <Col sm={8}>
                        <div className='text-start'>
                            <h2>About Checkmate</h2>
                            <p>
                                Checkmate is a brand new tasking app that helps users stay organized and on track!
                            </p>
                            <p>
                                As soon as you initialize the app, you can start making your lists.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <footer className='bg-dark-subtle px-2 py-1'>
                <p className='signature'>A React MERN Stack Application created by Edward, Mark, Tanner, Nathan & Josh</p>
            </footer>
        </div>
    )
}

export default Description