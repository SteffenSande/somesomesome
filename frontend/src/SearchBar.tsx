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
        }
    }

    render() {
        return (
            <div>
                <form className="searchbar" onSubmit={this.handleSubmit} >
                    <input  className="form-control" 
                            type="text" 
                            value={this.state.searchText} 
                            onChange={this.updateSearch}
                            placeholder="Search" />
                </form>
            </div>
        );
    }
    updateSearch(event: any) {
        this.setState({searchText: event.target.value})
    }

    handleSubmit(event: any) {

        console.log("Searched for:" + this.state.searchText)

        fetch(EndPoints.SPOTIFY_TEST)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch((error) => {
                console.log("No response or something")
        })

        event.preventDefault();
    }
}

