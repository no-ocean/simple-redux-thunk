const setBeer = (name, image) => {
    return {
        type: "SET_BEER",
        name,
        image
    }
}

export const getBeer = (beerID) => {
    return (dispatch) => {
        fetch(`https://api.punkapi.com/v2/beers/${beerID}`)
            .then((res) => res.json())
            .then((data) => {
                dispatch(setBeer(data[0].name, data[0].image_url))
            })
    }
}