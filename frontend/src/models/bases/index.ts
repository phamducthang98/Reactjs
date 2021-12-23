import { RESOURCE_TYPE } from "models/commons/enum";
import { Component } from "react";

export interface CustomRoute {
  path: string;
  name: string;
  component: Component | VoidFunction | JSX.Element | any;
  children?: CustomRoute[];
}

export interface IEpicAction {
  type?: string;
  payload?: any;
}

export interface IResource {
  type: string | RESOURCE_TYPE;
  path: string;
}
