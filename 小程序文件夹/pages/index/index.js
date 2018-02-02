//index.js
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
      a: "../news_details/news_details",
      img: "../../images/index-news.jpg",
      bt: "轰下卡拉卡!轰下卡拉卡!轰下卡拉卡!轰下卡拉卡!轰下卡拉卡!",
      bool: true,
      a1: "/#性能/ 22小时前",
      a2: "和名字一样，Insane Speed汽车改装店有些疯狂，它打造了许多高性能的作品，从1000多马力的EVO和Supra到双涡轮增压的兰博基尼。",
      index_dz: "index_dz",
      dz: "21",
      index_news_com: "../news_details/news_details",
      index_news_for: "../news_details/news_details"
    }, {
      a: "../news_details/news_details",
      img: "../../images/index-news.jpg",
      bt: "轰下卡拉卡!轰下卡拉卡!轰下卡拉卡!轰下卡拉卡!轰下卡拉卡!",
      bool: false,
      a1: "/#性能/ 22小时前",
      a2: "和名字一样，Insane Speed汽车改装店有些疯狂，它打造了许多高性能的作品，从1000多马力的EVO和Supra到双涡轮增压的兰博基尼。",
      index_dz: "",
      dz: "21",
      index_news_com: "../news_details/news_details",
      index_news_for: "../news_details/news_details"
    }],
    fenxiang:false
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












