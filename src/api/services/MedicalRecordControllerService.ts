/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MedicalRecord } from "../models/MedicalRecord";
import type { PageMedicalRecord } from "../models/PageMedicalRecord";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
export class MedicalRecordControllerService {
  /**
   * @returns MedicalRecord OK
   * @throws ApiError
   */
  public static updateRecord({
    id,
    requestBody,
  }: {
    id: number;
    requestBody: MedicalRecord;
  }): CancelablePromise<MedicalRecord> {
    return __request(OpenAPI, {
      method: "PUT",
      url: '"medical-records/update/{id}',
      path: {
        id: id,
      },
      body: requestBody,
      mediaType: "application/json",
    });
  }
  /**
   * @returns any OK
   * @throws ApiError
   */
  public static uploadFile({
    recordId,
    requestBody,
  }: {
    recordId: number;
    requestBody?: {
      file: Blob;
    };
  }): CancelablePromise<Record<string, any>> {
    return __request(OpenAPI, {
      method: "POST",
      url: '"medical-records/{recordId}/upload',
      path: {
        recordId: recordId,
      },
      body: requestBody,
      mediaType: "application/json",
    });
  }
  /**
   * @returns string OK
   * @throws ApiError
   */
  public static initializeLedger(): CancelablePromise<string> {
    return __request(OpenAPI, {
      method: "POST",
      url: '"medical-records/initialize',
    });
  }
  /**
   * @returns any OK
   * @throws ApiError
   */
  public static createRecord({
    patientId,
    doctorId,
    requestBody,
  }: {
    patientId: number;
    doctorId: number;
    requestBody: MedicalRecord;
  }): CancelablePromise<Record<string, any>> {
    return __request(OpenAPI, {
      method: "POST",
      url: '"medical-records/create',
      query: {
        patientId: patientId,
        doctorId: doctorId,
      },
      body: requestBody,
      mediaType: "application/json",
    });
  }
  /**
   * @returns string OK
   * @throws ApiError
   */
  public static downloadFile({
    recordId,
    fileId,
  }: {
    recordId: number;
    fileId: number;
  }): CancelablePromise<string> {
    return __request(OpenAPI, {
      method: "GET",
      url: '"medical-records/{recordId}/download/{fileId}',
      path: {
        recordId: recordId,
        fileId: fileId,
      },
    });
  }
  /**
   * @returns MedicalRecord OK
   * @throws ApiError
   */
  public static getRecordById({
    id,
  }: {
    id: number;
  }): CancelablePromise<MedicalRecord> {
    return __request(OpenAPI, {
      method: "GET",
      url: '"medical-records/{id}',
      path: {
        id: id,
      },
    });
  }
  /**
   * @returns PageMedicalRecord OK
   * @throws ApiError
   */
  public static getAllRecords({
    page,
    size = 10,
    sortBy = "dateOfDiagnosis",
    sortDir = "asc",
  }: {
    page?: number;
    size?: number;
    sortBy?: string;
    sortDir?: string;
  }): CancelablePromise<PageMedicalRecord> {
    return __request(OpenAPI, {
      method: "GET",
      url: '"medical-records/all',
      query: {
        page: page,
        size: size,
        sortBy: sortBy,
        sortDir: sortDir,
      },
    });
  }
  /**
   * @returns string OK
   * @throws ApiError
   */
  public static deleteRecord({
    id,
  }: {
    id: number;
  }): CancelablePromise<string> {
    return __request(OpenAPI, {
      method: "DELETE",
      url: '"medical-records/delete/{id}',
      path: {
        id: id,
      },
    });
  }
}
