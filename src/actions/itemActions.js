import axios from 'axios';

export const getItems = () => dispatch => {
    axios.get("https://pokemmerce-backend.herokuapp.com/items").then(res => {
        dispatch({
            type: "GET_ITEMS",
            payload: res.data.items
        })
    })
    .catch(err => {
        console.log(err.response)
    })
}

export const getOneItem = id => dispatch => {
    axios.get(`https://pokemmerce-backend.herokuapp.com/items/${id}`).then(res => {
        dispatch({
            type: "GET_ONE_ITEM",
            payload: res.data
        })
    })
    .catch(err => {
        console.log(err.response)
    })
}

export const deleteItem = id => dispatch => {
    axios.delete(`https://pokemmerce-backend.herokuapp.com/items/${id}`).then(res => {
        dispatch({
            type: "DELETE_ITEM",
            payload: {id, msg: res.data.msg}
        })
    })
    .catch(err => {
        console.log(err.response)
    })
}

export const addItem = payload => dispatch => {

        const { name, price, description, category, selectedFile } = payload

        var data = new FormData()
         data.append('productImage',selectedFile);
         data.append('name', name);
         data.append('price',price);
         data.append('description',description);
         data.append('category',category);

    axios.post('https://pokemmerce-backend.herokuapp.com/items', data).then(res => {
        console.log(res.data)
        dispatch({
            type: "ADD_ITEM",
            payload: res.data
        })
    })
    .catch(err => {
        console.log(err.response)
    })
}

export const editForm = (name,value) => dispatch => {
    dispatch({
        type: "UPDATE_FORM",
        payload: {name, value}
    })
}

export const updateItem = data => dispatch => {
    if(typeof data.image === "string"){
        axios.put(`https://pokemmerce-backend.herokuapp.com/items/${data._id}`, data).then(res=>{
            dispatch({
                type: "UPDATE_ITEM",
                payload: res.data
            })
        }).catch(err => {
            console.log(err.response)
        })
    }

    else{
        var dataUpload = new FormData()
        dataUpload.append('productImage',data.image);
        dataUpload.append('name', data.name);
        dataUpload.append('price',data.price);
        dataUpload.append('description',data.description);
        dataUpload.append('category',data.category);

        axios.put(`https://pokemmerce-backend.herokuapp.com/items/${data._id}`, dataUpload).then(res=>{
            dispatch({
                type: "UPDATE_ITEM",
                payload: res.data
            })
        }).catch(err => {
            console.log(err.response)
        })

    }
}