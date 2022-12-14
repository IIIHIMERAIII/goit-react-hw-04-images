import React from "react";
import { FormBar, SearchForm, FormBtn, Input } from "./styled";

export class SearchBar extends React.Component {
    state = {
        searchQ: "",
    };

    onChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };


    onSubmit = e => {
        e.preventDefault()
        if (!this.state.searchQ.length) return;
        this.props.onFind(this.state.searchQ);
    };

    render() {
        return (
            <FormBar>
                <SearchForm onSubmit={this.onSubmit}>
                    <FormBtn type="submit" />
                    <Input
                        type="text"
                        name="searchQ"
                        placeholder="Search images by tag"
                        value={this.state.searchQ}
                        onChange={this.onChange}
                    />
                </SearchForm>
            </FormBar>
        )
    }
}

