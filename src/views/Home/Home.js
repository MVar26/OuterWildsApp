import React from "react";
import CardElement from "../../components/CardElement/CardElement";
import style from "./Home.module.css";
import SystemImg from "../../assets/img/SystemHome.png";
import TravellersImg from "../../assets/img/TravellersHome.png";


function Home() {

    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-5 pt-5 pb-5">
                    <p className={style.homeText}>Welcome in our beloved Solar System, a place full of adventure, mysteries and things to discover
                        that will probably kill you, or maybe not. But do not fear, if you are too scared of travelling
                        the unknown all alone you can read tose small list below to find a good destination to start your
                        adventure or some good travelling companions</p>
                </div>
            </div>
            <div className={`row justify-content-center pt-1 ${style.pbCustom}`}>
                <div className="col-5 col-xl-3">
                    <CardElement contentTitle={"The System"} contentImg={SystemImg} contentLink={"/list/system"}/>
                </div>
                <div className="col-5 col-xl-3 offset-2">
                    <CardElement contentTitle={"The Travellers"} contentImg={TravellersImg} contentLink={"/list/travellers"}/>
                </div>
            </div>
        </div>
    );
}

export default Home;