import PropTypes from 'prop-types';
import React from 'react';
import { ReactComponent as SearchIcon } from '../icons/search.svg';
import { Header, Form, Btn, Input } from './Searchbar.styled';
import { toast } from 'react-toastify';
class Searchbar extends React.Component {
  state = {
    value: '',
  };

  // == Input change ==
  handleValueChange = event => {
    this.setState({ value: event.currentTarget.value.toLowerCase() });
  };
  // == Form Submit ==
  handleSubmit = event => {
    event.preventDefault();
    if (this.state.value.trim() === '') {
      toast.error('Please write something');
      return;
    }
    this.props.onSubmit(this.state.value);
    this.setState({ value: '' });
  };
  // == Render ==
  render() {
    const { value } = this.state;
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <Btn type="submit">
            <SearchIcon />
          </Btn>
          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={value}
            onChange={this.handleValueChange}
          />
        </Form>
      </Header>
    );
  }
}
export default Searchbar;
Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
