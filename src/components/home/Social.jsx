import React from "react";
import { FiTwitter, FiGithub, FiLinkedin} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";


const Social = () => {
    return (
        <div className="home__social">
            <a href="https://twitter.com/superstarTemi" className="home__social-icon" target="_blank" rel="noreferrer">
                    <FiTwitter />
                </a>
                <a href="https://github.com/SuperstarTemidayo" className="home__social-icon" target="_blank" rel="noreferrer">
                    <FiGithub />
                </a>
                <a href="https://www.linkedin.com/in/oni-israel-temidayo/" className="home__social-icon" target="_blank" rel="noreferrer" >
                    <FiLinkedin />
                </a>   
                <a href="https://wa.me/2349030900930" className="home__social-icon" target="_blank" rel="noreferrer">
                    <FaWhatsapp />
                </a> 
        </div> 
    ); 
}

export default Social;