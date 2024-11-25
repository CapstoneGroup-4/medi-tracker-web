/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Role } from "./Role";
export type User = {
  id?: number;
  username: string;
  email: string;
  password: string;
  /**
   * Gender of the user: 0 - Male, 1 - Female, 2 - Other
   */
  gender: number;
  roles?: Array<Role>;
  phone?: string;
  age?: number;
  sin?: string;
  enabled?: boolean;
};

export type SignInResponse = {
  id: number;
  username: string;
  email: string;
  roles: Array<string>;
  tokenType: string;
  accessToken: string;
};
