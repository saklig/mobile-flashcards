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
    containerTop: {
        flex: 1,
        backgroundColor: palette.white,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    textContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
    },
    buttonContainer: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 40
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
        paddingBottom: fonts.large
    },
    baseButton: {
        justifyContent: 'center',
        width: 200, 
        height: 50,
    },
    baseButtonText: {
        textAlign: 'center',
        fontSize: fonts.medium,
    },
    blackButton: {
        backgroundColor: palette.black,
        borderColor: palette.black
    },
    textBlack: {
        color: palette.black
    },
    whiteButton: {
        backgroundColor: palette.white,
        borderColor: palette.black,
        borderWidth: 1
    },
    greenButton: {
        backgroundColor: palette.green,
        borderColor: palette.green
    },
    redButton: {
        backgroundColor: palette.red,
        borderColor: palette.red
    },
    textWhite: {
        color: palette.white
    },
    baseButtonView: {
        padding: 5
    },
    input: {
        fontSize: fonts.medium,
        height:40,
        width:300, 
        borderColor: palette.black,
        borderWidth:1, 
        borderRadius: 4, 
        marginTop: 40,
        paddingLeft: 10, 
        paddingRight: 10
    },
    flipCard: {
        width: 300, 
        height: 400,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: palette.white
    },
    flipCardBack: {
        backgroundColor: palette.white,
        position: 'absolute',
        top: 0
    },
    flipCardText: {
        color: palette.red,
        padding: 10
    },
});
