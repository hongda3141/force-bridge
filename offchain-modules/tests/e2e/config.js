// import configSetting from "./config.json" assert {type: 'json'};
import configSetting from "./config.json";

export default class Config {
  constructor() {
    this.watcherTestnetServer = "";
    this.watcherBaseEndpoint = "";
    this.ckbTestnetServer = "";
    this.ckbMainnetServer = "";
    this.localRpc = "";
    this.localServer = "";
    this.httpServer = "";

    this.acount1 = "";
    this.acount2 = "";
    this.hexPrivateKey = "";
    try {
      // eslint-disable-next-line no-console
      console.log("config info...");
      this.watcherTestnetServer = configSetting.watcherTestnetServer;
      this.watcherBaseEndpoint = configSetting.watcherBaseEndpoint;
      this.ckbTestnetServer = configSetting.ckbTestnetServer;
      this.ckbMainnetServer = configSetting.ckbMainnetServer;
      this.localRpc = configSetting.localRpc;
      this.localServer = configSetting.localServer;
      this.httpServer = configSetting.httpServer;

      this.hexPrivateKey = configSetting.hexPrivateKey;
      this.acount1 = configSetting.acount1;
      this.acount2 = configSetting.acount2;
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log("have config info error")
      console.log(err);
      throw err;
    }
  }

  static getIns() {
    if (!Config.ins) {
      Config.ins = new Config();
    }
    return Config.ins;
  }
}
