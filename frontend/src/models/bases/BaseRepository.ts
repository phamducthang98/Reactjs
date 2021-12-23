import Config from "configs";
import ApiGateWay from "data/ApiGateWay";

export default abstract class BaseRepository {
  public apiGateWay: ApiGateWay;

  constructor() {
    this.apiGateWay = new ApiGateWay(Config.getBaseConfig());
  }
}
