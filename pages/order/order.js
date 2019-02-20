// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    startIndex:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  getOrderStarts:function(event){
    var index = event.currentTarget.dataset['index'];    
    this.setData({
      startIndex:index
    })
  }
})