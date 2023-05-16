export const initialState = {
    count: 0
}

export const CountReducer = (state, action) => {
    switch (action) {
        case 'Inc':
            return {
                count: state.count + 1
            };
        case 'Dec':
            return {
                count: state.count - 1
            };
        default:
            return state;
    }
}