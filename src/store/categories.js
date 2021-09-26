// any data type
let initialState = {
    categories : [
        {name: 'Electronics', description: 'All types of electronics that you ever wanted.'},
        {name: 'Food', description: 'Best foods on the Menu!'}
    ],
    activeCategory: {},
}
// reducers
export default (state = initialState, action) => {
    let {type, payload} = action;
    console.log(action);
    switch(type) {
        case 'CHANGE_ACTIVE':
            let modified = {};
            
            state.categories.forEach(item => {
                if (item.name == payload) {
                    modified = item
                }
                return {
                    categories: state.categories,
                    activeCategory: modified
                }
            });
            // shredder ...
            // let candidates = state.candidates.map(candidate=> candidate.name == payload ? {...candidate, votes: candidate.votes+1}: candidate)
        default:
            return state;
    }
}
//actions
export const changeSelected = (name) => {
    return {
        type: 'CHANGE_ACTIVE',
        payload: name
    }
}