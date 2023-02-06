<template>
  <my-dialog :is-show="isShow" :width="isMobile?'86.8%':'52.3%'" @isClose="$emit('isClose', {})">
    <p slot="title" class="mt_title">{{ $t('mt.txt1') }}</p>
    <div slot="default" class="mt_body">
      <p class="mt_txt">{{ $t('mt.txt2') }}</p>
      <img :src="mtLogo" alt="" style="border: none">
      <p class="mt_txt">{{ $t('mt.txt3') }}</p>
      <p class="mt_code">
        {{ mtLogoStr }}
      </p>

      <p class="mt_txt mt_m_t">{{ $t('mt.txt4')  }}125px x 125px</p>
      <img :src="language==='en'?mt125En:mt125" alt="">
      <p class="mt_txt">{{ $t('mt.txt5') }}</p>
      <p class="mt_code">
        {{ mt125Str }}
      </p>

      <p class="mt_txt mt_m_t">{{ $t('mt.txt4') }} 468px x 60px</p>
      <img :src="language==='en'?mt468En:mt468" alt="" class="mt_img_2">
      <p class="mt_txt">{{ $t('mt.txt5') }}</p>
      <p class="mt_code">
        {{ mt468Str }}
      </p>

      <p class="mt_txt mt_m_t">{{ $t('mt.txt4') }} 728px x 90px</p>
      <img :src="language==='en'?mt728En:mt728" alt="" class="mt_img_3">
      <p class="mt_txt">{{ $t('mt.txt5') }}</p>
      <p class="mt_code">
        {{ mt728Str }}
      </p>



    </div>

  </my-dialog>
</template>

<script>
import myDialog from "@/views/components/myDialog";
import {  headerLogo, mt2img, mt3img, mtLogo, mt125, mt125En, mt468, mt468En, mt728, mt728En } from "@/utils/images";
import {mapState} from "vuex";

export default {
  name: "mediaList",
  components: { myDialog },
  data() {
    return {
      headerLogo, mt2img, mt3img,
      mtLogo, mt125, mt125En, mt468, mt468En, mt728, mt728En,
      hostUrl: location.host,
      mt3Str: "<a href=\"https://"+this.hostUrl+"/\"><img src=\"https://"+this.hostUrl+"/img/468.gif\" width=\"468\" height=\"60\" alt=\"tronexmax.com | Get +200% up to your deposit right now. Safe and legit!\"></a>",
      mt4Str: "<a href=\"https://"+this.hostUrl+"/\"><img src=\"https://"+this.hostUrl+"/img/468.gif\" width=\"468\" height=\"60\" alt=\"tronexmax.com | Get +200% up to your deposit right now. Safe and legit!\"></a>",

    }
  },
  props: {
    isShow: Boolean,
    showClose: {
      type: Boolean,
      default: true
    }
  },
  computed:{
    ...mapState({
      isMobile: state => state.sys.isMobile,
      language: state => state.app.language,
    }),
    mtLogoStr(){
      return `https://${this.hostUrl}/img/logo.svg`
    },
    mt125Str(){
      return "<a href=\"https://"+this.hostUrl+"/\"><img src=\"https://"+this.hostUrl+"/img/"+(this.language==='en'?'125-EN':'125')+".png\" width=\"125\" height=\"125\" alt=\"Ttronexmax.com | Get +200% up to your deposit right now. Safe and legit!\"></a>";
    },
    mt468Str(){
      return "<a href=\"https://"+this.hostUrl+"/\"><img src=\"https://"+this.hostUrl+"/img/"+(this.language==='en'?'468-EN':'468')+".png\" width=\"468\" height=\"60\" alt=\"tronexmax.com | Get +200% up to your deposit right now. Safe and legit!\"></a>";
    },
    mt728Str(){
      return "<a href=\"https://"+this.hostUrl+"/\"><img src=\"https://"+this.hostUrl+"/img/"+(this.language==='en'?'728-EN':'728')+".png\" width=\"728\" height=\"90\" alt=\"tronexmax.com | Get +200% up to your deposit right now. Safe and legit!\"></a>";
    },
  },
  methods:{

  }
}
</script>

<style lang="scss" scoped>

.mt_title {
  font-size: 0.16rem;
  text-align: center;
}
.mt_body {
  color: $color-text;
  text-align: center;
  .mt_txt {
    font-size: 0.1rem;
  }
  img {
    height: 0.9rem;
    margin: 0.24rem auto;
    border: 0.04rem solid $color-main;
    &.mt_img_2 {
      height: 0.42rem;
    }
    &.mt_img_3 {
      height: 0.57rem;
    }
  }
  .mt_code {
    color: rgba(68, 68, 68, 1);
    font-size: 0.12rem;
    box-sizing: border-box;
    min-height: 0.26rem;
    padding: 0.08rem 0.35rem;
    background: #fff;
    border: 0.02rem solid $color-main;
    border-radius: 0.26rem;
    margin-top: 0.2rem;
  }
  .mt_m_t {
    margin-top: 0.42rem;
  }
}


@media screen and (max-width: 750px){

  .mt_title {
    font-size: 0.4rem;
    text-align: center;
  }
  .mt_body {
    color: $color-text;
    text-align: center;
    .mt_txt {
      font-size: 0.27rem;
    }
    img {
      height: 2.3rem;
      margin: 0.63rem auto;
      border: 0.11rem solid $color-main;
      &.mt_img_2 {
        height: 0.79rem;
      }
      &.mt_img_3 {
        height: 0.96rem;
      }
    }
    .mt_code {
      color: rgba(68, 68, 68, 1);
      font-size: 0.32rem;
      box-sizing: border-box;
      min-height: 0.26rem;
      padding: 0.16rem 0.35rem;
      background: #fff;
      border: 0.05rem solid $color-main;
      border-radius: 0.26rem;
      margin-top: 0.36rem;
    }
    .mt_m_t {
      margin-top: 0.42rem;
    }



  }
}

</style>
