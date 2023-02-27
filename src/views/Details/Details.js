import React, {useEffect, useState} from "react";
import style from "./Details.module.css";
import CardElement from "../../components/CardElement/CardElement";
import Navigation from "../../components/Navigation/Navigation";
import {Navigate, useParams} from "react-router-dom";
import Plist from "../../assets/data/Planets.json";
import Tlist from "../../assets/data/Travellers.json";
import {isDetailsLinkRight} from "../../utility/utility";


function Details () {

    const [text, setText] = useState("");
    const [loading, setLoading] = useState(false);

    let {number} = useParams();
    let id = parseInt(number);
    let {type} = useParams();
    let link = type;

    let currentData;
    let currentList;
    let name = "temp";


    if (link === "system"){
        currentList = Plist;

        if (id > Object.keys(currentList).length || isNaN(id)){
            name = "Sun";
        } else {
            currentData = currentList.filter((item) => item.id === id)[0];
            name = currentData.name;

        }
    } else{
        currentList = Tlist;

        if (id > Object.keys(currentList).length || isNaN(id)){
            name = "Sun";
        } else {
            currentData = currentList.filter((item) => item.id === id)[0];
            name = currentData.name;
        }
    }
    const error = isDetailsLinkRight(id, link, currentList);


    useEffect(() => {

        let isMounted = true;

        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);

        fetch(`https://outerwilds.fandom.com/api.php?action=query&origin=*&format=json&prop=extracts&titles=${name}&formatversion=2&exsentences=10&exlimit=1&explaintext=1`)
            .then ((r) => r.json())
            .then((r) => r.query.pages[0].extract)
            .then((r) => {
                if (isMounted)
                    setText((r.slice(0, r.indexOf('='))));
            })
            .catch((error) => console.log("Error" + error));

        window.scrollTo(0,0)

        return () => {
            isMounted = false;
        }
    },[name])


    if(error){
        return(<Navigate to="/404"/>);
    } else{
        return(
            <div className="container">
                {loading ? (
                    <div className={`row justify-content-center ${style.loader}`}>
                        <div className={`col-3 d-flex justify-content-center`}>
                            <div className={`align-self-center ${style.spinner}`} />
                        </div>
                    </div>
                ) : (
                    <>
                        <div className={`row justify-content-evenly ${style.ptCustom} pt-5 pb-2`}>
                            <h1 className={`col-5 text-center ${style.pageTitle}`}>
                                {name}
                            </h1>
                        </div>
                        <div className={`row justify-content-center pt-5`}>
                            <div className="col-12 col-lg-9">
                                <CardElement id={currentData.id} contentImg={currentData.imgurl} contentText={currentData} boxType={"details"}/>
                            </div>
                        </div>
                        <div className={`row justify-content-center pt-5`}>
                            <div className="col-8 d-flex justify-content-center">
                                <h3 className={style.pageTitle}>Description</h3>
                            </div>
                        </div>
                        <div className={`row justify-content-center pt-5`}>
                            <div className="col-8 d-flex justify-content-center">
                                <p className={style.detailsText}>{text}</p>
                            </div>
                        </div>
                        <div className={`row justify-content-center pt-5 ${style.pbCustom}`}>
                            <Navigation currentList={currentList} id={currentData.id} type={link}/>
                        </div>
                    </>
                )}
            </div>
        );
    }
}

export default Details;