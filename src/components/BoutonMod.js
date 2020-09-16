import React from "react";

const BoutonMod = (props) => {
    // const btnCss = 'btn ${props.typeBtn} ${props.css}';

    return <button className = "btn btn-warning"
    onClick = { props.clik } > { props.children } < /button>

};
export default BoutonMod;