import { FC, useState } from 'react';
import { Collapse } from 'antd';
import { Redirect } from 'react-router-dom';

// Components
import { PeopleList, PlanetsList } from '../';

// Interfaces
import { IPeopleInfo } from '../../interfaces';

interface IProps {
  isAuthorized: boolean;
}

export const MainPage: FC<IProps> = ({ isAuthorized }) => {
  const [peopleInfo, setPeopleInfo] = useState<IPeopleInfo>({
    loading: false,
    error: undefined,
    people: [],
  });

  if (!isAuthorized) {
    return <Redirect to={`${process.env.PUBLIC_URL}/login`} />;
  }

  return (
    <Collapse defaultActiveKey={['1']}>
      <Collapse.Panel
        header="Planets"
        key="1"
      >
        <PlanetsList />
      </Collapse.Panel>
      <Collapse.Panel
        header="People"
        key="2"
      >
        <PeopleList
          peopleInfo={peopleInfo}
          setPeopleInfo={setPeopleInfo}
        />
      </Collapse.Panel>
    </Collapse>
  );
}
