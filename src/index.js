import React from 'react';
import ReactDOM from 'react-dom/client';
import Profile from './components/Profile';
import Statistics from 'components/Statistics';
import FriendList from 'components/FriendList';
import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FriendList friends={friends} />
    <Statistics title="Upload stats" stats={data} />
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
  </React.StrictMode>
);
