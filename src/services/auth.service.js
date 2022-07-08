import httpService from "./https.service";

export const login = (body) => {
    //    console.log("body==>",body);
    return httpService.post("login",body);
}

export const createStores = () => {
    return httpService.get("stores");
}

export const updateStore = (id, body) => {
    return httpService.patch("stores/" + id, body);
}

