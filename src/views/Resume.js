import React from 'react';
// import resume from '../documents/Resume2021c.pdf';
import { Document, Page, pdfjs } from "react-pdf";
// import { Document, Page, pdfjs } from "react-pdf/dist/entry.webpack";
// import "react-pdf/dist/Page/AnnotationLayer.css";


const Resume = () => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    

    return(
        <div>
            <div className="resume" >
                <Document file="Resume2021c.pdf">
                    <Page
                    object-fit="fill"
                    pageNumber={1}
                    renderTextLayer={false}
                    renderAnnotationLayer={true}
                    width={1000}></Page>
                </Document>
                <div style={{height:"10px"}}></div>
            </div>
            
        </div>
    )
}

export default Resume;