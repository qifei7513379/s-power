// pages/joinactive/joinactive.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    price1:188,
    price2:88,     
    num1: 0,
    num2: 0,
    totle:0 
  },
  bindPickerChange: function (e) {
    var index = e.target.dataset.index;
    console.log("index:",index)
    console.log('e.detail.value:', e.detail.value)    
    var joinlist = this.data.joinlist  
    joinlist[index].ind = e.detail.value
    console.log('joinlist:', joinlist)
    this.setData({
      joinlist:joinlist
    })
  },
  add:function(e){
    var joinlist = this.data.joinlist
    var num = joinlist.length
    joinlist.push({
      array: [
        "成人",
        "儿童"
      ],
      ind: 0,
      num:num,
      shan:true
    })  
    this.setData({
      joinlist: joinlist
    })
  },
  jian1:function(){
    var num2 = this.data.num2
    var num1 = this.data.num1-1
    var t1 = this.data.price1*num1
    var t2 = this.data.price2*num2
    var totle = t1+t2
    if(num1 >=0){
      this.setData({
        num1: num1
      })
      this.setData({
        totle:totle
      })
    }else{
      this.setData({
        num1:0
      })
      this.setData({
        totle: t2
      })
    }    
  },
  jian2: function () {
    var num1 = this.data.num1
    var num2 = this.data.num2-1
    var t1 = this.data.price1 * num1
    var t2 = this.data.price2 * num2
    var totle = t1 + t2
    if (num2 >= 0) {
      this.setData({
        num2: num2
      })
      this.setData({
        totle: totle
      })
    } else {
      this.setData({
        num2: 0
      })
      this.setData({
        totle: t1
      })
    }    
  },
  jia1: function () {
    var num1 = this.data.num1+1
    var num2 = this.data.num2
    var t1 = this.data.price1 * num1
    var t2 = this.data.price2 * num2
    var totle = t1 + t2
    this.setData({
      num1: num1
    })
    this.setData({
      totle: totle
    })
  },
  jia2: function () {
    var num2 = this.data.num2+1
    var num1 = this.data.num1
    var t1 = this.data.price1 * num1
    var t2 = this.data.price2 * num2
    var totle = t1 + t2
    this.setData({
      num2: num2
    })
    this.setData({
      totle: totle
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
  },
  shan:function(e){
    var joinlist = this.data.joinlist
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