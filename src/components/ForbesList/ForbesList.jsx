import { ForbesListItem } from 'components';
import {
  BoardHeader,
  LeaderBoard,
  BoardTitle,
  TitleTop,
  TitleBottom,
  LeaderBoardProfiles,
} from './ForbesList.styled';

export const ForbesList = ({ list }) => {
  console.log(list);
  return (
    <LeaderBoard>
      <BoardHeader>
        <BoardTitle>
          <TitleTop>Forbes</TitleTop>
          <TitleBottom>Leader board</TitleBottom>
        </BoardTitle>
      </BoardHeader>

      <LeaderBoardProfiles>
        {list.map(({ id, name, capital, avatar, isIncrease }) => (
          <ForbesListItem
            key={id}
            name={name}
            avatar={avatar}
            capital={capital}
            isIncrease={isIncrease}
          />
        ))}
        {/* <ForbesListItem /> */}
      </LeaderBoardProfiles>
    </LeaderBoard>
  );
};
