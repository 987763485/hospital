import {Base} from '../../utils/base.js'

class Category extends Base{
  constructor(){
    super()
  }

  getCategoryData(callback){
    var params = {
      url:'category/all',
      sCallback:function(res){
        callback && callback(res)
      }
    }
    this.request(params)
  }

  getCasessByCategory(id,callback){   
    var params = {
      url:'cases/by_category?id='+id,
      sCallback:function(res){       
        callback && callback(res)
      }
    }
    this.request(params)
  }
}

export {Category}