import React, { Component } from 'react';
import Desktop_L from './Desktop_L';
import {Button, Card, CardHeader } from 'reactstrap';
import {Redirect} from 'react-router-dom';
import Header from './Header';
class Projects_L extends Component {

    constructor(props) {
        super(props);
        this.state = {
            back: false,
            popout: false,
        }

        this.back = this.back.bind(this);
        this.popout = this.popout.bind(this);
    }

    back() {
        this.setState({
            back: true
        })
    }

    popout(){
        this.setState({
            popout: true,
        })
    }
    
      render() {
        if(this.state.popout){
          return(
                <div>
                    {window.open("/projects", '_blank')}
                </div>
          )
      }
      else if (this.state.back) {
            return (
                <Desktop_L />
            )
        }
    
        return (
            <div style={{ height: "100vh", width: "59vw" }}>
                <div>
                    <div className="sticky-top d-flex justify-content-center mt-2 mb-2">
                        <Button className="rounded-circle btn btn-sm zoom" color="white" onClick={this.back}>
                            <img src="images\Back.png" style={{ height: "25px", width: "25px" }}></img>
                        </Button>
                        <div className="mx-auto"><h3><strong>Projects</strong></h3></div>
                        <div>
                            <Button className="rounded-circle btn btn-sm mr-2 mt-1 zoom" color="white" onClick={this.popout}>
                                <img src="images\Popout.png" style={{ height: "25px", width: "25px" }}></img>
                            </Button>
                        </div>
                    </div>
                </div>
                {/* PROJECT 1 */}
                <Card className="bg_dp" style={{ borderRadius: "0px" }}>
                    <CardHeader className="text-light d-flex justify-content-center" style={{ backgroundColor: "#32174d" }}><h3>Resource Management System</h3></CardHeader>
                    <div className="row">
                        <div className="col col-md-5 col-12 mr-5">
                            <img src="images\Background_L.jpg" style={{ height: "35vh", width: "25vw" }} className="m-3 mt-4 mt-5 img_shadow_lp"></img>
                        </div>
                        <div className="col col-md-6 col-12 my-auto">
                            <h3 className="text-light"><strong>Theme</strong></h3>
                            <p className="text-light">
                                We all have struggled on where to find good resources. Resource Management System comes to the rescue. It is an applcation
                                where students from all over the university can upload and share the resources. Students can also save the posts that
                                they like. In this way all the important resources will then be accumulated at one place. This site also is my learning map.
                                I started web developement with this project.
                                Visit <a href="https://github.com/Aneri12345/Resource_Management_System" style={{ color: 'yellow' }} className='text-decoration-none'>My Github </a>
                                 for code.
                            </p>
                        </div>
                    </div>
                </Card>
                <Card className="bg_dp" >
                    <div className="row">
                        <div className="col col-md-6 col-12 my-auto" style={{ borderColor: "#800080" }}>
                            <h3 className="text-light ml-3"><strong>Features</strong></h3>
                            <p className="text-light m-3">
                                This project implements basic CRUD (Create, Read, Update and Delete) operations. User shall upload any
                                kind of resource that he/she wants to. User can see other resources and save them so that they don't
                                loose track of their important resources. Bifurcation into different domains/streams will also help user
                                to find their required material easily. There also is an Admin role, who can delete and edit anyone's post. This
                                will also prevent users from uploading any false and useless posts.
                            </p>
                        </div>
                        <div className="col col-md-6 col-12">
                            <img src="images\Background_L.jpg" style={{ height: "35vh", width: "25vw" }} className="m-3 mt-4 img_shadow_lp"></img>
                        </div>
                    </div>
                </Card>
                {/* PROJECT 2 */}
                <Card className="bg_lp" style={{ borderRadius: "0px" }}>
                    <CardHeader className="text-light d-flex justify-content-center" style={{ backgroundColor: "#32174d" }}><h3>Blackjack</h3></CardHeader>
                    <div className="row">
                        <div className="col col-md-6 col-12">
                            <img src="images\Background_L.jpg" style={{ height: "35vh", width: "25vw" }} className="m-3 mt-4 img_shadow_lp"></img>
                        </div>
                        <div className="col col-md-6 col-12 my-auto">
                            <h3 className="text-dark"><strong>Theme</strong></h3>
                            <p className="text-dark">It is a game developed by me as a start to javascript. It is one of the earliest
                            projects I have done for the start of web developemt carrier. I have also deployed it and you can
                                check it out <a href="https://epic-clarke-35901c.netlify.app/" style={{ color: '' }} className='text-decoration-none'><strong>here</strong></a> or checkout
                                <a href="https://github.com/Aneri12345/Blackjack" className="text-decoration-none text-primary"> <strong>My Github.</strong></a>
                                The rules are to try to get closer to number 21 <strong>without exceeding it</strong> , then let the bot play
                                and once both the turns are over, winner is declared. Enjoy! <span>&#128540;</span>
                            </p>
                        </div>
                    </div>
                </Card>
                <Card className="bg_lp" >
                    <div className="row">
                        <div className="col col-md-6 col-12 my-auto" style={{ borderColor: "#800080" }}>
                            <h3 className="text-dark ml-3"><strong>Features</strong></h3>
                            <p className="text-dark m-3">Evertime the user wins/looses a sound is played to amuse the user to play and win more &#128512;.
                            Player will get a table to keep the track of their wins, loses and draws. Since it was one of my first projects, I had
                            also tried to made it responsive and mobile friendly.
                            </p>
                        </div>
                        <div className="col col-md-6 col-12">
                            <img src="images\Background_L.jpg" style={{ height: "35vh", width: "25vw" }} className="m-3 mt-4 img_shadow_lp"></img>
                        </div>
                    </div>
                </Card>
                {/* PROJECT 1 */}
                {/* <Card className="bg_dp" style={{ borderRadius: "0px" }}>
                <CardHeader className="text-light d-flex justify-content-center" style={{ backgroundColor: "#32174d" }}><h3>3. Resource Management System</h3></CardHeader>
                        <div className="row">
                        <div className="col col-md-6 col-12">
                            <img src="images\Background_L.jpg" style={{height: "35vh", width: "25vw"}} className="m-3 mt-4 img_shadow_lp"></img>
                        </div>
                        <div className="col col-md-6 col-12 my-auto">
                            <h3 className="text-light"><strong>Theme</strong></h3>
                            <p className="text-light">XM utiliza cookies para asegurarse de que le ofrecemos la mejor experiencia mientras visita nuestro sitio web. Algunas 
                            cookies son necesarias para proporcionar características esenciales, tales como sesiones de acceso, y no se pueden
                            deshabilitar. Otras cookies nos ayudan a mejorar el rendimiento de nuestro sitio web y su experiencia personalizando el
                            contenido, ofreciendo funcionalidades de redes sociales y analizando nuestro tráfico. Estas cookies también pueden incluir
                            cookies de terceros, que podrían rastrear su uso de nuestro sitio web. Puede cambiar sus ajustes de cookies en cualquier</p>
                        </div>
                    </div>
                </Card>
                <Card className="bg_dp" >
                    <div className="row">
                        <div className="col col-md-6 col-12 my-auto" style={{ borderColor: "#800080" }}>
                            <h3 className="text-light ml-3"><strong>Making</strong></h3>
                            <p className="text-light m-3">XM utiliza cookies para asegurarse de que le ofrecemos la mejor experiencia mientras visita nuestro sitio web. Algunas 
                            cookies son necesarias para proporcionar características esenciales, tales como sesiones de acceso, y no se pueden
                            deshabilitar. Otras cookies nos ayudan a mejorar el rendimiento de nuestro sitio web y su experiencia personalizando el
                            contenido, ofreciendo funcionalidades de redes sociales y analizando nuestro tráfico. Estas cookies también pueden incluir
                            cookies de terceros, que podrían rastrear su uso de nuestro sitio web. Puede cambiar sus ajustes de cookies en cualquier</p>
                        </div>
                        <div className="col col-md-6 col-12">
                            <img src="images\Background_L.jpg" style={{height: "35vh", width: "25vw"}} className="m-3 mt-4 img_shadow_lp"></img>
                        </div>
                    </div>
                </Card> */}
            </div>
        );
    }
}

export default Projects_L;

