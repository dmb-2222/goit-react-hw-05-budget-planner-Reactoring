import * as actions from "../../redux/action";
import { connect } from "react-redux";
import * as selector from '../../redux/selector'
import BudgetForm from "../BudgetForm";

const mapStateToProps = state => ({
  budget: selector.getBudget(state),
  expenseList: selector.getExpenseList(state)
});
const mapDispatchToProps = dispatch => ({
  onSave: value => dispatch(actions.addBudget(value))
});
export default connect(mapStateToProps, mapDispatchToProps)(BudgetForm);
