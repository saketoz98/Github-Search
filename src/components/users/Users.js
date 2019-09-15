import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layouts/Spinner';
import GithubContext from '../../context/github/githubContext';

const Users = props => {
  const githubContext = useContext(GithubContext);

  if (githubContext.loading) {
    return <Spinner />;
  } else {
    return (
      <div style={UserStyle}>
        {githubContext.users.map(user => {
          return <UserItem key={user.id} />;
        })}
      </div>
    );
  }
};

const UserStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '1rem'
};
export default Users;
