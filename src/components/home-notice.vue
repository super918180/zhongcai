<template lang="pug">
  .home-notice
    img.notice-icon(src="/static/assets/home-notice/notice.png")
    .notice-text 今日头条
    img.notice-split(src="/static/assets/home-notice/split.png")
    .notice-text 全场2块五
</template>

<script>
  export default {
    props: {},
    methods: {}
  }
</script>

<style lang="less" scoped>
  @import "../styles/index";

  .home-notice {
    color: @text-base;
    height: 60px;
    font-size: 28px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    .notice-icon {
      width: 50px;
      height: 50px;
    }
    .notice-split {
      height: 50px;
      width: 15px;
    }
    .notice-text {
      margin: 0 20px;
    }
  }
</style>
