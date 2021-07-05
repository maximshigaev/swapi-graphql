import { FC, useState } from 'react';
import { loader } from 'graphql.macro';
import { useQuery, useLazyQuery } from '@apollo/react-hooks';
import { Empty, Button } from 'antd';

// Components
import { Loader, Planet } from '../';

// Styles
import styles from './planetsList.module.scss';

// Interfaces
import { IPlanet } from '../../interfaces';

// Queries
const queryPlanets = loader('../../gql/planets/queryPlanets.gql');

export const PlanetsList: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { loading: initialLoading, error: initialError, data: initialData } = useQuery(queryPlanets, {
    variables: {
      pageNumber: 1,
    },
  });

  const [getPlanets, { loading: refetching, error: refetchError, data: refetchedData }] = useLazyQuery(queryPlanets, {
    variables: {
      pageNumber: currentPage,
    },
  });

  if (refetching || initialLoading) {
    return (
      <div className={styles['planets-list']}>
        <Loader>
          Loading the planets data...
        </Loader>
      </div>
    );
  }

  const handlePrevPageBtnClick = () => {
    setCurrentPage(currentPage - 1);
    getPlanets();
  }

  const handleNextPageBtnClick = () => {
    setCurrentPage(currentPage + 1);
    getPlanets();
  }

  return (
    <div className={styles['planets-list']}>
      <p className={styles['planets-list-title']}>Page {currentPage}</p>
      {!(refetchError || initialError) && (refetchedData || initialData).planets.map((planet: IPlanet) => (
        <Planet
          key={planet.name}
          planet={planet}
        />
      ))}
      {(refetchError || initialError) && (
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}>
          {(refetchError || initialError)?.message}
        </Empty>
      )}
      <Button
        disabled={currentPage === 1}
        onClick={handlePrevPageBtnClick}
      >
        Previous page
      </Button>
      <Button
        disabled={(refetchedData || initialData).planets.length < 10}
        onClick={handleNextPageBtnClick}
      >
        Next page
      </Button>
    </div>
  );
}
