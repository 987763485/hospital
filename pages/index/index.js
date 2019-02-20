//index.js
import { Index } from './index-model.js';
var index = new Index;
//获取应用实例
const app = getApp()
Page({
  data: {
   
  },
  //事件处理函数 
  onLoad: function () {
   this._loadData();
  },

  _loadData:function(){    
    index.getBannerData((res1)=>{     
      this.setData({
          'bannerArr':res1
      })
    })
    index.getThemeData((res2)=>{
      this.setData({
        'themeArr':res2
      })
    })
    index.getDiscountData((res3)=>{
      this.setData({
        'discountArr':res3
      })
    })
  },
  /**
   * 拨打电话
   */
  phoneCall:function(){
    wx.makePhoneCall({
      phoneNumber: '059524665120',
    })
  },
  /**
   * 打开地图
   */
  toLocation:function(){ 
    var latitude = 24.901270
    var longitude = 118.565180
    wx.openLocation({
      latitude: latitude,
      longitude: longitude,
      name: "泉州南方医院",
      address: "(公交:20,24,26,28)",
      scale: 28
    })   
  },
  /**
   * 下拉刷新
   */
  onPullDownRefresh: function () {
    this._loadData(() => {
      wx.stopPullDownRefresh()
    });
  }, 
  /**
   * 分享
   */
  onShareAppMessage: function () {
    return {
      title: '南方医院',
      path: 'pages/index/index'
    }
  }
})
