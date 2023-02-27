
export const detailsLink = (id, type) =>{
    let link = `/details/${type}/${id}`;
    return(link);
};

export const tableConstructor = (list) => {
    const objects = Object.keys(list.data).map((item, i) => {
        return (
            <tr key={i}>
                <td className="fw-bold pe-5">
                    {item}
                </td>
                <td>
                    {list.data[item]}
                </td>
            </tr>
        )
    });

    return (objects)
};

export const isDetailsLinkRight = (id, link, list) => {

    if(link !== "system" && link !== "travellers"){
        return true
    } else if(id > Object.keys(list).length || isNaN(parseInt(id)))
        return true
}
