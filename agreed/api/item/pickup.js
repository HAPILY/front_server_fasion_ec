module.exports = {
  request: {
    path: "/api/item",
    method: "GET",
    query: {
      type: "pickup"
    }
  },
  response: {
    body: {
      status: "SUCCESS",
      data: [
        {
          id: 1,
          name: "Hot Dora Butter2入ギフトBOX(オリジナル２個)",
          price: 1000,
          tax: 1100,
          content: "",
          images: [
            {
              id: 1,
              src:
                "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            },
            {
              id: 2,
              src:
                "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            }
          ]
        },
        {
          id: 2,
          name: "Hot Dora Butter2入ギフトBOX(オリジナル２個)",
          price: 1000,
          tax: 1100,
          content: "",
          images: [
            {
              id: 1,
              src:
                "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            },
            {
              id: 2,
              src:
                "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            }
          ]
        },
        {
          id: 3,
          name: "Hot Dora Butter2入ギフトBOX(オリジナル２個)",
          price: 1000,
          tax: 1100,
          content: "",
          images: [
            {
              id: 1,
              src:
                "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            },
            {
              id: 2,
              src:
                "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            }
          ]
        }
      ]
    }
  }
};
