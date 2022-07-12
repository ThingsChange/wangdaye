<template>
  <div class="bg-color-overlay">
    <div class="bar first"></div>
    <div class="bar second"></div>
    <div class="bar third"></div>
  </div>
</template>

<script>
export default {
name: "ColorBar"
}
</script>

<style lang="scss" scoped>
.bg-color-overlay{
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.bar{
  width: calc(100vw / 3);
  height: 5px ;
}
.first{
  background-color: #02B8BF;
}
.second{
  background-color: #1990CE;
}
.third{
  background-color: #07BC83;
}
</style>
