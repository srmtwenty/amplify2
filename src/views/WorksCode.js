import React, {useState} from 'react';
//import Menu from '../components/Menu';
import {Link, Route, Switch} from 'react-router-dom';
import SimpleImageSlider from 'react-simple-image-slider';

import 'react-slideshow-image/dist/styles.css'


import Footer from '../components/Footer';
import project2a from '../images/project2a.png';
import project2b from '../images/project2b.jpg';
import project2c from '../images/project2c.png';

import project1a from '../images/project1a.png';
import project1b from '../images/project1b.png';
import project1c from '../images/project1c.png';
//import project3a from '../images/project3a.png';

import project3b1 from '../images/project3b1.png';
import project3b2 from '../images/project3b2.png';
import project3b3 from '../images/project3b3.png';
import project3b4 from '../images/project3b4.png';
import project3b5 from '../images/project3b5.png';

import project4b1 from '../images/p4a.png';
import project4b2 from '../images/p4b.png';
import project4b3 from '../images/p4c.png';
import project4b4 from '../images/p4d.png';
import project4b5 from '../images/p4e.png';
import project4b6 from '../images/p4f.png';
import project4b7 from '../images/p4g.png';
import project4b8 from '../images/p4h.png';

import bg1da1 from '../images/bg1da1.jpg';


import project5a from '../images/project5a.png';
import project5b from '../images/project5b.png';
import project5c from '../images/project5c.png';

import project6a from '../images/project6a.png';
import project6b from '../images/project6b.png';



export default(props)=>{
    

    const images6=[
        {url: "static/media/project6a.5b5e0614ddc75e63f367.png"},
        {url: "static/media/project6b.377dca1acf464dfb78c2.png"},
    ];

    const images5=[
        {url: "static/media/project5a.eb9432b41ab0d68fea24.png"},
        {url: "static/media/project5b.c1081ad63f445a749eb5.png"},
        {url: "static/media/project5c.bd2c310b256485fc92c2.png"},
    ];

    const images4=[
        {url: "static/media/p4a.9d63158bdce20bac6449.png"},
        {url: "static/media/p4b.db3319377149b8486081.png"},
        {url: "static/media/p4c.57e97bc61dbbf356b741.png"},
        {url: "static/media/p4d.9ec5ef5a376c06f09c57.png"},
        {url: "static/media/p4e.8fb946c16b48d31c4d9d.png"},
        {url: "static/media/p4f.da01f69cbaba57d0bd10.png"},
        {url: "static/media/p4g.534bb0d79c77465e6400.png"},
        {url: "static/media/p4h.31b379d8dbb52dca40f7.png"}
    ];

    const images1=[
        {url: "static/media/project1a.d895974684c4ee9c2df9.png"},
        {url: "static/media/project1b.c78ddfe6d17a7036d496.png"},
        {url: "static/media/project1c.9cd02ff3faa422ef3d77.png"},
    ];

    const images2=[
        {url: "static/media/project2a.2bbaca9803f2c0d3f790.png"},
        {url: "static/media/project2b.175b5a3a48dc5fe471fd.jpg"},
        {url: "static/media/project2c.e88c4f68d9f9b5988b6b.png"},
    ];

    const images3=[
        {url: "static/media/project3b1.cab0e2a739614ed77f66.png"},
        {url: "static/media/project3b2.08355e9533bc0f5036a3.png"},
        {url: "static/media/project3b3.cd6a161e94e0daf5c058.png"},
        {url: "static/media/project3b4.df2787250ca382389eeb.png"},
        {url: "static/media/project3b5.3e8fe3db48ba9a4e43f2.png"},
    ];
    

    return(
        <>
        {/* <div style={{backgroundImage: `url(${project5a})`}}> */}
        
            
            <div style={{backgroundColor: "rgb(223, 243, 255)", border: "yellow none 2px", marginLeft:"auto", marginRight:"auto", width: "100%"}}>
             
                
            
                <div style={{width: "1000px", height: "auto" ,marginLeft: "auto", marginRight: "auto", backgroundColor: "white", paddingTop: "5px", border: "red none 2px"}}>
                    
                    <div style={{textAlign: "center"}}>

                        <div style={{backgroundColor: "rgba(235, 255, 253)", padding: "20px 0px 20px 0px"}}>
                            <div>
                                <h2>Amplifire Heroes (Java, 2022)</h2>
                                <ul style={{textAlign: "center", listStylePosition: "inside"}}>
                                    <li><a href="https://github.com/srmtwenty/revature_project2_ui">
                                        Github (UI)
                                    </a></li>
                                    <li><a href="https://github.com/srmtwenty/revature_project2_backend">
                                        Github (Backend)
                                    </a></li>
                                </ul>

                                <div style={{width: "900px", margin:"auto", border: "red none 2px"}}>
                                    <ul style={{margin: "20px", textAlign:"left"}}>
                                        <li>Created jsp forms with Spring Tool Suite to implement post / edit / delete / search functionality for a seamless and intuitive user experience
                                        </li>

                                        <li>Implemented a MySQL database that ties listing systems with users (hosts), athletes, competitions, nations, and competition musics for a secured and organized data table
                                        </li>

                                        <li>Developed eight different relational entities in MySQL database for users giving power to the user logged in, such as deleting or editing athletes & competitions they created as hosts
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <SimpleImageSlider
                                width={900}
                                height={700}
                                images={images6}
                                style={{border: "black outset 1px", marginTop:"20px", marginBottom:"40px",marginLeft:"auto", marginRight:"auto"}}
                                navStyle={1}
                                showNavs={true}
                                showBullets={true}
                            />
                        </div>


                        <div style={{padding: "20px 0px 20px 0px"}}>
                            <div>
                                <h2>Car Dealer Ship - Web API(Java, 2022)</h2>
                                <a href="https://github.com/srmtwenty/revature_project1">
                                    Github
                                </a>
                                <div style={{width: "900px", margin:"auto", border: "red none 2px"}}>
                                    <ul style={{margin: "20px", textAlign:"left"}}>
                                        <li>Utilized Docker to create and run Postgres containers to use it as an api database.
                                        </li>

                                        <li>Used Dbeaver to connect to the database and execute sql statements to create & view data tables.
                                        </li>

                                        <li>Developed three different relational entities in the database using PostgresQL RDBMS technology for
                                        users giving power to create or retrieve as a non-user.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <SimpleImageSlider
                                width={900}
                                height={700}
                                images={images5}
                                style={{border: "black outset 1px", marginTop:"20px", marginBottom:"40px",marginLeft:"auto", marginRight:"auto"}}
                                navStyle={1}
                                showNavs={true}
                                showBullets={true}
                            />
                        </div>





                        <div style={{backgroundColor: "rgba(235, 255, 253)", padding: "20px 0px 20px 0px"}}>
                            <div>
                                <h2>Athlete Database - A database of Athletes records(Java, 2022)</h2>
                                <a href="https://github.com/srmtwenty/my_java_project1_athlete_database">
                                    Github
                                </a>
                                <div style={{width: "900px", margin:"auto", border: "red none 2px"}}>
                                    <ul style={{margin: "20px", textAlign:"left"}}>
                                        <li>Created jsp forms with Spring Tool Suite to implement post / edit / delete / search functionality for a seamless and intuitive user experience
                                        </li>

                                        <li>Implemented a MySQL database that ties listing systems with users (hosts), athletes, competitions, nations, and competition musics for a secured and organized data table
                                        </li>

                                        <li>Developed eight different relational entities in MySQL database for users giving power to the user logged in, such as deleting or editing athletes & competitions they created as hosts
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <SimpleImageSlider
                                width={900}
                                height={700}
                                images={images4}
                                style={{border: "black outset 1px", marginTop:"20px", marginBottom:"40px",marginLeft:"auto", marginRight:"auto"}}
                                navStyle={1}
                                showNavs={true}
                                showBullets={true}
                            />
                        </div>

                        <div style={{backgroundColor: "rgba(255, 249, 214)", padding: "20px 0px 20px 0px"}}>
                            <div>
                                <h2>Friendbook - A clone of Facebook's social media app(Java, 2020)</h2>
                                <a href="https://github.com/srmtwenty/CodingDojo-projects/tree/main/friendbook-main1">
                                    Github
                                </a>
                                <div style={{width: "900px", margin:"auto", border: "red none 2px"}}>
                                    <ul style={{margin: "20px", textAlign:"left"}}>
                                        <li>Created jsp forms with Spring Tool Suite to implement post / edit / delete functionality for a seamless and intuitive user experience
                                        </li>

                                        <li>Implemented a MySQL database that ties listing systems with users (hosts and attendees) and events for a secured and organized data table
                                        </li>

                                        <li>Developed five different relational models in MySQL database for users giving power to the user logged in, such as deleting or editing posts they created as hosts.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <SimpleImageSlider
                                width={900}
                                height={504}
                                images={images3}
                                style={{border: "black outset 1px", marginTop:"20px", marginBottom:"40px",marginLeft:"auto", marginRight:"auto"}}
                                navStyle={1}
                                showNavs={true}
                                showBullets={true}
                            />
                        </div>

                        <div style={{backgroundColor: "rgba(227, 250, 231)", padding: "20px 0px 20px 0px"}}>
                            <div>
                                <h2>AQI-Maps - Real time air quality map(MERN, 2020)</h2>
                                <a href="https://github.com/srmtwenty/CodingDojo-projects/tree/main/AQI-Maps">
                                    Github
                                </a>
                                <div style={{width: "900px", margin:"auto", border: "red none 2px"}}>
                                    <ul style={{margin: "20px", textAlign:"left"}}>
                                        <li>Implemented React component forms with VS Code and MongoDB for secure login and registration
                                        </li>
                                        
                                        <li>Set validation error messages using React to bolster form security
                                        </li>
                                        
                                        <li>Used Axios to send HTTP post(user, email, password info for login, registration) from a client to a backend(server)
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <SimpleImageSlider
                                width={900}
                                height={504}
                                images={images2}
                                style={{border: "black outset 1px", marginTop:"20px", marginBottom:"40px",marginLeft:"auto", marginRight:"auto"}}
                                navStyle={1}
                                showNavs={true}
                                showBullets={true}
                            />
                        </div>


                        <div style={{padding: "20px 0px 20px 0px"}}>
                            <div>
                                <h2>EasyShop - Simple and intuitive E-commerce website(Python/Django, 2020)</h2>
                                <a href="https://github.com/srmtwenty/CodingDojo-projects/tree/main/EasyShop-master">
                                    GitHub
                                </a>
                                <div style={{width: "900px", margin:"auto", border: "red none 2px"}}>
                                    <ul style={{margin: "20px", textAlign:"left"}}>
                                    <li>Configured templates in Python/Django cultivating a simplistic UI and shopping experience including viewing, adding, and ordering items.
                                    </li>
                                    <li>Implemented Bcrypt's hashing and HTML form validation to enhance security.
                                    </li> 
                                    <li>Constructed an intuitive front end design using CSS resulting in a seamless and on-brand user experience”    
                                    </li>
                                    </ul>
                                </div>
                            </div>
                            <SimpleImageSlider
                                width={900}
                                height={504}
                                images={images1}
                                style={{border: "black outset 2px", marginTop:"20px", marginBottom:"40px", marginLeft:"auto", marginRight:"auto"}}
                                navStyle={1}
                                showNavs={true}
                                showBullets={true}
                            />   
                        </div>
                    
                    </div>
                </div>
            <Footer/>
            </div>
          </>

    )
}