module.exports = {
  request: {
    path: "/api/user/create",
    method: "POST"
  },
  response: {
    body: {
      status: "SUCCESS",
      data: {
        message: "作成が完了しました"
      }
    }
  }
};
