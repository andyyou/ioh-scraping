var Xray = require("x-ray");
var x = Xray();

x("http://ioh.tw/talks", "article.talk", [{
  url: "> a@href",
  name: "> a@title",
  avatar: "img@src",
  school: x(".schools", ["a"]),
  department: ".category a",
  description: "p@html", 
}])
.paginate(".pager > .next@href")
.limit(15)
.write("result.json")
