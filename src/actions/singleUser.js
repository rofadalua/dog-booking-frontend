export function singleUser(userId) {
    return(dispatch) => {
        dispatch({type: 'LOADING'})
        fetch(`http://localhost:3000/api/b1/users/${userId}`)
        .then(res => res.json())
        .then(users => dispatch({
            type: 'SINGLE_USER',
            payload: users
        }))
 }
}
