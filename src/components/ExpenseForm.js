import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../redux/action";
import shortid from "short-id";
import Form from "./shared/Form";
import Label from "./shared/Label";
import Input from "./shared/Input";
import Button from "./shared/Button";

const labelStyles = `
  margin-bottom: 16px;  
`;

class ExpenseForm extends Component {
  state = {
    name: "",
    amount: 0
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, amount } = this.state;
    const expense = {
      id: shortid.generate(),
      name,
      amount: Number(amount)
    };
    this.props.onExpense(expense);
    this.setState({ name: "", amount: 0 });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label customStyles={labelStyles}>
          Enter expense name
          <Input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </Label>
        <Label customStyles={labelStyles}>
          Enter expense amount
          <Input
            type="number"
            name="amount"
            value={this.state.amount}
            onChange={this.handleChange}
          />
        </Label>

        <Button label="Add" type="submit" />
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  budget: state.budget,
  expenses: state.expenseList
});
const mapDispatchToProps = dispatch => ({
  onExpense: value => dispatch(actions.addExpense(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
