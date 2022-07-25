<template>
  <div class="cover">
    <div class="menu-wrap">
      <div v-for="menu in menuTabList">
        <div class="menu-first-name">
          <span>{{ menu.name }}</span>
        </div>
      </div>
    </div>
    <div class="more-tab">
      <span>更多</span>
      <img src="./../../assets/images/arrow.png" class="arrow" alt="">
    </div>
  </div>
</template>

<script>
import axiosSelf from "@/helper/axiosDIY";

export default {
  name: "PageTab",
  props:['menuTabList'],
  created() {

  },
  methods:{
    getMenuList(){
      axiosSelf.get('/api/menu').then(res=>{
        console.log('这里是 res 的结果-------------', res)
      })
    }
  }
}
</script>

<style scoped>
.menu-wrap{
  width: 289px;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  white-space: nowrap;
}

</style>
