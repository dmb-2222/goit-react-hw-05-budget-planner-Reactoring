import { connect } from "react-redux";
import * as actions from "../../redux/action";
import ExpensesTable from '../ExpensesTable'

const mapStateToProps = state => ({
    items:state.expenseList
  });
  const mapDispatchToProps = dispatch => ({
    onRemove:value => dispatch(actions.removeExpense(value)),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);