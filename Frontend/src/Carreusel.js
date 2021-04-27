import React, { Component } from 'react'
import  {Carousel,Card,CardGroup,Col,Row,Container} from 'react-bootstrap'
import './App.css';


export class Carreusel extends Component {
    render() {
        return (
            <div>
                <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://cdn.pixabay.com/photo/2015/11/07/11/46/fashion-1031469_1280.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://cdn.pixabay.com/photo/2017/08/07/19/46/shop-2607121_1280.jpg"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://cdn.pixabay.com/photo/2016/11/22/21/57/apparel-1850804_1280.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
                <div  style={{margin: '100px'}} >
                    <CardGroup>
                        <Card style={{ height: '60vh' ,margin: '20px'}}>
                        <Card.Img variant="top" style={{height: '60vh'}} src="https://cdn.pixabay.com/photo/2016/11/29/01/34/man-1866572_960_720.jpg" />
                        <Card.Text>imane</Card.Text>
                        </Card>

                        <Card style={{ height: '60vh' ,margin: '20px'}}>
                        <Card.Img variant="top" style={{height: '60vh'}} src="https://cdn.pixabay.com/photo/2018/01/11/09/39/woman-3075705_960_720.jpg" />
                        <Card.Text>imane</Card.Text>
                        </Card>

                        <Card style={{ height: '60vh' ,margin: '20px'}}>
                        <Card.Img variant="top" style={{height: '60vh'}} src="https://cdn.pixabay.com/photo/2020/06/12/10/50/dressed-5290056_960_720.jpg" />
                        <Card.Text>imane</Card.Text>
                        </Card>

                        <Card style={{ height: '60vh' ,margin: '20px'}}>
                        <Card.Img variant="top" style={{height: '60vh'}} src="https://cdn.pixabay.com/photo/2020/07/09/10/45/jewelry-5386872_1280.jpg" />
                        <Card.Text>imane</Card.Text>
                        </Card>  
                    </CardGroup>
                    
                </div>
                <Container>
                    <Row>
                        <Col>
                            <Card style={{ height: '40vh'}}>
                            <img
                                style={{height: '40vh'}}
                                src="https://cdn.pixabay.com/photo/2017/08/07/19/46/shop-2607121_1280.jpg"
                                alt="Second slide"
                                />
                            </Card> 
                        </Col>
                        <Col>
                            <Card style={{ height: '40vh'}}>
                            <img
                                style={{height: '40vh'}}
                                src="https://cdn.pixabay.com/photo/2017/08/07/19/46/shop-2607121_1280.jpg"
                                alt="Second slide"
                                />
                            </Card> 
                        </Col>
                    </Row>
                    <Row>
              
                        <Col>
                        <Card style={{ height: '40vh'}}>
                            <img
                                style={{height: '40vh'}}
                                src="https://cdn.pixabay.com/photo/2017/08/07/19/46/shop-2607121_1280.jpg"
                                alt="Second slide"
                                />
                            </Card> 
                        </Col>
                    </Row>
                </Container>

            </div>
        )
    }
}

export default Carreusel
