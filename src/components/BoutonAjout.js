import React from "react";

const BoutonAjout = (props) => {
    // const btnCss = 'btn ${props.typeBtn} ${props.css}';

    return <button className = "btn btn-success"
    onClick = { props.clik } > { props.children } < /button>

};
export default BoutonAjout;