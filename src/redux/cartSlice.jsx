import { createSlice } from "@reduxjs/toolkit";
const initialState={
    carts:[]
}

const cartSlice= createSlice({
    name:"cart",
    initialState,
    reducers:{
        addcart:(state,action)=>{
            const findindex=state.carts.findIndex((y)=>y.id===action.payload.id)
            if(findindex>=0)
            state.carts[findindex].qty+=1;
        else{
            const newentry={...action.payload,qty:1}
            state.carts=[...state.carts,newentry]
        }
        },
        removecart:(state,action)=>{
            const removeindex=state.carts.findIndex((y)=>y.id===action.payload.id)
            if(state.carts[removeindex].qty>1)
            state.carts[removeindex].qty-=1
        },
        clear:(state,action)=>{
            const clearitem=state.carts.filter((x)=>x.id!==action.payload.id)
            state.carts=clearitem
        }
    }
})
export const {addcart,removecart,clear}=cartSlice.actions
export default cartSlice.reducer