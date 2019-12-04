import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
// import * as actions from "../redux/action";
import shortid from "short-id";
import BudgetForm from "./BudgetForm";
import ExpenseForm from "./ExpenseForm";
import ExpensesTable from "./ExpensesTable";
import Values from "./Values";

const Container = styled.div`
  display: grid;
  grid-template-columns: 340px 1fr;
  align-items: flex-start;
  grid-gap: 24px;
  max-width: 960px;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
`;

const calculateTotalExpenses = expenses => {
  return expenses.reduce((total, expense) => total + expense.amount, 0);
};

const calculateBalance = (budget, expenses) => budget - expenses;

class App extends Component {
  state = {
    expenses: []
  };

  addExpense = ({ name, amount }) => {
    const expense = {
      id: shortid.generate(),
      name,
      amount: Number(amount)
    };

    this.setState(state => ({
      expenses: [expense, ...state.expenses]
    }));
  };

  removeExpense = id => {
    this.setState(state => ({
      expenses: state.expenses.filter(expense => expense.id !== id)
    }));
  };

  render() {
    console.log("this.props.budget", this.props.budget)
    const { expenses } = this.state;
    const { budget } = this.props;

    const totalExpenses = calculateTotalExpenses(expenses);
    const balance = calculateBalance(budget, totalExpenses);

    return (
      <Container>
        <BudgetForm />
        <Values expenses={totalExpenses} balance={balance} />
        <ExpenseForm onSave={this.addExpense} />
        {expenses.length > 0 && (
          <ExpensesTable items={expenses} onRemove={this.removeExpense} />
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  budget: state.budget,
  // expenses: []
});
// const mapDispatchToProps = dispach => ({
//   saveBudget: () => dispach(actions.saveBudget(10))
// });
export default connect(mapStateToProps)(App);
