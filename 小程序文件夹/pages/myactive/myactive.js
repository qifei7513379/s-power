// pages/myactive/myactive.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    temp: "a",
    _num: 1,
    activelist: [
      {
        img: "../../images/index-news.jpg",
        title: "旅游 | 春天了别宅在家，约上驴友去旅行吧！",
        price: 1688,
        time: "4.8  周六 ",
        zhuangtai: "a",
        num:34,
        address:"@朱家古镇"
      },
      {
        img: "../../images/index-news.jpg",
        title: "旅游 | 春天了别宅在家，约上驴友去旅行吧！",
        price: 2688,
        time: "4.8  周六 ",
        zhuangtai:"b",
        num: 34,
        address: "@朱家古镇"
      },
      {
        img: "../../images/index-news.jpg",
        title: "旅游 | 春天了别宅在家，约上驴友去旅行吧！",
        price: 3688,
        time: "4.8  周六 ",
        zhuangtai: "c",
        num: 34,
        address: "@朱家古镇"
      },
      {
        img: "../../images/index-news.jpg",
        title: "旅游 | 春天了别宅在家，约上驴友去旅行吧！",
        price: 4688,
        time: "4.8  周六 ",
        zhuangtai: "d",
        num: 34,
        address: "@朱家古镇"
      },
    ],
    tixianlist: [
      {
        img: "../../images/index-news.jpg",
        title: "旅游 | 春天了别宅在家，约上驴友去旅行吧！",
        price: 1688,
        time: "4.8  周六 ",
        zhuangtai: "a",
        num: 34,
        address: "@朱家古镇"
      },
      {
        img: "../../images/index-news.jpg",
        title: "旅游 | 春天了别宅在家，约上驴友去旅行吧！",
        price: 2688,
        time: "4.8  周六 ",
        zhuangtai: "b",
        num: 34,
        address: "@朱家古镇"
      },
      {
        img: "../../images/index-news.jpg",
        title: "旅游 | 春天了别宅在家，约上驴友去旅行吧！",
        price: 3688,
        time: "4.8  周六 ",
        zhuangtai: "c",
        num: 34,
        address: "@朱家古镇"
      },
      {
        img: "../../images/index-news.jpg",
        title: "旅游 | 春天了别宅在家，约上驴友去旅行吧！",
        price: 4688,
        time: "4.8  周六 ",
        zhuangtai: "d",
        num: 34,
        address: "@朱家古镇"
      },
    ]

  },
  delete: function (e) {
    var tixianlist = this.data.tixianlist;
    var index = e.target.dataset.index;
    tixianlist.splice(index, 1)
    this.setData({
      tixianlist: tixianlist
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