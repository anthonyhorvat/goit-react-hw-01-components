import styled from 'styled-components';

// const FriendListItem = ({ avatar, name, isOnline }) => (
//   <li className="item">
//     <span className="status"></span>
//     <img className="avatar" src={avatar} alt="User avatar" width="48" />
//     <p className="name">{name}</p>
//   </li>
// );

const FriendListItem = ({ avatar, name, isOnline }) => (
  <FriendContainer isOnline={isOnline}>
    <Status isOnline={isOnline} />
    <Avatar src={avatar} alt={`${name}'s avatar`} />
    <Name>{name}</Name>
  </FriendContainer>
);
export default FriendListItem;

const FriendContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: ${props => (props.isOnline ? '#e6ffec' : '#fff')};
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

const Name = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

const Status = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'green' : 'grey')};
  display: inline-block;
  margin-left: 5px;
`;
