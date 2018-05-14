<template lang="pug">
  .home-nav
    .nav-item
      img.nav-icon(src="/static/assets/home-nav/1.png")
      .nav-text 新品尝鲜
    .nav-item
      img.nav-icon(src="/static/assets/home-nav/2.png")
      .nav-text 超值购
    .nav-item
      img.nav-icon(src="/static/assets/home-nav/3.png")
      .nav-text 热卖中
    .nav-item
      img.nav-icon(src="/static/assets/home-nav/4.png")
      .nav-text 店长推荐

</template>

<script>
  export default {
    props: {},
    methods: {}
  }
</script>

<style lang="less" scoped>
  @import "../styles/index";

  .home-nav {
    display: flex;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    .nav-item {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 28px;
      color: @text-base;
      .nav-icon {
        margin-bottom: 20px;
        width: 60px;
        height: 60px;
      }
    }
  }
</style>
