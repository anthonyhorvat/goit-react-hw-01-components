import styled from 'styled-components';
 
export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding-top: 50px;
  width: 300px;
  margin: 0 auto;
  margin-top: 50px;
  background-color: #f9f9f9;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
  background-color: #ffc65c;
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin: 10px 0;
`;

export const Tag = styled.p`
  font-size: 18px;
  color: #888;
  margin: 10px 0;
`;

export const Location = styled.p`
  font-size: 16px;
  color: #444;
  margin: 10px 0;
`;

export const StatsList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 0;
  display: flex;
  justify-content: space-between;
  gap: 25px;
  margin-top: 20px;
  background-color: #e8e9f2;
  width: 100%;
  border-top: 1px solid #9ea9b5;
`;

export const StatsItem = styled.li`
  display: flex;
  gap: 5px;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

export const Label = styled.span`
  font-size: 16px;
  font-weight: 700;
`;

export const Quantity = styled.span`
  font-size: 14px;
  color: #555;
`;