import React, { Component } from "react";
import Slider from "react-slick";
import Container from "react-bootstrap/esm/Container";
import axios from 'axios'
import ProjectModel from "./ProjectModel";


export default class Project extends Component {
    state = {
        post:[],
        php:[],
        ci:[]
    }

    getPostAPI = () => {
        axios.get('projectList.json')
        .then((res) => {
            this.setState({
                post: res.data.js,
                php: res.data.php,
                ci: res.data.ci
            })
        })
    }

    componentDidMount(){
        this.getPostAPI()
    }

    render() {
        var settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            pauseOnHover: true,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    autoplay: true,
                    autoplaySpeed: 3000
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    dots: false,
                    autoplay: true,
                    autoplaySpeed: 3000
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    autoplay: true,
                    autoplaySpeed: 3000
                  }
                }
              ]
        };
        return (
            <section id="projects">
                <Container style={{paddingTop: '100px', overflowX: 'hidden'}}>
                    <div className="d-flex justify-content-center">
                        <h2>Project</h2>
                    </div>
                    <div className="row d-flex justify-content-center m-0">
                        <div className="d-flex text-start mt-5 mb-3">
                            <h4>HTML, CSS (Bootstrtap) & Javascript</h4>
                        </div>
                        
                        <Slider {...settings}>
                        {
                            this.state.post.map(js => {
                                return  <ProjectModel key={js.id} data={js}/>
                            })
                        }
                        </Slider>

                        <div className="d-flex text-start mb-3" style={{marginTop: '80px'}}>
                            <h4>HTML, CSS (Bootstrap) & PHP</h4>
                        </div>
                        <Slider {...settings}>
                        {
                            this.state.php.map(php => {
                                return  <ProjectModel key={php.id} data={php}/>
                            })
                        }
                        </Slider>
                        <div className="d-flex text-start mb-3" style={{marginTop: '80px'}}>
                            <h4>Code Igniter 4 (PHP Framework)</h4>
                        </div>

                        <Slider {...settings}>
                        {
                            this.state.ci.map(ci => {
                                return <ProjectModel key={ci.id} data={ci}/>
                            })
                        }
                        </Slider>
                    </div>
                    
                    
                </Container>
            </section>
        );
    }
}