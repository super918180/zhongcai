<template lang="pug">
  .homne-position
    .positon-icon-container
      img.positon-icon(src="/static/assets/map.png")
      .positon-text 兴隆家园
      img.positon-right(src="/static/assets/icon-down.png")
    .positon-input-container
      img.positon-find(src="/static/assets/find.png")
      input.positon-input(placeholder="搜索提货点")
</template>

<script>
  export default {
    props: {},
    methods: {}
  }
</script>

<style lang="less" scoped>
  .homne-position {
    width: 100%;
    box-sizing: border-box;
    padding: 0 20px;
    font-size: 30px;
    line-height: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    color: #666;
    .positon-icon-container {
      display: flex;
      align-items: center;
      .positon-icon, .positon-right {
        height: 32px;
        width: 32px;
      }
      .positon-text {
        margin: 0 10px;
      }
    }
    .positon-input-container {
      position: relative;
      .positon-find {
        width: 40px;
        height: 40px;
        position: absolute;
        z-index: 2;
        top: 50%;
        left: 30px;
        transform: translateY(-50%);
      }
      .positon-input {
        margin-left: 10px;
        width: 400px;
        height: 54px;
        border-radius: 27px;
        background: #eee;
        padding-left: 70px;
        font-size: 28px;
      }
    }
  }
</style>
