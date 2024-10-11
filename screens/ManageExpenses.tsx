import {FC, useContext, useLayoutEffect, useState} from 'react';
import {IManageExpenses} from '../constants/Interface';
import {StyleSheet, View} from 'react-native';
import IconButton from '../components/UI/IconButton';
import {GlobalStyles} from '../constants/Styles';
import {ExpensesContext} from '../Store/expenses-context';
import ExpoenseForm from '../components/ManageExpense/ExpenseForm';
import storeExpense, {deleteData, updateDate} from '../components/Util/http';
import Loading from '../components/UI/LoadingOverlay';
import ErrorOverlay from '../components/UI/ErrorOverlay';

const ManageExpenses: FC<IManageExpenses> = ({route, navigation}) => {
  const [issubmitting, setissubmitting] = useState(false);
  const [error, seterror] = useState<any>();

  const expensesCtx = useContext(ExpensesContext);

  const editedExpenseId = route.params?.expenseId;

  const isEditting = !!editedExpenseId;

  const selectedExpense = expensesCtx.expenses.find(
    (expense: any) => expense.id === editedExpenseId,
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditting ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isEditting]);

  function cancelHandler() {
    navigation.goBack();
  }

  async function deleteExpenseHandler() {
    setissubmitting(true);
    try {
      expensesCtx.deleteExpense(editedExpenseId);
      await deleteData(editedExpenseId);
      navigation.goBack();
    } catch (error) {
      seterror('Could not delete expense!');
      setissubmitting(false);
    }
  }

  async function confirmHandler(expenseData: object) {
    setissubmitting(true);
    try {
      if (isEditting) {
        expensesCtx.updateExpense(editedExpenseId, expenseData);
        await updateDate(editedExpenseId, expenseData);
      } else {
        const id = await storeExpense(expenseData);
        expensesCtx.addExpense({...expenseData, id});
      }
      navigation.goBack();
    } catch (error) {
      seterror('Could not save expense!');
      setissubmitting(false);
    }
  }

  if (error && !issubmitting) {
    return <ErrorOverlay message={error} />;
  }

  if (issubmitting) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <ExpoenseForm
        submitButtonLabel={isEditting ? 'Update' : 'Add'}
        onCancel={cancelHandler}
        onSubmit={confirmHandler}
        defaultValues={selectedExpense}
      />

      {isEditting && (
        <View style={styles.deletecontainer}>
          <IconButton
            size={35}
            name="trash"
            color={GlobalStyles.colors.error500}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: GlobalStyles.colors.primary500,
  },
  deletecontainer: {
    margin: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 3,
    borderTopColor: GlobalStyles.colors.primary200,
  },
});

export default ManageExpenses;
