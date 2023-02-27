import React, {useEffect, useState} from "react";
import {Button} from "reactstrap";
import CardGrid from "../../components/CardGrid/CardGrid.js";
import CardTable from "../../components/CardTable/CardTable.js";
import {useParams, Navigate} from "react-router-dom";
import Plist from "../../assets/data/Planets.json";
import Tlist from "../../assets/data/Travellers.json";

import style from "./Chart.module.css";

function Chart() {

    let [view, setView] = useState("1");
    let [error, setError] = useState(false);
    let {type} = useParams();
    let link = type;


    useEffect(() => {
        if (link !== "system" && link !== "travellers")
            setError(true);
    }, [link])


    let handelActive = (e) => {
        setView(view = e.target.getAttribute("a-key"));
    };

    const changeParagraph = (link) => {
      if (link === "system"){
          return(
              <p className={style.systemText}>Those are the planets that inhabit our system, they look amazing
                  aren’t they? Here you can find some information about them. Don’t fear, there isn’t too much
                  here to spoil your fantastic journey. Feel free to take a good lock around.</p>
          )
      } else {
          return(
              <p className={style.systemText}>If you are looking to travel with some companions I must inform you
                  that all our dear travellers have already started their journey. When you feel lonely or you just
                  want to chat about your latest discoveries, you can find them following the music they play.
                  Feel free to visit them whenever you want.</p>
          )
      }
    };

    const changeActive = (link) =>{
        if(link === "system"){
            if(view === "1"){
                return(
                    <CardGrid chartType={link} chartData={Plist}/>
                )
            } else {
                return(
                    <CardTable chartType={link} chartData={Plist}/>
                )
            }
        } else if (link === "travellers"){
            if(view === "1"){
                return(
                    <CardGrid chartType={link} chartData={Tlist}/>
                )
            } else {
                return(
                    <CardTable chartType={link} chartData={Tlist}/>
                )
            }
        }
    };


    if(error){
        return(<Navigate to="/404"/>)
    } else {
        return (
            <div>
                <div className="row justify-content-center">
                    <div className="col-5 pt-5 pb-5">
                        {changeParagraph(link)}
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-2 col-xl-1 d-flex justify-content-center">
                        <Button a-key="1" className={`${style.systemBtn} ${view === '1'? `${style.active}` : null}`} onClick={(e) => handelActive(e)}>
                            Grid
                        </Button>
                    </div>
                    <div className="col-2 col-xl-1 d-flex justify-content-center">
                        <Button a-key="2" className={`${style.systemBtn} ${view === '2'? `${style.active}` : null}`} onClick={(e) => handelActive(e)}>
                            Table
                        </Button>
                    </div>
                </div>
                {changeActive(link)}
            </div>
        );
    }
}

export default Chart;