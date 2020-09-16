import React, { Component, Fragment } from 'react'
import BoutonPrim from '../components//BoutonPrim';


export default class formulaireAjout extends Component {

    state ={
        titreSaisi:" ",
        auteurSaisi:" ",
        nbPagesSaisi:" "
    }


  handleValidationForm = (event) => {
event.preventDefault();
this.props.validation(this.state.titreSaisi,this.state.auteurSaisi,this.state.nbPagesSaisi);
this.setState(
{
    titreSaisi:" ",
    auteurSaisi:" ",
    nbPagesSaisi:" "
})
  }


    render() {
        return (
            <Fragment>
              <h2  className="text-center text-primary" style={{fontFamily:'Sigmar One'}}>Affichage formulaire ajout</h2>

              <form>
  <div class="form-group">
    <label htmlFor="titre">Titre du livre</label>
    <input type="text" className="form-control" id="titre" value={this.state.titreSaisi} onChange={(event) => this.setState({titreSaisi:event.target.value})} />
  </div>
  <div class="form-group">
    <label htmlFor="auteur">Auteur</label>
    <input type="text" className="form-control" id="auteur" value={this.state.auteurSaisi} onChange={(event) => this.setState({auteurSaisi:event.target.value})} />
  </div>
  <div class="form-group">
    <label htmlFor="nbpages">Nombres de pages</label>
    <input type="number" className="form-control" id="nbpages" value={this.state.nbPagesSaisi} onChange={(event) => this.setState({nbPagesSaisi:event.target.value})} />
  </div>
  
  <BoutonPrim  clik={this.handleValidationForm}>Valider</BoutonPrim><br />
</form>





            </Fragment>
        )
    }
}
