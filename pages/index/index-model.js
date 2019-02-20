import {Base} from '../../utils/base.js';
class Index extends Base{
  constructor(){
    super();
  }
  getBannerData(callback){
    var params = {
      url:'banner',
      sCallback:function (res) {
            callback && callback(res);
        }
    }
    this.request(params);
  }
  getThemeData(callback){
    var params = {
      url:'theme'+'?ids=1,2,3',
      sCallback:function(res){
        callback && callback(res)
      }
    }
    this.request(params)
  }
  getDiscountData(callback){
    var params = {
      url:'discount',
      sCallback:function(res){
        callback && callback(res)
      }
    }
    this.request(params)
  }
}

export {Index}