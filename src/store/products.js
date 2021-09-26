// any data type
let initialState = {
    products : [
        {name: 'Apple iPad 10.2" 64GB with Wi-Fi (9th Generation) - Silver', description: 'The Apple iPad combines a beautiful 10.2-inch Retina display and tremendous capability with unmatched versatility and ease of use.', category: 'Electronics', image: 'https://cdn.pocket-lint.com/r/s/1200x/assets/images/149321-tablets-review-review-apple-ipad-102-inch-initial-review-tried-and-trusted-goes-bigger-image1-npbhfzogfj.jpg'},
        {name: 'Toshiba 32" 720p HD LED Smart TV (32LF221C21) - Fire TV Edition', description: 'Perfect for small rooms, guest bedrooms, and dorms, this Toshiba 32" HD LED smart TV is sure to keep you entertained. ', category: 'Electronics', image:'https://i.ebayimg.com/images/g/IDEAAOSwAp1f5ikM/s-l300.jpg'},
        {name: 'The Boss Burger', description: 'The burger all other burgers report to. Smoked brisket, tender rib meat, jalapeno-cheddar smoked sausage, bacon & cheddar with lettuce, tomato, House BBQ & house-made ranch. We. Dare. You.', category:'Food', image:'https://i.ytimg.com/vi/meTCHVJoDoo/maxresdefault.jpg'},
        {name: 'Mushroom Swiss Burger', description: 'There’s so mush-room in our hearts for this one. Topped with sauteed onions, mushrooms, Swiss, lettuce, tomato & garlic aioli.', category:'Food', image:'https://www.simplyrecipes.com/thmb/6-QDzPL3UoZIUJO6ueaW7ncnB4Q=/3900x2600/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Mushroom-Swiss-Burger-LEAD-10-e86ce22657bb4a11b5d4b3f4d1230fe3.jpg'},
        {name: 'Queso Burger*', description: 'Say “cheese!” This half-pound patty comes smothered in white queso, crunchy tortilla strips & pico.', category:'Food', image:'https://therecipecritic.com/wp-content/uploads/2016/07/quesoburgerfinal2.jpg'}
    ],
    activeProducts: [{name: 'Apple iPad 10.2" 64GB with Wi-Fi (9th Generation) - Silver', description: 'The Apple iPad combines a beautiful 10.2-inch Retina display and tremendous capability with unmatched versatility and ease of use.', category: 'Electronics', image: 'https://cdn.pocket-lint.com/r/s/1200x/assets/images/149321-tablets-review-review-apple-ipad-102-inch-initial-review-tried-and-trusted-goes-bigger-image1-npbhfzogfj.jpg'},
    {name: 'Toshiba 32" 720p HD LED Smart TV (32LF221C21) - Fire TV Edition', description: 'Perfect for small rooms, guest bedrooms, and dorms, this Toshiba 32" HD LED smart TV is sure to keep you entertained. ', category: 'Electronics', image:'https://i.ebayimg.com/images/g/IDEAAOSwAp1f5ikM/s-l300.jpg'}],
    storeTitle : "Yazan's Store"
}
// reducers
export default function reducer(state = initialState, action) {
    let {type, payload} = action;
    console.log(action);
    switch(type) {
        case 'CHANGE_ACTIVE':
          
            const modified = state.products.filter(item => {
                return item.category === payload
            })
                return {
                    products: state.products,
                    activeProducts: modified
                }
          
            // shredder ...
            // let candidates = state.candidates.map(candidate=> candidate.name == payload ? {...candidate, votes: candidate.votes+1}: candidate)
        default:
            return state;
    }
}
//actions
export const getItems = (name) => {
    return {
        type: 'CHANGE_ACTIVE',
        payload: name
    }
}