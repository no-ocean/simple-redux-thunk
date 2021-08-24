export const getBeer = (beerID) => {
    return {
        type: "GET_BEER",
        beerID: beerID
    }
}

export const beerMiddleware = (storeAPI) => (next) => (action) => {
    console.log("berr id", action.beerID)
    if (action.type === "GET_BEER") {
        fetch(`https://api.punkapi.com/v2/beers/${action.beerID}`)
            .then((res) => res.json())
            .then(data => storeAPI.dispatch({ type: "SET_BEER", data: data}))
    }

    return next(action)
}