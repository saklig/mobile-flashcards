import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';

class DeckListView extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        const { decks } = this.props;
        return (
            <ScrollView>
                {Object.keys(decks).map((deck) => (
                    <View key={deck}>
                        <Text>
                            {deck}
                        </Text>
                    </View>
                ))}
            </ScrollView>
        );
    }
}

const mapStateToProps = ({ decks }) => ({
    decks
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DeckListView);