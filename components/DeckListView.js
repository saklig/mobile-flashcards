import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import Deck from './Deck';

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
                    <Deck key={deck} {...decks[deck]} />
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