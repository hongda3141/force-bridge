import goto from "./goto";

const pageName = "version.html";
beforeEach(async () => {
  await goto.goto(page, pageName);
});

describe("version", () => {
  it("version_1", async () => {
    const res = {
      "jsonrpc": "2.0",
      "id": 10,
      "result": {
        "version": "0.0.15"
      }
    };
    await goto.check(page, JSON.stringify(res));
  });

  // {
  //   "jsonrpc": "2.0",
  //   "method": "version",
  //   "id": 10
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