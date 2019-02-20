// pages/groupbuy/groupbuy.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    groupBuy:[1,2,3,4,5],
    input:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {       
  },

  toDetail:function(){
    wx.navigateTo({
      url: '/pages/detail/detail',
    })    
  },
  onFocus:function(){
    this.setData({
      input:1
    })
  },
  offFocus:function(){
    this.setData({
      input: 0
    })
  }  
})