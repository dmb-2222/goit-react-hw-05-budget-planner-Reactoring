import { connect } from "react-redux";
import * as actions from "../../redux/action";
import ExpenseForm from "../ExpenseForm";

const mapStateToProps = state => ({
  budget: state.budget,
  expenses: state.expenseList,
  balance:state.balance
});
const mapDispatchToProps = dispatch => ({
  onExpense: value => dispatch(actions.addExpense(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
