const initialState = {
    categories: [
        { category: 'electronics', name: "ELECTRONICS", description: 'Here you can find a lot of Electronic products' },
        { category: 'mobile', name: "MOBILE PHONES", description: 'Here you can find a lot of MOBILE PHONES' },
        { category: 'food', name: "FOOD", description: 'Here you can find a lot of food' },
    ],
    activeCategory: {},
}

export default function reducer(state = initialState, action) {

    const { payload, type } = action;

    switch (type) {
        case 'ChangeActive':
            let modified = {};

            state.categories.forEach(item => {
                if (item.category === payload) {
                    modified = item;
                }
            });
            return {
                categories: state.categories,
                activeCategory: modified
            };
        default:
            return state;
    }
}