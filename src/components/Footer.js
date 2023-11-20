import React from 'react';
import '../styles/footerStyle.css';

const Footer=()=>{
    const footerStyle={
        backgroundImage: "linear-gradient(to top right, rgb(129, 154, 236, .5), rgb(73, 167, 255, .5))"
    }

    return(
        <footer>
            <div class="footerStyle">
                <h1>Scott Cho 1.1</h1>
                <div class="wrap">
                    {/* <ul>
                        <li>Contact: 541-255-5401</li>
                        <li>Email: srmcho81.rd@gmail.com</li>
                    </ul> */}
                    <div style={{textAlign: "center"}}>
                        <h3>Contact: 541-255-5401</h3>
                        <h3>Email: srmcho81.rd@gmail.com</h3>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;