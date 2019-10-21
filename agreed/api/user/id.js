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
        first_name: "Takao",
        last_name: "Shogo",
        birthday: "1996-05-19",
        mail: "taka@hogehgoe.com",
        tel: "09012345678",
        zip_code: "1111111",
        address: "東京都西東京市芝久保町33-3-3 スカイハイつ西原2001"
      }
    }
  }
};
