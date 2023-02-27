import React from "react";
import style from "./ErrorPage.module.css";

function ErrorPage() {

    return (
        <div className="row justify-content-center">
            <div className={`col-10 ${style.pCustom}`}>
                <p className={style.errorTitle}>404</p>
                <p className={style.errorText}>Hello there traveller, welcome to my campfire.<br/>
                    This is not the place you were meant to reach. Keep looking for the stars!</p>
            </div>
        </div>
    )
}

export default ErrorPage;