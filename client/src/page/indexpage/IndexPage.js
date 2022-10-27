import React from 'react'
import "./IndexPage.css";
import { Carousel, Col, Container, Row } from "react-bootstrap"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import 'react-alice-carousel/lib/alice-carousel.css';
import Slider from "react-slick";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';


const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(1)' }}
    >

    </Box>
);

const IndexPage = () => {

    const {user} = useSelector(state=>state.user);
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 4000,
      cssEase: "linear",
      pauseOnHover: true
    };
    return (
        <div>
            <div className="screenHeight" >
                <Carousel>
                    <Carousel.Item className="carousel">
                        <img
                            className="d-block w-100"
                            src="/images/index_page_images/car1.png"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="carousel">
                        <img
                            className="d-block w-100"
                            src="/images/index_page_images/car2.png"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="carousel">
                        <img
                            className="d-block w-100"
                            src="/images/index_page_images/car1.png"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            <div className="screenHeight category" style={{position:"relative"}}>
                <div className="flexCenterRow" style={{ paddingTop: "5rem" }}>
                    <h1 className="heading">Food Category</h1>
                    <div ><Button className="rightSideBtn" variant="contained" size="large">View All</Button></div>
                </div>
                <Container className="categoryContainer">
                    <Row>
                        <Col lg={3} md={3} sm={6} xs={12}>
                            <Box className="categoryBox">
                                <Card variant="outlined" className="boxShadow">
                                    <CardContent className="card">
                                        <img src="/images/index_page_images/desert.png"></img>
                                        <div className="overlay">
                                            <div className="overlayText">Desert</div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Box>
                        </Col>
                        <Col lg={3} md={3} sm={6} xs={12}>
                            <Box className="categoryBox">
                                <Card variant="outlined" className="boxShadow">
                                    <CardContent className="card">
                                        <img src="/images/index_page_images/juice.png"></img>
                                        <div className="overlay">
                                            <div className="overlayText">Juice</div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Box>
                        </Col>
                        <Col lg={3} md={3} sm={6} xs={12}>
                            <Box className="categoryBox">
                                <Card variant="outlined" className="boxShadow">
                                    <CardContent className="card">
                                        <img src="/images/index_page_images/starter.png"></img>
                                        <div className="overlay">
                                            <div className="overlayText">Starter</div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Box>
                        </Col>
                        <Col lg={3} md={3} sm={6} xs={12}>
                            <Box className="categoryBox">
                                <Card variant="outlined" className="boxShadow">
                                    <CardContent className="card">
                                        <img src="/images/index_page_images/punjabi.png"></img>
                                        <div className="overlay">
                                            <div className="overlayText">Main Course</div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Box>
                        </Col>
                        <div className="flexCenterRow" style={{marginTop: "2rem" }}><Button className="mobileBtn" variant="contained" size="large">View All</Button></div>
                    </Row>
                    <hr className="marginFix"></hr>
                </Container>

            </div>

            

            <div className="screenHeight Reviews" >
                <Container style={{ paddingTop: "3rem" }}>
                    <div style={{ textAlign: "center" }}>
                        <h5>lorem5fa asf aksg laskfl k</h5>
                        <h1>jbajfj alb jasblgajasf iasf iasf af</h1>
                        
                    </div>
                    <hr></hr>
                    <Row style={{ marginTop: "2rem", height: "400px" }}>
                        <Col lg={6} md={6} sm={6} xs={12} className="heightFix">
                            <div className="flexColCenter heightFix">
                                <h3>lorem5fa asf aksg laskfl k</h3>
                                <h1>jbajfj alb jasblgajasf iasf iasf af</h1>
                                <Button style={{marginTop: "1rem" }} variant="contained" size="large">Modal</Button>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={6} xs={12} className="paddingMob">
                            <div style={{ minHeight: "400px" }}>

                                <Slider {...settings} style={{ height: "100%"}}>
                                    <div>
                                        <Card variant="" style={{border:"1px solid gray" ,borderRadius:"20px"}}>
                                            <CardContent className="card" >
                                                <div className="flexCenterRow" style={{ margin: "1rem 0 1.5rem 0" }}>
                                                    <img src="/images/person/p1.png" alt="" className="reviewImg"></img>

                                                </div>
                                                <div >
                                                    <h3 style={{ textAlign: "center" }}>Raj Shah</h3>
                                                    <div className="flexCenterRow">

                                                        <div><StarIcon /><StarIcon /><StarIcon /><StarBorderIcon /><StarBorderIcon /></div>
                                                    </div>
                                                </div>
                                                <div className="flexCenterRow" style={{ margin: "1.5rem 1.5rem 0 1.5rem" }}>
                                                    <p>lorem40 asf asf asf asf ag asg asg ag g gagasfasfasf asfas fasfas fasb uag asg asg asg asg asg asg asg asg
                                                        lorem40 asf asf asf asf ag asg asg ag g gagasfasfasf asfas fasfas fasb uag
                                                        lorem40 asf asf asf asf ag asg asg ag g gagasfasfasf asfas fasfas fasb uag
                                                        lorem40 asf asf asf asf ag asg asg ag g gagasfasfasf asfas fasfas fasb uag

                                                        </p>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                    <div>
                                         <Card variant="" style={{border:"1px solid gray", borderRadius:"20px"}}>
                                            <CardContent className="card" >
                                                <div className="flexCenterRow" style={{ margin: "1rem 0 1.5rem 0" }}>
                                                    <img src="/images/person/p1.png" alt=""  className="reviewImg"></img>

                                                </div>
                                                <div >
                                                    <h3 style={{ textAlign: "center" }}>Raj Shah</h3>
                                                    <div className="flexCenterRow">

                                                        <div><StarIcon /><StarIcon /><StarIcon /><StarBorderIcon /><StarBorderIcon /></div>
                                                    </div>
                                                </div>
                                                <div className="flexCenterRow" style={{ margin: "1.5rem 1.5rem 0 1.5rem" }}>
                                                    <p>lorem40 asf asf asf asf ag asg asg ag g gagasfasfasf asfas fasfas fasb uag asg asg asg asg asg asg asg asg
                                                        lorem40 asf asf asf asf ag asg asg ag g gagasfasfasf asfas fasfas fasb uag
                                                        lorem40 asf asf asf asf ag asg asg ag g gagasfasfasf asfas fasfas fasb uag
                                                        lorem40 asf asf asf asf ag asg asg ag g gagasfasfasf asfas fasfas fasb uag

                                                        </p>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                    <div>
                                         <Card variant="" style={{border:"1px solid gray",borderRadius:"20px"}}>
                                            <CardContent className="card" >
                                                <div className="flexCenterRow" style={{ margin: "1rem 0 1.5rem 0" }}>
                                                    <img src="/images/person/p1.png" alt=""  className="reviewImg"></img>

                                                </div>
                                                <div >
                                                    <h3 style={{ textAlign: "center" }}>Raj Shah</h3>
                                                    <div className="flexCenterRow">

                                                        <div><StarIcon /><StarIcon /><StarIcon /><StarBorderIcon /><StarBorderIcon /></div>
                                                    </div>
                                                </div>
                                                <div className="flexCenterRow" style={{ margin: "1.5rem 1.5rem 0 1.5rem" }}>
                                                    <p>lorem40 asf asf asf asf ag asg asg ag g gagasfasfasf asfas fasfas fasb uag asg asg asg asg asg asg asg asg
                                                        lorem40 asf asf asf asf ag asg asg ag g gagasfasfasf asfas fasfas fasb uag
                                                        lorem40 asf asf asf asf ag asg asg ag g gagasfasfasf asfas fasfas fasb uag
                                                        lorem40 asf asf asf asf ag asg asg ag g gagasfasfasf asfas fasfas fasb uag

                                                        </p>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                    <div>
                                         <Card variant="" style={{border:"1px solid gray",borderRadius:"20px"}}>
                                            <CardContent className="card" >
                                                <div className="flexCenterRow" style={{ margin: "1rem 0 1.5rem 0" }}>
                                                    <img src="/images/person/p1.png" alt=""  className="reviewImg"></img>

                                                </div>
                                                <div >
                                                    <h3 style={{ textAlign: "center" }}>Raj Shah</h3>
                                                    <div className="flexCenterRow">

                                                        <div><StarIcon /><StarIcon /><StarIcon /><StarBorderIcon /><StarBorderIcon /></div>
                                                    </div>
                                                </div>
                                                <div className="flexCenterRow" style={{ margin: "1.5rem 1.5rem 0 1.5rem" }}>
                                                    <p>lorem40 asf asf asf asf ag asg asg ag g gagasfasfasf asfas fasfas fasb uag asg asg asg asg asg asg asg asg
                                                        lorem40 asf asf asf asf ag asg asg ag g gagasfasfasf asfas fasfas fasb uag
                                                        lorem40 asf asf asf asf ag asg asg ag g gagasfasfasf asfas fasfas fasb uag
                                                        lorem40 asf asf asf asf ag asg asg ag g gagasfasfasf asfas fasfas fasb uag

                                                        </p>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                    <div>
                                         <Card variant="" style={{border:"1px solid gray",borderRadius:"20px"}}>
                                            <CardContent className="card" >
                                                <div className="flexCenterRow" style={{ margin: "1rem 0 1.5rem 0" }}>
                                                    <img src="/images/person/p1.png" alt=""  className="reviewImg"></img>

                                                </div>
                                                <div >
                                                    <h3 style={{ textAlign: "center" }}>Raj Shah</h3>
                                                    <div className="flexCenterRow">

                                                        <div><StarIcon /><StarIcon /><StarIcon /><StarBorderIcon /><StarBorderIcon /></div>
                                                    </div>
                                                </div>
                                                <div className="flexCenterRow" style={{ margin: "1.5rem 1.5rem 0 1.5rem" }}>
                                                    <p>lorem40 asf asf asf asf ag asg asg ag g gagasfasfasf asfas fasfas fasb uag asg asg asg asg asg asg asg asg
                                                        lorem40 asf asf asf asf ag asg asg ag g gagasfasfasf asfas fasfas fasb uag
                                                        lorem40 asf asf asf asf ag asg asg ag g gagasfasfasf asfas fasfas fasb uag
                                                        lorem40 asf asf asf asf ag asg asg ag g gagasfasfasf asfas fasfas fasb uag

                                                        </p>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                    
                                </Slider>
                            </div>
                        </Col>
                    </Row>


                </Container>
            </div>

        </div>
 
 )
}

export default IndexPage
