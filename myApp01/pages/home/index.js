import homeService from '../services/homeService.js'
import API2 from '../utilsApi/showapi.js'

var app = getApp();
// 当前页数  
var pageNum = 1;  
var NumNum=10;
var ccc=0;
// 加载数据  
var loadMsgData = function (that) {
  that.setData({
    hidden: false
  });
  var allMsg = that.data.msgList;
  console.log("再次请求数据时候，pageNum为", pageNum)
  wx.request({
    url: API2.homeHuaBianApi + '&num=' + NumNum + '&page=' + pageNum,
    success: function (res) {
      console.log('当前list数组内装的news数据：', that.data.msgList);
      // console.log(res);
      console.log('请求的homeEntertainmentApi的数据:', res.data.showapi_res_body.newslist);
       // 不能直接 allMsg.push(res); 相当于list.push(list);打乱了结构  
      for (var i = 0; i < res.data.showapi_res_body.newslist.length; i++) {
        allMsg.push(res.data.showapi_res_body.newslist[i]);
      }
      // allMsg.push(res.data.showapi_res_body.newslist)
      that.setData({
        msgList: allMsg
      });
      // pageNum++;
      that.setData({
        hidden: true
      });
    },
  })

}  
// index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
     imgPath:[
       '../../../lib/images/banner/b00.jpg',
       '../../../lib/images/banner/b04.jpg',
       '../../../lib/images/banner/b02.jpg',
       '../../../lib/images/banner/b05.jpg'
     ],
     homeNewsList:[],
     msgList: [],
     hidden: true,
     scrollTop: 0,
     scrollHeight: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // // 请求news数据
    // homeService.getHomeNewsData().then(
    //   (data) => {
    //     this.setData({ homeNewsList: data });
    //     console.log("home页面homeNewsList请求：", this.data.homeNewsList);
    //   },
    //   (error) => {
    //     console.log('请求出错了');
    //   }
    // )
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          windowHeight: res.windowHeight,
          windowWidth: res.windowWidth
        })
      }
    });
    loadMsgData(that); 
  },
 
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
      // wx.request({
        
      // })
      
         
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  }
  
  ,

  // //滚动到顶部 上拉加载数据 上拉动态效果不明显有待改善  
  // pullUpLoad: function () {
  //   var that = this;
  //   pageNum=0;
  //   that.setData({
  //     msgList: [],
  //     // scrollTop: 0
  //   });
  //   loadMsgData(that);
  // }
  // ,
  // 定位数据  
  scroll: function (event) {
    console.log("我再滚动...")
    var that = this;
    that.setData({

      // scrollTop: event.detail.scrollTop
    });
  }
  ,  


  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },
  // //滚动到底部  下拉刷新数据  
  pullDownRefresh: function() {
    var that = this;
     ccc++;
    pageNum++;
    console.log("底部上拉了，pageNum+1=", pageNum);
    console.log("滚到底部了，此时windowHeight：", this.data.windowHeight + pageNum*555)
    that.setData({
      // msgList: [],
      scrollTop: this.data.windowHeight + pageNum * 555,
    });
    loadMsgData(that);
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
   
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})