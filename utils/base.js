import {Config} from './config.js'

class Base{
    /**
     * 构造函数
     */
  constructor(){     
      this.baseRequestUrl = Config.restUrl;
  }

    /**
     * 请求方法
     * @param params
     */
  request(params,noRefetch){
    var url = this.baseRequestUrl + params.url;
    var that = this;
      if (!params.type) {
          params.type == 'GET';
      }
      wx.request({
          url:url,
          data:params.data,
          method:params.type,
          header:{
              'content_type':'application/json',
              'token':wx.getStorageSync('token')
          },
          success:function (res) {           
              var code = res.statusCode.toString();
              var startChar = code.charAt(0);
              if(startChar == '2')
              {
                params.sCallback && params.sCallback(res.data);
                console.log(res)
              }else{
                if(code == '401'){
                  if (!noRefetch){
                    that._refetch(params)
                  }                  
                }
                params.eCallback && params.eCallback(res.data);
              }
              
                           
          },
          fail:function (err) {
              console.log(err);
          }
      })
      
  }

  _refetch(params){
    var token = new Token()
    token.getTokenFromServer((token)=>{
      this.request(params,true)
    })
  }

    /**
     * 获取元素上绑定的值
     */
   getDataSet(event,key){
       return event.currentTarget.dataset[key];
    }
}

export {Base}