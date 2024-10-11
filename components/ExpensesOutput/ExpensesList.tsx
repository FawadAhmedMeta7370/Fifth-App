import {FC, useContext, useState} from 'react';
import {FlatList} from 'react-native';
import {IExpensesList} from '../../constants/Interface';
import ExpensesItem from './ExpenseItem';
import Input from '../ManageExpense/Input';
import {ExpensesContext} from '../../Store/expenses-context';

function renderExpenseItem(itemData: any) {
  return <ExpensesItem {...itemData.item} />;
}

const ExpensesList: FC<IExpensesList> = ({expenses}) => {

  const expensesCtx = useContext(ExpensesContext);
  const [searcher, setsearch] = useState<any>([])

  function searchHandler(searchname: any) {
    const search : any = expensesCtx.expenses.filter(expensedata => {
      if (search != '') {
        return expensedata.description.includes(searchname);
      }
    });
    console.log(search);
    setsearch(search)
  }

  const searchedItem = searcher.length > 0 ? searcher : expenses


  return (
    <>
      <Input
        textinputconfig={{
          placeholder: 'Search Expense...............',
          onChangeText: searchHandler,
        }}
      />

      <FlatList
        data={searchedItem}
        renderItem={renderExpenseItem}
        keyExtractor={item => item.id}
      />
    </>
  );
};

export default ExpensesList;
