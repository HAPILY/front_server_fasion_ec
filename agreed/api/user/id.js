module.exports = {
  request: {
    path: "/api/user",
    method: "GET"
  },
  response: {
    body: {
      status: "SUCCESS",
      data: {
        id: 1,
        name: "Shogo Takao"
      }
    }
  }
};
