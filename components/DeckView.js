import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/styles';
import { connect } from 'react-redux';
import Button from './Button';

class DeckView extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        const { deck } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.header}>{deck.title}</Text>
                    <Text style={styles.subheader}>{deck.questions.length} cards</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        style={styles.invertedButton} 
                        textStyle={styles.textBlack}
                    > 
                        Add Card
                    </Button>
                    {deck.questions.length > 0 && (
                        <Button
                            style={styles.blackButton} 
                            textStyle={styles.textWhite}
                        > 
                            Start Quiz
                        </Button>
                    )}
                </View>
            </View>
        );
    }
}

const mapStateToProps = ({ decks }, { navigation }) => ({
    deck: decks[navigation.state.params.title]
});

export default connect(
    mapStateToProps,
    null
)(DeckView);