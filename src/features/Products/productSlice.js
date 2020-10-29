import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
    name: 'products',
    initialState: [
        {
            id: 1,
            title: 'Iphone 12 Black',
            description: 'More expensive than the iPhone 11, the iPhone 12 makes up for that price hike with a wealth of new features that should prove useful in the coming months and years',
            price: 830,
            inventory: 2,
            imageURL: 'https://cellphones.com.vn/sforum/wp-content/uploads/2020/08/Apple-iPhone-12-Pro-Navy-Blue-Concept.jpg'
        },
        {
            id: 2,
            title: 'Iphone 12 Pro Navy Blue',
            description: "More advanced than the iPhone 12, the iPhone 12 Pro is also more expensive and has better specs than the standard model. The internals are better, and there's a superior camera.",
            price: 999,
            inventory: 1,
            imageURL: 'https://i.ytimg.com/vi/nSwEJrf7pzk/maxresdefault.jpg'
        },
        {
            id: 3,
            title: 'Iphone 11 Red',
            description: "The iPhone 11 isn't the highest-spec Apple phone, but it supersedes the iPhone XR 'budget flagship' in better ways to become the standout phone of its generation in terms of sheer value. ",
            price: 699,
            inventory: 3,
            imageURL: 'https://azcd.harveynorman.com.au/media/catalog/product/2/_/2_3_1_3914_1_1.jpg'
        },
        {
            id: 4,
            title: 'Iphone SE White',
            description: "The new iPhone SE may look like an older iPhone but it comes with a lot of benefits over the rest of the range. The chief reason you may want to buy this is it's the cheapest iPhone you can buy from Apple right now.",
            price: 399,
            inventory: 5,
            imageURL: 'https://f1.media.brightcove.com/8/710857100001/710857100001_6153440518001_6153443570001-vs.jpg?pubId=710857100001&videoId=6153443570001'
        },
        {
            id: 5,
            title: 'Iphone 11 Pro Black',
            description: "The iPhone 11 Pro is a more advanced smartphone than the base iPhone 11, but it isn't the best iPhone just because its price is a big step up too.",
            price: 999,
            inventory: 1,
            imageURL: 'https://9to5mac.com/wp-content/uploads/sites/6/2019/11/iPhone-11-Pro-Review-Feature-Image.jpg?quality=82&strip=all'
        },
    ],
    reducers: {
        addToCart(state, action) {
            const index = state.findIndex(product => (product.id === action.payload));
            state[index].inventory = state[index].inventory - 1;
        },
        sortProduct(state, action) {
            if (action.payload === 1) {
                state.sort((a, b) => {
                    return parseFloat(b.price) - parseFloat(a.price);
                });
            }
            else if (action.payload === 2) {
                state.sort((a, b) => {
                    return parseFloat(a.price) - parseFloat(b.price);
                });
            }
            else {
                state.sort((a, b) => {
                    return parseFloat(b.inventory) - parseFloat(a.inventory);
                });
            }
        }
    }
})

const { actions, reducer } = productSlice;
export const { addToCart, sortProduct } = actions;
export default reducer;