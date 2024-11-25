/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Role } from "../models/Role";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
export class RoleControllerService {
  /**
   * @returns Role OK
   * @throws ApiError
   */
  public static getRoleById({ id }: { id: number }): CancelablePromise<Role> {
    return __request(OpenAPI, {
      method: "GET",
      url: '"/roles/{id}',
      path: {
        id: id,
      },
    });
  }
  /**
   * @returns Role OK
   * @throws ApiError
   */
  public static updateRole({
    id,
    requestBody,
  }: {
    id: number;
    requestBody: Role;
  }): CancelablePromise<Role> {
    return __request(OpenAPI, {
      method: "PUT",
      url: '"/roles/{id}',
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
  public static deleteRole({ id }: { id: number }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "DELETE",
      url: '"/roles/{id}',
      path: {
        id: id,
      },
    });
  }
  /**
   * @returns Role OK
   * @throws ApiError
   */
  public static getAllRoles(): CancelablePromise<Array<Role>> {
    return __request(OpenAPI, {
      method: "GET",
      url: '"/roles',
    });
  }
  /**
   * @returns Role OK
   * @throws ApiError
   */
  public static createRole({
    requestBody,
  }: {
    requestBody: Role;
  }): CancelablePromise<Role> {
    return __request(OpenAPI, {
      method: "POST",
      url: '"roles',
      body: requestBody,
      mediaType: "application/json",
    });
  }
}
