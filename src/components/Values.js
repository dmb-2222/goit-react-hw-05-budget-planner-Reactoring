import React from "react";
import styled from "styled-components";
import Value from "./Value";
import { connect } from "react-redux";
// import { calculateTotalExpenses } from "./helpers/calculate";
import { calculateBalance, calculateTotalExpenses } from "./../redux/selector";
const Container = styled.section`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
`;

const Values = ({ budget, balance, totalExpenses }) => {
  // const totalExpenses = calculateTotalExpenses(expenses);
  // const balance = calculateBalance(budget, totalExpenses);

  return (
    <Container>
      <Value label="Budget" value={budget} isPositive />
      <Value label="Expenses" value={totalExpenses} />
      <Value label="Balance" value={balance} isPositive={balance >= 0} />
    </Container>
  );
};

const mapStateToProps = state => ({
  budget: state.budget,
  balance: calculateBalance(state), 
  totalExpenses: calculateTotalExpenses(state)
});

export default connect(mapStateToProps)(Values);
