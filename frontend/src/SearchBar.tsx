import * as React from 'react';
import { EndPoints } from './Endpoints';

export interface ISearchBarProps {
}

export interface ISearchBarState {
    searchText: string;
}

export default class SearchBar extends React.Component<ISearchBarProps,
    ISearchBarState> {
    constructor(props: ISearchBarProps) {
        super(props);

        this.updateSearch = this.updateSearch.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            searchText: ""
        };
    }
    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <div className="jumbotron" style={{backgroundColor: "#1DB954"}}>
                        <h1 style={{color: " #191414", textAlign: "center"}}>Search for a song on Spotify!</h1>
                    </div>
                    <form className="searchbar" onSubmit={this.handleSubmit} >
                        <input  className="form-control"
                                type="text"
                                value={this.state.searchText}
                                onChange={this.updateSearch}
                                placeholder="Search" />
                    </form>
                </div>
            </div>
        );
    }
    updateSearch(event: any) {
        this.setState({searchText: event.target.value})
    }

    handleSubmit(event: any) {

        console.log("Searched for:" + this.state.searchText);
        event.preventDefault();
    }
}

