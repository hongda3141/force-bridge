import goto from "./goto";

const pageName = "send_transaction.html";
beforeEach(async () => {
  await goto.goto(page, pageName);
});

describe("send_transaction", () => {
  it("send_transaction_1", async () => {
    const resTx = {
      "cell_deps": [],
      "hash": "0xf06bbfb53d58f1c94c88f3a7cde40f56004af7b68c17b0bd201169c516647324",
      "header_deps": [],
      "inputs": [
        {
          "previous_output": {
            "index": "0xffffffff",
            "tx_hash": "0x0000000000000000000000000000000000000000000000000000000000000000"
          },
          "since": "0x214f"
        }
      ],
      "outputs": [
        {
          "capacity": "0x19ff619502",
          "lock": {
            "args": "0x43d509d97f26007a285f39241cffcd411157196c",
            "code_hash": "0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8",
            "hash_type": "type"
          },
          "type": null
        }
      ],
      "outputs_data": [
        "0x"
      ],
      "version": "0x0",
      "witnesses": [
        "0x690000000c00000055000000490000001000000030000000310000009bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8011400000043d509d97f26007a285f39241cffcd411157196c100000004146065c15956f5b65a1f03cc65b4b7a"
      ]
    }
    const  res = {
      "jsonrpc": "2.0",
      "id": 102,
      "method": "send_transaction",
      "params": [
        resTx,
      ]
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



// {
//   "cell_deps": [],
//   "hash": "0xf06bbfb53d58f1c94c88f3a7cde40f56004af7b68c17b0bd201169c516647324",
//   "header_deps": [],
//   "inputs": [
//     {
//       "previous_output": {
//         "index": "0xffffffff",
//         "tx_hash": "0x0000000000000000000000000000000000000000000000000000000000000000"
//       },
//       "since": "0x214f"
//     }
//   ],
//   "outputs": [
//     {
//       "capacity": "0x19ff619502",
//       "lock": {
//         "args": "0x43d509d97f26007a285f39241cffcd411157196c",
//         "code_hash": "0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8",
//         "hash_type": "type"
//       },
//       "type": null
//     }
//   ],
//   "outputs_data": [
//     "0x"
//   ],
//   "version": "0x0",
//   "witnesses": [
//     "0x690000000c00000055000000490000001000000030000000310000009bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8011400000043d509d97f26007a285f39241cffcd411157196c100000004146065c15956f5b65a1f03cc65b4b7a"
//   ]
// }



