import type { ReactElement, ReactNode } from 'react';
import type { ICharacter } from '../types';
import { Loader } from './Loader';

interface CharacterListProps {
  characters: ICharacter[];
}

export const CharacterList = ({ characters }: CharacterListProps): ReactElement => {
  const renderCharacters = (): ReactNode => {
    if (!characters.length) return <Loader />;
  };
  
  return (
    <section id="charcters-list">
      <header>
        <h2>Character List</h2>
      </header>
      <div className="characters">{renderCharacters()}</div>
    </section>
  );
};
