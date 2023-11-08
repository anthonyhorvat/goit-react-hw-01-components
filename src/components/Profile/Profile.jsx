import React from 'react';
import {
  ProfileContainer,
  Avatar,
  DescriptionContainer,
  Name,
  Tag,
  Location,
  StatsList,
  StatsItem,
  Label,
  Quantity,
} from './ProfileStyled';

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
