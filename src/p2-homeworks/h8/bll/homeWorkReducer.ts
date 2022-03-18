import {UserType} from "../HW8";

export const homeWorkReducer = (state: Array<UserType>, action: MainType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            // need to fix
            let newState = [...state]
            if (action.payload.sortType === 'up') {
                newState = newState.sort((a, b) => a.name < b.name ? -1 : 1)
            } else if (action.payload.sortType === 'down') {
                newState = newState.sort((a, b) => a.name < b.name ? -1 : 1).reverse()
            }
            return newState
        }
        case 'check': {
            // need to fix
            let newState = [...state]
            return newState.filter(st => st.age >= action.payload.age)
        }
        default:
            return state
    }
}

type MainType = SortStateUpACType | SortStateDownACType | CheckAgeACType

type SortStateUpACType = ReturnType<typeof SortStateUpAC>

export const SortStateUpAC = (sortType: string) => {
    return {
        type: 'sort' as const,
        payload: {sortType}
    }
}

type SortStateDownACType = ReturnType<typeof SortStateDownAC>

export const SortStateDownAC = (sortType: string) => {
    return {
        type: 'sort'  as const,
        payload: {sortType}
    } as const
}

type CheckAgeACType = ReturnType<typeof CheckAgeAC>

export const CheckAgeAC = (age: number) => {
    return {
        type: 'check',
        payload: {age}
    } as const
}