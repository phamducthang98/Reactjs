import { IResource } from "models/bases";
import { API_METHOD } from "models/commons/enum";
import { IRemoteConfig } from "models/interfaces/config";
import { catchError, map, throwError } from "rxjs";
import { ajax, AjaxError, AjaxResponse } from "rxjs/ajax";

export default class ApiGateWay {
  public _endpoint: string;
  public _timeOut: number = 5000;

  constructor(settings: IRemoteConfig) {
    this._endpoint = settings.endpoint || "";
  }

  callApiHandle = (
    resource: IResource,
    method: string,
    body?: any,
    bodyType?: string
  ) => {
    const { path, type } = resource;
    const endpoint = this._endpoint;
    const url = `${endpoint}${path}`;

    return ajax({
      method,
      url,
      body,
      timeout: this._timeOut,
      headers: this.headerConfig(type),
    }).pipe(
      map(this.handleSuccess),
      catchError((err) => throwError(() => new Error(this.handleError(err))))
    );
  };

  getRequest(resource: IResource) {
    return this.callApiHandle(resource, API_METHOD.GET_METHOD);
  }

  postRequest(resource: IResource, body?: any) {
    return this.callApiHandle(resource, API_METHOD.POST_METHOD, body);
  }

  putRequest(resource: IResource, body?: any) {
    return this.callApiHandle(resource, API_METHOD.PUT_METHOD, body);
  }

  patchRequest(resource: IResource, body?: any) {
    return this.callApiHandle(resource, API_METHOD.PATCH_METHOD, body);
  }

  deleteRequest(resource: IResource, body?: any) {
    return this.callApiHandle(resource, API_METHOD.DELETE_METHOD, body);
  }

  handleSuccess(response: AjaxResponse<any>) {
    return response.response;
  }

  handleError(error: AjaxError) {
    return error.response || error;
  }

  headerConfig(type: string) {
    const headers: any = {};
    let token = "";

    return headers;
  }
}
