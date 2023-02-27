import React from "react";
import CardElement from "../CardElement/CardElement";
import {Table} from "reactstrap";
import {detailsLink} from "../../utility/utility";
import style from "./CardTable.module.css";

function CardTable(props) {
    const {chartData, chartType} = props;


    const cardConstructor = chartData.map((item) => {
        return (
                <CardElement
                    id={item.id}
                    contentTitle={item.name}
                    contentImg={item.imgurl}
                    contentLink={detailsLink(item.id, chartType)}
                    boxType={"table"}
                />
        )
    });

    return (
        <div className="row justify-content-center pt-5 pb-5">
            <div className="col-10 col-xl-8 text-center">
                <Table responsive size="sm">
                    <thead>
                        <tr className={style.tableTitle}>
                            <th>
                                Photo
                            </th>
                            <th>
                                Name
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {cardConstructor}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default CardTable;