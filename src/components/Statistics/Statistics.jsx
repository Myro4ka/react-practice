import { StatisticItem } from 'components';
import { StatisticsList, StatisticTitle } from './Statistics.styled';
import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';

const arrayIcon = [
  <FaRegThumbsUp size={20} />,
  <MdPeople size={20} />,
  <MdOutlineProductionQuantityLimits size={20} />,
  <GiTreeDoor size={20} />,
];

export const Statistics = ({ stats, title }) => {
  return (
    <>
      {title && <StatisticTitle>{title}</StatisticTitle>}
      <StatisticsList>
        {stats.map(({ id, title, total }, index) => (
          <StatisticItem key={id} title={title} total={total}>
            {arrayIcon[index]}
          </StatisticItem>
        ))}
      </StatisticsList>
    </>
  );
};
