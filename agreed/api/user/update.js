module.exports = {
  request: {
    path: "/api/user/update",
    method: "POST"
  },
  response: {
    body: {
      status: "SUCCESS",
      data: {
        message: "更新が完了しました"
      }
    }
  }
};
