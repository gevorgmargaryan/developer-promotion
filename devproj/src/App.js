import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Menu from "./components/MenuComponent";
import ListComponent from "./components/ListComponent"
import FormComponent from "./components/FormComponent"
import Traning from "./components/TraningFormComponent"
import TraningList from "./components/TraningListComponent";

class App extends Component {
    constructor(){
        super()
        this.state={
            showDevPage: false,
            showTRPage: false,
            showInPage: false,
            showSide: false
        }
        this.handleClickTranings=this.handleClickTranings.bind(this)
        this.handleClickDevelopers=this.handleClickDevelopers.bind(this)
        this.menuShow=this.menuShow.bind(this)
    }
    handleClickDevelopers(event){
       this.setState({showSide: false, showDevPage: true, showTrPage: false, showInPage: true})
   }
    handleClickTranings(event){
        this.setState({showSide:false, showDevPage: false, showTrPage: true, showInPage: true})
    }
    menuShow (event){
        this.setState((prev)=>{ return {showSide: !prev.showSide}})
    }

    renderSide =()=>{
        if(this.state.showSide){
            return (
                <div style={{
                    height: "100%",
                    background: "grey",
                    boxShadow: "1px 0px 7px rgba(0, 0, 0, 0.5)",
                    position: "fixed",
                    top: "0",
                    left: "0",
                    width: "70%",
                    maxWidth: "400px",
                    zIndex: "200",

                }}>
                    <button type="button" className="list-group-item list-group-item-action" onClick={this.handleClickDevelopers}>Developers</button>
                    <button type="button" className="list-group-item list-group-item-action" onClick={this.handleClickTranings}>Tranings</button>
                    <button className="list-group-item list-group-item-action" onClick={this.menuShow}>Hide Side Bar</button>
                </div>
            )
        }
        else
            return null
    }
    renderInfo=()=>{
        if(!this.state.showInPage){
            return(
                <div className="row mt-5">
                    <div className="col order-md-2">
                        <h2>Info Developer</h2>
                    </div>
                    <div className="col order-md-1">
                        <table className="table">
                            <tbody>
                            <tr>
                                <th width={"80%"}> <h2>Developer's List </h2> </th>
                                <th>34</th>
                            </tr>
                            </tbody>
                        </table>
                        <ListComponent />
                    </div>
                </div>
            )
        }
        else {return null;}
    }
    render() {
    return (
        <div className="App" >
            <Menu pressDev={this.handleClickDevelopers} pressTra={this.handleClickTranings} click={this.menuShow}/>
            {this.renderSide()}
            {this.renderInfo()}
             {this.state.showDevPage && <Dev/>}
            {this.state.showTrPage && <Train/>}
          </div>
    );
  }
}
        
class Dev extends Component{
    render(){
        return(
        <div className="row mt-5">
            <div className="col order-md-2">
                <h2 >Add Developer</h2>
                <FormComponent />
            </div>
            <div className="col order-md-1" >
                <table className="table" >
                    <tbody>
                        <tr>
                            <th width={"80%"}> <h2>Developer's List </h2> </th>
                            <th>34</th>
                        </tr>
                    </tbody>
                </table>
                <ListComponent  />
            </div>
        </div>
        )
    }
}

class Train extends Component{
    render(){
        return(
            <div>
                <div className="fixed-bottom">
                    <h2>Add Traning</h2>
                    <Traning />
                </div>
                <div className="" >
                    <table className="table">
                        <tbody>
                        <tr>
                            <th width={"80%"}> <h2>Traning List </h2> </th>
                            <th>34</th>
                        </tr>
                        </tbody>
                    </table>
                    <TraningList />
                </div>
            </div>
        )
    }
}
export default App;
