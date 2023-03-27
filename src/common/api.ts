import {MovieInfo} from "../movies/api";

interface Arg {
  key: string;
  value?: string | number | (string | number)[];
}

export const fetchEndpoint = async <T>(
  endpoint: string,
  args: Arg[] = []
): Promise<T> => {
  const queryString = `?api_key=181911a338d5119b3964f38af18175e7${args
    .map(({ key, value }) => {
      if (value === undefined) {
        return `&${encodeURIComponent(key)}`;
      }
      return `&${encodeURIComponent(key)}=${encodeURIComponent(
        Array.isArray(value) ? value.join(",") : value
      )}`;
    })
    .join("")}`;
  const response = await fetch(
    `https://api.themoviedb.org/3/${endpoint}${queryString}`
  );
  const jsonResponse = await response.json();
  if (response.ok) {
    return jsonResponse;
  }
  if ("status_code" in jsonResponse && "status_message" in jsonResponse) {
    throw new Error(
      `${jsonResponse.status_code}: ${jsonResponse.status_message}`
    );
  }
  throw new Error("Something went wrong");
};

export const findMovieEndpoint = async <T>(
    movieInfo: MovieInfo | undefined
): Promise<T> => {
  const response = await fetch(
      `http://127.0.0.1:8000/findMovieIdByTmdbId`,{
        method: "post",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(movieInfo)
      }
  );
  const jsonResponse = await response.json();
  if (response.ok) {
    return jsonResponse;
  }
  if ("status_code" in jsonResponse && "status_message" in jsonResponse) {
    throw new Error(
        `${jsonResponse.status_code}: ${jsonResponse.status_message}`
    );
  }
  throw new Error("Something went wrong");
};

export const getRecommendationEndpoint = async <T>(
    tmdbId: number,
    valueNumber: number
): Promise<T> => {
  const response = await fetch(
      `http://127.0.0.1:8000/getRecom?tmdbId=${tmdbId}&valueNumber=${valueNumber}`,
      {
        method: "post",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }
  );
  const jsonResponse = await response.json();
  if (response.ok) {
    return jsonResponse;
  }
  if ("status_code" in jsonResponse && "status_message" in jsonResponse) {
    throw new Error(
        `${jsonResponse.status_code}: ${jsonResponse.status_message}`
    );
  }
  throw new Error("Something went wrong");
};

export interface Paginated<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

export const fetchPaginated = <T>(
  endpoint: string,
  page: number,
  args: Arg[] = []
) => {
  return fetchEndpoint<Paginated<T>>(endpoint, [
    ...args,
    { key: "page", value: page },
  ]);
};
