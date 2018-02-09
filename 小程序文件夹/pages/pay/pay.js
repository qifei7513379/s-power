// pages/pay/pay.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    paylist:[
      {
        img:"../../images/index-news.jpg",
        title: "Insane Speed改装717HP本田思域coupe",
        checked: true,
        price:1388,
        cou:0,
        name:"p1"
      },
      {
        img: "../../images/index-news.jpg",
        title: "Insane Speed改装717HP本田思域coupe",
        checked: true,
        price:688,
        cou:0,
        name: "p2"
      },
      {
        img: "../../images/index-news.jpg",
        title: "Insane Speed改装717HP本田思域coupe",
        checked: true,
        price: 1388,
        cou: 0,
        name: "p1"
      },
      {
        img: "../../images/index-news.jpg",
        title: "Insane Speed改装717HP本田思域coupe",
        checked: true,
        price: 688,
        cou: 0,
        name: "p2"
      },
      {
        img: "../../images/index-news.jpg",
        title: "Insane Speed改装717HP本田思域coupe",
        checked: true,
        price: 1388,
        cou: 0,
        name: "p1"
      },
      {
        img: "../../images/index-news.jpg",
        title: "Insane Speed改装717HP本田思域coupe",
        checked: true,
        price: 688,
        cou: 0,
        name: "p2"
      }
    ],
    totle:0,
    num: 0,
    check:true,
    all_checked:true
  },
  jian: function (e) {
    var index = e.target.dataset.index;
    var paylist = this.data.paylist;
    if (paylist[index].cou>0){
      paylist[index].cou = paylist[index].cou - 1; 
    }else{
      paylist[index].cou = 0
    }        
    this.setData({
      paylist:paylist
    })
    var t = 0;
    for(var i = 0;i<paylist.length;i++){
      t += paylist[i].price*paylist[i].cou;
    }
    this.setData({
      totle:t
    })
  },
  jia: function (e) {
    var index = e.target.dataset.index;
    var paylist = this.data.paylist;
    paylist[index].cou = paylist[index].cou + 1;
    this.setData({
      paylist: paylist
    })
    var t = 0;
    for (var i = 0; i < paylist.length; i++) {
      t += paylist[i].price * paylist[i].cou;
    }
    this.setData({
      totle: t
    })
  },
  checkboxChange: function (e) {
    var index = e.target.dataset.index;
    var length = this.data.paylist.length;
    var paylist = this.data.paylist;
    var all_checked = true;
    paylist[index].checked = !paylist[index].checked
    this.setData({
      paylist:paylist
    })
    for (let i = 0; i < length;i++){
      if (paylist[i].checked==false){
        var all_checked=false;
        break;
      }else{
        var all_checked = true;
      }    
    }
    this.setData({
      all_checked: all_checked
    })
  },
  checkboxChangeTotle: function (e) {
    var length = this.data.paylist.length;
    var paylist = this.data.paylist;
        this.setData({
          all_checked: !this.data.all_checked
        })
        if (this.data.all_checked==true){
          for(var i=0;i<length;i++){
            paylist[i].checked = true
          }
        }else{
          for (var i = 0; i < length; i++) {
            paylist[i].checked = false
          }
        }
        this.setData({
          paylist:paylist
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