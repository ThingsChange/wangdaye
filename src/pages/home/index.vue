<template>
  <section class="home-index-wrap">
    <div class="swiper-wrapper">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="item in imgList" :key="item.id">
          <img :src="item.url" alt="首页轮播图">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="content-wrap">
      <div class="item-card">
          <div class="item-title-wrap">
            <div class="title">关于我们</div>
            <div class="item-square"></div>
          </div>
          <div class="item-content">
            <div class="about-l">{{aboutUs.l}}</div>
            <div class="about-r">{{aboutUs.r}}</div>
          </div>
      </div>
      <div class="item-card laboratory-wrap">
        <div class="item-title-wrap">
          <div class="title">实验室概况</div>
          <div class="item-square"></div>
        </div>
        <div class="item-content">
          <swiper class="swiper swiper-laboratory" :options="swiperOption">
            <swiper-slide v-for="(laboratory,index) in laboratoryList" :key="index">
              <div class="laboratory-card" v-for="item in laboratory">
                    <div class="laboratory-title">{{item.title}}</div>
                    <div class="laboratory-content">{{item.desc}}</div>
              </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
        </div>
      <div class="item-card">
        <div class="item-title-wrap">
          <div class="title">新闻中心</div>
          <div class="item-square"></div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
import './swiper.css'
import axiosSelf from "@/helper/axiosDIY";


export default {
  name: "index",
  data() {
    return {
      imgList: [],
      aboutUs:{
        l:'',
        r:''
      },
      swiperOption: {
        autoplay: {
          disableOnInteraction: false,  // 用户操作swiper之后，是否禁止autoplay
          delay: 3000, // 自动切换的时间间隔（单位ms）
        },
        pagination: {
          el: '.swiper-pagination',
          loop:true,
        }
      },
      laboratoryList:[],
    }
  },
  created() {
    this.getCarouseList();
    this.getConfigContent();
    this.getHomeData();
    // carouseList: '/api/carouse',
  },
  methods: {
    getCarouseList() {
      axiosSelf.get('/api/carouse').then(res => {
        this.imgList = res.data.list;
      })
    },
    getHomeData() {
      axiosSelf.get('/api/index').then(res => {
        let bulletin = [];
        res.data?.bulletin.forEach((v,i)=>{
          (bulletin[i>>1]=bulletin[i>>1]||[]).push(v)
        })
        this.laboratoryList = bulletin
      })
    },
    getConfigContent(){
      axiosSelf.get('/api/config').then(res=>{
        res?.data?.list?.forEach(v=>{
          if(v.name === 'about_us_l')this.aboutUs.l= v.desc;
          if(v.name === 'about_us_r')this.aboutUs.r= v.desc;
        })
      })
    },
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
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
.home-index-wrap {
  margin-top: 10px;
}

.swiper-wrapper {
  width: 100vw;
  height: 215px;
  background-color: #d0c3e2;
}
.swiper-laboratory{
  height: 400px;
}

.middle-wrap {
  font-size: 20px;
}

.bottom-wrap {
  font-size: 2px;
}
.swiper-slide{
  width: 100vw;
  height: 215px;
  img{
    width: 100%;
    height: 100%;
  }
}
.swiper-pagination{
  ::v-deep{
    .swiper-pagination-bullet{
      width: 7px;
      height: 7px;
      background: #000000;
      border: 1px solid #ABABAB;
      opacity: 0.5;
      border-radius: 3px;
    }
    .swiper-pagination-bullet-active{
      width: 13px;
      height: 6px;
      background: #02B8BF;
      opacity: 0.7;
      border-radius: 3px;
    }
  }
}
.content-wrap{
  display: flex;
  flex-flow: column;
  .item-card{
    display: flex;
    flex-flow: column;
    padding: 32px 26px 34px;
    .item-title-wrap{
      width: 100%;
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      color: #02B8BF;
      font-size: 18px;
      font-family: Microsoft YaHei;
      font-weight: bold;
      line-height: 16px;
      margin-bottom: 16px;
      .item-square{
        margin-top: 16px;
        width: 11px;
        height: 11px;
        background: #02B8BF;
      }
    }
    .item-content{
      font-size: 12px;
      .about-l,.about-r{
        text-indent: 24px;
      }
      .about-l{
        margin-bottom: 24px;
      }
      .laboratory-card{
        background: rgb(#fff,.2);
        //background: #fff;
        //opacity: .2;
        margin-top: 21px;
        padding: 30px 14px 39px;
        color:rgb(#fff,.8) ;
        .laboratory-title{
          display: flex;
          justify-content: center;
          font-weight: bold;
          font-size: 12px;
          margin-bottom: 19px;
        }
        .laboratory-content{
          font-size: 10px;
        }
      }
    }
  }
  .laboratory-wrap{
    background: url("./../../../src/assets/images/laboratory.jpg");
    background-size: cover;
    .item-title-wrap{
      color: white;
      .item-square{
        background: white;
      }
    }
  }

}
</style>
