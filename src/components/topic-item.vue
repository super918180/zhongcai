<template lang="pug">
.topic-item(@click="turn")
  img.topic-headimg(src="/static/assets/avatar_default.png")
  img.topic-headimg(:src="topic.author.headimg")
  .topic-title {{topic.tag}} {{topic.title}}
  .topic-info
    .topic-info-item {{topic.author.nickname}}
    .topic-info-item {{topic.type}}
    .topic-info-item
      img.topic-info-icon(src="/static/assets/quan_hit.png")
      span.topic-info-text {{topic.viewcount}}
    .topic-info-item
      img.topic-info-icon(src="/static/assets/quan_comment.png")
      span.topic-info-text {{topic.replycount}}
</template>

<script>
export default {
  props: {
    topic: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    turn () {
      const { id, title, author, viewcount } = this.topic
      this.$router.push({
        path: '/pages/quanzi/detail',
        query: {
          id,
          title,
          author,
          vc: viewcount
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.topic-item {
  padding: 20px 20px 20px 120px;
  border-bottom: 1px solid #eee;
  position: relative;
}
.topic-headimg {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: absolute;
  left: 20px;
  top: 30px;
}
.topic-title {
  font-size: 32px;
}
.topic-info {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 20px;
}
.topic-info-item {
  margin-left: 20px;
  font-size: 24px;
  color: #aaa;
  display: flex;
  align-items: center;
}
.topic-info-icon {
  width: 30px;
  height: 30px;
  margin-right: 8px;
}
</style>
