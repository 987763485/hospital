import {Base} from '../../utils/base.js';

class Detail extends Base{
  constructor(){
    super();
  }

  getCaseDetail(id,callback){
    var params = {
      url:'cases/'+id,
      sCallback:function(res){
        callback && callback(res)
      }
    }
    this.request(params)
  }

}

export {Detail}