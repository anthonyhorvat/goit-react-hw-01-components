import styled from 'styled-components';


export const FriendsListElement = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 300px;
  margin: 0 auto;
  margin-top: 50px;
`;

export const FriendContainer = styled.div`
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

export const Avatar = styled.img`
  object-fit: cover;
  margin-right: 15px;
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

export const Status = styled.span`
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
