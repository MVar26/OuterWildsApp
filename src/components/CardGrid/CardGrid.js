import React from "react";
import CardElement from "../CardElement/CardElement";
import {detailsLink} from "../../utility/utility";

function CardGrid(props) {
    const {chartData, chartType} = props;


    const cardConstructor = chartData.map((item) => {
        return (
            <div key={item.id} className="col-4">
                <CardElement
                    contentTitle={item.name}
                    contentImg={item.imgurl}
                    contentLink={detailsLink(item.id, chartType)}
                    boxType={"grid"}
                />
            </div>
        )
    });

    return (
        <div className="container-lg">
            <div className={`row justify-content-center pt-5 pb-5`}>
                {cardConstructor}
            </div>
        </div>
    )
}

export default CardGrid;