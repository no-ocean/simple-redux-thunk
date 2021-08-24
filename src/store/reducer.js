export const beerReducer = (state= {data: null}, action) => {
    switch(action.type) {
        case "SET_BEER":
            return { data: action.data };
        default:
            return state;
    }
}