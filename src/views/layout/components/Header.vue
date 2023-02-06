<template>
  <div>
<!--    <div
      v-show="isMobile"
      style="  width: 10rem;height: 1.5rem;  background: #070707;position: fixed;top: 0rem;z-index: 9999;"
    >


      <div class="h5-add-wallet-btn" @click="addSatCoin">Add to Wallet</div>
    </div>-->

    <div
      v-show="!isMobile"
      class="xxx"  :style="topBannerNavBg"
    >
      <div style="width:1380px;height: 82px;display: flex;margin: 0 auto;position: relative;">

        <img
            :src="icon_logo"
            style="width: 140px;height: 33px;margin-top: 24px;"
            alt
        />


        <div style="display: flex;height: 82px;position: absolute;right: 0;top: 0;">
          <div  @click="goA1(1)"  style="font-size: 16px; font-family: PingFang SC; font-weight: bold;line-height: 82px; color: #141420; opacity: 1;"> {{ $t('header.text1') }}</div>
          <div  @click="goA1(2)"  class="pc-header-normal"> {{ $t('header.text2') }}</div>
          <div @click="goA1(3)"  class="pc-header-normal"> {{ $t('header.text3') }}</div>
        <!--  <div @click="goA1(4)"  class="pc-header-normal"> {{ $t('header.text4') }}</div>-->
          <div  @click="goA1(5)" class="pc-header-normal"> {{ $t('header.text5') }}</div>
          <div  @click="goA1(6)" class="pc-header-normal"> {{ $t('header.text6') }}</div>
          <div @click="goA1(7)"  class="pc-header-normal"> {{ $t('header.text7') }}</div>
          <div  @click="goA1(8)" class="pc-header-normal"> {{ $t('header.text8') }}</div>
        </div>
 <!--       <div class="pc-header-circle">
        </div>-->
         <!-- <img
              :src="icon_en"
              style="width: 26px;height: 26px;left:10px;top: 9px;position: absolute;"
              alt
          />
          <div class="pc-header-circle-center">English</div>

          <img
              :src="icon_arrow"
              style="width: 10px;height: 5px;right:20px;top: 18px;position: absolute;"
              alt
          />-->



   <!--     <div class="pc-div-btn2">
          <img
            :src="metamask"
            style="width: 29px;height: 26px;margin-left: 30px;margin-top: 6px;"
            alt
          />
          <div style="margin-left: 10px;line-height: 40px;">{{this.data.IDO.OG.symbol}}</div>
          <div class="pc-div-btn2-item">
            <div class="pc-div-btn2-item0">My Wallet</div>
            <div class="pc-div-btn2-item1">
              <img class="pc-div-btn2-item2" :src="sat_icon" />
              <div class="pc-div-btn2-item3">{{this.data.IDO.OG.symbol}}</div>
              <div class="pc-div-btn2-item4">{{satBalance+' '+this.data.IDO.OG.symbol}}</div>
              <div class="pc-div-btn2-item5">{{'$ '+calcT12Amount}}</div>
            </div>

            <div class="add-wallet-btn" @click="addSatCoin">Add to Wallet</div>
          </div>
        </div>-->
      </div>
    </div>

<!--    <my-dialog
      :is-show="showSelectWalletDialog"
      @isClose="showSelectWalletDialog = false"
      :width="isMobile ? '8.27rem' : '700px'"
    >
      <div>
        <div v-show="!isMobile">
          <div style="padding-top: 20px;position: relative;">
            <img
              :src="close"
              style="width: 17px;height: 17px;left: 45px;top: 20px;position: absolute;z-index: 999;"
              @click="showSelectWalletDialog = false"
            />
            <div
              style="position: absolute;text-align: center;left: 0px;top: 20px;font-size: 18px;font-family: Selawik; font-weight: 600;color: #FFFFFF;width: 700px;"
            >Connect Wallet</div>

            <div class="div-select-wallet" @click="clickMetaMusk">
              MetaMusk
              <img
                :src="icon_fox"
                style="width:54px;height: 48px;right: 40px;top: 5px;position: absolute;"
              />
            </div>
            <div class="div-select-wallet" style="margin-top:40px;" @click="clickWalletConnect">
              WalletConnect
              <img
                :src="icon_wifi"
                style="width:54px;height: 35px;right: 40px;top: 12px;position: absolute;"
              />
            </div>
            <div style="width:54px;height: 64px;"></div>
          </div>
        </div>
        <div v-show="isMobile">
          <div style="width: 8.27rem;position: relative; ">
            <img
              :src="close"
              style="width: 0.3rem;height: 0.3rem;left: 0.36rem;top: 0.36rem;position: absolute;z-index: 999;"
              @click="showSelectWalletDialog=false"
            />
          </div>
          <div
            style="width: 8.27rem;position: relative;font-size: 0.21rem;font-family: Selawik;font-weight: 600;color: #FFFFFF;padding-top: 0.3rem;text-align: center;"
          >Connect Wallet</div>

          <div
            style="width: 6.8rem; height:0.8rem; background: #FFFFFF;border-radius: 0.13rem;margin: 0.6rem auto 0rem auto;position: relative;
                line-height: 0.8rem;padding-left:0.3rem;font-size: 0.19rem;font-family: Selawik;font-weight: 600;color: #000000;"
            @click="clickMetaMusk"
          >
            MetaMusk
            <img
              :src="icon_fox"
              style="width:0.54rem;height: 0.41rem;right: 0.5rem;top: 12px;position: absolute;top:0.19rem"
            />
          </div>

          <div
            style="width: 6.8rem; height:0.8rem; background: #FFFFFF;border-radius: 0.13rem;margin: 0.6rem auto 0rem auto;position: relative;
                line-height: 0.8rem;padding-left:0.3rem;font-size: 0.19rem;font-family: Selawik;font-weight: 600;color: #000000;"
            @click="clickWalletConnect"
          >
            WalletConnect
            <img
              :src="icon_wifi"
              style="width:0.54rem;height: 0.41rem;right: 0.5rem;top: 12px;position: absolute;top:0.19rem"
            />
          </div>

          <div style="width:3rem;height:1rem"></div>
        </div>
      </div>
    </my-dialog>-->
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import {
  icon_logo,icon_en , icon_arrow
} from "@/utils/images";

import Cookies from "js-cookie";

import { createWatcher } from "@makerdao/multicall";

// import MyDialog from "@/views/components/myDialog";

export default {
  name: "Header",
  components: {
    // MyDialog
  },
  data() {
    return {
      icon_logo,
      icon_en,
      icon_arrow,

      loops: "",
      firstRun: true,
      loading: "",
      showIdailog: false,
      showHd4: false,
      showHD5: false,
      tab: 1,
      isZh: true,
      isShowMenu: false,
      interval: "",
      chainId: 1,
      topBannerNavBg: {
        backgroundColor: ''
      },
      calcT12Amount: 0,
      calcT15Amount: 0,
      isShowAddWallet: false,
      showSelectWalletDialog: false,
      configData: {
        chainId: 0
      },
      data: {}
    };
  },
  computed: {
    ...mapState({
      isMobile: state => state.sys.isMobile,
      address: state => state.wallet.address,
      satBalance: state => state.wallet.sat_balance
    }),
    ...mapGetters({
      is_connected: "is_connected"
    })
  },

  created() {
/*    this.data = getDATA();
    this.configData = getConfigData();
    this.PreInitial();
    this.StartWatch();*/
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll) // 监听页面滚动
  },
  methods: {
    goA1(index){
      // this.$bus.$emit("formBus", index);
      var id = "#a11" ;
      if(index==2){
        id = "#a21" ;
      }else if(index==3){
        id = "#a31" ;
      }else if(index==4){
        id = "#a41" ;
      }else if(index==5){
        id = "#a51" ;
      }else if(index==6){
        id = "#a61" ;
      }else if(index==7){
        id = "#a71" ;
      }else if(index==8){
        id = "#a81" ;
      }
      document.querySelector(id).scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start",
      });

    },
    handleScroll () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      // 设置背景颜色的透明度
      if (scrollTop) {
        this.topBannerNavBg.backgroundColor = '#ffffff' // scrollTop + 多少根据自己的需求设置
      } else if (scrollTop === 0) {
        this.topBannerNavBg.backgroundColor = 'transparent' // 设置回到顶部时，背景颜色为透明
      }
    },
    // 滚动之前重置
    beforeDestroy () {
      window.removeEventListener('scroll', this.handleScroll)
    },
    addSatCoin() {

    },
    async PreInitial() {
      this.showSelectWalletDialog = true;
      //   await init();
    },
    onShowMenu() {
      this.$bus.$emit("formBus", true);
    },
    clickMetaMusk() {},
    clickWalletConnect() {},
    changeLang() {
      let code = Cookies.get("lang");
      if (this.isZh) {
        code = "en";
      } else {
        code = "zh-CN";
      }

      this.isZh = !this.isZh;
      switch (code) {
        case "zh":
          code = "zh-CN";
          break;
        case "en":
          code = "en";
          break;
        default:
          break;
      }
      Cookies.set("lang", code, { expires: 31 });
      localStorage.setItem("language", code);
      this.$store.dispatch("setLanguage", code);
      this.$i18n.locale = code;
    },

    onClickShowMenu() {
      this.isShowMenu = !this.isShowMenu;
    },

    StartWatch() {
      const watcher = createWatcher(
        [
          {
            target: this.data.IDO.OG.address,
            call: ["balanceOf(address)(uint256)", this.address],
            returns: [["balanceOfSat"]]
          }
        ],
        {
          rpcUrl: this.configData.rpcUrl,
          multicallAddress: this.configData.multicallAddress,
          interval: 15000
        }
      );

    }
  }
};
</script>

<style lang="scss" scoped>
.xxx{
  width: 100%;height: 82px;position: fixed;top: 0px;z-index: 9999;
}
.pc-header-normal{
  margin-left:40px;
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: bold;
  line-height: 82px;
  color: #141420;
  opacity: 1;
  cursor: pointer;
}
.pc-header-circle{
  margin-left:40px;
  width: 140px;
  height: 44px;
  position: relative;
}


.pc-header-circle-center{
  position: absolute;left: 45px;line-height: 44px;
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: bold;
  color: #141420;
  opacity: 1;
}
.h5-add-wallet-btn {
  cursor: pointer;
  font-size: 0.32rem;
  font-family: Selawik;
  font-weight: 400;
  color: #808080;
  width: 7.87rem;
  height: 1.07rem;
  margin: 6rem auto 0rem auto;
  border: 1px solid #808080;
  position: relative;
  text-align: center;
  line-height: 1.07rem;
}
.h5-add-wallet-btn:hover {
  background: linear-gradient(-45deg, #25434a 0%, #4a3e48 100%);
}
.add-wallet-btn {
  margin: 0px auto;
  font-size: 14px;
  font-family: Selawik;
  font-weight: 400;
  color: #808080;
  cursor: pointer;
  width: 260px;
  height: 40px;
  background: #242424;
  border: 2px solid #313131;
  text-align: center;
  line-height: 40px;
}
.add-wallet-btn:hover {
  background: linear-gradient(-45deg, #25434a 0%, #4a3e48 100%);
}
.div-header-menu-btn {
  cursor: pointer;
  width: 1.07rem;
  height: 0.99rem;
  background: linear-gradient(-45deg, #4a3e48 0%, #25434a 100%);
  border-radius: 0.27rem;
  top: 0.27rem;
  left: 0.53rem;
  position: absolute;
}
.div-header-menu-btn:hover {
  background: linear-gradient(-45deg, #25434a 0%, #4a3e48 100%);
}
.div-select-wallet {
  cursor: pointer;
  width: 600px;
  height: 60px;
  background: #ffffff;
  border-radius: 10px;
  margin: 60px auto 0px auto;
  position: relative;
  line-height: 60px;
  padding-left: 25px;
  font-size: 16px;
  font-family: Selawik;
  font-weight: 600;
  color: #000000;
}
.div-select-wallet:hover {
  background: #7ecef4;
}
.div-header-connect-btn {
  position: absolute;
  right: 0.53rem;
  top: 0.27rem;
  cursor: pointer;
  text-align: center;
  line-height: 0.99rem;
  width: 3.73rem;
  height: 0.99rem;
  background: linear-gradient(-45deg, #4a3e48 0%, #25434a 100%);
  border-radius: 0.27rem;
  font-size: 0.32rem;
  font-family: Selawik;
  font-weight: 600;
  color: #ffffff;
}
.div-header-connect-btn:hover {
  background: linear-gradient(-45deg, #25434a 0%, #4a3e48 100%);
}

.pc-div-btn1 {
  width: 160px;
  height: 40px;
  background: #242424;
  border-radius: 5px;
  line-height: 40px;
  text-align: center;
  position: absolute;
  right: 16px;
  top: 21px;
  font-size: 16px;
  font-family: Selawik;
  font-weight: bold;
  color: #ffffff;
  cursor: pointer;
}
.pc-div-btn1:hover {
  background: linear-gradient(-45deg, #25434a 0%, #4a3e48 100%);
}

.pc-div-btn2 {
  cursor: pointer;
  display: flex;
  padding-right: 30px;
  position: absolute;
  right: 192px;
  top: 21px;
  height: 40px;
  background: #242424;
  border-radius: 5px;
  line-height: 40px;
  font-size: 16px;
  font-family: Fredoka One;
  font-weight: 400;
  color: #ffffff;
}

.pc-div-btn2-item {
  display: none;
  z-index: 999;
  position: absolute;
  right: 0px;
  top: 42px;
  width: 300px;
  height: 180px;
  background: #242424;
  border-radius: 10px;
}
pc-div-btn2-item:hover {
  display: inline-block;
}
.pc-div-btn2:hover .pc-div-btn2-item {
  display: inline-block;
}
.pc-div-btn2-item0 {
  font-size: 14px;
  font-family: Selawik;
  font-weight: 400;
  color: #808080;
  padding-left: 20px;
  padding-top: 10px;
}
.pc-div-btn2-item0:hover .pc-div-btn2-item {
  display: inline-block;
}
.pc-div-btn2-item1 {
  display: flex;
  padding: 20px;
  position: relative;
}
.pc-div-btn2-item1:hover .pc-div-btn2-item {
  display: inline-block;
}

.pc-div-btn2-item2 {
  width: 25px;
  height: 25px;
}
.pc-div-btn2-item2:hover .pc-div-btn2-item {
  display: inline-block;
}

.pc-div-btn2-item3 {
  font-size: 16px;
  font-family: Selawik;
  font-weight: 400;
  color: #ffffff;
  line-height: 1.5;
  margin-left: 20px;
}
.pc-div-btn2-item3:hover .pc-div-btn2-item {
  display: inline-block;
}

.pc-div-btn2-item4 {
  position: absolute;
  right: 20px;
  top: 0px;
  font-size: 14px;
  font-family: Selawik;
  font-weight: 400;
  color: #ffffff;
}
.pc-div-btn2-item4:hover .pc-div-btn2-item {
  display: inline-block;
}

.pc-div-btn2-item5 {
  position: absolute;
  right: 20px;
  top: 20px;
  font-size: 10px;
  font-family: Selawik;
  font-weight: 400;
  color: #808080;
}
.pc-div-btn2-item5:hover .pc-div-btn2-item {
  display: inline-block;
}

.pc-div-btn2-item:hover {
  display: inline-block;
}

.el-dialog__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  box-shadow: 0 0 0.16rem rgba(0, 0, 0, 0.7);
}

::v-deep.el-dialog__headerbtn .el-dialog__close {
  color: #242424;
}
::v-deep.el-dialog__header {
  padding: 0px 0px;
}
::v-deep .el-dialog__body {
  padding: 0px 0px;
  color: #242424;
  font-size: 14px;
  word-break: break-all;
}
::v-deep.el-dialog {
  background-color: #242424;
  box-shadow: 0 0 0.16rem rgba(0, 0, 0, 0.7);
  //box-shadow: 0px 3px 9px 0px rgba(231, 87, 121, 0.56);
  /*  font-size: 0.32rem;
    color: #fff;*/
  /*  border-radius: 0.4rem;*/
  //width: 830px;
  //height: 600px;

  border-radius: 20px;
}
::v-deep.el-message {
  margin-top: 400px !important;
}
.el-message {
  margin-top: 400px !important;
}
</style>
