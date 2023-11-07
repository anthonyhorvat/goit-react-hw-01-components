import React from 'react';
import styled from 'styled-components';

const Profile = ({ username, tag, location, avatar, stats }) => (
  <ProfileContainer>
    <DescriptionContainer>
      <Avatar src={avatar} alt="User avatar" />
      <Name>{username}</Name>
      <Tag>@{tag}</Tag>
      <Location>{location}</Location>
    </DescriptionContainer>
    <StatsList>
      <StatsItem>
        <Label>Followers:</Label>
        <Quantity>{stats.followers}</Quantity>
      </StatsItem>
      <StatsItem>
        <Label>Views:</Label>
        <Quantity>{stats.views}</Quantity>
      </StatsItem>
      <StatsItem>
        <Label>Likes:</Label>
        <Quantity>{stats.likes}</Quantity>
      </StatsItem>
    </StatsList>
  </ProfileContainer>
);

export default Profile;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  width: 300px;
  margin: 0 auto;
  background-color: #f9f9f9;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-right: 20px;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
`;

const Name = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin: 10px 0;
`;

const Tag = styled.p`
  font-size: 18px;
  color: #888;
  margin: 10px 0;
`;

const Location = styled.p`
  font-size: 16px;
  color: #444;
  margin: 10px 0;
`;

const StatsList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: space-between;
  gap: 25px;
  margin-top: 20px;
`;

const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.span`
  font-size: 16px;
`;

const Quantity = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #555;
`;

// const Profile = ({ username, tag, location, avatar, stats }) => (
//   <div className="profile">
//     <div className="description">
//       <img src={avatar} alt="User avatar" className="avatar" />
//       <p className="name">{username}</p>
//       <p className="tag">{tag}</p>
//       <p className="location">{location}</p>
//     </div>

//     <ul className="stats">
//       <li>
//         <span className="label">Followers:</span>
//         <span className="quantity">{stats.likes}</span>
//       </li>
//       <li>
//         <span className="label">Views:</span>
//         <span className="quantity">{stats.views}</span>
//       </li>
//       <li>
//         <span className="label">Likes:</span>
//         <span className="quantity">{stats.likes}</span>
//       </li>
//     </ul>
//   </div>
// );

// export default Profile;
