import type { ReactElement } from 'react';
import type { IHomeworld } from '../types';
import { Loader } from './Loader';

interface ICharacterDetailsProps {
  homeworld?: IHomeworld;
  isLoading: boolean;
}

export const CharacterHomeworld = (props: ICharacterDetailsProps): ReactElement => {
  const { isLoading, homeworld } = props;

  if (isLoading) {
    return (
      <article className="character-homeworld isLoading">
        <Loader />
      </article>
    );
  }

  if (!homeworld) {
    return (
      <article className="character-homeworld g-flex-center">
        <p>No homeworld selected..</p>
      </article>
    );
  }

  const { name, rotation_period, orbital_period, diameter, climate, gravity, terrain } = homeworld;

  return (
    <article className="character-homeworld">
      <h3>{name}</h3>
      <p>Rotation period: {rotation_period}</p>
      <p>Orbital period: {orbital_period}</p>
      <p>Diameter: {diameter}</p>
      <p>Climate: {climate}</p>
      <p>Gravity: {gravity}</p>
      <p>Terrain: {terrain}</p>
    </article>
  );
};
