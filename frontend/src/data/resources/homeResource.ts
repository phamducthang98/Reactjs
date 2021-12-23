import { IResource } from "models/bases";
import { RESOURCE_TYPE } from "models/commons/enum";

export const initHome = (): IResource => ({
  path: "",
  type: RESOURCE_TYPE.PUBLIC_TYPE,
});
