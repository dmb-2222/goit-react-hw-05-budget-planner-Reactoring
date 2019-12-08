import React, { Component } from "react";
import { toast } from "react-toastify";
import Form from "./shared/Form";
import Label from "./shared/Label";
import Input from "./shared/Input";
import Button from "./shared/Button";

const labelStyles = `
  margin-bottom: 16px;  
`;
class BudgetForm extends Component {
  state = {
    budget: ""
  };
  unCorrectInput = () =>
    toast("Введите корректное число больше нуля", {
      autoClose: 3000
    });

  handleChange = e => {
    this.setState({
      budget: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.budget > 0) {
      this.props.onSave(+this.state.budget);
      this.setState({ budget: "" });
      return;
    }
    this.unCorrectInput();
  };

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Label customStyles={labelStyles}>
            Enter your total budget
            <Input
              type="number"
              value={this.state.budget}
              onChange={this.handleChange}
            />
          </Label>
          <Button label="Save" type="submit" />
        </Form>
      </>
    );
  }
}

export default BudgetForm;