import styled from 'styled-components';

const Statistics = ({ title, stats }) => (
  <Section>
    <Title>{title}</Title>

    <StatList>
      {stats.map(stat => (
        <Item key={stat.id} className="item">
          <span className="label">{stat.label}</span>
          <span className="percentage">{stat.percentage}%</span>
        </Item>
      ))}
    </StatList>
  </Section>
);

export default Statistics;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
`;
const Title = styled.h2``;
const StatList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  gap: 10px;
`;
const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
