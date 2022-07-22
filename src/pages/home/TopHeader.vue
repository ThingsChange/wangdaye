<template>
  <div>
    <template v-if="isIndex">
      <div class="logo-wrap">
        <img class="logo" src="../../assets/images/logo@2x.png" alt="logo图片">
        <img @click="showMenu=!showMenu" class="menu-btn-pic" src="../../assets/images/menu@2x.png" alt="菜单按钮">
      </div>
    </template>
    <template v-else>
      <div class="logo-wrap title-wrap">
        <p class="title">实验中心</p>
        <img @click="showMenu=!showMenu" class="menu-btn-pic" src="../../assets/images/menu@2x.png" alt="菜单按钮">
      </div>
    </template>
    <div class="cover" v-if="showMenu" @click="showMenu=false">
        <div class="menu-wrap">
        <div class="first-menu-item" :class="[menu.opened?'f-m-open':'']" v-for="menu in menuList" @click.prevent="toggleMenu(menu,$event)" >
          <div class="menu-first-name"  :class="{'first-menu-item-expand':menu.opened}">
            <div>{{ menu.title }}</div>
          </div>
          <div v-if="menu.opened" class="menu-second-wrap">
            <div class="menu-second-name" v-for="menuChild in menu.children">
              {{ menuChild.title }}
            </div>
          </div>
          <img v-if=" menu.children && menu.children.length" src="./../../assets/images/arrow.png" class="arrow" :class="{'arrow-down':menu.opened}" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axiosSelf from "@/helper/axiosDIY";

export default {
  name: "TopHeader",
  data() {
    return {
      menuList: [],
      showMenu: false
    }
  },
  computed: {
    isIndex() {
      return this.$route.meta?.pageName === 'homeIndex'
    }
  },
  created() {
    this.getMenuList();
  },
  methods: {
    toggleMenu(menu,event){
      console.log('这里是   event  ------------', event)
      if(!menu?.children?.length){
      //  跳转走
        return
      }
      menu.opened = !menu.opened
      event.stopPropagation();
      return false
    },
    getMenuList() {
      axiosSelf.get('/api/menu').then(res => {
        res.data.list[2].children = JSON.parse(JSON.stringify(res.data.list))
        console.log('这里是 res 的结果-----1--------', res)
        this.menuList = (res.data?.list||[]).map(v=>({...v,opened:false}))
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.logo-wrap {
  height: 39px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 15px;
  margin-bottom: 10px;

  .logo {
    width: 173px;
    height: 23px;
    margin: 8px 0 8px;
    justify-self: flex-start;
  }

  .title {
    justify-self: center;
    font: {
      size: 14px;
      weight: bold;
    };
  }

  .menu-btn-pic {
    position: absolute;
    top: 11px;
    right: 15px;
    width: 19px;
    height: 17px;
  }
}

.title-wrap {
  justify-content: center;
}

.cover {
  position: fixed;
  top: 54px;
  bottom: 0;
  left: 0;
  right: 0;
  background: black;
  opacity: .79;
  z-index: 100;
}
.first-menu-item{
  display: flex;
  //flex-flow: column;
  align-items: center;
  justify-content: space-between;
  //height: 35px;
  font-size: 12px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(#fff,1);
  margin: 0 10px;
  //padding: 0px 10px;
  border-bottom: 1px solid #fff;
  .arrow{
    height: 6px;
    width: 11px;
    margin-top: 6px;
    transform: rotate(180deg);
    align-self: flex-start;
  }
  .arrow-down{
    transform: rotate(0);
  }
}
.f-m-open{
  flex-flow: column;
}
.first-menu-item-expand{
  //height: 36px;
  width: 375px;
  background: #02B8BF;
}
.menu-first-name{
  display: flex;
  align-items: center;
  height: 36px;
}
.menu-second-wrap{
  padding: 12px 12px 0;
}
.menu-second-name{
  margin-bottom: 20px;
  &:last-child{
    margin-bottom: 0;
  }
}
</style>
