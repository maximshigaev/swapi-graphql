import { FC, useState, useEffect } from 'react';
import { useQuery, useLazyQuery, useSubscription } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';
import { Empty, Button } from 'antd';

// Components
import { Loader, Person, PersonModal } from '../';

// Styles
import styles from './peopleList.module.scss';

// Interfaces
import { IPerson, IPeopleInfo } from '../../interfaces';

// Queries
const queryPeople = loader('../../gql/people/queryPeople.gql');

// Subscriptions
const subscriptionPeopleUpdated = loader('../../gql/people/subscriptionPeopleUpdated.gql');

interface IProps {
  peopleInfo: IPeopleInfo;
  setPeopleInfo: (peopleInfo: IPeopleInfo) => void;
}

let wasPeopleUpdated = false;

export const PeopleList: FC<IProps> = ({ peopleInfo, setPeopleInfo }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { loading, people } = peopleInfo;

  const { loading: initialLoading, error: initialError, data: initialData } = useQuery(queryPeople, {
    variables: {
      pageNumber: 1,
    },
  });

  useEffect(() => {
    setPeopleInfo({
      loading: initialLoading,
      error: initialError,
      people: (initialData && initialData.people) || [],
    });
  }, [initialLoading, initialError, initialData]);

  const {
    loading: peopleUpdating,
    error: peopleUpdateError,
    data: updatedPeople,
  } = useSubscription(subscriptionPeopleUpdated);

  useEffect(() => {
    if (!peopleUpdating) {
      wasPeopleUpdated = true;
    }
  }, [peopleUpdating]);

  useEffect(() => {
    if (wasPeopleUpdated) {
      setPeopleInfo({
        loading: peopleInfo.loading,
        error: peopleUpdateError,
        people: (updatedPeople && updatedPeople.peopleUpdated) || [],
      });
    }
  }, [peopleUpdating, peopleUpdateError, updatedPeople]);

  const [getPeople, { loading: refetching, error: refetchError, data: refetchedData }] = useLazyQuery(queryPeople, {
    variables: {
      pageNumber: currentPage,
    },
  });

  useEffect(() => {
    if (wasPeopleUpdated) {
      setPeopleInfo({
        loading: refetching,
        error: refetchError,
        people: (refetchedData && refetchedData.people) || [],
      });
    }
  }, [refetching, refetchError, refetchedData]);


  const handlePrevPageBtnClick = () => {
    setCurrentPage(currentPage - 1);
    wasPeopleUpdated = true;
    getPeople();
  }

  const handleNextPageBtnClick = () => {
    setCurrentPage(currentPage + 1);
    wasPeopleUpdated = true;
    getPeople();
  }

  const handleAddPersonBtnClick = () => {
    setIsModalVisible(true);
  }

  if (loading) {
    return (
      <div className={styles['people-list']}>
        <Loader>
          Loading the people data...
        </Loader>
      </div>
    );
  }

  if (refetchError || initialError) {
    return (
      <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}>
        Data is unavailable
      </Empty>
    );
  }

  const handleCloseBtnClick = () => {
    setIsModalVisible(false);
  }

  return (
    <div className={styles['people-list']}>
      <div className={styles['button-wrapper']}>
        <Button
          type="primary"
          onClick={handleAddPersonBtnClick}
        >
          Add new person
        </Button>
      </div>
      <p className={styles['people-list-title']}>Page {currentPage}</p>
      {people.map((person: IPerson) => (
        <Person
          key={person.id}
          pageNumber={currentPage}
          person={person}
        />
      ))}
      <Button
        disabled={currentPage === 1}
        onClick={handlePrevPageBtnClick}
      >
        Previous page
      </Button>
      <Button
        disabled={people.length < 10}
        onClick={handleNextPageBtnClick}
      >
        Next page
      </Button>
      {isModalVisible && (
        <PersonModal
          pageNumber={currentPage}
          onCloseBtnClick={handleCloseBtnClick}
        />
      )}
    </div>
  );
}
