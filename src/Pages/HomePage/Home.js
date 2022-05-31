import { Container, Row, Col, CardGroup, Card } from 'react-bootstrap'
import { CgArrowsExchange } from 'react-icons/cg';
import { IoMdFootball } from 'react-icons/io';
import { MdTravelExplore } from 'react-icons/md';
import ScrollReveal from 'scrollreveal';
import { Link } from 'react-router-dom';

import "./homePage.css"

const sr = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 1500,
    reset: true
})

const HomePage = () => {
    // Makes smooth appearing animation on scroll

    /** First Viewport */
    sr.reveal('.mainText h1', { })
    sr.reveal('.mainText h1', { delay: 150 })
    sr.reveal('.mainText p', { delay: 150 })

    /** Second Viewport */
    sr.reveal('.card-group', {})
    sr.reveal('.cardsSection h1', { delay: 150 })
    sr.reveal('.card-title', { delay: 150 })
    sr.reveal('.card-text', { delay: 250 })
    sr.reveal('.goTableButton', { delay: 50 })

    return (
        <>
            <div className="imgHome">
                <div className="mainText">
                    <Container>
                        <h1>COOL TITLE</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula mattis, porttitor tellus quis, auctor urna. Praesent semper pulvinar ullamcorper. Aenean convallis molestie justo, non efficitur tellus porttitor vel. Nulla dignissim finibus lectus sed porta. Vivamus eu nulla eu enim viverra placerat. Cras luctus ante quam, volutpat congue lectus dapibus vitae.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula mattis, porttitor tellus quis, auctor urna. Praesent semper pulvinar ullamcorper. Aenean convallis molestie justo, non efficitur tellus porttitor vel.
                        </p>

                    </Container>

                </div>
                {/* <img src="imgs/football_opaca1.jpg" width="100%" height="100%" /> */}
            </div>

            <Container>
                <Row className="cardsSection vh-100">
                    <h1>¿How do we change the game?</h1>
                    <CardGroup className="cardContainer">
                        <Col xs={12} lg={3} sm={12}>
                            <Card className="cardStyle">
                                <Card.Body>
                                    <Card.Title className="text-center">
                                        <div className="homeCardIcons">
                                            <MdTravelExplore className="iconHome" />
                                        </div>
                                        <span>Explore</span>
                                    </Card.Title>
                                    <Card.Text>
                                        Explore the more than 8000 football players of all over the world.
                                    </Card.Text>
                                </Card.Body>

                            </Card>
                        </Col>
                        <Col xs={12} lg={3} sm={12}>
                            <Card className="cardStyle">
                                <Card.Body>
                                    <Card.Title className="text-center">
                                        <div className="homeCardIcons">
                                            <IoMdFootball className="iconHome" />
                                            <CgArrowsExchange className="iconHome" />
                                            <IoMdFootball className="iconHome" />
                                        </div>
                                        <span>Compare</span>
                                    </Card.Title>
                                    <Card.Text>
                                        Compare multiple players to see which ones fits better in your team with your current budget,
                                        make your own analysis and start scaling positions with your team! {' '}
                                    </Card.Text>
                                </Card.Body>

                            </Card>
                        </Col>
                        <Col xs={12} lg={3} sm={12}>
                            <Card className="cardStyle">
                                <Card.Body>
                                    <Card.Title className="text-center">
                                        <div className="homeCardIcons">
                                            <MdTravelExplore className="iconHome" />
                                        </div>
                                        <span>Something</span>
                                    </Card.Title>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This card has even longer content than the first to
                                        show that equal height action.
                                    </Card.Text>
                                </Card.Body>

                            </Card>
                        </Col>
                    </CardGroup>

                    <div className="goTableButton">
                        <Link to="/table">Discover</Link>
                    </div>
                </Row>
            </Container >
        </>
    );
}
    ;

export default HomePage;
