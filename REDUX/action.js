//add the action which you want to implement
export const ADD_INFO = 'ADD_INFO';
export const DELETE_INFO = 'DELETE_INFO';

// Add info
export const addinfo = (info) => ({
    type: ADD_INFO,
    data: {info}
});


//delete info
export const delinfo = (id) => ({
    type: DELETE_INFO,
    data: {id}
});

