module.exports = {
  request: {
    path: "/api/user",
    method: "GET"
  },
  response: {
    body: {
      status: "SUCCESS",
      user: {
        id: 1,
        first_name: "Takao",
        last_name: "Shogo",
        birthday: "1996-05-19"
      }
    }
  }
};
