import React, { Fragment } from 'react'
import BoutonMod from '../components/BoutonMod'
import BoutonSup from '../components/BoutonSup'


export default function Livre(props) {
    return (


        <
        Fragment >
        <
        td > { props.titre } < /td> <
        td > { props.auteur } < /td> <
        td > { props.nbpages } < /td> <
        td > < BoutonMod clik = { props.modifier } > Modifier < /BoutonMod></td >
        <
        td > < BoutonSup clik = { props.suppression } > Supprimer < /BoutonSup></td >
        <
        /Fragment>
    )
}