import styled from 'styled-components';

const generatePastelColor = () => {
  const r = Math.floor(Math.random() * 128 + 128); // Червоний (128-255)
  const g = Math.floor(Math.random() * 128 + 128); // Зелений (128-255)
  const b = Math.floor(Math.random() * 128 + 128); // Синій (128-255)
  return `rgb(${r},${g},${b})`;
};

const Statistics = ({ title, stats }) => (
  <Section>
    <Title>{title}</Title>

    <StatList>
      {stats.map(stat => (
        <Item
          key={stat.id}
          className="item"
          style={{ backgroundColor: generatePastelColor() }}
        >
          <span className="label">{stat.label}</span>
          <Percentage className="percentage">{stat.percentage}%</Percentage>
        </Item>
      ))}
    </StatList>
  </Section>
);

export default Statistics;

const Section = styled.section`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
`;
const Title = styled.h2`
  text-transform: uppercase;
  color: #555;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  text-align: center;
`;

const Percentage = styled.span`
  font-size: 26px;
`;

const StatList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  color: white;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;
const Item = styled.li`
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
`;
