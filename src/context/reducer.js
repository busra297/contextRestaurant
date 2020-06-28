export function reducer(state, action) {
    switch (action.type) {
        case "SET_SELECTED_CITY":
            state.selectedCity = action.city
            return { ...state }

        default:
            return state
    }
}
