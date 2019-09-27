import * as React from "react";
import NavBar from "../NavBar";
import {getFromServer} from "../util";
import {EndPoints} from "../Endpoints";

export interface IAppProps {
}

export interface IAppState {
    player:any
}

export default class App extends React.Component<IAppProps, IAppState> {
    constructor(props: IAppProps) {
        super(props);
    }
    componentDidMount() {
        // @ts-ignore
        window.onSpotifyWebPlaybackSDKReady = () => {
            // You can now initialize Spotify.Player and use the SDK
            const token = 'BQB2bINIS3Y2vAi5D-GxA1VoAsWxynyIEnNyAnSf4Y1N78r5hM5TNoo2mGxIT9YI3e5HV6_l9JJQZGht1zg';
            // @ts-ignore
            let player = new Spotify.Player({
                name: 'Music Box',
                getOAuthToken: callback => {
                    // Run code to get a fresh access token
                    callback(token);
                },
                volume: 0.5
            });
            player.connect().then(sucsess=> {
                if(sucsess){
                    this.setState({...this.state, player})
                }
            })
        };
    }

    render() {
            if(!this.state){
                return ( <div className="App">
                        <NavBar />
                        <h1>Loading Spotify player</h1>
                    </div>
                )
            }else {
                return (
                    <div className="App">
                        <NavBar />
                        <h1>{this.state.player._options.name}</h1>
                        <button className='btn btn-light' onClick={() => this.state.player.previousTrack()}>Previous</button>
                        <button className='btn btn-success' onClick={(event) => {
                            event.preventDefault();
                            this.state.player.togglePlay()
                        }}>Play</button>
                        <button className='btn btn-secondary' onClick={() => this.state.player.nextTrack()}> Next</button>
                    </div>
                )

            }
        ;
    }
}


