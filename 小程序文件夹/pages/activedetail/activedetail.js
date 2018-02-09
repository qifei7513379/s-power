// pages/activedetail/activedetail.js
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    src: "../../images/index-news.jpg",
    price:899,
    title:"旅游 | 春天了别宅在家，约上驴友去旅行吧！",
    time:"周六",
    add:"@朱家古镇",
    num:34,
    coll:true,
    address:"高新绿地玫瑰城大唐电信10层",
    date:"2017-12-01 至 2017-12-01",
    content: "这款SV Roadster似乎没有增压器，但是它配备了Novitec的F1灵感镍合金排气系统，该排气系统可以排出21公斤的重量，并有助于减少背压。"
  },
  coll: function () {
    this.setData({
      coll: !this.data.coll
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