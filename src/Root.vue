<template>
  <div>
    <transition mode="out-in" name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fetchColor: false
    };
  },
  computed: {
    config() {
      return this.fetchColor;
    }
  },
  async beforeRouteEnter(to, from, next) {
    next();
  },
  mounted() {
    document.getElementById('appLoading').style.display = 'none'
  },
  methods: {}
};
</script>

<style lang="scss">

html,
body,
#app {
  height: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@keyframes fadeIn {
  0% {
    transform: translate3d(0, 100%, 0);
  }
  100% {
    transform: none;
  }
}
</style>
