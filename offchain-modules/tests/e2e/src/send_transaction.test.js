import goto from "./goto";

const pageName = "generateBridgeInNervosTransaction.html";
beforeEach(async () => {
  await goto.goto(page, pageName);
});

describe("generateBridgeInNervosTransaction", () => {
  it("egenerateBridgeInNervosTransaction_1", async () => {
    const res = {
      "jsonrpc": "2.0",
      "id": 1,
      "result": {
        "network": "Ethereum", // echo the source network
        "rawTransaction": {
          "data": "0xa406ad9a000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000000000061636b7431717076767461793334776e6476396e636b6c3868616836667a7a636c746371776372783739617077703261356c6b643037666478787164683430746366666d7578706d6530707a70786d346a37326e387866307a667073353568363863000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", // sudt extra data
          "to": "0xa20d0da0b349B1d8c235b5ED748484045e979109", // the address of force bridge's contracts
          "value": {
            "type": "BigNumber",
            "hex": "0x09184e72a000" // amount in hex
          }
        }
      }
    };
    const param1 = await page.$(goto.pageIds.param1Id);
    const param2 = await page.$(goto.pageIds.param2Id);
    const param3 = await page.$(goto.pageIds.param3Id);
    const param4 = await page.$(goto.pageIds.param4Id);
    const param5 = await page.$(goto.pageIds.param5Id);
    await param1.type("Ethereum");
    await param2.type("0x0000000000000000000000000000000000000000");
    await param3.type("10000000000000");
    await param4.type("ckt1qpvvtay34wndv9nckl8hah6fzzcltcqwcrx79apwp2a5lkd07fdxxqdh40tcffmuxpme0pzpxm4j72n8xf0zfps55h68c");
    await param5.type("0xb7abd784a77c307797844136eb2f2a67325e2486");
    await goto.check(page, JSON.stringify(res));
  });

    // const p3 = {
    // "asset": {
    //     "network": "Ethereum",
    //     "ident": "0x0000000000000000000000000000000000000000",
    //     "amount": "10000000000000"
    // },
    // "recipient": "ckt1qpvvtay34wndv9nckl8hah6fzzcltcqwcrx79apwp2a5lkd07fdxxqdh40tcffmuxpme0pzpxm4j72n8xf0zfps55h68c",
    // "sender": "0xb7abd784a77c307797844136eb2f2a67325e2486"
    //   }; 

  /**
  * more params
  */
  // it("eth_coinBase_2", async () => {
  //   const testType = await page.$(goto.pageIds.testTypeId);
  //   await testType.type("2"); // 0: none params 1: common params to request 2: more params
  //   await goto.check(page, "null");
  // });
});