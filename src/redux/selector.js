export const getBudget = state => state.budget;
export const getExpenseList = state => state.expenseList;

export const calculateBalance = state => {
  const budget = getBudget(state);
  const expenses = calculateTotalExpenses(state);
  return budget - expenses;
};
export const calculateTotalExpenses = state => {
  const expenses = getExpenseList(state);
  return expenses.reduce((total, expense) => total + expense.amount, 0);
};
