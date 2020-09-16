import React, { Component } from 'react'
import Livre from './Livre'
import FormulaireAjout from './FormulaireAjout'
import FormulaireModif from './FormulaireModif'
import Alert from '../components/Alert'




export default class Livres extends Component {

    state = {
        livres: [{
                id: 1,
                titre: 'jules cesar',
                auteur: 'olivier',
                nbpages: 200


            },
            {
                id: 2,
                titre: 'marie popins',
                auteur: 'olivier',
                nbpages: 400


            },
            {
                id: 4,
                titre: 'jules verne',
                auteur: 'olivier',
                nbpages: 300


            }


        ],
        lastInsertIdLivre: 4,
        idLivreModifier: 0,
        alertMessage: ""

    }

    handleSuppressionLivre = id => {
        const livreIndex = this.state.livres.findIndex(l => {
            return l.id === id;
        })
        const newLivres = [...this.state.livres];
        newLivres.splice(livreIndex, 1);
        this.setState({ livres: newLivres, alertMessage: "suppression effectuée" });
    }


    handleUpdateLivre = (id, titre, auteur, nbpages) => {
        const caseLivre = this.state.livres.findIndex(l => {

            return l.id === id;
        })
        const newLivre = {
            id: id,
            titre: titre,
            auteur: auteur,
            nbpages: nbpages
        }
        const newListe = [...this.state.livres]
        newListe[caseLivre] = newLivre;
        this.setState({ livres: newListe, idLivreModifier: 0, alertMessage: "modification effectuée" })

    }





    handleAjoutLivre = (titre, auteur, nbpages) => {

        const newLivre = {
            id: this.state.lastInsertIdLivre + 1,
            titre: titre,
            auteur: auteur,
            nbpages: nbpages
        };

        const newListeLivres = [...this.state.livres];
        newListeLivres.push(newLivre);
        this.setState(oldState => {
            return {
                livres: newListeLivres,
                lastInsertIdLivre: oldState.lastInsertIdLivre + 1,
                alertMessage: "ajout effectuée"

            }
        })

        this.props.fermerAjoutLivre();

    }







    render() {
            return ( <
                > {
                    this.state.alertMessage ? < Alert typeAlert = "alert-danger" > { this.state.alertMessage } < /Alert> : null}

                    <
                    table class = "table table-dark" >
                    <
                    thead >
                    <
                    tr >
                    <
                    th scope = "col" > Titre < /th> <
                    th scope = "col" > Auteur < /th> <
                    th scope = "col" > Nombre de pages < /th> <
                    th colspan = "2" > Actions < /th> <
                    /tr> <
                    /thead> <
                    tbody > {

                        this.state.livres.map(livre => {
                            if (livre.id !== this.state.idLivreModifier) {
                                return ( <
                                    tr key = { livre.id } >
                                    <
                                    Livre titre = { livre.titre }
                                    auteur = { livre.auteur }
                                    nbpages = { livre.nbpages }
                                    suppression = {
                                        () => this.handleSuppressionLivre(livre.id) }
                                    modifier = {
                                        () => this.setState({ idLivreModifier: livre.id }) }

                                    /> <
                                    /tr>
                                );
                            } else {
                                return ( <
                                    tr key = { livre.id } >
                                    <
                                    FormulaireModif

                                    id = { livre.id }
                                    titre = { livre.titre }
                                    auteur = { livre.auteur }
                                    nbpages = { livre.nbpages }
                                    modifValid = { this.handleUpdateLivre }
                                    /> <
                                    /tr>
                                )
                            }


                        })
                    }

                    <
                    /tbody> <
                    /table> {
                        this.props.ajoutLivre ? < FormulaireAjout validation = { this.handleAjoutLivre }
                        /> : null}

                        <
                        />
                    )
                }

            }