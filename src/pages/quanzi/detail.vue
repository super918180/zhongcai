<template lang="pug">
.container
  .topic-title {{topic.title}}
  .topic-num 1楼
  .topic-info
    .topic-info-item
      img.topic-info-icon(src="/static/assets/quan_hit.png")
      span.topic-info-text {{topic.vc}}
    .topic-info-item
      img.topic-info-icon(src="/static/assets/quan_comment.png")
      span.topic-info-text {{topic.rc}}
  .topic-content(v-html="topic.content")
  .comment-wrap
    comment-item(
      v-for="comment of topic.reply",
      :key="comment.id",
      :comment="comment")
</template>

<script>
import api from '@/utils/api'
import commentItem from '@/components/comment-item'
import { formatComment } from '@/utils'

export default {
  components: {
    commentItem
  },
  data () {
    return {
      loading: false,
      topic: {}
    }
  },
  mounted () {
    Object.assign(this.$data, this.$options.data())
    this.getTopic()
  },
  onReachBottom () {
    this.getComments()
  },
  methods: {
    async getTopic () {
      const { query } = this.$route
      const topic = await api.getTopic(query.id)
      if (!topic) return
      topic.content = topic.content.replace('!--IMG_1--', `img src="${topic.imgs[0]}" width="100%" /`)
      topic.reply = topic.reply.map(formatComment)
      this.topic = Object.assign({
        title: query.title,
        vc: query.vc
      }, topic)
    },
    async getComments () {
      if (this.loading) return
      this.loading = true
      const { query } = this.$route
      const comments = this.topic.reply
      const lastComment = comments[comments.length - 1]
      const newComments = await api.getTopicComments(query.id, lastComment.id)
      if (!newComments) return
      const formatedComments = newComments.map(formatComment)
      this.topic.reply = this.topic.reply.concat(formatedComments)
      this.loading = false
    }
  }
}
</script>

<style lang="less">
.topic-title {
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  font-size: 44px;
}
.topic-num {
  font-size: 24px;
  position: absolute;
  right: 20px;
  top: 20px;
}
.topic-info {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 20px 20px;
  box-sizing: border-box;
  border-bottom: 1px solid #eee;
}
.topic-info-item {
  margin-right: 20px;
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
.topic-content {
  width: 100%;
  font-size: 32px;
  padding: 20px;
  line-height: 1.6;
  border-bottom: 1px solid #eee;
  box-sizing: border-box;
  min-height: 200px;
}

.comment-wrap {
  width: 100%;
}
</style>
