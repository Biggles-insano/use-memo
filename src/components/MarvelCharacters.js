import React, { useState, useMemo } from 'react';

const MarvelCharacters = () => {
  const characters = [
    { id: 1, name: 'Víctor S. Mejía H.', description: 'Me gusta comer' },
    { id: 2, name: 'Iron Man', description: 'Tiene dinero y vuela' },
    { id: 3, name: 'Spider-Man', description: 'Amigo y vecino' },
    { id: 4, name: 'Thor', description: 'Tiene un martillo y tira rayos' },
    { id: 5, name: 'Hulk', description: 'Se enoja' },
    { id: 6, name: 'Black Widow', description: 'Viuda' },
    { id: 7, name: 'Captain America', description: 'El mejor héroe' },
    { id: 8, name: 'Doctor Strange', description: 'Cirujano deprimido' },
    { id: 9, name: 'Black Panther', description: 'Tiene dinero y odia a todo mundo' },
    { id: 10, name: 'Wolverine', description: 'Borracho que sana' },
    { id: 11, name: 'Deadpool', description: 'Loco sin miedo a la funa' },
    { id: 12, name: 'Scarlet Witch', description: 'Enferma mental' },
    { id: 13, name: 'Ant-Man', description: 'Ex-ladron' },
  ];

  const [search, setSearch] = useState('');

  const filteredCharacters = useMemo(() => {
    return characters.filter(character =>
      character.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div>
      <h1>Marvel Characters</h1>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Buscar personaje"
      />
      <ul>
        {filteredCharacters.map((character) => (
          <li key={character.id}>
            <strong>{character.name}</strong>: {character.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MarvelCharacters;