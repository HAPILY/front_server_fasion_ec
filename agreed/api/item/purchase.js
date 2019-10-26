module.exports = {
  request: {
    path: "/api/item/purchase",
    method: "POST"
  },
  response: {
    body: {
      status: "SUCCESS",
      data: {
        message: "購入が完了しました"
      }
    }
  }
};
