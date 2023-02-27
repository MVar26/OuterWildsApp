import React from "react";
import {NavLink as RouterLink} from "react-router-dom";
import style from "./Navigation.module.css"


function Navigation(props) {
    const {currentList, id, type} = props;

    let idn = parseInt(id);

    return (
        <div className={`col-4 d-flex justify-content-center`}>
            {idn - 1 !== 0 &&
                <RouterLink className={`${style.prev} ${style.navItem}`}
                         to={`/details/${type}/${idn - 1}`}>
                    &lt; Prev
                </RouterLink>
            }
            {idn + 1 <= Object.keys(currentList).length &&
                <RouterLink className={`${style.next} ${style.navItem}`}
                         to={`/details/${type}/${idn + 1}`}>
                    Next &gt;
                </RouterLink>
            }
        </div>
    )
}

export default Navigation;
