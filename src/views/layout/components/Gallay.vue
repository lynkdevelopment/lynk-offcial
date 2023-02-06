<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide
            v-for="(item, index) in imgs"
            :key="index"
        >
          <img class="gallary-img" :src="item" />
        </swiper-slide>

        <!-- 这是底部的数字显示 -->
        <div class="swiper-pagination" slot="pagination"></div>

      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',   //分式表达
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style  scoped>
.container >>> .swiper-container   /* 样式穿透——可以影响不同组件的元素 */

.container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 99;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #000;
  .wrapper{
    height: 0;
    width: 100%;
    padding-bottom: 100%;
  }

    .gallary-img{
      width: 100%;
    }

    .swiper-pagination{
      color: #fff;
      bottom: -1rem
    }

  }
}
</style>