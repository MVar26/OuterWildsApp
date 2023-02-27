import React from "react";
import style from "./Footer.module.css";

import unimib from "../../assets/img/Bicocca.png";
import disco from "../../assets/img/Disco.jpg";

function Footer(props) {
    const {courseName, courseLink, apiName, apiLink} = props;

    return (
        <footer className={style.footerBg}>

            <div className="container-fluid">
                <div className="row justify-content-center align-items-center">
                    <div className="col-1 d-flex justify-content-center">
                        <img className={`${style.footerImg}`}
                             alt="logo Bicocca"
                             src={unimib}
                        />
                    </div>
                    <div className={`col-4`}>
                        <p className={style.footerText}>Developed by Marco Varnier</p>
                        <p className={style.footerText}>Course of
                            <a href={courseLink} target="_blank" className={style.footerLink}>
                                &nbsp;"{courseName}"&nbsp;
                            </a>2022/2023
                        </p>
                        <p className={style.footerText}>Powered by
                            <a href={apiLink} target="_blank" className={style.footerLink}>
                                &nbsp;{apiName}&nbsp;
                            </a>
                        </p>
                    </div>
                    <div className="col-1 d-flex justify-content-center">
                        <img className={`${style.footerImg}`}
                             alt="logo Disco"
                             src={disco}
                        />
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer;