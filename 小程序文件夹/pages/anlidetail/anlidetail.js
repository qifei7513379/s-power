//anlidetail.js
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
      img: "../../images/index-news.jpg",
      bt: "轰下卡拉卡!轰下卡拉卡!轰下卡拉卡!轰下卡拉卡!轰下卡拉卡!",
      a1: "/#性能/ 22小时前",
      a2: "和名字一样，Insane Speed汽车改装店有些疯狂，它打造了许多高性能的作品，从1000多马力的EVO和Supra到双涡轮增压的兰博基尼。",
      num: 0,
      coll: false,
      tanchu:false,
      shopcartlist:[
      {
          title: "Insane Speed改装717HP本田思域coupe",
          img:"../../images/index-news.jpg",
          price:"1388"
      },
      {
        title: "Speed改装717HP本田思域coupe",
        img: "../../images/index-news.jpg",
        price: "688"
      },
      {
        title: "peed改装717HP本田这种高端型高配思域coupe",
        img: "../../images/index-news.jpg",
        price: "1188"
      },
      {
        title: "ed改装717HP本田思域coupe",
        img: "../../images/index-news.jpg",
        price: "1588"
      },
      {
        title: "Insane Speed改装717HP本田思域coupe",
        img: "../../images/index-news.jpg",
        price: "1388"
      },
      {
        title: "Speed改装717HP本田思域coupe",
        img: "../../images/index-news.jpg",
        price: "688"
      },
      {
        title: "peed改装717HP本田这种高端型高配思域coupe",
        img: "../../images/index-news.jpg",
        price: "1188"
      },
      {
        title: "ed改装717HP本田思域coupe",
        img: "../../images/index-news.jpg",
        price: "1588"
      },
      ]
  },
  // 当页面加载完成时间执行
  onLoad: function () {

  },
  colltab: function () {
    this.data.coll = !this.data.coll
    var coll = this.data.coll;
    this.setData({
      coll: coll
    })
  },
  num:function(){
    this.setData({
      num:this.data.num+1
    })
  },
  tanchu: function() {
    this.setData({
      tanchu: !this.data.tanchu
    })
  },
  makePhoneCall: function () {
    var that = this
    wx.makePhoneCall({
      phoneNumber: "15842678026",
      success: function () {
        console.log("成功拨打电话")
      }
    })
  }
});












