import React from 'react'
import { Paper, TextField } from '@material-ui/core';
class SearchBar extends React.Component {
    state = {
        searchTerm: ''
    }
    handleChange = event => this.setState({ searchTerm: event.target.value });
    handleSubmit = (e) => {
        e.preventDefault();
        const { searchTerm } = this.state;
        const { onFormSubmit } = this.props;
        onFormSubmit(searchTerm);
    }
    render() {
        return (
            <Paper elevation={6} style={{ padding: '25px' }}>
                <form onSubmit={this.handleSubmit}>
                    <TextField label="Search....." fullWidth onChange={this.handleChange}></TextField>
                </form>
            </Paper>
        )
    }
}
export default SearchBar;