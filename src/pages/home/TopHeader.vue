<template>
  <div>
    <template v-if="isIndex">
      <div class="logo-wrap">
        <img class="logo" src="../../assets/images/logo@2x.png" alt="logo图片">
        <img class="menu-btn-pic" src="../../assets/images/menu@2x.png" alt="菜单按钮">
      </div>
    </template>
    <template v-else>
      <div class="logo-wrap title-wrap">
        <p class="title">实验中心</p>
        <img class="menu-btn-pic" src="../../assets/images/menu@2x.png" alt="菜单按钮">
      </div>
    </template>
    <div class="menu-wrap">

    </div>
  </div>
</template>

<script>
export default {
    name: "TopHeader",
  computed:{
    isIndex(){
      return  this.$route.meta?.pageName==='homeIndex'
    }
  }
}
</script>

<style lang="scss" scoped>
.logo-wrap{
  height: 39px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 15px;
  .logo{
    width: 173px;
    height: 23px;
    margin: 8px 0 8px;
    justify-self: flex-start;
  }
  .title{
    justify-self: center;
    font:{
      size: 14px;
      weight: bold;
    };
  }
  .menu-btn-pic{
    position: absolute;
    top: 11px;
    right: 15px;
    width: 19px;
    height: 17px;
  }
}
.title-wrap{
  justify-content: center;
}

</style>
