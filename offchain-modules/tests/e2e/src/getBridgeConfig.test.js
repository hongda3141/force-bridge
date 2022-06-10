import goto from "./goto";

const pageName = "getBridgeConfig.html";
beforeEach(async () => {
  await goto.goto(page, pageName);
});

describe("getBridgeConfig", () => {
  it("getBridgeConfig_1", async () => {
    const res = {
      "jsonrpc": "2.0",
      "id": 5,
      "result": {
        "nervos": {
          "network": "testnet",
          "confirmNumber": 15
        },
        "xchains": {
          "Ethereum": {
            "contractAddress": "0x0670009F6126e57C679E90aEE46861D28DA2F703",
            "confirmNumber": 12
          }
        }
      }
    };
    await goto.check(page, JSON.stringify(res));
  });

  // {
  //   "jsonrpc": "2.0",
  //   "method": "getBridgeConfig",
  //   "id": 5
  // }

  /**
  * more params
  */
  // it("eth_coinBase_2", async () => {
  //   const testType = await page.$(goto.pageIds.testTypeId);
  //   await testType.type("2"); // 0: none params 1: common params to request 2: more params
  //   await goto.check(page, "null");
  // });
});