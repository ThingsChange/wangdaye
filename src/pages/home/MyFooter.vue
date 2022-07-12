<template>
  <div>
    <div class="footer-wrap">
      <div class="quick-link-wrap">
        <div v-for="(item,index) in quickLinkList" :key="index" class="nav-item">
          <span>{{ item }}</span>
          <div v-if="'01'.includes(index%3) && index !==quickLinkList.length-1" class="cloumn-line"></div>
        </div>
      </div>
      <div class="logo-img">
        <img class="logo" src="../../assets/images/logo@2x.png" alt="logo图片">
      </div>
      <div class="company-info">
        <div class="button-link">地址:{{ info.addr }}</div>
        <div class="button-link">邮编:{{ info.postCode }}</div>
<!--        <div class="button-link">邮箱：{{ info.mail }}</div>
        <div class="button-link">联系方式：{{ info.phone }}</div>-->
      </div>
<!--      <div class="copy-right-wrap">
        <div class="cp-info">
          {{ new Date().getFullYear() }} —
          <span>版权所有：廊坊市产品质量监督检验所</span>
        </div>
        <div class="cp-num">
          <span>冀IPC备14020932</span>
        </div>
      </div>-->
    </div>
    <color-bar></color-bar>
  </div>
</template>

<script>
import ColorBar from "@/components/ColorBar/bar";

export default {
  name: "LayoutBottom",
  components: {ColorBar},
  data() {
    return {
      quickLinkList: ['资质能力', '关于我们', '实验室概况', '资料中心', '基层党建', '下载中心'],
      info: {
        addr:'廊坊市安次区光明西道198号',
        postCode:'065000',
        mail:'lfzhijian123@163.com',
        phone:'0316-5178700',
      }
    }
  },
  computed: {
    isIndex() {
      return this.$route.meta?.pageName === 'homeIndex'
    }
  }
}
</script>

<style lang="scss" scoped>
.footer-wrap {
  display: flex;
  flex-flow: column;
  padding: 25px 26px 21px;
  background-color: #F5F5F5;

  .quick-link-wrap {
    display: flex;
    flex-wrap: wrap;

    .nav-item {
      display: flex;
      font-size: 10px;
      margin-right: 30px;
      color: #333;
      margin-bottom: 15px;
    }
    .cloumn-line{
      margin-left: 32px;
      height: 11px;
        border-left: 1px solid #333333;
    }
  }

  .logo-img {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 32px 0 20px;
    img {
      width: 173px;
      height: 23px;
    }
  }

  .company-info {
    font-size: 10px;
    display: flex;
    //flex-wrap: wrap;
    //justify-content: ;
    .button-link{
      margin-right: 25px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      margin-bottom: 8px;
      &:last-child{
        margin-right: 0;
      }
    }
  }
}

</style>
