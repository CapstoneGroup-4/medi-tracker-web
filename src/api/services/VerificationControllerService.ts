/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
export class VerificationControllerService {
  /**
   * @returns any OK
   * @throws ApiError
   */
  public static verifyCode({
    email,
    code,
  }: {
    email: string;
    code: string;
  }): CancelablePromise<Record<string, any>> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/verification/verify-code",
      query: {
        email: email,
        code: code,
      },
    });
  }
  /**
   * @returns any OK
   * @throws ApiError
   */
  public static sendCode({
    email,
  }: {
    email: string;
  }): CancelablePromise<Record<string, any>> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/verification/send-code",
      query: {
        email: email,
      },
    });
  }
}
