module.exports = {
  request: {
    path: "/api/news/:id",
    method: "GET"
  },
  response: {
    body: {
      status: "SUCCESS",
      data: {
        id: 1,
        title: "Hot Dora Butter2入ギフトBOX(オリジナル２個)",
        thumbnail: `https://www.gstatic.com/webp/gallery/2.sm.jpg`,
        webp: `https://www.gstatic.com/webp/gallery/2.sm.webp`,
        content: "オリジナル２個のギフトセットです。<br><br>バターの衝撃。香りを堪能できる王道<br>(小豆あん+バター)<br><br>新商品ホットドラバターは、その名の通り、小豆あんに加えバターを挟んだどら焼きです。<br>レンジで温めることで、小豆あんがトロトロ、皮はしっとりふわふわの食感になり、バターがジュワッと染み込みます。<br><br>ホットドラバターオリジナルは、小豆あんとバターの王道の組み合わせ!<br>バターは発酵バターと香りを際立たせるマーガリンを配合。<br>レンジから出した瞬間の香りが食欲をそそります。<br>温め時間: 600W 25~ 35秒/500W 30~40秒<br><br>この冬は、ぜひホッカホカのどら焼きで、心も体も温まってください。",
      },
    }
  }
};
