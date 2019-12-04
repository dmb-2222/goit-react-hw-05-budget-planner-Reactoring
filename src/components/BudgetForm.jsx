import React, { Component } from "react";
import * as actions from "../redux/action";
import { connect } from "react-redux";
import Form from "./shared/Form";
import Label from "./shared/Label";
import Input from "./shared/Input";
import Button from "./shared/Button";

const labelStyles = `
  margin-bottom: 16px;  
`;
class BudgetForm extends Component {
  state = {
    budget: 0
  };

  handleChange = e => {
    this.setState({
      budget: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSave(+this.state.budget);
    this.setState({ budget: 0 });
  };

  render() {
    console.log("this.props", this.props.budget);
    return (
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
    );
  }
}
const mapStateToProps = state => ({
  budget: state.budget
});
const mapDispatchToProps = dispatch => ({
  onSave: (value) => dispatch(actions.addBudget(value))
});
export default connect(mapStateToProps, mapDispatchToProps)(BudgetForm);
