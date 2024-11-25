/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { User } from "../models/User";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
export class UserControllerService {
  /**
   * @returns User OK
   * @throws ApiError
   */
  public static getUserById({ id }: { id: number }): CancelablePromise<User> {
    return __request(OpenAPI, {
      method: "GET",
      url: '"users/{id}',
      path: {
        id: id,
      },
    });
  }
  /**
   * @returns User OK
   * @throws ApiError
   */
  public static updateUser({
    id,
    requestBody,
  }: {
    id: number;
    requestBody: User;
  }): CancelablePromise<User> {
    return __request(OpenAPI, {
      method: "PUT",
      url: '"users/{id}',
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
  public static deleteUser({ id }: { id: number }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "DELETE",
      url: '"users/{id}',
      path: {
        id: id,
      },
    });
  }
  /**
   * @returns User OK
   * @throws ApiError
   */
  public static getAllUsers(): CancelablePromise<Array<User>> {
    return __request(OpenAPI, {
      method: "GET",
      url: '"users',
    });
  }
  /**
   * @returns User OK
   * @throws ApiError
   */
  public static createUser({
    requestBody,
  }: {
    requestBody: User;
  }): CancelablePromise<User> {
    return __request(OpenAPI, {
      method: "POST",
      url: '"users',
      body: requestBody,
      mediaType: "application/json",
    });
  }
}
