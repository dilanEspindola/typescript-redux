import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { getCharactersThunk } from "../redux/thunks/getCharactersThunk";

export const Characters = () => {
  const dispatch = useAppDispatch();
  const { characters, status } = useAppSelector((store) => store.characters);

  useEffect(() => {
    dispatch(getCharactersThunk());
  }, [dispatch]);

  return (
    <div>
      <h1>Characters of rick and morty</h1>
      {status === "pending" ? (
        <h3>Loading characters...</h3>
      ) : (
        status === "fulfilled" && (
          <div>
            {characters.map((character) => (
              <div key={character.id}>
                <img src={character.image} alt={character.name} />
                <h1>{character.name}</h1>
                <p>Specie: {character.species}</p>
              </div>
            ))}
          </div>
        )
      )}
    </div>
  );
};
