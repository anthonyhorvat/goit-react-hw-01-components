import FriendListItem from './FriendListItem';
import { FriendsListElement } from './FriendListStyled';
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
