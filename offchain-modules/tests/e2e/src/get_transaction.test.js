import goto from "./goto";

const pageName = "get_transaction.html";
beforeEach(async () => {
  await goto.goto(page, pageName);
});

describe("get_transaction", () => {
  it("get_transaction_1", async () => {
    const res = {
        "jsonrpc": "2.0",
        "result": {
          "transaction": {
            "cell_deps": expect.anything(),
            "hash": "0xff26fc91c213bfa73f7c01bfe34d3b8c14f9336bfa888f2fff0da69027b446ec",
            "header_deps": [],
            "inputs": expect.anything(),
            "outputs": expect.anything(),
            "outputs_data": [
              "0x",
              "0x0030d53b0a5a00000000000000000000",
              "0x",
              "0x"
            ],
            "version": "0x0",
            "witnesses": [
              "0x7401000010000000170100007401000003010000000003030444d545cdd241d4db0db597e635f8fcbc6b8161b1ddfd1e5400169be3aba9767abf2304a1f25fe0033a1c8661550f7453c70f5770aac77bb871dee06c5ad532f096e44f474234ae0535d1e1c125c680afc980a70fd1a0c8391df845310b58477dd67ea4ab0eb47a515719e6e2b72d9289f5b741f43ff79b99d92dc601aa572c1758a9c33c5c5297ca509041bf51cd11f89cfaa53c91f1f553980aedd42797e9cdac5a42a2193b54d06b8e756bae1f4432da93ea1aa9d12f1b751c3f1501daf64be46129441f30b939051c493ecd71edbcf4c86759a4f629a2989456b2ab429318a5475689b51a11adec5e7c6f04c4c0e61c64b033c2fa7dc3b32c5cf27d015900000059000000080000005100000008000000450000003078366636333934333034666532323866633738356463613538353939663832316638616561626362656664376161626638663264386164616632333732666631322d3635",
              "0x",
              "0x55000000100000005500000055000000410000009145a6b152a4ab1943021d6c2297e98da2edfb9e62bb13e6c0e47a4fd8b7c1e162cd6d0f4838948e86240ab296a236977bc2c0df1d7017fac6be203148198eb300"
            ]
          },
          "tx_status": {
            "block_hash": "0x3bf0c28e992bd50160bfc8ce6dc58541f00dca1939b6d6b9a3cebe426361c588",
            "reason": null,
            "status": "committed"
          }
        },
        "id": 101
      };
    const param1 = await page.$(goto.pageIds.param1Id);
    await param1.type("0xff26fc91c213bfa73f7c01bfe34d3b8c14f9336bfa888f2fff0da69027b446ec");
    await goto.checkObject(page, res);
  }, goto.longTimeOut);



  /**
  * none params
  */
  it("get_transaction_2", async () => {
    const res = {"jsonrpc":"2.0","error":{"code":-32602,"message":"Invalid params: invalid format, expected a 0x-prefixed hex string with 64 digits."},"id":101}
    const testType = await page.$(goto.pageIds.testTypeId);
    await testType.type("0"); // 0: none params 1: common params to request 2: more params
    await goto.check(page, JSON.stringify(res));
  });
});