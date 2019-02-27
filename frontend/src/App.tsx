import * as React from "react";
import NavBar from "./NavBar";
export interface IAppProps {
}
export interface IAppState {
}
export default class App extends React.Component<IAppProps, IAppState> {
    constructor(props: IAppProps) {
        super(props);
    }
    render() {
        return( <div className="App">
                    <NavBar/>
                    <h1> Hello from react with typescript scss support! </h1>
                </div>);
    }
}
