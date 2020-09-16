import React from "react";

const BoutonPrim = (props) => {
    // const btnCss = 'btn ${props.typeBtn} ${props.css}';

    return <button className = "btn btn-primary"
    onClick = { props.clik } > { props.children } < /button>

};
export default BoutonPrim;