import {FC} from 'react';
import {IExpensesSummary} from '../../constants/Interface';
import {StyleSheet, Text, View} from 'react-native';
import {GlobalStyles} from '../../constants/Styles';

const ExpensesSummary: FC<IExpensesSummary> = ({expenses, periodname}) => {

  const expensesSum = expenses.reduce((sum: any, expense: any) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.period}> {periodname} </Text>
      <Text style={styles.sum}> ${expensesSum.toFixed(2)} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  },
  period: {
    fontSize: 15,
    color: GlobalStyles.colors.primary400,
  },
  sum: {
    fontSize: 15,
    fontWeight: 'bold',
    color: GlobalStyles.colors.primary500,
  },
});

export default ExpensesSummary;
