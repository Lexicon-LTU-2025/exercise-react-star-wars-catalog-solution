import type { ReactElement } from 'react';
import type { ICharacter } from '../types';

interface ICharacterProps {
  character: ICharacter;
  onCharacterClick: (character: ICharacter) => void;
}

export const Character = ({ character, onCharacterClick }: ICharacterProps): ReactElement => {
  const { name } = character;

  return (
    <article className="character" onClick={() => onCharacterClick(character)}>
      <h3>{name}</h3>
    </article>
  );
};
