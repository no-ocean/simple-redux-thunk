export const beerReducer = (state= {name: null, image: null}, action) => {
    switch(action.type) {
        case "SET_BEER":
            return { name: action.name, image: action.image };
        default:
            return state;
    }
}