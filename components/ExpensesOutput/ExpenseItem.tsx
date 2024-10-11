import {FC} from 'react';
import getFormattedDate from '../Util/Date';
import {GlobalStyles} from '../../constants/Styles';
import {useNavigation} from '@react-navigation/native';
import {IExpensesItem} from '../../constants/Interface';
import {Pressable, StyleSheet, Text, View} from 'react-native';

const ExpensesItem: FC<IExpensesItem> = ({id, description, amount, date}) => {
  const navigation: any = useNavigation();

  function expensePressHandler() {
    navigation.navigate('ManageExpenses', {expenseId: id});
  }

  return (
    <Pressable
      onPress={expensePressHandler}
      style={({pressed}) => pressed && styles.pressed}>
      <View style={styles.itemcontainer}>
        <View>
          <Text style={styles.text}> {description} </Text>
          <Text style={styles.text}> {getFormattedDate(date)} </Text>
        </View>
        <View style={styles.amountcontainer}>
          <Text style={styles.amount}> {amount?.toFixed(2)} </Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
  itemcontainer: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: GlobalStyles.colors.primary500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 7,
    borderRadius: 15
  },
  text: {
    color: GlobalStyles.colors.primary50,
  },
  description: {
    fontSize: 15,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  amountcontainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    width: '20%',
  },
  amount: {
    color: GlobalStyles.colors.primary500,
    fontWeight: 'bold',
  },
});

export default ExpensesItem;
