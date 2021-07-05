import { FC, useState } from 'react';
import { Collapse } from 'antd';

// Components
import { PeopleList, PlanetsList } from '../';

// Interfaces
import { IPeopleInfo } from '../../interfaces';

export const App: FC = () => {
  const [peopleInfo, setPeopleInfo] = useState<IPeopleInfo>({
    loading: false,
    error: undefined,
    people: [],
  });

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
