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
        <div class="company-r">
          <div class="button-link">地址：{{ info.company_addr }}</div>
          <div class="button-link">邮箱：{{ info.mail }}</div>
        </div>
        <div class="company-r">
          <div class="button-link">邮编：{{ info.postcode }}</div>
          <div class="button-link">联系方式：{{ info.company_phone }}</div>
        </div>
      </div>
            <div class="copy-right-wrap">
 <!--             <div class="cp-info">
                {{ new Date().getFullYear() }} —-->
          <span>版权所有：廊坊市产品质量监督检验所</span><span class="cp-num">冀IPC备14020932</span>
        <!--</div>-->
        <!--<div class="cp-num">

        </div>-->
      </div>
    </div>
    <color-bar></color-bar>
  </div>
</template>

<script>
import ColorBar from "@/components/ColorBar/bar";
import axiosSelf from "@/helper/axiosDIY";

export default {
  name: "LayoutBottom",
  components: {ColorBar},
  data() {
    return {
      quickLinkList: [],
      info: {
        company_addr: '廊坊市安次区光明西道198号',
        postCode: '065000',
        mail: 'lfzhijian123@163.com',
        company_phone: '0316-5178700',
      }
    }
  },
  created() {
    this.getLinkList();
    this.getCompanyInfo();
  },
  methods: {
    getLinkList() {
      axiosSelf.get('/api/link').then(res => {
        this.quickLinkList = res.data?.list?.sort((a, b) => a.index - b.index)?.map(v => v.name)
      })
    },
    getCompanyInfo() {
      axiosSelf.get('/api/config').then(res => {
        let info = {};
        res.data.list.forEach(item=>{
          info[item.name]= item.value
        })
        this.info = info;
      })
    },
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
    display: grid;
    grid-template-columns: 74px 101px 90px;
    justify-content: center;

    .nav-item {
      justify-content: space-between;
      width: 100%;
      justify-self: left;
      display: flex;
      font-size: 10px;
      //margin-right: 30px;
      color: #333;
      margin-bottom: 15px;

      &:nth-child(3n+2) {
        padding-left: 30px;
        box-sizing: border-box;
      }

      &:nth-child(3n+3) {
        padding-left: 30px;
        box-sizing: border-box;
      }
    }

    .cloumn-line {
      //margin-left: 31px;
      height: 11px;
      border-left: 1px solid #333333;
    }
  }

  .logo-img {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 17px 0 20px;

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
    .company-r{
      display: flex;
      flex-direction: column;
    }
    .button-link {
      margin-right: 45px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      margin-bottom: 8px;

      &:last-child {
        margin-right: 0;
      }
    }
  }
  .copy-right-wrap{
    text-align: center;
    //width: 253px;
    margin-top: 22px;
    height: 10px;
    font-size: 10px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #333333;
    .cp-num{
      margin-left: 5px;
    }
  }
}

</style>
