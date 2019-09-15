import React, { useContext, useState } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

//  Use of context is we don't have to create methods in main app component.
//  To use any many we just have to import context,
//  initialize it and start sing all methods and state properties present in that context.

const Search = props => {
  const githubConetxt = useContext(GithubContext);
  const [text, setText] = useState('');
  const { searchUsers, clearUsers } = githubConetxt;
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  // const onChange = e => {
  //   this.setState({ [e.target.name]: e.target.value }); //onChange for having different inputs
  // };
  const onChange = e => setText(e.target.value);
  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please Enter valid text', 'light');
    } else {
      searchUsers(text);
      setText('');
    }
  };
  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Users...'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {githubConetxt.users.length > 0 ? (
        <button className='btn btn-light btn-block' onClick={clearUsers}>
          Clear
        </button>
      ) : null}
    </div>
  );
};

export default Search;
