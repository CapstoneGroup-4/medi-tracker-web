/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MedicalRecord } from './MedicalRecord';
import type { PageableObject } from './PageableObject';
import type { SortObject } from './SortObject';
export type PageMedicalRecord = {
    totalPages?: number;
    totalElements?: number;
    size?: number;
    content?: Array<MedicalRecord>;
    number?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    numberOfElements?: number;
    empty?: boolean;
};

