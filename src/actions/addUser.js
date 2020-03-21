export const addUser = (data) => {
    return(dispatch) => {
        fetch('http://localhost:3000/api/b1/users/',{
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(user => dispatch({type: 'ADD_USER', payload: user}))  //action type i will define in my reducer, and payload to update store 
    }
}