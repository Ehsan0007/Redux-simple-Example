import {createStore} from 'redux'

const reducer = (state,action)=>{
    switch(action.type){
        case "Add":
        const newvalue =  action.name;
        console.log("First Name is :" + newvalue);
        break;
        case "Del":
        const newdel = action.name
        console.log("last Name is  :" + newdel);
        break;
        default :return state 
    }
}
// const state =1;
const store = createStore(reducer)

store.dispatch({
    type : 'Add',
    value : 20,
    name : "Ehsan"
})
store.dispatch({
    type : 'Del',
    value : 20,
    name : "Khan"
})
