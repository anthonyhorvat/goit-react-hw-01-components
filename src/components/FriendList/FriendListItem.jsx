import { FriendContainer, Status, Avatar, Name } from './FriendListStyled';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <FriendContainer className={isOnline ? 'online' : 'offline'}>
    <Status className={isOnline ? 'online' : 'offline'} />
    <Avatar src={avatar} alt={`${name}'s avatar`} width="48" />
    <Name>{name}</Name>
  </FriendContainer>
);

export default FriendListItem;
