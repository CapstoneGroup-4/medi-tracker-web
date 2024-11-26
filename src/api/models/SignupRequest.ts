/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SignupRequest = {
    username: string;
    email: string;
    /**
     * Role of the user: ROLE_ADMIN (not allow to set), ROLE_DOCTOR, ROLE_USER (default)
     */
    role: string;
    password: string;
    /**
     * Gender of the user: 0 - Male, 1 - Female, 2 - Other
     */
    gender: number;
    sin?: string;
    age?: number;
    phone?: string;
};

