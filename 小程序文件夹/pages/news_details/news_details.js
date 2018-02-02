Page({
  data: {
    news_det_bt:"Insane Speed改装717HP本田思域coupe"
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
