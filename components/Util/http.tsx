import {FC} from 'react';
import axios from 'axios';
import {View} from 'react-native';
import {IstoreExpense} from '../../constants/Interface';

const URL = 'https://expenseapp-dffb3-default-rtdb.firebaseio.com';

const storeExpense: FC<IstoreExpense> = async expenseData => {
  const response = await axios.post(URL + '/expenses.json', expenseData);
  const id = response.data.name;
  return id;
};

export async function fetchData() {
  const response = await axios.get(URL + '/expenses.json');
  const expenses = [];
  for (let key in response.data) {
    const expensesObject = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expensesObject);
  }
  return expenses;
}

export function updateDate(id: any, expenseData: object) {
    return axios.put(URL + `/expenses/${id}.json`, expenseData);
}

export function deleteData(id: any) {
    return axios.delete( URL + `/expenses/${id}.json`)
}

export default storeExpense;
