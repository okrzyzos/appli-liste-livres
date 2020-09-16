import React, { Component, Fragment } from 'react'
import BoutonMod from '../components/BoutonMod';


export default class FormulaireModifier extends Component {


    state = {
        titreSaisi: "",
        auteurSaisi: "",
        nbPagesSaisi: ""
    }


    componentDidMount = () => {
        this.setState({
            titreSaisi: this.props.titre,
            auteurSaisi: this.props.auteur,
            nbPagesSaisi: this.props.nbpages
        })
    }

    handleValidation = () => {
        this.props.modifValid(this.props.id, this.state.titreSaisi, this.state.auteurSaisi, this.state.nbPagesSaisi);
    }
    render() {
        return ( <
            Fragment >
            <
            td > < input type text className = "form-control"
            value = { this.state.titreSaisi }
            onChange = {
                (event) => this.setState({ titreSaisi: event.target.value }) }
            /></td >
            <
            td > < input type text className = "form-control"
            value = { this.state.auteurSaisi }
            onChange = {
                (event) => this.setState({ auteurSaisi: event.target.value }) }
            /></td >
            <
            td > < input type text className = "form-control"
            value = { this.state.nbPagesSaisi }
            onChange = {
                (event) => this.setState({ nbPagesSaisi: event.target.value }) }
            /></td >
            <
            td > < BoutonMod style = {
                { color: 'blue' } }
            clik = { this.handleValidation } > Valider < /BoutonMod></td >
            <
            /Fragment>
        );
    }
}