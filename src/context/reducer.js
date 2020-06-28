export function reducer(state, action) {
    switch (action.type) {
        case "SET_SELECTED_CITY":
            state.selectedCity = action.city
            return { ...state }

        case "SET_RESTAURANTS":
            state.restaurantList = action.resList
            return { ...state }

        default:
            return state
    }
}
