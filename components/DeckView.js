import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/styles';
import { connect } from 'react-redux';

class DeckView extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Open up App.js to start working on your app!</Text>
                <Text>Changes you make will automatically reload.</Text>
                <Text>Shake your phone to open the developer menu.</Text>
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