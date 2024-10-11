import { FC } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { ILoading } from "../../constants/Interface";
import { GlobalStyles } from "../../constants/Styles";

const Loading : FC <ILoading> = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator color={GlobalStyles.colors.primary800} size="large"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 25,
        margin: 25,
        backgroundColor: 'white'
    }
})

export default Loading