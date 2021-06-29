import { FC } from 'react';

// Styles
import styles from './person.module.scss';

// Interfaces
import { IPerson } from '../../interfaces';

interface IProps {
  person: IPerson;
}

export const Person: FC<IProps> = ({ person }) => {
  const { name, gender, birthYear, eyeColor, hairColor, height, skinColor } = person;


  return (
    <div className={styles.person}>
      <p>Name: {name}</p>
      <p>Gender: {gender}</p>
      <p>Birth year: {birthYear}</p>
      <p>Eye color: {eyeColor}</p>
      <p>Hair color: {hairColor}</p>
      <p>Height: {height}</p>
      <p>Skin color: {skinColor}</p>
    </div>
  );
}
