import React, { Component, createRef } from "react";
import { toast } from "react-toastify";
import Form from "./shared/Form";
import Label from "./shared/Label";
import Input from "./shared/Input";
import Button from "./shared/Button";

// const myRef = createRef()

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
    
        // const getRef = this.ref.current
        // console.log(myRef.current)
    if (this.state.budget > 0) {
      this.props.onSave(Number(this.state.budget));
      this.setState({ budget: "" });
      return;
    }
    this.unCorrectInput();
  };

  render() {
    return (
      <>
            
        <Form  onSubmit={this.handleSubmit}>
          <Label customStyles={labelStyles}>
            Enter your total budget
            <Input
              type="number"
              // ref={myRef}
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
