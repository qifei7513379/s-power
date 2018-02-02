//liansuo.js
// This is our App Service.
// This is our data.
var helloData = {
  name: 'WeChat'
}

// Register a Page.
Page({
  // 数据类js
  data: {
    // 首页新闻列表
    index_news: [{
      a: "",
      img: "../../images/index-news.jpg",
      bt: "轰下卡拉卡!轰下卡拉卡!轰下卡拉卡!轰下卡拉卡!轰下卡拉卡!",
      bool: true,
      a1: "/#性能/ 22小时前",
      a2: "和名字一样，Insane Speed汽车改装店有些疯狂，它打造了许多高性能的作品，从1000多马力的EVO和Supra到双涡轮增压的兰博基尼。",
      uniqu: 0,
      index_dz: "index_dz",
      dz: "21",
      index_news_com: "",
      index_news_for: ""
    }, {
      a: "",
      img: "../../images/index-news.jpg",
      bt: "轰下卡拉卡!轰下卡拉卡!轰下卡拉卡!轰下卡拉卡!轰下卡拉卡!",
      bool: false,
      a1: "/#性能/ 22小时前",
      a2: "和名字一样，Insane Speed汽车改装店有些疯狂，它打造了许多高性能的作品，从1000多马力的EVO和Supra到双涡轮增压的兰博基尼。",
      uniqu: 1,
      index_dz: "",
      dz: "21",
      index_news_com: "",
      index_news_for: ""
    }],
    fenxiang: false
  },
  // 当页面加载完成时间执行
  onLoad: function () {

  },
  fenxiang1: function () {
    this.setData({
      fenxiang: !this.data.fenxiang
    })
  },
  fx_t: function () {
    this.setData({
      fenxiang: !this.data.fenxiang
    })
  }
});












