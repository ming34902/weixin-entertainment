import homeService from '../../services/homeService.js'

// belleType.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    id: '',
    belleID:'',
    belleTypeData: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ title: options.name, id: options.id });
    wx.setNavigationBarTitle({
      title: this.data.title
    });
    console.log("course种类页接收的options:", options);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 根据id值，请求 美女分类
    homeService.getHomeBelleTypeData(this.data.id)
      .then(
      (data) => {
        console.log('belleType的成功回调了');
        console.log(data);
        this.setData({ belleTypeData: data });
      },
      () => {
        console.log('belleType的失败回调了');
      }
      )
  },
  toDetail(ev) {
    console.log('点击了');
    //取出点击的是哪个item
    console.log();
    // var name = ev.currentTarget.dataset.name;
    var belleID = ev.currentTarget.dataset.id;
    //进入详情页
    wx.navigateTo({
      //绝对路径写法
      // url: '/pages/home/sellDetail/detail?name='+name
      //相对路径写法
      url: '../courseDetail/belleDetail?' + '&id=' + belleID
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