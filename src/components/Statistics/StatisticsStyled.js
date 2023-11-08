import styled from 'styled-components';
export const Section = styled.section`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
`;
export const Title = styled.h2`
  text-transform: uppercase;
  color: #555;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  text-align: center;
`;

export const Percentage = styled.span`
  font-size: 26px;
`;

export const StatList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  color: white;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;
export const Item = styled.li`
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
`;
