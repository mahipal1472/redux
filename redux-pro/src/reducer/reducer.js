import { json } from "react-router-dom";
import { Add_Money,Withdraw_Money } from "../types";
const initialstate={
    count:0
};

export  default function DepositReducer(state=initialstate,action){
const data=parseInt(action.payload)
    switch(action.type){
        case Add_Money:
            return {
                ...state,
                count:state.count+data
            }
            case Withdraw_Money:
                if(state.count>0){
                    if(data===true){
                        return{
                            ...state,
                            count:state.count-data 
                    }
                }else{
                    alert("enter amoount")
                }
                }else{
                    alert("empty balance")
                }

            
        // case Withdraw_Money:return state-=state.value;break;
        default:return state;
    }

}