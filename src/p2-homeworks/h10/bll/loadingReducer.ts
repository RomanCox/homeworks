const initState = {
    loading: false
}

export const loadingReducer = (state = initState, action: any): any => { // fix any
    switch (action.type) {
        case 'CHANGE LOADING': {
            return {
                ...state, loading: action.loading
            }
        }
        default: return state
    }
}

type LoadingActionType = {
    type: 'CHANGE LOADING',
    loading: boolean,
}

export const loadingAC = (loading: boolean): LoadingActionType => ({
    type: 'CHANGE LOADING',
        loading,
}) // fix any