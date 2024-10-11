import {FC} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {IButton} from '../../constants/Interface';
import {GlobalStyles} from '../../constants/Styles';

const Button: FC<IButton> = ({children, onPress, mode, style}) => {
  return (
    <View style={style}>
      <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
        <View style={[styles.button, mode === 'flat' && styles.flat]}>
          <Text style={[styles.buttontext, mode === 'flat' && styles.flattext]}> {children} </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 7,
    borderWidth: 2,
    borderColor: GlobalStyles.colors.primary400,
    backgroundColor: GlobalStyles.colors.primary400,
    margin: 5,
    height: 35,
    width: 150
  },
  flat: {
    backgroundColor: 'transparent',
  },
  buttontext: {
    color: GlobalStyles.colors.primary50,
    fontSize: 20,
    textAlign: 'center',
  },
  flattext: {
    color: GlobalStyles.colors.primary200,
  },
  pressed: {
    opacity: 0.5,
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 10,
  },
});

export default Button;
