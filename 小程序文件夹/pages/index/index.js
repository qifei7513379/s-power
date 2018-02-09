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
      a: "",
      img: "../../images/index-news.jpg",
      bt: "轰下卡拉卡!轰下卡拉卡!轰下卡拉卡!轰下卡拉卡!轰下卡拉卡!",
      bool: true,
      a1: "/#性能/ 22小时前",
      a2: "和名字一样，Insane Speed汽车改装店有些疯狂，它打造了许多高性能的作品，从1000多马力的EVO和Supra到双涡轮增压的兰博基尼。",
      uniqu:0,
      index_dz: false,
      dz: "88",
      coll:false,
      price:866,
      title:"旅游 | 春天了别宅在家，约上驴友去旅行吧！",
      time:"4.8",
      add:"@朱家古镇",
      personnum:"48",
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
      index_dz: false,
      dz: "21",
      coll:false,
      price: 1046,
      title: "旅游 | 给力了我的哥！",
      time: "5.20",
      add: "@朱家隔壁古镇",
      personnum: "80",
      index_news_com: "",
      index_news_for: ""
    },
    {
      a: "",
      img: "../../images/index-news.jpg",
      bt: "轰下卡拉卡!轰下卡拉卡!轰下卡拉卡!轰下卡拉卡!轰下卡拉卡!",
      bool: true,
      a1: "/#性能/ 22小时前",
      a2: "和名字一样，Insane Speed汽车改装店有些疯狂，它打造了许多高性能的作品，从1000多马力的EVO和Supra到双涡轮增压的兰博基尼。",
      uniqu: 0,
      index_dz: false,
      dz: "88",
      coll: false,
      price: 866,
      title: "旅游 | 春天了别宅在家，约上驴友去旅行吧！",
      time: "4.8",
      add: "@朱家古镇",
      personnum: "48",
      index_news_com: "",
      index_news_for: ""
    }],
    fenxiang:false,
    _num:1,
    temp:"news"
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
  },
  clicktab: function(e){
    this.setData({
      _num:e.target.dataset.num     
    })
    this.setData({
      temp:e.target.dataset.temp
    })
  },
  colltab: function(e){    
    var index=e.target.dataset.index;
    this.data.index_news[index].coll=!this.data.index_news[index].coll
    var index_news = this.data.index_news;
    this.setData({
      index_news: index_news
    })
  },
  index_dz: function(e) {
    var index = e.target.dataset.index;
    this.data.index_news[index].index_dz = !this.data.index_news[index].index_dz;
    if(this.data.index_news[index].index_dz ==false){
      this.data.index_news[index].dz--
    }else{
      this.data.index_news[index].dz++
    }
    var index_news = this.data.index_news;
    this.setData({
      index_news: index_news   
    })
  }
});












