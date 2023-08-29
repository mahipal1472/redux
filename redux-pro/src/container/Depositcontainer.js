import { addmoney } from "../actions/Action";
import Deposit from "../components/Deposit";
import { connect } from "react-redux";
const mapStateToProps=state=>{
    console.log(state);
    return{
        addmoney:state.addmoney
        
    }

    
}
 const mapDispatchToProps=dispatch=>{
    return{
        addmoney:(deposit)=>{
            dispatch(addmoney(deposit))

        }
        
    }
} 
export default connect(mapStateToProps,mapDispatchToProps)(Deposit)
// export default Home;