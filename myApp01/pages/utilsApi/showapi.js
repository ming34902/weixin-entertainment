
// 来自  showapi 的api接口
// http://route.showapi.com/254-1?
// showapi_appid=44541&showapi_sign=54e5bb1ca2a94499b48ffd8a61291b9c
// &typeId=1&page=1&space=day

// showapi  接口
const hostName = 'http://route.showapi.com';

// 这是 新浪微博接口编码
const type1 ='/254-1';
// 这是 影院排行接口编码  -1 周排行榜接口  
const type2 ='/578-1';
// 这是 淘女郎接口编码
const type3 ='/126-1';
// 这是 美女图集接口编码
const type4 ='/1208-1';
// 这是 美女图集接口编码2 种类
const type6 = '/1208-2';
// 这是 美女图集接口编码2 详情
const type7 = '/1208-3';

// 这是 娱乐花边接口编码  num=10
const type5 ='/198-1';

// 我的 showapi 上的 id和密钥
const showIdSign ='?showapi_appid=44541&showapi_sign=54e5bb1ca2a94499b48ffd8a61291b9c';

// 新浪微博的  种类 type=1 互联网   page页面数1   space=day  日榜单  必带
const PageSpace ='&typeId=1&page=1&space=day';
// 娱乐花边的   num=10 必带  page页面数1
const PageSpace2 = '&page=1&num=10';
// 美女图集的   种类   page页面数1  rows=10 10条信息
const PageSpace3 = '&page=1&rows=10';



export default{
  homeMovieApi: hostName + type2 + showIdSign,
  homeModelApi: hostName + type3 + showIdSign,
  homeBelleApi: hostName + type4 + showIdSign ,
  homeBelleTypeApi: hostName + type6 + showIdSign + PageSpace3,
  homeHuaBianApi: hostName + type5 + showIdSign,
  homeEntertainmentApi: hostName + type5 + showIdSign + PageSpace2,
  homeBelleDetailApi: hostName + type7 + showIdSign ,
}