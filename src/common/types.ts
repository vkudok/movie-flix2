export type MovieType = {
  id: number;
  poster_path: string;
  original_title: string;
  overview: string;
  vote_average: number;
  release_date: number;
  runtime: number;
  genre_ids: Array<number>;
};

export type MovieDataType = Omit<
    MovieType,
    "overview" | "release_date" | "runtime" | "genre_ids"
    >;

export type MovieRecommendationType = {
  title: string;
  movie_id: number;
  tmdbId: number;
};

export type MoviePageType = {
  backdrop_path: string;
  budget: number;
  genres: Array<{ id: number; name: string }>;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  runtime: number;
  vote_average: number;
  release_date: string;
//     homepage: string;
//     id: number;
//     imdb_id: string;
//     adult: boolean;
//     belongs_to_collection?: null;
//     production_companies?: (ProductionCompaniesEntityOrProductionCountriesEntityOrSpokenLanguagesEntity)[] | null;
//     production_countries?: (ProductionCompaniesEntityOrProductionCountriesEntityOrSpokenLanguagesEntity)[] | null;
//     revenue: number;
//     spoken_languages?: (ProductionCompaniesEntityOrProductionCountriesEntityOrSpokenLanguagesEntity)[] | null;
//     status: string;
//     tagline: string;
//     title: string;
//     video: boolean;
//     vote_count: number;
  }