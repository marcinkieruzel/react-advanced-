import React, { useCallback, useEffect } from "react";
import movies from "./movies.json";
import List from "./List";

type Props = {};

const ListWrapper = ({}: Props): JSX.Element => {
  const [times, setTimer] = React.useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const getMovies = useCallback((): Promise<
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
  }, []);

  return <List getMovies={getMovies} />;
};

export default ListWrapper;
