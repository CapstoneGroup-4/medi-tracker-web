/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type MedicalRecordRequest = {
    /**
     * User email, will connected to user automatically
     */
    userEmail: string;
    primaryDiagnosis: string;
    dateOfDiagnosis: string;
    comment: string;
    /**
     * Doctor ID, will connected to doctor automatically
     */
    doctorId: number;
};

