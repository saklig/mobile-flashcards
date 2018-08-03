import React, { Component } from 'react';
import { View, KeyboardAvoidingView, Text, TextInput } from 'react-native';
import Button from './Button';
import { styles } from '../styles/styles';
import { addDeck } from '../actions/decks';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

class AddDeck extends Component {
    state = {
        text: null,
        error: null,
    }

    submit = () => {
        const newDeck = this.state.text;

        if (this.state.text == null) {
            this.setState({ error: 'Please input a name for the deck' });
        } else {
            this.props.addDeck(newDeck);
            this.setState({ text: null, error: null });
            this.props.navigate({ routeName: 'DeckView', params: { title: newDeck }});
        }
    }

    render () {
        return (
            <View style={styles.container}> 
                <KeyboardAvoidingView behavior="padding" style={styles.containerTop}>
                    {this.state.error && 
                        <Text style={styles.error}>
                            {this.state.error}
                        </Text>
                    }
                    <Text style={styles.header}>What is the title of your new deck?</Text>
                    <TextInput 
                        placeholder='Deck Title'
                        style={styles.input}
                        maxLength={40}
                        value={this.state.text} 
                        onChangeText={(text) => this.setState({ text })}
                    />
                    <Button
                        onPress={this.submit}
                        style={styles.blackButton}
                        textStyle={styles.textWhite}
                    >
                        Create Deck
                    </Button>
                </KeyboardAvoidingView>
            </View>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    addDeck: (deck, navigation) => dispatch(addDeck(deck, navigation)),
    navigate: (options) => dispatch(NavigationActions.navigate(options))
});

export default connect(
    null,
    mapDispatchToProps
)(AddDeck);
