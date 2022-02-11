import React, { Component } from "react";
import Table from "./table";
import Form from "./Form";

class App extends Component {
    state = {
        characters: [],
    };
    removeCharacter = (idx) => {
        const { characters } = this.state;

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== idx;
            }),
        });
    };

    handleSubmit = (character) => {
        this.setState({ characters: [...this.state.characters, character] });
    };

    render() {
        const { characters } = this.state;

        return (
            <div className="container">
                <Table
                    characterData={characters}
                    removeCharacter={this.removeCharacter}
                />
                <Form handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}

export default App;
