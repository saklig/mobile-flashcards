import { StyleSheet } from 'react-native';

export const palette = {
    white: '#ffffff',
    black: '#000000',
    green: '#008000',
    red: '#b71845',
    gray: '#808080',
};

const fonts = {
    small: 10,
    medium: 20,
    large: 40
};

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: palette.white,
        alignItems: 'center',
        justifyContent: 'center',
    },
    deck: {
        marginTop: 10,
        padding: 40,
        borderBottomWidth: 1,
        borderColor: palette.black,
    },
    deckText: {
        fontSize: fonts.medium,
        textAlign: 'center'
    },
    actionContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 40
    },
    baseButton: {
        justifyContent: 'center',
        width: 200, 
        height: 50,
    },
    baseButtonText: {
        textAlign: 'center',
        fontSize: 20,
    },
    baseButtonView: {
        padding: 5
    }
});
