import API from '../utilsApi/api.js'
import API2 from '../utilsApi/showapi.js'

// 娱乐花边
function getHomeNewsData(){
  var p=new Promise((resolve,reject)=>{
     wx.request({
      
       url: API2.homeEntertainmentApi,
       success({data}){
        //  如果请求成功 返回成功值  response
         console.log('请求的homeEntertainmentApi的数据:', data.showapi_res_body.newslist);
         var newData = data.showapi_res_body.newslist.map((item)=>{
            var obj={};
            obj.title = item.title;
            obj.imgPath = item.picUrl;
            // obj.id=item.id;
            obj.url=item.url;
            obj.ctime = item.ctime;
          return obj;
        })
        resolve(newData);
       },
       fail(){
         console.log('请求失败');
         reject();
       }
     })
  });
  return p;
}
// 美女图集 ---
function getHomeBelleData() {
  var p = new Promise((resolve, reject) => {
    wx.request({

      url: API2.homeBelleApi,
      success({ data }) {
        //  如果请求成功 返回成功值  response
        console.log('请求的homeBelleApi的数据:', data.showapi_res_body.data);
        var newData = data.showapi_res_body.data.map((item) => {
          var obj = {};
          obj.title = item.title;
          // obj.imgPath = item.picUrl;
          obj.id=item.id;
          // obj.url = item.url;
          // obj.ctime = item.ctime;
          return obj;
        })
        resolve(newData);
      },
      fail() {
        console.log('请求失败');
        reject();
      }
    })
  });
  return p;
}
// 美女图集种类----------
function getHomeBelleTypeData(id) {
  var p = new Promise((resolve, reject) => {
    wx.request({
      url: API2.homeBelleTypeApi+'&type=' + id,
      success({ data }) {
        //  如果请求成功 返回成功值  response
        console.log('请求的homeBelleTypeApi的数据:', data);
        var newData = data.showapi_res_body.data.map((item) => {
          var obj = {};
          obj.title = item.title;
          // 将 图片地址转字符串   匹配字符串第一个？的下标 是多少
          var myString = item.imgurl;
          // console.log(myString)
          var wx = myString.indexOf("?");
          // console.log(wx)
          var newImg = myString.slice(0,wx)
          // console.log(newImg)
          obj.imgPath = newImg;
          // obj.imgPath="../../lib/images/belle/c01.jpg";
          obj.id = item.id;
          obj.imgcount = item.imgcount;
          // obj.url = item.url;
          obj.ctime = item.ctime;
          return obj;
        })
        resolve(newData);
      },
      fail() {
        console.log('请求失败');
        reject();
      }
    })
  });
  return p;
}
// 美女图集详情----------- 
function getHomeBelleDetailData(id) {
  var p = new Promise((resolve, reject) => {
    wx.request({
      url: API2.homeBelleDetailApi + '&id=' + id,
      success({ data }) {
        //  如果请求成功 返回成功值  response
        console.log('请求的HomeBelleDetailData的数据:', data);
        resolve(data.showapi_res_body.data);
      },
      fail() {
        console.log('请求失败');
        reject();
      }
    })
  });
  return p;
}

export default{
  getHomeNewsData,
  getHomeBelleData,
  getHomeBelleTypeData,
  getHomeBelleDetailData
}