import { FC } from 'react';
import { Collapse } from 'antd';

// Components
import { PeopleList } from '../';

export const App: FC = () => {
  return (
    <Collapse defaultActiveKey={['1']}>
      <Collapse.Panel
        header="People"
        key="1"
      >
        <PeopleList />
      </Collapse.Panel>
    </Collapse>
  );
}
