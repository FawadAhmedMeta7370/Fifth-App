import {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IExpensesOutput} from '../../constants/Interface';
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';
import {GlobalStyles} from '../../constants/Styles';


const ExpensesOutput: FC<IExpensesOutput> = ({expenses, expensesperiod, fallbacktext}) => {
    
    function JSX() {
        return (
            <View style={{flex: 1, justifyContent: 'center'}}>
                <Text style={styles.text}>{fallbacktext}</Text>
            </View>
        )
    }

    let content = JSX()

    if (expenses.length > 0) {
        content = <ExpensesList expenses={expenses} />
    }

  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodname={expensesperiod} />
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 25,
    paddingBottom: 1,
    backgroundColor: GlobalStyles.colors.primary100,
  },
  text: {
    color: GlobalStyles.colors.primary500,
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: '35%',
    textAlign: 'center',
  }
});

export default ExpensesOutput;
