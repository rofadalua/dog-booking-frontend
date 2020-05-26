//we pass state as first argument, then action object
//we need default returns something back 
//return.action.payload- this is to check the action is working and if reducer can get updated

export default function userReducer(state = {users: [], loading:false}, action ) {
    
    switch(action.type){
        case 'LOADING':
            return{...state, loading:true}
        case 'FETCH_USER':
            return{users: action.payload, loading:false}    // new redux state, 
        case 'ADD_USER':                        
            return {...state, users: [...state.users, action.payload], loading:false}   
        case 'ADD_BOOKING':
            return{...state, users: [...state.users.filter(user => user.id !== action.payload.id), action.payload], loading:false}
        
           
        case "EDIT_USER":
            let edituser = state.users.map(user => {
                if (user.id === action.payload.id) {
                   return action.payload
                } else {
                    return edituser
                }
            })
            return {...state, users: edituser, loading:false}
        default:
            return state  
    }
}


