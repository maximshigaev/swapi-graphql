import { FC } from 'react';

// Styles
import styles from './planet.module.scss';

// Interfaces
import { IPlanet } from '../../interfaces';

interface IProps {
  planet: IPlanet;
}

export const Planet: FC<IProps> = ({ planet }) => {
  const { name, climate, diameter, population, terrain } = planet;

  return (
    <div className={styles.planet}>
      <p>Name: {name}</p>
      <p>Climate: {climate}</p>
      <p>Diameter: {diameter}</p>
      <p>Population: {population}</p>
      <p>Terrain: {terrain}</p>
    </div>
  );
}
