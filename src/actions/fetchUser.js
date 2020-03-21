export function fetchUser() {
    return(dispatch) => {
        fetch('http://localhost:3000/api/b1/users/')
        .then(res => res.json())
        .then(users => dispatch({
            type: 'FETCH_USER',
            payload: users
        }))
 }
}

//dispatching an action object to the reducer 