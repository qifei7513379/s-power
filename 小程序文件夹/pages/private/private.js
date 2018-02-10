//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    gender:true,
    carlist:[
      {name:"奥迪 100",type:"1.8L"},
      { name: "凤凰 28", type: "0.0L" }
    ]
  },
  //事件处理函数
  // bindViewTap: function () {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  onLoad: function () {
  //   if (app.globalData.userInfo) {
  //     this.setData({
  //       userInfo: app.globalData.userInfo,
  //       hasUserInfo: true
  //     })
      
  //   } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //   }
    // } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      // wx.getUserInfo({
      //   success: res => {
      //     app.globalData.userInfo = res.userInfo
      //     this.setData({
      //       userInfo: res.userInfo,
      //       hasUserInfo: true
      //     })
          
      //   }
      // })
    }
    ,
  bindViewTap: function () {
    wx.navigateTo({
      url: '../addcar/addcar'
    })
  },
  deletecar:function(e){
    var carlist = this.data.carlist;
    var index = e.target.dataset.index;
    carlist.splice(index,1)
    this.setData({
      carlist:carlist
    })
  },
  onShow:function(){
    var that=this;
    if (that.data.userInfo.gender == 1) {
      that.setData({
        gender:true
      })
    }else{
      that.setData({
        gender: false
      })
    };  
    wx.getUserInfo({
      success: res => {
        app.globalData.userInfo = res.userInfo
        that.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  // getUserInfo: function (e) {
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // }
})
