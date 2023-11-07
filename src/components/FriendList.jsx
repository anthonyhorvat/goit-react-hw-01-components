import FriendListItem from './FriendListItem';
import styled from 'styled-components';

const FriendList = ({ friends }) => (
  <FriendsListElement>
    {friends.map(friend => (
      <FriendListItem
        key={friend.id}
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
      />
    ))}
  </FriendsListElement>
);

export default FriendList;

const FriendsListElement = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 300px;
  margin: 0 auto;
  margin-top: 50px;
`;
