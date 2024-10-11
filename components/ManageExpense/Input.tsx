import {FC} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {IInput} from '../../constants/Interface';
import {GlobalStyles} from '../../constants/Styles';

const Input: FC<IInput> = ({label, isvalid, style, textinputconfig}) => {
  let inputStyles = [styles.input];

  if (textinputconfig && textinputconfig.multiline) {
    inputStyles.push(styles.inputmultiline);
  }

  if (isvalid) {
    inputStyles.push(styles.invalidinputtext);
  }

  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.label, isvalid && styles.invalidtext]}>
        {label}
      </Text>
      <TextInput
        placeholderTextColor={GlobalStyles.colors.primary100}
        style={inputStyles}
        {...textinputconfig}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  label: {
    color: GlobalStyles.colors.primary100,
    fontSize: 20,
    fontWeight: 'bold',
    margin: 5,
    // textDecorationLine: 'underline'
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary400,
    borderRadius: 10,
    borderColor: GlobalStyles.colors.primary800,
    borderWidth: 1,
    fontSize: 17,
    color: GlobalStyles.colors.primary100,
  },
  inputmultiline: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  invalidtext: {
    color: GlobalStyles.colors.error500,
    fontSize: 20,
    fontWeight: 'bold',
  },
  invalidinputtext: {
    color: GlobalStyles.colors.error500,
    backgroundColor: '#ffa1a196'
  }
});

export default Input;
