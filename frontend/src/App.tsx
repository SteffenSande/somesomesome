import * as React from "react";
import NavBar from "./NavBar";
import {EndPoints} from './Endpoints';
import SearchBar from "./SearchBar";
import {getFromServer} from "./util";

export interface IAppProps {
}

export interface IAppState {
    message: string
}

export default class App extends React.Component<IAppProps, IAppState> {
    constructor(props: IAppProps) {
        super(props);
        this.state = {
            message: null
        }
    }

    componentDidMount() {

    }

    render() {
            return (<div className="App">
                <NavBar />
                <SearchBar handleSubmit={(searchText:string) => {
                    console.log("Hei, its me Mario" + searchText);
                    getFromServer(EndPoints.SEARCH+searchText)
                    .then(response => {
                    response.json().then(
                    response =>{
                    console.log(response);
                }
                    )
                })
                    .catch((error) => {
                    console.log(error)
                })
                } }
                />
                <h1> {this.state.message} </h1>
            </div>);
    }
}
