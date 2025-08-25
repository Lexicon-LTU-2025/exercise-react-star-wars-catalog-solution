import type { ReactElement } from 'react';
import type { ICharacter } from '../types';

interface ICharacterProps {
  character: ICharacter;
}

export const Character = ({ character }: ICharacterProps): ReactElement => {
  const { name } = character;

  return (
    <article className="character">
      <h3>{name}</h3>
    </article>
  );
};
