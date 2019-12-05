import * as actions from "../../redux/action";
import { connect } from "react-redux";
import BudgetForm from "../BudgetForm";

const mapStateToProps = state => ({
  budget: state.budget,
  expenseList: state.expenseList
});
const mapDispatchToProps = dispatch => ({
  onSave: value => dispatch(actions.addBudget(value))
});
export default connect(mapStateToProps, mapDispatchToProps)(BudgetForm);
