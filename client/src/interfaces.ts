import { ApolloError } from "@apollo/client";

export interface IPerson {
  id: number;
  birthYear: string;
  eyeColor: string;
  gender: string;
  hairColor: string;
  height: string;
  name: string;
  skinColor: string;
}

export interface IPeopleInfo {
  loading: boolean;
  error: undefined | ApolloError;
  people: IPerson[];
}

export interface IPlanet {
  name: string;
  climate: string;
  diameter: string;
  population: string;
  terrain: string;
}
