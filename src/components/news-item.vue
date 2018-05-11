<template lang="pug">
.news-item(
  @click="turn",
  v-if="!news.lapinid")
  img.news-img(:src="news.image", mode="aspectFill")
  .news-text
    .news-title {{news.title}}
    .news-info
      text {{news.postdate}}
      text(v-if="news.commentcount") {{news.commentcount}}评
</template>

<script>
export default {
  props: {
    news: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    turn () {
      const { link } = this.news
      console.log(this.news)
      this.$router.push(link)
    }
  }
}
</script>

<style lang="less" scoped>
.news-item {
  display: flex;
  height: 180px;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.news-img {
  width: 200px;
  height: 150px;
  margin-right: 20px;
}
.news-text {
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.news-title {
  font-size: 30px;
}
.news-info {
  color: #aaa;
  font-size: 24px;
  display: flex;
  justify-content: space-between;
}
</style>
