import { FC, useState } from 'react';
import { DeleteFilled, EditFilled } from '@ant-design/icons';
import { loader } from 'graphql.macro';
import { useMutation } from '@apollo/react-hooks';
import { Empty } from 'antd';

// Components
import { Loader, PersonModal } from '../';

// Styles
import styles from './person.module.scss';

// Interfaces
import { IPerson } from '../../interfaces';

// Client
import { client } from '../../init/client';

// Mutations
const mutationRemovePerson = loader('../../gql/people/mutationRemovePerson.gql');

interface IProps {
  person: IPerson;
  pageNumber: number;
}

export const Person: FC<IProps> = ({ person, pageNumber }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [
    removePerson,
    {
      loading: isPersonRemoving,
      error: removePersonError,
    },
  ] = useMutation(mutationRemovePerson);

  const { name, gender, birthYear, eyeColor, hairColor, height, skinColor, id } = person;
  const handleRemovePersonBtnClick = (id: number) => {
    removePerson({
      variables: {
        id,
        pageNumber,
      }
    });

    client.clearStore();
  }

  const handleUpdatePersonBtnClick = (id: number) => {
    setIsModalVisible(true);
  }

  const handleCloseBtnClick = () => {
    setIsModalVisible(false);
  }

  if (isPersonRemoving) {
    return (
      <Loader>
        Removing the person...
      </Loader>
    );
  }

  if (removePersonError) {
    return (
      <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}>
        There was an error during the person removing
      </Empty>
    );
  }

  return (
    <div className={styles.person}>
      <p>Name: {name}</p>
      <p>Gender: {gender}</p>
      <p>Birth year: {birthYear}</p>
      <p>Eye color: {eyeColor}</p>
      <p>Hair color: {hairColor}</p>
      <p>Height: {height}</p>
      <p>Skin color: {skinColor}</p>
      <DeleteFilled
        className={styles['person-delete-btn']}
        onClick={() => handleRemovePersonBtnClick(id)}
      />
      <EditFilled
        className={styles['person-edit-btn']}
        onClick={() => handleUpdatePersonBtnClick(id)}
      />
      {isModalVisible && (
        <PersonModal
          pageNumber={pageNumber}
          person={person}
          onCloseBtnClick={handleCloseBtnClick}
        />
      )}
    </div>
  );
}
