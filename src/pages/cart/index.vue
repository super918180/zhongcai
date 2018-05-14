<template lang="pug">
  .container
    swiper.slider-wrap(
    autoplay,
    indicator-dots,
    circular,
    indicator-color="rgba(255, 255, 255, .3)",
    indicator-active-color="rgba(210, 34, 34, .7)")
      swiper-item(
      v-for="slide of slides",
      :key="slide.title")
        .slider-item(@click="$router.push(slide.link)")
          .slider-title {{slide.title}}
          img.slider-img(:src="slide.image", mode="aspectFill")
</template>

<script>
  import wx from 'wx'
  import { mapState, mapActions } from 'vuex'
  import newsItem from '@/components/news-item'

  export default {
    components: {
      newsItem
    },
    computed: {
      ...mapState([
        'slides',
        'news'
      ])
    },
    mounted () {
      this.refresh()
    },
    onPullDownRefresh () {
      this.refresh()
    },
    // onReachBottom () {
    //   this.loadmore()
    // },
    methods: {
      ...mapActions([
        'getSlides',
        'getNewsList'
      ]),
      async refresh () {
        await Promise.all([
          this.getNewsList(true),
          this.getSlides()
        ])
        wx.stopPullDownRefresh()
      }
      // loadmore () {
      //   this.getNewsList()
      // }
    }
  }
</script>

<style lang="less" scoped>
  .slider-wrap {
    width: 100%;
    height: 400px;
  }

  .slider-item {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
  }

  .slider-title {
    max-width: 90vw;
    position: absolute;
    top: 20px;
    right: 0;
    background-color: rgba(0, 0, 0, .3);
    color: #fff;
    padding: 4px 12px;
    font-size: 36px;
  }

  .slider-img {
    width: 100%;
    height: 100%;
  }

  .news-wrap {
    padding: 0 20px;
  }

  .nomore {
    width: 100%;
    line-height: 100px;
    text-align: center;
    font-size: 28px;
    color: #ddd;
  }
</style>
