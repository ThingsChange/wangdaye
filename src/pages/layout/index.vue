<template>
  <section>
    <color-bar></color-bar>
    <top-header></top-header>
    <router-view></router-view>
    <layout-bottom></layout-bottom>
  </section>
</template>

<script>
import TopHeader from "@/pages/home/TopHeader";
import ColorBar from "@/components/ColorBar/bar";
import LayoutBottom from "@/pages/home/MyFooter";
export default {
  name: "index",
  components: {LayoutBottom, ColorBar, TopHeader}
}
</script>

<style lang="scss" scoped>
.top-wrap{
  width: 375px;
  height: 20px;
  background-color: rebeccapurple;
}
.middle-wrap{
  font-size: 20px;
}
.bottom-wrap{
  font-size: 2px;
}
</style>
