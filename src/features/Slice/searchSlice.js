import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name : 'search',
    initialState : {
        submit : '',
        search : ''
    },
    reducers : {
        changeSearch (state,action){
            return {
                ...state,
                submit : state.submit,
                search : action.payload
            }
        },
        submitSearch(state,action) {
            return {
                ...state,
                submit : action.payload,
                search : state.search
            }
        }
    }
})

const {actions,reducer} = searchSlice
export const {changeSearch,submitSearch} = actions
export default reducer
