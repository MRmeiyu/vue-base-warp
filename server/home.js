// home
function listen(router) {
  router.post("/home/test", function (req, res) {
    res.json({
      ecode: 0,
      message: "操作成功",
      data: "home data"
    });
  })
}

exports.listen = listen;
