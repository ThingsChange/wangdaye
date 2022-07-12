<template>
  <section class="blank_screen">
    <section class="fix_svg">
      <img alt src="../../assets/images/noResultsShop.png" />
      <div class="first-line _c3">{{content}}</div>
    </section>
  </section>
</template>
<script>
export default {
  computed: {
    content() {
      return '您可能迷路啦 ~ 换个地址试试吧';
    }
  }
};
</script>
<style lang="scss" scoped>
.blank_screen {
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  .fix_svg {
    text-align: center;
    img {
      pointer-events: none;
      //@include wh(4.28rem, 4.94rem);
    }
    .first-line {
      margin-top: 0.4rem;
      margin-bottom: 0.24rem;
      font-size: .45rem;
    }
  }
}
</style>
