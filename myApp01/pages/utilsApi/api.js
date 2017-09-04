// 京东万象api
const hostName ='https://way.jd.com';
const contName ='/jisuapi/get';

// https://way.jd.com/jisuapi/get?channel=头条&num=10&start=0&appkey=c9e7288f2cd9c9c80366b10656ff75a6

const ceshiName ='https://way.jd.com/jisuapi/get?channel=头条&num=10&start=0&appkey=c9e7288f2cd9c9c80366b10656ff75a6';
// ?号
const fuhaoApi='?';
// 请求新闻
const newsApi ='channel=头条';

// 默认最小条数10条   start 截取的起始位置
const numApi ='&num=10&start=0';

// 我在京东万象 请求api的个人 key
const myAppkey = '&appkey=c9e7288f2cd9c9c80366b10656ff75a6';




export default{
  HomeNewsApi: hostName + contName + fuhaoApi + newsApi + numApi + myAppkey,
  ceshiName
}