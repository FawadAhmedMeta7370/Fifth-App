import {FC} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {ILoading} from '../../constants/Interface';
import Button from './Button';

const ErrorOverlay: FC<ILoading> = ({message}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> An error occured</Text>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
    margin: 25,
    backgroundColor: 'white',
  },
  text: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    margin: 10,
  },
});

export default ErrorOverlay;
