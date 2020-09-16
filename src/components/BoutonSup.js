import React from "react";

const BoutonSup = (props) => {
    // const btnCss = 'btn ${props.typeBtn} ${props.css}';

    return <button className = "btn btn-danger"
    onClick = { props.clik } > { props.children } < /button>

};
export default BoutonSup;