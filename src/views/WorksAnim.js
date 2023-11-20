import React, {useState} from 'react';
import ReactPlayer from 'react-player';
// import {Collapse, UnmountClosed} from 'react-collapse';
// import { Collapse, Button, CardBody, Card } from 'reactstrap';
//import Menu from '../components/Menu';
import {Route, Switch} from 'react-router-dom';
import File_001a from '../images/File_001a.jpg';
import environ1a from '../images/environ1a.jpg';
import concept1a from '../images/concept1a.jpg';
import character_turn1 from '../images/character_turn1.jpg';
import Footer from '../components/Footer';
import '../styles/worksAnim.css';
import environ1b from '../images/environ1b.jpg';
import environ2b from '../images/environ2b.jpg';
import SimpleImageSlider from 'react-simple-image-slider';
import bg1da1 from '../images/bg1da1.jpg';

const WorksAnim=(props)=>{
    const [open, setOpen] = useState(false);
    
    const togglePanel=(e)=>{
        setOpen(!open);
    }

    const playerStyle={
        border: "red none 2px",
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
        // marginTop: "10px",
    }
    
    const images1=[
        {url: "static/media/environ1b.763bdcc0860ffc6c0c9d.jpg"},
        {url: "static/media/environ2b.0d0e7dedb232e20f89a6.jpg"},
        {url: "static/media/concept1a.341bf30da08d85cd978f.jpg"},
        {url: "static/media/character_turn1.2853f5583cf277f92ece.jpg"}
    ];

    return(
        <div>
 
        {/* <div style={{backgroundImage: `url(${File_001a})`}}> */}
            <div style={{
                width: '100%',
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                border: "red sold 2px",
                marginLeft:"auto",
                marginRight:"auto",
                // backgroundImage: `url(${File_001a})`,  
                }}>
            
          
            
            <div class="worksAnimPage">
                
                <div style={{marginTop: "20px", marginBottom: "50px", padding: "0px", textAlign: "center", backgroundColor: "gray", marginLeft:"auto", marginRight:"auto", width: "645px", borderRadius:"10px", border:"black solid 2px"}}>
                    <h2 style={{textAlign:"center",  margin: "0px", backgroundColor:"white", borderBottomStyle: "solid", borderRadius:"10px 10px 0px 0px"}}>Demo Reel</h2>
                    <ReactPlayer style={playerStyle}
                        url="http://vimeo.com/547818607"
                    />
                    <div class="inside">
                        <button onClick={(e)=>{togglePanel(e)}} className='header'>
                            Click for details</button>
                            {open ? (
                            
                            <div className='content1'>
                                
                                <h3>All of these works were created in Maya program.</h3>
                                <div style={{width: "500px", marginLeft:"auto", marginRight:"auto", border:"yellow none 2px", paddingBottom:"20px"}}>
                                
                                    <div style={{display:"flex", border:"red none 2px", width:"550px", marginBottom:"5px"}}>
                                        <p style={{border:'red none 2px', width: "100px", textAlign:"left", marginTop:"0px"}}>0:04-0:06</p>
                                        <div>
                                            <div style={{border:"blue none 2px", textAlign:"left"}}><span style={{fontStyle:"italic"}}>Borderlands2 shot 1 (Fall 2013)</span><br/>
                                            - worked on layout and character animation
                                            </div>
                                        </div>
                                    </div>
                                    {/* <p>0:04-0:06 Borderlands2 shot 1 (Fall 2013)<br/>
                                    - worked on layout and character animation</p> */}

                                    <div style={{display:"flex", border:"red none 2px", width:"550px", marginBottom:"5px"}}>
                                        <p style={{border:'red none 2px', width: "100px", textAlign:"left", marginTop:"0px"}}>0:06-0:10</p>
                                        <div>
                                            <div style={{border:"blue none 2px", textAlign:"left"}}><span style={{fontStyle:"italic"}}>Borderlands2 shot 2 (Fall 2013)</span><br/>
                                            - worked on layout and character animation
                                            </div>
                                        </div>
                                    </div>

                                    {/* <p>0:06-0:10 Borderlands2 shot 2 (Fall 2013)<br/>
                                    - worked on layout and character animation</p> */}

                                    <div style={{display:"flex", border:"red none 2px", width:"550px", marginBottom:"5px"}}>
                                        <p style={{border:'red none 2px', width: "100px", textAlign:"left", marginTop:"0px"}}>0:10-0:20</p>
                                        <div>
                                            <div style={{border:"blue none 2px", textAlign:"left"}}><span style={{fontStyle:"italic"}}>CG animated commercial (Fall 2018 - iMediaBay)</span><br/>
                                            - worked on layout, storyboard and camera/character animation
                                            </div>
                                        </div>
                                    </div>

                                    {/* <p>0:10-0:20 CG animated commercial (Fall 2018 - iMediaBay)<br/>
                                    - worked on layout, storyboard and camera/character animation</p> */}

                                    <div style={{display:"flex", border:"red none 2px", width:"550px", marginBottom:"5px"}}>
                                        <p style={{border:'red none 2px', width: "100px", textAlign:"left", marginTop:"0px"}}>0:21-0:43</p>
                                        <div>
                                            <div style={{border:"blue none 2px", textAlign:"left"}}><span style={{fontStyle:"italic"}}>Chasing Dead level clear cutscene (Spring 2016 - 2020 Venture)</span><br/>
                                            - worked on cutscene camera/character (in Maya and Unity)
                                            </div>
                                        </div>
                                    </div>

                                    {/* <p>0:21-0:43 Chasing Dead level clear cutscene (Spring 2016 - 2020 Venture)<br/>
                                    - worked on cutscene camera/character (in Maya and Unity)</p> */}

                                    <div style={{display:"flex", border:"red none 2px", width:"550px", marginBottom:"5px"}}>
                                        <p style={{border:'red none 2px', width: "100px", textAlign:"left", marginTop:"0px"}}>0:44-1:00</p>
                                        <div>
                                            <div style={{border:"blue none 2px", textAlign:"left"}}><span style={{fontStyle:"italic"}}>Idle cycle animation for a game (Spring 2014)</span><br/>
                                            - worked on character animation
                                            </div>
                                        </div>
                                    </div>

                                    {/* <p>0:44-1:00 Idle cycle animation for a game (Spring 2014)<br/>
                                    - worked on character animation</p> */}

                                    <div style={{display:"flex", border:"red none 2px", width:"550px", marginBottom:"5px"}}>
                                        <p style={{border:'red none 2px', width: "100px", textAlign:"left", marginTop:"0px"}}>1:00-1:02</p>
                                        <div>
                                            <div style={{border:"blue none 2px", textAlign:"left"}}><span style={{fontStyle:"italic"}}>Dog idle cycle animation (Spring 2019)</span><br/>
                                            - worked on character animation
                                            </div>
                                        </div>
                                    </div>

                                    {/* <p>1:01-1:03 Idle cycle animation for a game (Spring 2014)<br/>
                                    - worked on character animation</p> */}

                                    <div style={{display:"flex", border:"red none 2px", width:"550px", marginBottom:"5px"}}>
                                        <p style={{border:'red none 2px', width: "100px", textAlign:"left", marginTop:"0px"}}>1:02-1:12</p>
                                        <div>
                                            <div style={{border:"blue none 2px", textAlign:"left"}}><span style={{fontStyle:"italic"}}>Three strike - cycle animation (Spring 2019)</span><br/>
                                            - worked on character animation
                                            </div>
                                        </div>
                                    </div>

                                    {/* <p>1:03-1:12 Three strike - cycle animation (Spring 2019)<br/>
                                    - worked on character animation</p> */}

                                    <div style={{display:"flex", border:"red none 2px", width:"550px", marginBottom:"5px"}}>
                                        <p style={{border:'red none 2px', width: "100px", textAlign:"left", marginTop:"0px"}}>1:12-1:28</p>
                                        <div>
                                            <div style={{border:"blue none 2px", textAlign:"left"}}><span style={{fontStyle:"italic"}}>Is there a way I can borrow a car? (Spring 2018)</span><br/>
                                            - worked on character animation
                                            </div>
                                        </div>
                                    </div>

                                    {/* <p>1:12-1:28 Is there a way I can borrow a car? (Spring 2018)<br/>
                                    - worked on character animation</p> */}

                                    <div style={{display:"flex", border:"red none 2px", width:"550px", marginBottom:"5px"}}>
                                        <p style={{border:'red none 2px', width: "100px", textAlign:"left", marginTop:"0px"}}>1:28-1:39</p>
                                        <div>
                                            <div style={{border:"blue none 2px", textAlign:"left"}}><span style={{fontStyle:"italic"}}>Scaredy Bat (Spring 2014 - Directed by Greg Perkins)</span><br/>
                                            - worked on character animation
                                            </div>
                                        </div>
                                    </div>

                                    {/* <p>1:28-1:39 Scaredy Bat (Spring 2014 - Directed by Greg Perkins)<br/>
                                    - worked on character animation</p> */}

                                    <div style={{display:"flex", border:"red none 2px", width:"550px", marginBottom:"5px"}}>
                                        <p style={{border:'red none 2px', width: "100px", textAlign:"left", marginTop:"0px"}}>1:39-1:51</p>
                                        <div>
                                            <div style={{border:"blue none 2px", textAlign:"left"}}><span style={{fontStyle:"italic"}}>Wall climb and jump (Spring 2013)</span><br/>
                                            - worked on character animation
                                            </div>
                                        </div>
                                    </div>

                                    {/* <p>1:39-1:51 Wall climb and jump (Spring 2013)<br/>
                                    - worked on character animation</p> */}

                                    <div style={{display:"flex", border:"red none 2px", width:"550px", marginBottom:"5px"}}>
                                        <p style={{border:'red none 2px', width: "100px", textAlign:"left", marginTop:"0px"}}>1:51-1:55</p>
                                        <div>
                                            <div style={{border:"blue none 2px", textAlign:"left"}}><span style={{fontStyle:"italic"}}>Sitting (Fall 2012)</span><br/>
                                            - worked on character animation
                                            </div>
                                        </div>
                                    </div>

                                    {/* <p>1:51-1:55 Sitting (Fall 2012)<br/>
                                    - worked on character animation</p> */}

                                    <div style={{display:"flex", border:"red none 2px", width:"550px", marginBottom:"5px"}}>
                                        <p style={{border:'red none 2px', width: "100px", textAlign:"left", marginTop:"0px"}}>1:55-2:10</p>
                                        <div>
                                            <div style={{border:"blue none 2px", textAlign:"left"}}><span style={{fontStyle:"italic"}}>Remote controller (Spring 2019)</span><br/>
                                            - worked on character animation
                                            </div>
                                        </div>
                                    </div>

                                    {/* <p>1:55-2:10 Remote controller (Spring 2019)<br/>
                                    - worked on character animation</p> */}
                                </div>
                            </div>
                            ) : null}
                    </div>

                </div>
                <div style={{marginTop: "20px", marginBottom: "50px", paddingBottom: "25px", textAlign: "center", backgroundColor: "gray", marginLeft:"auto", marginRight:"auto", width: "645px", borderRadius:"10px"}}>
                    <h2 style={{textAlign:"center",  margin: "0px", backgroundColor:"white", borderBottomStyle: "solid", borderRadius:"10px 10px 0px 0px"}}>Cookie Box (Thesis Project)</h2>
                    <ReactPlayer style={playerStyle}
                        url="https://vimeo.com/80035295"
                    />            
                </div>

                <div style={{marginTop: "20px", marginBottom: "50px", paddingBottom: "25px", textAlign: "center", backgroundColor: "gray", marginLeft:"auto", marginRight:"auto", width: "645px", borderRadius:"10px"}}>
                    <h2 style={{textAlign:"center",  margin: "0px", backgroundColor:"white", borderBottomStyle: "solid", borderRadius:"10px 10px 0px 0px"}}>Cookie Box - Animatic</h2>
                    <ReactPlayer style={playerStyle}
                        url="http://vimeo.com/39552619"
                    />         
                </div>

                
                {/* <div style={{marginTop: "50px", marginBottom: "50px",   backgroundColor: "gray", marginLeft:"auto", marginRight:"auto", width: "1380px", borderRadius:"10px", border:"red solid 2px"}}>
                    
                        <div style={{display:"flex", border:"blue solid 2px"}}>
                            <div style={{border:"yellow solid 2px", padding:"20px",
                                        border: "4px solid #333"}}>
                                <img src={environ1a}/>
                            </div> 
                            <div style={{border:"red solid 2px", margin:"20px",width:"650px" }}>      
                                <img src={concept1a}/>
                                <img src={character_turn1}/>
                            </div>
                        </div>    
                </div> */}
                <div class="conceptA">
                    <div className="container">
                        <h2>Cookie Box - Concept Art</h2>
                        {/* <p>(click on bullets on bottom right of a screen)</p> */}
                    </div>
                    <SimpleImageSlider
                        width={720}
                        height={500}
                        images={images1}
                        style={{border: "black outset 2px", marginTop:"0px", marginBottom:"40px", marginLeft:"auto", marginRight:"auto"}}
                        navStyle={1}
                        showNavs={true}
                        showBullets={true}
                        bgColor="black"
                        // onClickNav = {(toRight) => { }}
                    />
                </div>
            </div>  
                <Footer/>
            </div>
            </div>
              
    
    )
}
export default WorksAnim;