import React from 'react';

function CardProductList(props) {

    return (
        <React.Fragment>
            <tr>
                <td>{props.id}</td>
                <td>{props.nombre}</td>
                <td>{props.categoria}</td>
                <td>{props.proveedor}</td>

            </tr>
        </React.Fragment>
    )
}

export default CardProductList;