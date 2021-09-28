const initialState = {
    products: [],
    activeProducts: []
}

export default function reducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'ChangeActive':
            const modified = state.products.filter(item => {
                return item.category === payload
            })
            return {
                products: state.products,
                activeProducts: modified
            }
        case 'Change-Basket-Items':
            const afterAddItem = state.products.map((element) => {
                if (element.inStock > 0 && element.name === payload.name) {
                    element.inStock = element.inStock - 1;
                }
                if (element.inStock === 0) {
                    element.description = 'Out Of Stock'
                }
                return element;
            });
            return {
                products: afterAddItem,
                activeProducts: state.activeProducts
            }
        case 'LOAD_PRODUCTS':
            return {
                products: payload,
                activeProducts: state.activeProducts,
            }
        default:
            return state;
    }

}
