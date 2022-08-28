export const Reducer=(state,action)=>{
    switch(action.type){
       case "login" :
        return {...state,isAuth:true};
       case "addCartData" :
        let newaction=action.payload.data
        if(newaction["qty"]===undefined){
            newaction["qty"]=1
        }
        let newData=[...state.cartData,newaction]
        let count=state.cartCount+1
        return {...state,cartData:newData,cartCount:count};
        case "addQty" :
           
       let adata =state.cartData.map((el)=>{
            if(el.id===action.payload){
               return {...el,qty:el.qty+1}
            }
            return el
        })
        return {...state,cartData:adata};
        case "signup" :
            if(action.payload.email!=="" && action.payload.password!==""){
                return {...state,email:action.payload.email,password:action.payload.password,user:action.payload.user};
            }else{
                return state
            }
        default:
        return state;
    }
}