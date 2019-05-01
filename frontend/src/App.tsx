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
        getFromServer(EndPoints.JSON)
            .then(response => {
                response.json().then(
                    response =>{
                        console.log(response['category'][0]['name']);
                        this.setState({...this.state, message: response['category'][0]['name']});
                    }
                )
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        if (this.state.message) {
            return (<div className="App">
                <NavBar />
                <SearchBar />
                <h1> {this.state.message} </h1>
            </div>);
        } else {
            return (<div className="App">
                <NavBar/>
                <h1> Hello from react with typescript scss support! </h1>
            </div>);
        }
    }
}
