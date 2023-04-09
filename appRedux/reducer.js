const initialState = {
}

export default function appReducer(state = initialState, action){
    switch (action.types){
        case "Test":{
            return state
        }
        default: return state
    }

} 