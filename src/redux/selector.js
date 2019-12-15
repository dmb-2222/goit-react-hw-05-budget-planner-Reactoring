import { createSelector } from "reselect";
export const getBudget = state => state.budget;
export const getExpenseList = state => state.expenseList;
// Занятие 15
// Мемомизация для не примитивов, для коллекций, но в корзине (total) можно использовать!
export const calculateTotalExpenses = createSelector(
  [getExpenseList],
  expenses => expenses.reduce((total, expense) => total + expense.amount, 0)
);
export const calculateBalance = createSelector(
  [getBudget, calculateTotalExpenses],
  (budget, expenses) => {
    return (budget - expenses)
  }
);
// export const calculateTotalExpenses = state => {
//   const expenses = getExpenseList(state);
//   return expenses.reduce((total, expense) => total + expense.amount, 0);
// };
// export const calculateBalance = state => {
//   const budget = getBudget(state);
//   const expenses = calculateTotalExpenses(state);
//   return budget - expenses;
// };
