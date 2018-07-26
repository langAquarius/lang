let initState = {
    todos:[],
    filter:'all'
}

function todos(state = [], action) {
    // if(action.type === 'addText'){
    //     //console.log(111)
    //     return [...state, action.data.todos]
    // }else{
    //     return state
    // }
    switch (action.type) {
        case 'addText':
            return [...state, action.data]    
            break; 
        case 'onChecked':
            let newsData = [...state];
            // console.log(newsData)
            // console.log(action)
            return newsData.map((item, index)=>{
                console.log(item)
                if (index === action.k){
                    item.isCompleted = !item.isCompleted
                }
                return item
            })
            break;
        case 'onDelete':
            let newsDel = [...state];
                newsDel.splice(action.k,1)
            return newsDel
            break; 
        default:
            return state
    }
    
}

function filter(state = 'all', action){
    if (action.type === 'onFilter'){
        return action.name
    }else{
        return state
    }
   
}

function reducer(state = initState, action) {
    return {
        todos:todos(state.todos, action),
        filter:filter(state.filter, action)
    }
}
export default reducer