import React, { Component } from 'react'
import BoutonAjout from './components/BoutonAjout'
import FormulaireAjout from './containers/FormulaireAjout'
import Titre from './components/Titre'
import './components/Titre.css'
import Livres from './containers/Livres'

import "bootstrap/dist/css/bootstrap.min.css"


export default class App extends Component {


    state = {

        ajoutLivre: false
    }


    handleClikAjout = () => {
        this.setState((oldState, props) => {

            return { ajoutLivre: !oldState.ajoutLivre }
        })
    }


    render() {
        return ( <
            >
            <
            div className = "container" >
            <
            Titre titre = "Liste des livres" / >
            <
            Livres ajoutLivre = { this.state.ajoutLivre }
            fermerAjoutLivre = {
                () => this.setState({ ajoutLivre: false }) }
            /> <
            BoutonAjout clik = { this.handleClikAjout } > {!this.state.ajoutLivre ? "Ajouter" : "ferme l' ajout" } <
            /BoutonAjout> <
            /div> <
            />
        )
    }
}