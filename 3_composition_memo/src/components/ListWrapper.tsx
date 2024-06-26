import React from "react";
import movies from "./movies.json";
import List from "./List";

type Props = {};

const ListWrapper = ({}: Props): JSX.Element => {
  const getMovies = (): Promise<
    {
      title: string;
      director: string;
      year: number;
    }[]
  > => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(movies);
      }, 2000);
    });
  };

  return <List getMovies={getMovies} />;
};

export default ListWrapper;
