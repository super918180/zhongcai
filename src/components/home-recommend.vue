<template lang="pug">
  .home-recommend
    .title
      img.title-icon(src="/static/assets/home-recommend/vip.png")
      .title-text 精品推荐
    .content
      img.flag(src="/static/assets/home-recommend/flag.png")
      img.main(src="/static/assets/home-recommend/main.jpg")
      .bottom-text 累计销售500件

</template>

<script>
  export default {
    props: {},
    methods: {}
  }
</script>

<style lang="less" scoped>
  @import "../styles/index";

  .home-recommend {
    width: 100%;
    color: @text-base;
    .title {
      display: flex;
      align-items: center;
      justify-content: start;
      height: 80px;
      .title-icon {
        width: 50px;
        height: 50px;
        margin: 0 20px;
      }
      .title-text {
        font-size: 30px;
      }
    }
    .content {
      position: relative;
      padding: 0 20px;
      width: 100%;
      box-sizing: border-box;
      .flag {
        position: absolute;
        top: 25px;
        left: 15px;
        width: 130px;
        height: 63px;
      }
      .main {
        width: 100%;
        height: 390px;
      }
      .bottom-text {
        height: 80px;
        line-height: 80px;
        font-size: 28px;
        background: rgba(0, 0, 0, 0.5);
        position: absolute;
        color: #fff;
        text-align: right;
        bottom: 0;
        left: 0;
        right: 0;
        box-sizing: border-box;
        margin: 0 20px;
        padding-right: 20px;
      }
    }
  }
</style>
