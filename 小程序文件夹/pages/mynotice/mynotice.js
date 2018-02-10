// pages/myactive/myactive.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    temp: "a",
    _num: 1,
    noticelist:[
      {
        title:"Insane Speed改装717HP本田思域coupe",
        content: "和名字一样，Insane Speed汽车改装店有些疯狂，它打造了许多高性能的作品，从1000多马力的EVO和Supra到双涡轮增压的兰博基尼。",
        time:"2018-01-15"
      },
      {
        title: "Insane Speed改装717HP本田思域coupe",
        content: "和名字一样，Insane Speed汽车改装店有些疯狂，它打造了许多高性能的作品，从1000多马力的EVO和Supra到双涡轮增压的兰博基尼。",
        time: "2018-01-15"
      },
      {
        title: "Insane Speed改装717HP本田思域coupe",
        content: "和名字一样，Insane Speed汽车改装店有些疯狂，它打造了许多高性能的作品，从1000多马力的EVO和Supra到双涡轮增压的兰博基尼。",
        time: "2018-01-15"
      },
      {
        title: "Insane Speed改装717HP本田思域coupe",
        content: "和名字一样，Insane Speed汽车改装店有些疯狂，它打造了许多高性能的作品，从1000多马力的EVO和Supra到双涡轮增压的兰博基尼。",
        time: "2018-01-15"
      },
    ]
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