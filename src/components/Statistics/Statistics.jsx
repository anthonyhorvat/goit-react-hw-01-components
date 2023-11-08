import { Section, Title, StatList, Item, Percentage } from './StatisticsStyled';
import generatePastelColor from './generatePastelColor';

const Statistics = ({ title, stats }) => (
  <Section>
    {title && <Title>{title}</Title>}

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
