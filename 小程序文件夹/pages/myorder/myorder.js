// pages/myactive/myactive.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    temp: "a",
    _num: 1,
    orderlist: [
      {
        img:"../../images/index-news.jpg",
        title: "Insane Speed改装717HP本田思域coupeed改装717HP本田思域cddswo",
        price: 1688,
        time: "2018-01-15"
      },
      {
        img: "../../images/index-news.jpg",
        title: "Insane Speed改装717HP本田思域coupe",
        price:2688,
        time: "2018-01-15"
      },
      {
        img: "../../images/index-news.jpg",
        title: "Insane Speed改装717HP本田思域coupe",
        price: 3688,
        time: "2018-01-15"
      },
      {
        img: "../../images/index-news.jpg",
        title: "Insane Speed改装717HP本田思域coupe",
        price: 4688,
        time: "2018-01-15"
      },
    ],
    readylist: [
      {
        img: "../../images/index-news.jpg",
        title: "Insane Speed改装717HP本田思域coupeed改装717HP本田思域cddswo",
        price: 1688,
        time: "2018-01-15"
      },
      {
        img: "../../images/index-news.jpg",
        title: "Insane Speed改装717HP本田思域coupe",
        price: 2688,
        time: "2018-01-15"
      },
      {
        img: "../../images/index-news.jpg",
        title: "Insane Speed改装717HP本田思域coupe",
        price: 3688,
        time: "2018-01-15"
      },
      {
        img: "../../images/index-news.jpg",
        title: "Insane Speed改装717HP本田思域coupe",
        price: 4688,
        time: "2018-01-15"
      },
    ]
  },
  delete: function (e) {
    var orderlist = this.data.orderlist;
    var index = e.target.dataset.index;
    orderlist.splice(index, 1)
    this.setData({
      orderlist: orderlist
    })
  },
  clicktab: function (e) {
    this.setData({
      _num: e.target.dataset.num
    })
    this.setData({
      temp: e.target.dataset.temp
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})