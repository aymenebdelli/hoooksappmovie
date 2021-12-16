import React from 'react'
import ReactStars from 'react-rating-stars-component'
import { Navbar, Container, Form, Nav, FormControl } from 'react-bootstrap'

function Navigation({ getRatingSearch, getTitleSearch }) {

    const ratingChanged = (newRating) => {
        getRatingSearch(newRating);
    };
    const handleTitle = (e) => {
        getTitleSearch(e.target.value)
    }


    return (
        <div>
            <Navbar style={{ padding: '20px', borderRadius: '8px', height: '25%' }} bg="black" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#" className='d-flex'><h3 style={{ color: 'white', fontStyle: 'oblique', padding: '10px' }}>Movies</h3><img style={{ marginBottom: '10px' }} src="https://img.icons8.com/color-glass/48/000000/documentary.png" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        />
                        <Form className='d-flex' >
                            <FormControl
                                style={{ width: '175px', height: '35px', marginRight: '20px' }}
                                type="search"
                                onChange={handleTitle}
                                placeholder="Type to Search..."
                                // className="me-2"
                                aria-label="Search"
                            />
                            <ReactStars
                                count={5}
                                onChange={ratingChanged ? ratingChanged : null}
                                size={20}
                                activeColor="#ffd700"
                            />
                        </Form>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigation
