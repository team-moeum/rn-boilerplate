/* tslint:disable */
/* eslint-disable */
/**
 * Swagger Petstore - OpenAPI 3.0
 * This is a sample Pet Store Server based on the OpenAPI 3.0 specification.  You can find out more about Swagger at [http://swagger.io](http://swagger.io). In the third iteration of the pet store, we\'ve switched to the design first approach! You can now help us improve the API whether it\'s by making changes to the definition itself or to the code. That way, with time, we can improve the API in general, and expose some of the new features in OAS3.  Some useful links: - [The Pet Store repository](https://github.com/swagger-api/swagger-petstore) - [The source API definition for the Pet Store](https://github.com/swagger-api/swagger-petstore/blob/master/src/main/resources/openapi.yaml)
 *
 * The version of the OpenAPI document: 1.0.19
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { Configuration } from "../configuration";
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from "axios";
import globalAxios from "axios";
// Some imports not used depending on template conditions
// @ts-ignore
import {
  DUMMY_BASE_URL,
  assertParamExists,
  setApiKeyToObject,
  setBasicAuthToObject,
  setBearerAuthToObject,
  setOAuthToObject,
  setSearchParams,
  serializeDataIfNeeded,
  toPathString,
  createRequestFunction
} from "../common";
// @ts-ignore
import {
  BASE_PATH,
  COLLECTION_FORMATS,
  type RequestArgs,
  BaseAPI,
  RequiredError,
  operationServerMap
} from "../base";
// @ts-ignore
import type { User } from "../model";
/**
 * UserApi - axios parameter creator
 * @export
 */
export const UserApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     * This can only be done by the logged in user.
     * @summary Create user
     * @param {User} [user] Created user object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createUser: async (user?: User, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
      const localVarPath = `/user`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = { method: "POST", ...baseOptions, ...options };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      localVarHeaderParameter["Content-Type"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        user,
        localVarRequestOptions,
        configuration
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * Creates list of users with given input array
     * @summary Creates list of users with given input array
     * @param {Array<User>} [user]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createUsersWithListInput: async (
      user?: Array<User>,
      options: RawAxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/user/createWithList`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = { method: "POST", ...baseOptions, ...options };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      localVarHeaderParameter["Content-Type"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        user,
        localVarRequestOptions,
        configuration
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * This can only be done by the logged in user.
     * @summary Delete user
     * @param {string} username The name that needs to be deleted
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteUser: async (
      username: string,
      options: RawAxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'username' is not null or undefined
      assertParamExists("deleteUser", "username", username);
      const localVarPath = `/user/{username}`.replace(
        `{${"username"}}`,
        encodeURIComponent(String(username))
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = { method: "DELETE", ...baseOptions, ...options };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     *
     * @summary Get user by user name
     * @param {string} username The name that needs to be fetched. Use user1 for testing.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserByName: async (
      username: string,
      options: RawAxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'username' is not null or undefined
      assertParamExists("getUserByName", "username", username);
      const localVarPath = `/user/{username}`.replace(
        `{${"username"}}`,
        encodeURIComponent(String(username))
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = { method: "GET", ...baseOptions, ...options };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     *
     * @summary Logs user into the system
     * @param {string} [username] The user name for login
     * @param {string} [password] The password for login in clear text
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    loginUser: async (
      username?: string,
      password?: string,
      options: RawAxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/user/login`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = { method: "GET", ...baseOptions, ...options };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      if (username !== undefined) {
        localVarQueryParameter["username"] = username;
      }

      if (password !== undefined) {
        localVarQueryParameter["password"] = password;
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     *
     * @summary Logs out current logged in user session
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    logoutUser: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
      const localVarPath = `/user/logout`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = { method: "GET", ...baseOptions, ...options };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * This can only be done by the logged in user.
     * @summary Update user
     * @param {string} username name that needs to be updated
     * @param {User} [user] Update an existent user in the store
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateUser: async (
      username: string,
      user?: User,
      options: RawAxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'username' is not null or undefined
      assertParamExists("updateUser", "username", username);
      const localVarPath = `/user/{username}`.replace(
        `{${"username"}}`,
        encodeURIComponent(String(username))
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = { method: "PUT", ...baseOptions, ...options };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      localVarHeaderParameter["Content-Type"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        user,
        localVarRequestOptions,
        configuration
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    }
  };
};

/**
 * UserApi - functional programming interface
 * @export
 */
export const UserApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = UserApiAxiosParamCreator(configuration);
  return {
    /**
     * This can only be done by the logged in user.
     * @summary Create user
     * @param {User} [user] Created user object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createUser(
      user?: User,
      options?: RawAxiosRequestConfig
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createUser(user, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["UserApi.createUser"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Creates list of users with given input array
     * @summary Creates list of users with given input array
     * @param {Array<User>} [user]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createUsersWithListInput(
      user?: Array<User>,
      options?: RawAxiosRequestConfig
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createUsersWithListInput(
        user,
        options
      );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["UserApi.createUsersWithListInput"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * This can only be done by the logged in user.
     * @summary Delete user
     * @param {string} username The name that needs to be deleted
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteUser(
      username: string,
      options?: RawAxiosRequestConfig
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.deleteUser(username, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["UserApi.deleteUser"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     *
     * @summary Get user by user name
     * @param {string} username The name that needs to be fetched. Use user1 for testing.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getUserByName(
      username: string,
      options?: RawAxiosRequestConfig
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getUserByName(username, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["UserApi.getUserByName"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     *
     * @summary Logs user into the system
     * @param {string} [username] The user name for login
     * @param {string} [password] The password for login in clear text
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async loginUser(
      username?: string,
      password?: string,
      options?: RawAxiosRequestConfig
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.loginUser(
        username,
        password,
        options
      );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["UserApi.loginUser"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     *
     * @summary Logs out current logged in user session
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async logoutUser(
      options?: RawAxiosRequestConfig
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.logoutUser(options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["UserApi.logoutUser"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * This can only be done by the logged in user.
     * @summary Update user
     * @param {string} username name that needs to be updated
     * @param {User} [user] Update an existent user in the store
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateUser(
      username: string,
      user?: User,
      options?: RawAxiosRequestConfig
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.updateUser(username, user, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["UserApi.updateUser"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration
        )(axios, localVarOperationServerBasePath || basePath);
    }
  };
};

/**
 * UserApi - factory interface
 * @export
 */
export const UserApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = UserApiFp(configuration);
  return {
    /**
     * This can only be done by the logged in user.
     * @summary Create user
     * @param {UserApiCreateUserRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createUser(
      requestParameters: UserApiCreateUserRequest = {},
      options?: RawAxiosRequestConfig
    ): AxiosPromise<User> {
      return localVarFp
        .createUser(requestParameters.user, options)
        .then(request => request(axios, basePath));
    },
    /**
     * Creates list of users with given input array
     * @summary Creates list of users with given input array
     * @param {UserApiCreateUsersWithListInputRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createUsersWithListInput(
      requestParameters: UserApiCreateUsersWithListInputRequest = {},
      options?: RawAxiosRequestConfig
    ): AxiosPromise<User> {
      return localVarFp
        .createUsersWithListInput(requestParameters.user, options)
        .then(request => request(axios, basePath));
    },
    /**
     * This can only be done by the logged in user.
     * @summary Delete user
     * @param {UserApiDeleteUserRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteUser(
      requestParameters: UserApiDeleteUserRequest,
      options?: RawAxiosRequestConfig
    ): AxiosPromise<void> {
      return localVarFp
        .deleteUser(requestParameters.username, options)
        .then(request => request(axios, basePath));
    },
    /**
     *
     * @summary Get user by user name
     * @param {UserApiGetUserByNameRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserByName(
      requestParameters: UserApiGetUserByNameRequest,
      options?: RawAxiosRequestConfig
    ): AxiosPromise<User> {
      return localVarFp
        .getUserByName(requestParameters.username, options)
        .then(request => request(axios, basePath));
    },
    /**
     *
     * @summary Logs user into the system
     * @param {UserApiLoginUserRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    loginUser(
      requestParameters: UserApiLoginUserRequest = {},
      options?: RawAxiosRequestConfig
    ): AxiosPromise<string> {
      return localVarFp
        .loginUser(requestParameters.username, requestParameters.password, options)
        .then(request => request(axios, basePath));
    },
    /**
     *
     * @summary Logs out current logged in user session
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    logoutUser(options?: RawAxiosRequestConfig): AxiosPromise<void> {
      return localVarFp.logoutUser(options).then(request => request(axios, basePath));
    },
    /**
     * This can only be done by the logged in user.
     * @summary Update user
     * @param {UserApiUpdateUserRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateUser(
      requestParameters: UserApiUpdateUserRequest,
      options?: RawAxiosRequestConfig
    ): AxiosPromise<void> {
      return localVarFp
        .updateUser(requestParameters.username, requestParameters.user, options)
        .then(request => request(axios, basePath));
    }
  };
};

/**
 * Request parameters for createUser operation in UserApi.
 * @export
 * @interface UserApiCreateUserRequest
 */
export interface UserApiCreateUserRequest {
  /**
   * Created user object
   * @type {User}
   * @memberof UserApiCreateUser
   */
  readonly user?: User;
}

/**
 * Request parameters for createUsersWithListInput operation in UserApi.
 * @export
 * @interface UserApiCreateUsersWithListInputRequest
 */
export interface UserApiCreateUsersWithListInputRequest {
  /**
   *
   * @type {Array<User>}
   * @memberof UserApiCreateUsersWithListInput
   */
  readonly user?: Array<User>;
}

/**
 * Request parameters for deleteUser operation in UserApi.
 * @export
 * @interface UserApiDeleteUserRequest
 */
export interface UserApiDeleteUserRequest {
  /**
   * The name that needs to be deleted
   * @type {string}
   * @memberof UserApiDeleteUser
   */
  readonly username: string;
}

/**
 * Request parameters for getUserByName operation in UserApi.
 * @export
 * @interface UserApiGetUserByNameRequest
 */
export interface UserApiGetUserByNameRequest {
  /**
   * The name that needs to be fetched. Use user1 for testing.
   * @type {string}
   * @memberof UserApiGetUserByName
   */
  readonly username: string;
}

/**
 * Request parameters for loginUser operation in UserApi.
 * @export
 * @interface UserApiLoginUserRequest
 */
export interface UserApiLoginUserRequest {
  /**
   * The user name for login
   * @type {string}
   * @memberof UserApiLoginUser
   */
  readonly username?: string;

  /**
   * The password for login in clear text
   * @type {string}
   * @memberof UserApiLoginUser
   */
  readonly password?: string;
}

/**
 * Request parameters for updateUser operation in UserApi.
 * @export
 * @interface UserApiUpdateUserRequest
 */
export interface UserApiUpdateUserRequest {
  /**
   * name that needs to be updated
   * @type {string}
   * @memberof UserApiUpdateUser
   */
  readonly username: string;

  /**
   * Update an existent user in the store
   * @type {User}
   * @memberof UserApiUpdateUser
   */
  readonly user?: User;
}

/**
 * UserApi - object-oriented interface
 * @export
 * @class UserApi
 * @extends {BaseAPI}
 */
export class UserApi extends BaseAPI {
  /**
   * This can only be done by the logged in user.
   * @summary Create user
   * @param {UserApiCreateUserRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserApi
   */
  public createUser(
    requestParameters: UserApiCreateUserRequest = {},
    options?: RawAxiosRequestConfig
  ) {
    return UserApiFp(this.configuration)
      .createUser(requestParameters.user, options)
      .then(request => request(this.axios, this.basePath));
  }

  /**
   * Creates list of users with given input array
   * @summary Creates list of users with given input array
   * @param {UserApiCreateUsersWithListInputRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserApi
   */
  public createUsersWithListInput(
    requestParameters: UserApiCreateUsersWithListInputRequest = {},
    options?: RawAxiosRequestConfig
  ) {
    return UserApiFp(this.configuration)
      .createUsersWithListInput(requestParameters.user, options)
      .then(request => request(this.axios, this.basePath));
  }

  /**
   * This can only be done by the logged in user.
   * @summary Delete user
   * @param {UserApiDeleteUserRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserApi
   */
  public deleteUser(requestParameters: UserApiDeleteUserRequest, options?: RawAxiosRequestConfig) {
    return UserApiFp(this.configuration)
      .deleteUser(requestParameters.username, options)
      .then(request => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Get user by user name
   * @param {UserApiGetUserByNameRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserApi
   */
  public getUserByName(
    requestParameters: UserApiGetUserByNameRequest,
    options?: RawAxiosRequestConfig
  ) {
    return UserApiFp(this.configuration)
      .getUserByName(requestParameters.username, options)
      .then(request => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Logs user into the system
   * @param {UserApiLoginUserRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserApi
   */
  public loginUser(
    requestParameters: UserApiLoginUserRequest = {},
    options?: RawAxiosRequestConfig
  ) {
    return UserApiFp(this.configuration)
      .loginUser(requestParameters.username, requestParameters.password, options)
      .then(request => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Logs out current logged in user session
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserApi
   */
  public logoutUser(options?: RawAxiosRequestConfig) {
    return UserApiFp(this.configuration)
      .logoutUser(options)
      .then(request => request(this.axios, this.basePath));
  }

  /**
   * This can only be done by the logged in user.
   * @summary Update user
   * @param {UserApiUpdateUserRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserApi
   */
  public updateUser(requestParameters: UserApiUpdateUserRequest, options?: RawAxiosRequestConfig) {
    return UserApiFp(this.configuration)
      .updateUser(requestParameters.username, requestParameters.user, options)
      .then(request => request(this.axios, this.basePath));
  }
}
