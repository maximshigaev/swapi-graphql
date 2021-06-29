import { FC, useState } from 'react';
import { useQuery, useLazyQuery } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';
import { Empty, Button } from 'antd';

// Components
import { Loader, Person } from '../';

// Styles
import styles from './peopleList.module.scss';

// Interfaces
import { IPerson } from '../../interfaces';

// Queries
const queryPeople = loader('../../gql/people/queryPeople.gql');

export const PeopleList: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { loading, error, data } = useQuery(queryPeople, {
    variables: {
      pageNumber: 1,
    },
  });

  const [getPeople, { loading: refetching, error: refetchError, data: refetchedData }] = useLazyQuery(queryPeople, {
    variables: {
      pageNumber: currentPage,
    },
  });

  const handlePrevPageBtnClick = () => {
    setCurrentPage(currentPage - 1);
    getPeople();
  }

  const handleNextPageBtnClick = () => {
    setCurrentPage(currentPage + 1);
    getPeople();
  }

  if (refetching || loading) {
    return (
      <div className={styles['people-list']}>
        <Loader>
          Loading the people data
        </Loader>
      </div>
    );
  }

  if (refetchError || error) {
    return (
      <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}>
        Data is unavailable
      </Empty>
    );
  }

  return (
    <div className={styles['people-list']}>
      <p className={styles['people-list-title']}>Page {currentPage}</p>
      {(refetchedData || data).people.map((person: IPerson) => <Person person={person} />)}
      <Button
        disabled={currentPage === 1}
        onClick={handlePrevPageBtnClick}
      >
        Previous page
      </Button>
      <Button
        disabled={(refetchedData || data).people.length < 10}
        onClick={handleNextPageBtnClick}
      >
        Next page
      </Button>
    </div>
  );
}
