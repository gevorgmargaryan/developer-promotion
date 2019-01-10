// src/js/components/App.js
import React, {Component} from "react";
import FormComponent from "./FormComponent";
import ListComponent from "./ListComponent";
import TraningSide from "./TraningComponent";
import Traning from "./AddTraningComponent";
import "./AppComoponentDis.css"

class App extends Component {
    constructor() {
        super();
        this.state = {
            showDev: true,
            showtra: false,
            showadd: false
        }
        this.showTranings = this.showTranings.bind(this);
        this.showAddDeveloper = this.showAddDeveloper.bind(this);
        this.showDevelopers = this.showDevelopers.bind(this);

    }

    showDevelopers (){
        const {showDev}= this.state
        this.setState({
            showDev: true,
            showtra: false,
            showadd: false
 })


    }
    showTranings (){
        const {showtra}= this.state
        this.setState({
            showtra: !showtra,
            showadd: false,
            showDev: false
        })
    }
    showAddDeveloper (){
        const {showadd}= this.state
        this.setState({
            showadd: !showadd,
            showDev: false,
            showtra: false
        })
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-primary">

                    <div className=" navbar-nav ">
                        <ul className="nav navbar-nav ">
                            <li>
                                <button type="submit" className="btn btn-success" onClick={this.showDevelopers}>
                                  Devolopers</button>

                            </li>
                            <li>
                                <button type="submit" className="btn btn-success" onClick={this.showTranings}>
                                    Tranings</button>


                            </li>
                            <li>
                                <button type="submit" className="btn btn-success" onClick={this.showAddDeveloper}>
                                    Add Devoloper</button>

                            </li>
                        </ul>
                    </div>
                </nav>


             <div>
            {this.state.showDev && <Developers />}
            {this.state.showadd && <AddDeveloper />}
            {this.state.showtra && <Tranings />}
                 {console.log(this.state)}

                </div>
            </div>
        )
    }
}

class Developers extends Component{
    render(){
        return(
            <div className="row mt-5">
                <div className="col order-md-2"
                     style={{
                         backgroundColor: "red",
                         borderStyle: "solid",
                         borderWidth: 15,
                         borderColor: '#d6d7da'
                     }}>
                    <h2>Deveoloper info</h2>
                </div>
                <div className="col order-md-1">
                    <h1>Devolopers list</h1>
                    <ListComponent/>
                </div>
            </div>
        )
    }
}

class AddDeveloper extends Component{
    render(){
        return(
            <div className="row mt-5">
                <div className="col order-md-1">
                    <h1>add Devoloper </h1>
                    <FormComponent/>
                </div>
                <div className="col order-md-2">
                    <h1>Devolopers list</h1>
                    <ListComponent/>
                </div>
            </div>
        )
    }
}
class Tranings extends Component{
    render(){
        return(
            <div className="row mt-5">
                <div className="col order-md-1">
                    <h1>tranings </h1>
                    <TraningSide/>
                </div>
                <div className="col order-md-2">
                    <h1>Add Traning</h1>
                    <Traning/>
                </div>
            </div>
        )
    }
}

export default App;

