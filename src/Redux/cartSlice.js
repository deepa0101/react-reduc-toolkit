import { createSlice } from "@reduxjs/toolkit"

const cartSlice= createSlice({
    name: "cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action) =>{
            const newItemId = action.payload.id;
            const existingItem = state.items.find(item => item.id === newItemId);
            if(existingItem){
                existingItem.quantity++;
            }else
            {
            state.items.push(action.payload)
        }},
        increaseQuantity:(state,action)=>{
            state.items = state.items.map(item => {
                if (item.id === action.payload) {
                    item.quantity++;
                }
                return item;
            });
        },
        decreaseQuantity(state, action) {
            state.items = state.items.map(item => {
                if (item.id === action.payload) {
                    item.quantity--;
                }
                return item;
            }).filter(item => item.quantity !== 0);
        },

        removeItem(state, action) {
            state.items = state.items.filter(item => item.id !== action.payload);
        },

        clearCart(state, action){
            state.items =[]
        }

        }
    }

)

export const {addItem,increaseQuantity,clearCart,decreaseQuantity,removeItem}=cartSlice.actions
export default cartSlice.reducer