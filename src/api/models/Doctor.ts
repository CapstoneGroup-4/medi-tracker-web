/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { User } from './User';
export type Doctor = {
    id?: number;
    user?: User;
    professionalId: string;
    personalId: string;
    license: string;
    licenseAuthority: string;
    jobTitle: string;
    specialization: string;
    clinicName: string;
    membership?: string;
};

