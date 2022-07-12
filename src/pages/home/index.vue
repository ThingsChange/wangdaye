<template>
      <section class="home-index-wrap">
        <div class="swiper-wrapper">
          <swiper class="swiper" :options="swiperOption">
            <swiper-slide>Slide 1</swiper-slide>
            <swiper-slide>Slide 2</swiper-slide>
            <swiper-slide>Slide 3</swiper-slide>
            <swiper-slide>Slide 4</swiper-slide>
            <swiper-slide>Slide 5</swiper-slide>
            <swiper-slide>Slide 6</swiper-slide>
            <swiper-slide>Slide 7</swiper-slide>
            <swiper-slide>Slide 8</swiper-slide>
            <swiper-slide>Slide 9</swiper-slide>
            <swiper-slide>Slide 10</swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
        <div class="middle-wrap">123</div>
        <div class="bottom-wrap">哈哈</div>
      </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import './swiper.css'

export default {
  name: "index",
data(){
    return{
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
},
  methods:{
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange(){
      console.log('slide change');
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
}
</script>

<style lang="scss" scoped>
.home-index-wrap{
  margin-top: 10px;
}
.swiper-wrapper{
  width: 100vw;
  height: 215px;
  background-color: rebeccapurple;
}
.middle-wrap{
  font-size: 20px;
}
.bottom-wrap{
  font-size: 2px;
}
</style>
