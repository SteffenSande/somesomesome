import {Api} from "./Endpoints";


const api = Api.PROD;

export function getFromServer(endpoint:string) : Promise<any> {
    let response: Promise<any> = fetch(api + endpoint);
    return response
}
