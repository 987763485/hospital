import {Config} from './config.js'
class Token{
  constructor(){
   this.verifyUrl = Config.restUrl + 'token/verify';
   this.tokenUrl = Config.restUrl + 'token/user'
  }
  verify(){
    var token = wx.getStorageSync('token')    
    if(!token){
      this.getTokenFromServer()
    }else{
      this._verifyFromServer(token)
    }
  }
  /**
   * 获取token
   */
  getTokenFromServer(callback){
    var that = this
    wx.login({
      success:function(res){
        wx.request({
          url: that.tokenUrl,
          method:'POST',
          data:{
            code:res.code
          },
          success:function(res){
            wx.setStorageSync('token', res.data.token)
            callback && callback(res.data.token)
          }
        })
      }
    })
  }
  /**
   * 验证token
   */
  _verifyFromServer(token){
    var that = this
    wx.request({
      url: that.verifyUrl,
      method:'POST',
      data:{
        token:token
      },
      success:function(res){
        var valid = res.data.isValid
        if(!valid){
          that.getTokenFromServer();
        }
      }
    })
  }
}

export {Token}