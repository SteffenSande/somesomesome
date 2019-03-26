import * as React from "react";
import NavBar from "./NavBar";
import {EndPoints} from './Endpoints';

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
        fetch(EndPoints.TEST)
            .then((response) => {
                let message = response.json();
                console.log(message)
            })
            .catch((error) => {
                console.log("No response or something")
            })
    }

    render() {
        if (this.state.message) {
            return (<div className="App">
                <NavBar />
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
