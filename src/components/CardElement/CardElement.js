import React from "react";
import style from "./CardElement.module.css";
import {
    Card,
    CardBody,
    CardTitle,
    Table,
} from "reactstrap";
import {NavLink as RouterLink} from "react-router-dom";
import {tableConstructor} from "../../utility/utility";


function CardElement (props) {
    const {id, contentTitle, contentImg, contentLink, contentText, boxType} = props;

    if(boxType === "table") {

        return (
            <tr id={id} className="mt-3">
                <td className="pt-3 pb-3">
                    <RouterLink to={contentLink}>
                        <img
                            alt={contentTitle}
                            src={contentImg}
                            className={style.cardImgTable}
                        />
                    </RouterLink>
                </td>
                <td className="align-middle">
                    <div className={style.cardStyleTable}>
                        <RouterLink to={contentLink} className={style.cardLink}>
                            <p className={style.cardLink}>{contentTitle}</p>
                        </RouterLink>
                    </div>
                </td>
            </tr>
        );

    } else if(boxType === "grid") {

        return(
                <RouterLink to={contentLink} className={style.cardLink}>
                    <Card body className={style.cardStyleGrid}>
                        <img
                            src={contentImg}
                            alt={contentTitle}
                            className={style.cardImgGrid}
                        />
                        <CardBody >
                            <CardTitle tag="h5" className={style.cardTitle}>
                                {contentTitle}
                            </CardTitle>
                        </CardBody>
                    </Card>
                </RouterLink>
        )

    } else if(boxType === "details"){

        return(
                <Card id={id} body className={style.cardStyleDetails}>
                    <img
                        alt={contentTitle}
                        src={contentImg}
                        className={style.cardImgDetails}
                    />
                    <CardBody>
                        <Table responsive size="xl" className={style.tableStyleDetails}>
                            <thead>
                                <tr>
                                    <th />
                                    <th />
                                </tr>
                            </thead>
                            <tbody>
                                {tableConstructor(contentText)}
                            </tbody>
                        </Table>
                    </CardBody>
                </Card>
        );

    } else {
        return(
            <RouterLink to={contentLink} className={style.cardLink}>
                <Card body className={style.cardStyleBig}>
                    <img
                        alt={contentTitle}
                        src={contentImg}
                        className={style.cardImgBig}
                    />
                    <CardBody>
                        <CardTitle tag="h5" className={style.cardTitle}>
                            {contentTitle}
                        </CardTitle>
                    </CardBody>
                </Card>
            </RouterLink>
        )
    }

}

export default CardElement;