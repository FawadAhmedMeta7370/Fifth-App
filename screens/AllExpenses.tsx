import {FC, useContext} from 'react';
import {IAllExpenses} from '../constants/Interface';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import {ExpensesContext} from '../Store/expenses-context';

const AllExpenses: FC<IAllExpenses> = () => {

  const expensesCtx = useContext(ExpensesContext);

  return (
    <ExpensesOutput
      expenses={expensesCtx.expenses}
      expensesperiod="total"
      fallbacktext="There are no expenses"
    />
  );
};

export default AllExpenses;
