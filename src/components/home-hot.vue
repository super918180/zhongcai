<template lang="pug">
  .home-hot
    .hot-left
      .left-header
        img.header-icon(src="/static/assets/home-hot/xian.jpg")
        .header-text 时抢购
        .header-des 全场六折起
      img.header-bottom(src="/static/assets/home-hot/1.jpg")
    .hot-right
      .right-up
        .right-left
          .right-text 天天特价
          .right-des 美国樱桃 29.9包邮
        img.right-img(src="/static/assets/home-hot/2.jpg")
      .right-down
        .right-left
          .right-text 会员专享
          .right-des  冲500元
        img.right-img(src="/static/assets/home-hot/3.jpg")
</template>

<script>
  export default {
    props: {},
    methods: {}
  }
</script>

<style lang="less" scoped>
  @import "../styles/index";

  .home-hot {
    color: @text-base;
    display: flex;
    width: 100%;
    height: 220px;
    padding: 30px 0;
    .hot-left {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      box-sizing: border-box;
      border-right: 1px solid #eee;
      .left-header {
        display: flex;
        align-items: baseline;
        .header-icon {
          width: 50px;
          height: 40px;
        }
        .header-text {
          margin: 0 20px 0 20px;
          font-size: 30px;
        }
        .header-des {
          font-size: 22px;
          color: @brand-secondary;
        }
      }
      .header-bottom {
        width: 230px;
        height: 140px;
      }
    }
    .hot-right {
      height: 100%;
      flex: 1;
      .right-up {
        border-bottom: 1px solid #eee;
      }
      .right-up, .right-down {
        height: 50%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        box-sizing: border-box;
      }
      .right-left {
        width: 50%;
        height: 80px;
        margin-left: 30px;
        box-sizing: border-box;
        display: flex;
        align-items: start;
        justify-content: space-between;
        flex-direction: column;
        .right-text {
          font-size: 30px;
        }
        .right-des {
          font-size: 22px;
          color: @brand-secondary;
        }
      }
      .right-img {
        width: 120px;
        height: 80px;
      }
    }
  }
</style>
