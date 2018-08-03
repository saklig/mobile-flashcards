import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, KeyboardAvoidingView } from 'react-native';
import Button from './Button';
import { styles } from '../styles/styles';
import { addCard } from '../actions/decks';

class AddCard extends Component {
    state = {
        question: null,
        answer: null,
        error: null,
    };

    submit() {
        const { deck, navigation } = this.props;

        console.log('submit', this.props);

        if ((this.state.question==null) || (this.state.answer==null)) {
            this.setState({ error: 'Please enter both a question and answer.' });
        } else {
            const card = {
                question: this.state.question,
                answer: this.state.answer,
                error: null,
            };
            this.props.addCard(deck.title, card);
            navigation.goBack();
        }
    }

    render() {
        return (
            <View style={styles.containerTop}> 
                <KeyboardAvoidingView behavior='padding' style={styles.addCardContainer}>
                    {this.state.error &&
                        <Text style={styles.error}>
                            {this.state.error}
                        </Text>
                    }
                    <TextInput 
                        placeholder='Question'
                        style={styles.input}
                        value={this.state.question} 
                        onChangeText={(question) => this.setState({ question })}
                    />
                    <TextInput 
                        placeholder='Answer'
                        style={styles.input}
                        value={this.state.answer} 
                        onChangeText={(answer) => this.setState({ answer })}
                    />
                    <Button
                        onPress={() => this.submit()}
                        style={styles.blackButton}
                        textStyle={styles.textWhite}
                    >
                        Create Card
                    </Button>
                </KeyboardAvoidingView>
            </View>
        );
    }
}

const mapStateToProps = ({ decks }, { navigation }) => ({
    deck: decks[navigation.state.params.title],
    navigation
});

const mapDispatchToProps = (dispatch) => ({
    addCard: (deck, card) => dispatch(addCard(deck, card))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddCard);
