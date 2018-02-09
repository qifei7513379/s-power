// pages/newsdetail/newsdetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src: "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
    title: "Insane Speed改装717HP本田思域coupe",
    sign: "/#性能/ 22小时前",
    content: "和名字一样，Insane Speed汽车改装店有些疯狂，它打造了许多高性能的作品，从1000多马力的EVO和Supra到双涡轮增压的兰博基尼。和名字一样，Insane Speed汽车改装店有些疯狂，它打造了许多高性能的作品，从1000多马力的EVO和Supra到双涡轮增压的兰博基尼。",
    bool: true,
    comment: [
      {
        avatar: "../../images/index-news.jpg",
        username: "leelaomu",
        model: "本田 思域",
        zan: false,
        content: "提到的有些可以注意一下。",
        coll: false,
        time: "9小时前"
      }, {
        avatar: "../../images/index-news.jpg",
        username: "leelaomu",
        model: "本田 思域",
        zan: false,
        content: "长时间沉迷于改装组装EM1 Civic Si，结果是改装出了非常经典的终极产品。",
        coll: false,
        time: "9小时前"
      }, {
        avatar: "../../images/index-news.jpg",
        username: "leelaomu",
        model: "本田 思域",
        zan: false,
        content: "后来看看可以。",
        coll: false,
        time: "9小时前"
      }, {
        avatar: "../../images/index-news.jpg",
        username: "leelaomu",
        model: "本田 思域",
        zan: false,
        content: "垃圾",
        coll: false,
        time: "9小时前"
      }
    ],
    videolist: [  
      {
        src: "../../images/index-news.jpg",
        time: "03′50″",
        title: "800hp 后驱动超跑玩漂移huracan LP580- 2"
      },
      {
        src: "../../images/index-news.jpg",
        time: "03′50″",
        title: "800hp 后驱动超跑玩漂移huracan LP580- 2"
      },
      {
        src: "../../images/index-news.jpg",
        time: "03′50″",
        title: "800hp 后驱动超跑玩漂移huracan LP580- 2"
      }
    ],
    collet: false,
    zannum: 15,
    length: 0
  },
  dz: function (e) {
    var index = e.target.dataset.index;
    this.data.comment[index].coll = !this.data.comment[index].coll;
    if (this.data.comment[index].coll == false) {
      this.data.zannum--
    } else {
      this.data.zannum++
    }
    var zannum = this.data.zannum;
    var comment = this.data.comment;
    this.setData({
      comment: comment
    });
    this.setData({
      zannum: zannum
    })
  },
  col: function (e) {
    var index = e.target.dataset.index;
    this.data.collet = !this.data.collet
    var collet = this.data.collet;
    this.setData({
      collet: collet
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var length = this.data.comment.length
    this.setData({
      length: length
    })
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