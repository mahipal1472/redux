import React, { useState } from "react";
import { addmoney ,withdrawmoney} from "../actions/Action"; 
import { connect, useDispatch } from "react-redux";
import { useSelector } from "react-redux";
function Deposit(props) {
    console.log(props.count);
    const [deposit, setdeposit] = useState(0);
    const dispatch=useDispatch();
    const count=useSelector((state)=> state.count)
     console.log(count);
    return (
        <div>
            <button onClick={()=>dispatch (addmoney(deposit))}>deposit</button>
            <input type="text" onChange={(evt)=>{setdeposit(evt.target.value)}}/>
            <button onClick={()=>dispatch (withdrawmoney(deposit))}>withraw</button>
            <h1> current balance {count}</h1>
        </div>

    )


}
export default Deposit;
// const mapStateToProps=state=>{
//     // console.log(state);
//     return{
//         balance:state.addmoney
        
//     }

    
// }
//  const mapDispatchToProps=dispatch=>{
//     return{
//         addmoney:(data)=>{
// console.log(data);
//             dispatch(addmoney(data));

//         }
        
//     }
// } 
// export default connect(mapDispatchToProps)(Deposit)
