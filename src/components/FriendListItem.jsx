import styled from 'styled-components';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <FriendContainer className={isOnline ? 'online' : 'offline'}>
    <Status className={isOnline ? 'online' : 'offline'} />
    <Avatar src={avatar} alt={`${name}'s avatar`} width="48" />
    <Name>{name}</Name>
  </FriendContainer>
);

export default FriendListItem;

const FriendContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);

  &.online {
    background-color: #e6ffec;
  }

  &.offline {
    background-color: #fff;
  }
`;

const Avatar = styled.img`
  object-fit: cover;
  margin-right: 15px;
`;

const Name = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

const Status = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 10px;

  &.online {
    background-color: green;
  }

  &.offline {
    background-color: grey;
  }
`;
