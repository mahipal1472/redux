import { Add_Money,Withdraw_Money } from "../types"
export const addmoney=(state=1)=>{
    // console.log(state);
    return{
    type:Add_Money,
    payload:state
    }
}

export const withdrawmoney=(state)=>{
    return{
    type:Withdraw_Money,
    payload:state
    }
}