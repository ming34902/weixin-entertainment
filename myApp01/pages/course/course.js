import homeService from '../services/homeService.js'

// course.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    icon:{
      iconPath:[
            
      ],
      title:[

      ],
      iconColor:[

      ]
    },
    BelleType:[],
    bellePath:[
      {
        imgPath: '../../lib/images/belle/c01.jpg',
        title:'清纯',
        id:1,
      },{
        imgPath: '../../lib/images/belle/c02.jpg',
        title: '性感',
        id: 2,
      },{
        imgPath: '../../lib/images/belle/c03.jpg',
        title: '气质',
        id: 3,
      },{
        imgPath: '../../lib/images/belle/c04.jpg',
        title: '唯美',
        id: 4,
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 请求belle数据
    homeService.getHomeBelleData().then(
      (data) => {
        this.setData({ BelleType: data });
        console.log("course页面BelleType请求：", this.data.BelleType);
      },
      (error) => {
        console.log('请求出错了');
      }
    )
  },
  toType(ev) {
    console.log('点击了');
    //取出点击的是哪个item
    console.log();
    var name = ev.currentTarget.dataset.name;
    var id = ev.currentTarget.dataset.id;
    //进入详情页
    wx.navigateTo({
      //绝对路径写法
      // url: '/pages/home/sellDetail/detail?name='+name
      //相对路径写法
      url: '../component/courseList/belleType?' + '&id=' + id+'&name='+name
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

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