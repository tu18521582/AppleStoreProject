import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        setProductChosen(state, action) {
            const listID = state.map(item => item.id);
            if (action.payload) {
                if (listID.find(id => id === action.payload.id)) {
                    const index = state.findIndex(item => item.id === action.payload.id);
                    state[index].count = state[index].count + 1;
                }
                else {
                    var count = 1;
                    state.push({ ...action.payload, count });
                }
            }
        },
        checkOutSuccess(state, action) {
            const lengthArr = state.length;
            state.splice(0, lengthArr);
        }
    }
})

const { actions, reducer } = cartSlice;
export const { setProductChosen, checkOutSuccess } = actions;
export default reducer;