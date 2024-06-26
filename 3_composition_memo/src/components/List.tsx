import React, { useEffect, useState } from "react";
import _ from "lodash";

const Item = ({ title, director, year }: any) => (
  <li className="list-group-item list-group-item-action">
    {title} | {director} | {year}
  </li>
);

const List = ({
  getMovies,
}: {
  getMovies: () => Promise<
    {
      title: string;
      director: string;
      year: number;
    }[]
  >;
}): JSX.Element => {
  const [sortType, setSortType] = useState<"title" | "director" | "year">(
    "title"
  );
  const [movies, setMovies] = useState<
    {
      title: string;
      director: string;
      year: number;
    }[]
  >([]);

  useEffect(() => {
    getMovies().then((movies) => setMovies(movies));
  }, [getMovies]);

  const sortedMovies = _.sortBy(movies || [], sortType);

  return (
    <>
      <div className="btn-group" role="group">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setSortType("year")}
        >
          Sort by year
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setSortType("title")}
        >
          Sort by title
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setSortType("director")}
        >
          Sort by director
        </button>
      </div>
      <div className="list-group">
        {sortedMovies.map((movie, index) => (
          <Item
            key={index}
            title={movie.title}
            director={movie.director}
            year={movie.year}
          />
        ))}
      </div>
    </>
  );
};

export default List;
