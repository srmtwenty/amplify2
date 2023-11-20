import React from 'react';
import {Document, Page, pdfjs} from 'react-pdf';
import {Link} from '@reach/router';
import Resume2021a1 from '../documents/Resume2021a1.pdf';
import '../styles/resumeStyle.css';
import SinglePagePDFViewer from "../components/single-page";

//import Menu from "../components/Menu";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

//import DownloadLink from "react-download-link";
import Footer from '../components/Footer';
import ResumeA from '../images/Resume2021a1s.jpg';
import bg1da1 from '../images/bg1da1.jpg';
import Scott_Cho_resume_cg_animator from '../documents/Scott_Cho_resume_cg_animator.pdf';

const ResumeAnim=()=>{
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

    return(
            <div>
            {/* <div style={{backgroundImage: `url(${bg1da1})`}}> */}
            <div style={{backgroundColor: "white", border: "yellow none 2px", marginLeft:"auto", marginRight:"auto", width: "100%"}}>
                {/* <div style={{backgroundImage: `url(${bg1da1})`,  height:'1200px'}}> */}
             
    
                <div className="resumeStyle">
                    <h2 style={{paddingBottom: "10px"}}>Choose a resume to view:</h2>
                    <Link className="currentOff" style={{textDecoration: "none"}} to="/resume_code">Resume (full-stack-developer)</Link>
                    <Link style={{textDecoration: "none"}} className="current" to="/resume_anim">Resume (cg character animator)</Link>
                    {/* <Document file={Resume2021c}>
                        <Page pageNumber={1} 
                                // object-fit="fill"
                                renderTextLayer={false}
                                // width={1000}
                                renderAnnotationLayer={true}/>       
                    </Document> */}
                    
                    
                    <SinglePagePDFViewer pdf={Scott_Cho_resume_cg_animator} />

                    {/*
                    <DownloadLink
                    label="Download Resume(cg character animator)"
                    filename="Scott_Cho_resume_cg_animator.pdf"
                    exportFile={()=>"My cached data"}
                    style={{borderStyle:"outset", color: "black", backgroundImage:"linear-gradient(to bottom right, cyan, rgb(5, 223, 223))", marginBottom:"20px", padding:"10px", borderRadius:"10px 10px 10px 10px", textDecoration:"none"}}
                    />*/}
                    <a className="dl" href={Scott_Cho_resume_cg_animator} download="Scott_Cho_resume_cg_animator">Download Resume(CG Animator)</a>
                </div>

                <Footer/>
            </div>
            
        </div>
    )
}
export default ResumeAnim;