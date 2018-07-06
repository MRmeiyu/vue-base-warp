// login
function listen(router) {
  router.post("/login", function (req, res) {
    res.json({
      ecode: 0,
      message: "操作成功",
      data:{
        username: "test",
      }
    });
  })
}

exports.listen = listen;
