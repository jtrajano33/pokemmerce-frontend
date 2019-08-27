const initState = {
    items: [],
    isLoading: false,
    pokemon: null,
    itemSuccessNotif: null
}

const itemReducer = (state = initState , action) => {
    switch(action.type){
        case "ADD_ITEM":
            return {...state, items:[ action.payload.item, ...state.items ], itemSuccessNotif: action.payload.msg};
        case "DELETE_ITEM":
            return {...state, items: state.items.filter(item => item._id !== action.payload.id), itemSuccessNotif: action.payload.msg };
        case "GET_ITEMS":
            return { ...state, items: action.payload }
        case "GET_ONE_ITEM":
                return { ...state, pokemon: action.payload }
        case "UPDATE_FORM":
                return { ...state, pokemon: {...state.pokemon, item: {...state.pokemon.item, [action.payload.name]:action.payload.value}} }
        case "UPDATE_ITEM":
            const newItems = [...state.items]
            const newItemsUpdated = newItems.filter(item=> item._id !== action.payload.item._id)
            const updatedItemToState = [...newItemsUpdated, action.payload.item]
                return {...state,
                     pokemon:{...state.pokemon, item: action.payload.item},
                    itemSuccessNotif: action.payload.msg,
                    items: updatedItemToState
                    }
        default:
            return state;
    }
}

export default itemReducer;