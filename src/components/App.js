import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import BudgetForm from "./containers/BudgetFormContainer";
import ExpenseForm from "./containers/ExpenseFormContainer";
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

const App = ({ expenses }) => (
  <Container>
    <BudgetForm />
    <Values />
    <ExpenseForm />
    {expenses.length > 0 && <ExpensesTable />}
  </Container>
);

const mapStateToProps = state => ({
  expenses: state.expenseList
});
export default connect(mapStateToProps)(App);
