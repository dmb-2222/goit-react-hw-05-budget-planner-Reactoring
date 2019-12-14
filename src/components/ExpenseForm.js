import React, { Component } from "react";
import { toast } from "react-toastify";
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
    amount: "",
    counter: 0
  };
  unCorrectExpenseInput = () =>
    toast("Веддите число больше 0 или ваша трата привешает бюджет", {
      autoClose: 2000
    });
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

    this.setState(prevState => {
      if (this.props.budget >= prevState.counter){
        return {
          counter: (prevState.counter += +this.state.amount),
        };
      }
    });
    const currentState= this.state.counter
    this.setState(prevState => {
      if (this.props.budget >= prevState.counter && expense.amount>0) {
        return this.props.onExpense(expense);
      }
      this.unCorrectExpenseInput();
      return {counter:currentState}
    });
    this.setState({ name: "", amount: ""});
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
export default ExpenseForm;
