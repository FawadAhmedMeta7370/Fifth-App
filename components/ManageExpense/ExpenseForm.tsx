import {FC, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IExpenseForm} from '../../constants/Interface';
import Input from './Input';
import {GlobalStyles} from '../../constants/Styles';
import Button from '../UI/Button';
import getFormattedDate from '../Util/Date';

const ExpoenseForm: FC<IExpenseForm> = ({submitButtonLabel, onSubmit, onCancel, defaultValues }) => {
  
  const [amount, setAmount] = useState({
    value: defaultValues ? defaultValues.amount.toString() : '',
    isValid: true,
  });
  const [date, setDate] = useState({
    value: defaultValues ? getFormattedDate(defaultValues.date) : '',
    isValid: true,
  });
  const [description, setDescription] = useState({
    value: defaultValues ? defaultValues.description : '',
    isValid: true,
  });

  function amountChangeHandler(enteredamount) {
    setAmount({value:enteredamount,isValid:true});
  }
  function dateChangeHandler(entereddate) {
    setDate( {value:entereddate,isValid:true});
  }
  function descriptionChangeHandler(entereddescription) {
    setDescription({value:entereddescription,isValid:true});
  }

  function submitHandler() {
    const expenseData = {
      amount: +amount.value,
      date: new Date(date.value),
      description: description.value,
    };

    const amountCheck = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateCheck = expenseData.date.toString() !== 'Invalid Date';
    const descriptionCheck = expenseData.description?.trim().length > 0;

    if (!amountCheck || !dateCheck || !descriptionCheck) {
      setDescription(currVal => ({
        value: currVal.value,
        isValid: amountCheck, 
      })),
        setDate(currVal => ({
          value: currVal.value,
          isValid: dateCheck,
        }));
      setAmount(currVal => ({
        value: currVal.value,
        isValid: descriptionCheck,
      }));
      return;
    }
    onSubmit(expenseData);
  }

  const formIsInValid = !amount.isValid || !description.isValid || !date.isValid;

  return (
    <View>
      <Text
        style={{
          color: GlobalStyles.colors.primary100,
          fontWeight: 'bold',
          fontSize: 20,
          //   textDecorationLine: 'underline',
          margin: 10,
          marginBottom: 15,
        }}>
        You Expense
      </Text>
      <View style={{marginTop: 1, flexDirection: 'column-reverse'}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Input
            style={{flex: 1}}
            label="Date"
            isvalid={!date.isValid}
            textinputconfig={{
              placeholder: 'YYYY-MM-DD',
              minLength: 10,
              maxLength: 10,
              keyboardType: 'decimal-pad',
              onChangeText: dateChangeHandler,
              value: date.value,
            }}
          />
          <Input
            style={{flex: 1}}
            label="Amount"
            isvalid={!amount.isValid}
            textinputconfig={{
              placeholder: 'Enter Amount',
              keyboardType: 'number-pad',
              onChangeText: amountChangeHandler,
              value: amount.value,
            }}
          />
        </View>
        <Input
          label="Description"
          isvalid={!description.isValid}
          textinputconfig={{
            placeholder: 'Enter Description',
            multiline: true,
            onChangeText: descriptionChangeHandler,
            value: description.value,
          }}
        />
      </View>
      <View style={styles.errorstyle}>
        {formIsInValid && <Text style={styles.errortext}>Invalid Input!</Text>}
      </View>
      <View style={styles.buttoncontainer}>
        <Button style={styles.button} mode="flat" onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          {submitButtonLabel}
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttoncontainer: {
    marginTop: '10%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    marginHorizontal: 10,
  },
  errorstyle: {
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 25,
  },
  errortext: {
    color: GlobalStyles.colors.error500,
    fontSize: 25,
    fontWeight: 'bold',
  }
});

export default ExpoenseForm;
