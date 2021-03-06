import * as React from 'react';
import {EndPoints} from "./Endpoints";
import {redirectToCorrect} from "./util";

export interface INavBarProps {
}

export interface INavBarState {
}

export default class NavBar extends React.Component<INavBarProps,
    INavBarState> {
    constructor(props: INavBarProps) {
        super(props);
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <a className="navbar-brand" href="#"> Music Box </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" href={redirectToCorrect('listen')}> Listen! </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

