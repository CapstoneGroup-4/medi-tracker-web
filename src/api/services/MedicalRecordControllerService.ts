/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MedicalRecordRequest } from "../models/MedicalRecordRequest";
import type { MedicalRecordUpdateRequest } from "../models/MedicalRecordUpdateRequest";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
import { MedicalRecord } from "../models/MedicalRecord";
import { Attachment } from "../models/Attachment";
export class MedicalRecordControllerService {
  /**
   * @returns any OK
   * @throws ApiError
   */
  public static updateRecord({
    id,
    requestBody,
  }: {
    id: number;
    requestBody: MedicalRecordUpdateRequest;
  }): CancelablePromise<Record<string, any>> {
    return __request(OpenAPI, {
      method: "PUT",
      url: "/api/medical-records/update/{id}",
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
      url: "/api/medical-records/{recordId}/upload",
      path: {
        recordId: recordId,
      },
      body: requestBody,
      mediaType: "application/json",
    });
  }
  /**
   * @returns any OK
   * @throws ApiError
   */
  public static shareMedicalRecord({
    recordId,
    doctorId,
  }: {
    recordId: number;
    doctorId: number;
  }): CancelablePromise<Record<string, any>> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/medical-records/{recordId}/share",
      path: {
        recordId: recordId,
      },
      query: {
        doctorId: doctorId,
      },
    });
  }
  /**
   * @returns any OK
   * @throws ApiError
   */
  public static createRecord({
    requestBody,
  }: {
    requestBody: MedicalRecordRequest;
  }): CancelablePromise<Record<string, any>> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/medical-records/create",
      body: requestBody,
      mediaType: "application/json",
    });
  }
  /**
   * @returns any OK
   * @throws ApiError
   */
  public static getDoctorsWithAccess({
    recordId,
  }: {
    recordId: number;
  }): CancelablePromise<Record<string, any>> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/medical-records/{recordId}/shared-doctors",
      path: {
        recordId: recordId,
      },
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
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/medical-records/{recordId}/download/{fileId}",
      path: {
        recordId: recordId,
        fileId: fileId,
      },
    });
  }
  /**
   * @returns any OK
   * @throws ApiError
   */
  public static getAttachmentsByRecordId({
    recordId,
  }: {
    recordId: number;
  }): CancelablePromise<Attachment[]> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/medical-records/{recordId}/attachments",
      path: {
        recordId: recordId,
      },
    });
  }
  /**
   * @returns any OK
   * @throws ApiError
   */
  public static getRecordById({
    id,
  }: {
    id: number;
  }): CancelablePromise<MedicalRecord> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/medical-records/{id}",
      path: {
        id: id,
      },
    });
  }
  /**
   * @returns any OK
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
  }): CancelablePromise<Record<string, any>> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/medical-records/all",
      query: {
        page: page,
        size: size,
        sortBy: sortBy,
        sortDir: sortDir,
      },
    });
  }
  /**
   * @returns any OK
   * @throws ApiError
   */
  public static revokeAccess({
    recordId,
    doctorId,
  }: {
    recordId: number;
    doctorId: number;
  }): CancelablePromise<Record<string, any>> {
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/api/medical-records/{recordId}/revoke-access",
      path: {
        recordId: recordId,
      },
      query: {
        doctorId: doctorId,
      },
    });
  }
  /**
   * @returns any OK
   * @throws ApiError
   */
  public static deleteRecord({
    id,
  }: {
    id: number;
  }): CancelablePromise<Record<string, any>> {
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/api/medical-records/delete/{id}",
      path: {
        id: id,
      },
    });
  }
}
