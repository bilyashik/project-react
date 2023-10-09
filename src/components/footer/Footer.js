import React from 'react'
import "./style.css"

import vk from "./../../img/icons/vk.svg"
import instagram from "./../../img/icons/instagram.svg"
import twitter from "./../../img/icons/twitter.svg"
import linkedIn from "./../../img/icons/linkedIn.svg"
import gitHub from "./../../img/icons/gitHub.svg"

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item"><a href="https://vk.com"><img src={vk} alt="Link" /></a></li>
                        <li className="social__item"><a href="https://www.instagram.com/"><img src={instagram} alt="Link" /></a></li>
                        <li className="social__item"><a href="https://twitter.com"><img src={twitter} alt="Link" /></a></li>
                        <li className="social__item"><a href="https://gitHub.com"><img src={gitHub} alt="Link" /></a></li>
                        <li className="social__item"><a href="https://ru.linkedin.com"><img src={linkedIn} alt="Link" /></a></li>
                    </ul>
                    <div className="copyright">
                        <p>© 2023 Bilal</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
