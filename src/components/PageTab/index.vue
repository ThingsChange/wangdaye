<template>
  <div class="cover">
    <div class="menu-wrap">
      <div v-for="menu in menuList">
        <div class="menu-first-name">
          <span>{{ menu.name }}</span>
          <span v-if="menu.child">
                                    <img src="" alt="">
                              </span>
          <div class="menu-second-name" v-for="menuChild in menu.child">
            {{ menuChild.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axiosSelf from "@/helper/axiosDIY";

export default {
  name: "PageTab",
  props:['menuList'],
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

</style>
