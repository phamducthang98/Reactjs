import { IRemoteConfig } from "models/interfaces/config";

export default class Config {
  static configs: IRemoteConfig;

  static initConfig(): Promise<IRemoteConfig> {
    const endpoint =
      process.env.NODE_ENV === "production"
        ? process.env.REACT_APP_DEV_ENDPOINT
        : process.env.REACT_APP_PROD_ENDPOINT;

    return new Promise((resolve, reject) => {
      const config: IRemoteConfig = {
        endpoint: endpoint,
        domain: endpoint,
        clientDomain: `${endpoint}/api`,
      };

      Config.configs = config;

      if (config) {
        resolve(config);
      } else {
        reject();
      }
    });
  }

  static getBaseConfig = (): IRemoteConfig | any => {
    return Config.configs;
  };
}
