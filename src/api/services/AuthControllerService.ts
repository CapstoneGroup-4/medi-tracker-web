/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DoctorSignupRequest } from "../models/DoctorSignupRequest";
import type { LoginRequest } from "../models/LoginRequest";
import type { SignupRequest } from "../models/SignupRequest";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
import { SignInResponse } from "../models/User";
export class AuthControllerService {
  /**
   * @returns any OK
   * @throws ApiError
   */
  public static registerUser({
    requestBody,
  }: {
    requestBody: SignupRequest;
  }): CancelablePromise<Record<string, any>> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/auth/signup",
      body: requestBody,
      mediaType: "application/json",
    });
  }
  /**
   * @returns any OK
   * @throws ApiError
   */
  public static authenticateUser({
    requestBody,
  }: {
    requestBody: LoginRequest;
  }): CancelablePromise<SignInResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/auth/signin",
      body: requestBody,
      mediaType: "application/json",
    });
  }
  /**
   * @returns any OK
   * @throws ApiError
   */
  public static doctorVerification({
    requestBody,
  }: {
    requestBody: DoctorSignupRequest;
  }): CancelablePromise<Record<string, any>> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/auth/doctor-signup",
      body: requestBody,
      mediaType: "application/json",
    });
  }
  /**
   * @returns any OK
   * @throws ApiError
   */
  public static getUserActiveStatus({
    email,
  }: {
    email: string;
  }): CancelablePromise<Record<string, any>> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/auth/isactive/{email}",
      path: {
        email: email,
      },
    });
  }
}
