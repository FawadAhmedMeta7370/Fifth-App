import {createContext, useReducer} from 'react';

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({description, amount, date}: any) => {},
  setExpenses: (expenses: any) => {},
  deleteExpense: (id: any) => {},
  updateExpense: (id: any, {description, amount, date}: any) => {},
});

function ExpensesReducer(state: any[], action: any) {
  switch (action.type) {
    case 'Add':
      return [action.payload, ...state];

    case 'Set':
      const invertedExpenseList : any[] = action.payload.reverse()
      return invertedExpenseList

    case 'Delete':
      return state.filter((expense: any) => expense.id !== action.payload);

    case 'Update':
      const updateableExpenseIndex = state.findIndex(
        (expense: any) => expense.id === action.payload.id,
      );
      const updateableExpense = state[updateableExpenseIndex];
      const updatedItem = {...updateableExpense, ...action.payload.data};
      const updatedExpenses = [...state];
      updatedExpenses[updateableExpenseIndex] = updatedItem;
      return updatedExpenses;

    default:
      return state;
  }
}

function ExpensesContextProvider({children}: any) {
  const [ExpensesState, dispatch] = useReducer(ExpensesReducer, []);

  function addExpense(expenseData: object) {
    dispatch({type: 'Add', payload: expenseData});
  }

  function setExpenses(expenses: object) {
    dispatch({type: 'Set', payload: expenses});
  }

  function deleteExpense(id: any) {
    dispatch({type: 'Delete', payload: id});
  }

  function updateExpense(id: any, expenseData: object) {
    dispatch({type: 'Update', payload: {id: id, data: expenseData}});
  }

  const value: any = {
    expenses: ExpensesState,
    addExpense: addExpense,
    setExpenses: setExpenses,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
