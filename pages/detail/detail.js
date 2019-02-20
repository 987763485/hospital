// pages/detail/detail.js
import {Detail} from './detail-model.js'
var detail = new Detail;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTabsIndex:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._load(options)
  },
  _load: function (options){
    var id = options.id
    detail.getCaseDetail(id,(res)=>{
      this.setData({
        cases:res
      })
    })
  },

  toCreatOrder:function(){
    console.log(1)
    wx.navigateTo({
      url: '/pages/creat/creat',
    })
  },

  ontabsItemTap:function(event){
    var index = detail.getDataSet(event,'index')    
    this.setData({
      currentTabsIndex:index
    })
  }
})