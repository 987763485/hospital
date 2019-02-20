// pages/category/category.js
import {Category} from './category-model.js'
var category = new Category
Page({

  /**
   * 页面的初始数据
   */
  data: {    
    currentMenuIndex:0,
    caseLoad:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._load();
  },

  _load:function(){
    category.getCategoryData((data)=>{
      this.setData({
        'categorys': data
      })
      category.getCasessByCategory(data[0].Id,(res)=>{
        var dataObj = {
          caseData: res,
          headImgUrl:data[0].head_img_url.url,
          title:data[0].title
        }
        this.data.caseLoad[0] = dataObj;        
        this.setData({
          'categoryItem': dataObj
        })
      })
    })
  },
  /**
   * 分类切换
   */
  getCategoryItem:function(event){
    var index =  category.getDataSet(event,'index')
    var id = this.data.categorys[index].Id    
    this.setData({
      currentMenuIndex:index    
    })
    if (!this.isLoadedData(index)){      
      category.getCasessByCategory(id,(res)=>{
        var dataObj = {
          caseData: res,
          headImgUrl:this.data.categorys[index].head_img_url.url,
          title: this.data.categorys[index].title
        }
        this.data.caseLoad[index] = dataObj;
        this.setData({
          'categoryItem': dataObj
        })
      })
    }else{
      this.setData({
        'categoryItem': this.data.caseLoad[index]
      })
    }

  },

  isLoadedData: function (index) {
    if (this.data.caseLoad[index]) {
      return true;
    }
    return false;
  },
  /**
   * 进入详情页面
   */
  toDetail:function(event){
    var id = category.getDataSet(event,'id')
    wx.navigateTo({
      url: '/pages/detail/detail?id='+id,
    }) 
  }

 
})