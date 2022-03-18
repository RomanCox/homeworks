import React from 'react'
import {CheckAgeAC, homeWorkReducer, SortStateDownAC, SortStateUpAC} from '../homeWorkReducer'
import {UserType} from "../../HW8";

let initialState: Array<UserType> // need to fix any

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, SortStateUpAC('up'))

    /*expect(newState[0]._id).toBe(1)
    expect(newState[1]._id).toBe(3)
    expect(newState[2]._id).toBe(4)
    expect(newState[3]._id).toBe(5)
    expect(newState[4]._id).toBe(2)
    expect(newState[5]._id).toBe(0)*/

    const result = [1,3,4,5,2,0].filter((id, i) => id === newState[i]._id)
    expect(result.length).toBe(newState.length)
})



test('sort name down', () => {
    const newState = homeWorkReducer(initialState, SortStateDownAC('down'))

    /*expect(newState[0]._id).toBe(0)
    expect(newState[1]._id).toBe(2)
    expect(newState[2]._id).toBe(5)
    expect(newState[3]._id).toBe(4)
    expect(newState[4]._id).toBe(3)
    expect(newState[5]._id).toBe(1)*/

    const result = [0,2,5,4,3,1].filter((id, i) => id === newState[i]._id)
    expect(result.length).toBe(newState.length)
})
test('check age 18', () => {
    const newState = homeWorkReducer(initialState, CheckAgeAC(18))

    expect(newState[0]._id).toBe(1)
    expect(newState[1]._id).toBe(3)
    expect(newState[2]._id).toBe(4)
    expect(newState[3]._id).toBe(5)
    expect(newState.length).toBe(4)
})
