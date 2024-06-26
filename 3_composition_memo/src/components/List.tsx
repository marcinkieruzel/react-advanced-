import React, { memo, useEffect, useMemo, useState } from "react";
import _ from "lodash";
import { start } from "..";

const Item = ({ title, director, year }: any) => (
  <li className="list-group-item list-group-item-action">
    {title} | {director} | {year}
  </li>
);

const List = memo(
  ({
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
    const [seen, setSeen] = useState<boolean>(false);
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
      console.log("Fetching movies");

      getMovies().then((movies) => setMovies(movies));
    }, [getMovies]);

    const sortedMovies = useMemo(() => {
      console.log("Sorting movies");
      return _.sortBy(movies || [], sortType);
    }, [sortType, movies]);

    useEffect(() => {
      const end = performance.now();

      console.log(`List component took ${end - start} ms to render`);
    }, []);

    return (
      <>
        <div className="btn-group" role="group">
          <button
            type="button"
            className={`btn btn-secondary`}
            onClick={() => setSeen(!seen)}
          >
            {seen ? "Hide" : "Show"}
          </button>
          <button
            type="button"
            className={`btn btn-primary ${sortType === "year" && "active"}`}
            onClick={() => setSortType("year")}
          >
            Sort by year
          </button>
          <button
            type="button"
            className={`btn btn-primary ${sortType === "title" && "active"}`}
            onClick={() => setSortType("title")}
          >
            Sort by title
          </button>
          <button
            type="button"
            className={`btn btn-primary ${sortType === "director" && "active"}`}
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
  }
);

export default List;
