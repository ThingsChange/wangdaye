<template>
  <section>
  <div class="container">
    <div class="button-wrap">
      <button class="liti-button" @click="showDetail('session')">session缓存</button>
      <button class="liti-button" @click="showDetail('local')">local缓存</button>
      <button class="liti-button" @click="showDetail('cookie')">cookie缓存</button>
      <button class="liti-button" @click="tryScan">点击触发扫码</button>
      <button class="liti-button" @click="triggerError(1)">错误1</button>
      <button class="liti-button" @click="triggerError(2)">错误2</button>
    </div>
    <div class="info-wrap" v-if="sessionType">
      <p class="user-info"><span style="color: yellowgreen">{{sessionType}}</span>相关信息</p>
      <p class="session-detail">{{sessionStr}}</p>
    </div>
    <div class="clear-button">
      <button class="liti-button" @click="clearCache(sessionType)">清除 <span style="color: red">{{sessionType}}</span> </button>
      <button class="liti-button clearAll" @click="clearCache()">一键清除缓存</button>
    </div>
  </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      sessionStr: '',
      sessionType: '',
    }
  },
  mounted() {
  },
  methods: {
    tryScan() {
    },
    showDetail() {
    },
    clearLocal() {
    },
    clearCookie() {
    },
    triggerError() {
    },
    clearCache() {
    },
    // 删除cookie中所有定变量函数
    delAllCookie() {

    }
  }
};
</script>

<style lang="scss" scoped>
/* 深色模式 */
@media (prefers-color-scheme: dark) {
  .container { background: #272727; color: white; }
}
/* 浅色模式 */
@media (prefers-color-scheme: light) {
  .container { background: white; color: #333; }
}
.info-wrap{
  filter: invert(1) hue-rotate(.5turn);
}
.clear-button{
  display: flex;
  margin-top: 1rem;
  width: 50vw;
  justify-content: space-between;
}
  .info-wrap{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
    .user-info{
      font-size: .65rem;
    }
  }
  .session-detail{
    border: 1px solid yellowgreen;
    padding: .5rem;
    max-height: 10rem;
    overflow: auto;
    max-width: 90%;
    text-overflow: ellipsis;
    word-break: break-all;
  }
  .container{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    flex-flow: column;
    height: 100vh;
    box-sizing: border-box;
    align-items: flex-start;
    padding-top:1rem;
    flex-wrap:wrap;
    .button-wrap{
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }
  .liti-button {
    /*position: absolute;*/
    top: 50%;
    left: 50%;
    width: 2.5rem;
    outline: none;
    border: none;
    color: white;
    padding: 0.3rem 0.1rem;
    border-radius: 0.2rem;
    cursor: pointer;
    background: linear-gradient(#3de5fb, #26acbd);
    text-shadow: 0 1px 1px grey;
    /*位置的三个参数
            1  X轴方向扩散，负值在左，正值在右
            2 Y轴方向扩散，正值向下，负值向上
            3 模糊半径   0时不模糊，就正常的阴影，越大越模糊 类似0实体阴影，数值大的变成了模糊阴影
            4，颜色可放在这三个数字前面，也可以放在这三个数字后面，这四个参数为一组，可以设置多组。
            */
    box-shadow: 0 0.2rem 0 #068494, 0 0.2rem 0.2rem grey;
  }
  .liti-button:active {
    box-shadow: 0 0.1rem 0 #068494, 0 0.1rem 0.1rem grey;
    transform: translate(0, 0.05rem);
  }
</style>
