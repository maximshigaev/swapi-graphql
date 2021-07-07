import { FC, useState } from 'react';
import { Collapse } from 'antd';
import { Redirect, Link } from 'react-router-dom';

// Components
import { PeopleList, PlanetsList } from '../';

// Styles
import styles from './mainPage.module.scss';

// Interfaces
import { IPeopleInfo, IUser } from '../../interfaces';

interface IProps {
  authorizedUser: IUser | null;
  onLogout: (authorizedUser: null) => void;
}

export const MainPage: FC<IProps> = ({ authorizedUser, onLogout }) => {
  const [peopleInfo, setPeopleInfo] = useState<IPeopleInfo>({
    loading: false,
    error: undefined,
    people: [],
  });

  if (!authorizedUser) {
    return <Redirect to={`${process.env.PUBLIC_URL}/login`} />;
  }

  return (
    <>
      <div className={styles.header}>
        <div>{authorizedUser.email}</div>
        <Link
          className={styles['logout-btn']}
          onClick={() => onLogout(null)}
          to={`${process.env.PUBLIC_URL}/login`}
        >
          Logout
        </Link>
      </div>
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
    </>
  );
}
