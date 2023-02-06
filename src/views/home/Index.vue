<template xmlns="http://www.w3.org/1999/html">
  <div style="width: 100%;height: 100%;">
    <!--pc--->
    <div
        v-show="!isMobile"
        style="margin: 0 auto;"
    >
      <div

          class="xxx"  :style="topBannerNavBg"
      >
        <div style="width:1380px;height: 82px;display: flex;margin: 0 auto;position: relative;">

          <img
              :src="icon_logo"
              style="width: 140px;height: 33px;margin-top: 24px;"
              alt
          />


          <div style="display: flex;height: 82px;position: absolute;right: 220px;top: 0;">
           <!-- <div  @click="goPage(1)"  :class="topBannerTextStyle"> {{ $t('index.text2111') }}</div>-->
            <div  @click="goPage(2)"  :class="topBannerTextStyle"> {{ $t('index.text2112') }}</div>
            <div  @click="openLink('https://twitter.com/lynksanctuary')"  :class="topBannerTextStyle"> {{ $t('index.text2114') }}</div>
            <div  @click="openLink('https://discord.gg/6JcgvUzdPj')"  :class="topBannerTextStyle"> {{ $t('index.text2115') }}</div>
            <div  @click="openLink('https://medium.com/@lynksanctuary')"  :class="topBannerTextStyle"> {{ $t('index.text2116') }}</div>

          </div>

          <div  @click="openLink1('https://medium.com/@lynksanctuary')" style="cursor: pointer;position: absolute;right: 0;top: 19px; font-size: 14px; font-family: PingFang SC;font-weight: 800; color: #FFFFFF; text-align: center;line-height: 44px;width: 160px;height: 44px; background: linear-gradient(90deg, #0167BC 0%, #5EAEFF 100%);opacity: 1; border-radius: 25px;">
            {{ $t('index.text2117') }}
          </div>


        </div>
      </div>

      <div  class="xxxx1" >
        <!-- <img :src="bg_new_1" style="width: 100%;height: 900px;position: absolute;left: 0;top: 0;"style="width: 100%;height: 900px;position: relative;" />-->
        <div style="width: 1107px;height: 600px;margin: 0 auto;padding-top: 500px">

          <img  :src="welcome" style='width: 1107px;height: 99px;'/>

        </div>

      </div>

      <!--<div     style="width: 100%;height: 300px;background:  #141420;">




        <div style="width: 1300px;margin: 0px auto 0 auto;position: relative;">
          <img :src="index_img21" style="width: 140.01px;height: 33px;position: absolute;top: 89px;"/>
          <div style="top: 146px;position: absolute;">
            <a href="https://twitter.com/lynksanctuary" title='Twitter' target='_blank'>
              <img  :src="index_img25" style='width: 46px;height: 46px;'/>
            </a>
            <a href="https://discord.gg/6JcgvUzdPj" title='Discord' target='_blank'>

              <img  :src="index_img22" style='width: 46px;height: 46px;margin-left: 20px;'/>
            </a>
            <a href="https://medium.com/@lynksanctuary" title='Medium' target='_blank'>
              <img  :src="index_img23" style='width: 46px;height: 46px;margin-left: 20px;'/>
            </a>
            &lt;!&ndash; <a href="https://github.com/" title='Github' target='_blank'>
               <img  :src="index_img24" style='width: 46px;height: 46px;margin-left: 20px;'/>
             </a>&ndash;&gt;

          </div>

          <div class="pc-header-circle" style="position: absolute;top: 66px;right: 0px;">
            <img
                :src="index_img26"
                style="width: 26px;height: 26px;left:10px;top: 9px;position: absolute;"
                alt
            />
            <div class="pc-header-circle-center">English</div>

            <img
                :src="icon_arrow"
                style="width: 10px;height: 5px;right:20px;top: 18px;position: absolute;"
                alt
            />
          </div>
        </div>


      </div>-->


      <!--11 end-->
    </div>


    <!--h5--->

    <div
        v-show="isMobile"
        style="width: 10rem;"
    >
      <div class="h5_div1_bg" >
        <div class="xxxx"  :style="topBannerNavBg">
          <img v-show="isShowMune!=1"  @click="showMune(1)" :src="l_1" style="width: 0.48rem;height: 0.43rem;left: 0.53rem;position: fixed;top: 0.42rem;" />
          <img v-show="isShowMune!=1" :src="m_1" style="width: 2.67rem;height: 0.63rem;left:1.4rem;position: absolute;top: 0.35rem;" />

          <div style=" text-align: center;font-size: 0.37rem; font-family: PingFang SC; font-weight: 800; line-height: 0.91rem;color: #FFFFFF; cursor: pointer;position: absolute;right: 0.4rem;top: 0.2rem;width: 3.2rem; height: 0.91rem; background: linear-gradient(90deg, #0167BC 0%, #5EAEFF 100%); opacity: 1; border-radius: 0.67rem;">
            {{ $t('index.text2117') }}
          </div>
        </div>
       <img style="width: 7.92rem;height: 2.53rem;position: absolute;left: 1.01rem;top: 8rem;" :src="welcome1_h5"/>




      </div>



      <!-----11 end--->
      <!--start memu-->
      <div v-show="isShowMune==1" style="width: 10rem;height: 100%;display: flex;position: fixed;top: 0;left: 0">
        <div style="width: 6.4rem;background: #FFFFFF;height: 100%;">
          <img style="width: 2.67rem;height: 0.67rem;margin-left: 0.53rem;margin-top: 1.23rem;" :src="l_2"/>
          <div style="margin: 0 auto;display: flex;width: 4.8rem;margin-top: 0.5rem;" >
            <img @click="showMune(0)" style="width: 0.48rem;height: 0.43rem;margin-top: 0.15rem;" :src="l_1"/>
            <div style="flex: 1"></div>
            <div  style="cursor: pointer;display: flex;display: flex;width: 3.15rem;height: 0.8rem; border:0.01rem solid #C5C4D6; opacity: 1;border-radius: 0.69rem;">
              <img :src="l_3" style="width: 0.48rem;height: 0.48rem;margin-top: 0.16rem;margin-left: 0.2rem;"/>

              <div style="font-size: 0.32rem;font-family: PingFang SC; font-weight: bold;color: #141420;opacity: 1;line-height: 0.8rem;margin-left: 0.2rem;">English</div>
              <img :src="m_36" style="width: 0.21rem;height: 0.11rem;margin-top: 0.34rem;margin-left: 0.3rem;"/>

            </div>
          </div>


         <!-- <div  @click="goPage(3)" class="h5-item-div" style="margin-top: 0.3rem;">
            <img :src="mp_h5_1" class="h5-item-div-img" style="width: 0.43rem;height: 0.43rem;"/>
            <div class="h5-item-div-div"> {{ $t('index.text2111') }}</div>
          </div>-->
          <div  @click="goPage(2)"  class="h5-item-div"  style="margin-top: 0.3rem;" >
            <img :src="mp_h5_2" class="h5-item-div-img" style="width: 0.48rem;height: 0.44rem;"/>
            <div class="h5-item-div-div"> {{ $t('index.text2112') }}</div>
          </div>
          <div  @click="openLink('https://twitter.com/lynksanctuary')"  class="h5-item-div" >
            <img :src="mp_h5_3" class="h5-item-div-img" style="width: 0.48rem;height: 0.48rem;"/>
            <div class="h5-item-div-div"> {{ $t('index.text2114') }}</div>
          </div>
          <!--    <div  @click="goA1(4)"  class="h5-item-div" >
                <img :src="icon4_ok" class="h5-item-div-img"/>
                <div class="h5-item-div-div"> {{ $t('header.text4') }}</div>
              </div>-->
          <div  @click="openLink('https://discord.gg/6JcgvUzdPj')"   class="h5-item-div" >
            <img :src="mp_h5_4" class="h5-item-div-img" style="width: 0.48rem;height: 0.48rem;"/>
            <div class="h5-item-div-div"> {{ $t('index.text2115') }}</div>
          </div>
          <div  @click="openLink('https://medium.com/@lynksanctuary')"  class="h5-item-div" >
            <img :src="mp_h5_5" class="h5-item-div-img" style="width: 0.48rem;height: 0.48rem;"/>
            <div class="h5-item-div-div"> {{ $t('index.text2116') }}</div>
          </div>


      <!--    <div style="bottom: 0.8rem;position: fixed;left: 0.53rem;">
            <a href=" https://twitter.com/lynksanctuary" title='Twitter' target='_blank'>

              <img  :src="index_img25" style='width: 0.53rem;height:  0.53rem;'/>
            </a>
            <a href="https://discord.gg/6JcgvUzdPj" title='Discord' target='_blank'>
              <img  :src="index_img22" style='width:  0.53rem;height:  0.53rem;margin-left: 0.2rem;'/>
            </a>

            <a href="https://medium.com/@lynksanctuary" title='Medium' target='_blank'>
              <img  :src="index_img23" style='width:  0.53rem;height:  0.53rem;margin-left: 0.2rem;'/>
            </a>
          </div>-->
        </div>

        <!--right-->
        <div @click="closeMenu()"  style="width: 3.6rem;background:#000000;opacity: 0.8;height: 100%; ">


        </div>
      </div>


      <!--end memu-->
    </div>
    <!--    <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img :src="index_img1" style="width: 10rem;height: 10rem;" />
            </div>
            <div class="swiper-slide">
              <img :src="index_img1" style="width: 10rem;height: 10rem;" />
            </div>
            <div class="swiper-slide">
              <img :src="index_img1" style="width: 10rem;height: 10rem;" />
            </div>
          </div>

        </div>-->
    <!--  <Gallery :images="images" ></Gallery>-->
    <!--    <div ref="wrapper">
          <ul class="cont" ref="cont">
            <li class="cont-item" v-for="item of recommendList" :key="item.id">
              <div class="cont-img">
                <img class="img" :src="item.url" :alt="item.text">
              </div>
              <div class="cont-dest">{{item.text}}</div>
              <div class="cont-price">
                <span class="price">￥{{item.price}}</span>
                <span>起</span>
              </div>
            </li>
          </ul>
        </div>-->
    <!--    <slider :pages="pages" :sliderinit="sliderinit">

        </slider>-->





    <my-dialog
        :is-show="isShowDialog"
        @isClose="isShowDialog = false"
        :width="isMobile ? '9.2rem' : '600px'"
    >
      <div v-show="isMobile">
        <div  style="overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all; margin-top: -0.3rem;width: 9.2rem;text-align: center;font-size: 0.53rem; font-family: Arial Black;font-weight: 400; line-height: 0.59rem;color: #141420; opacity: 1;">
          {{ $t('index.text92') }}
        </div>
        <div style="width: 8.13rem;height: 0.03rem; background: #F1F0F2; opacity: 1;margin: 0.3rem auto 0 auto;">

        </div>

        <div style="overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;width: 8.13rem;margin: 0.3rem auto 0 auto;display: flex;font-size: 0.43rem;font-family: Arial Black; font-weight: 400; line-height: 0.59rem; color: #8A899E;opacity: 1;">
          <div v-show="isShowDialogTab==1" @click="clickTab(1)" style="overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;color: #141420;flex: 1;text-align: center;">
            {{ $t('index.text93') }}
          </div>
          <div v-show="isShowDialogTab!==1" @click="clickTab(1)" style="overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;flex: 1;text-align: center;">
            {{ $t('index.text93') }}
          </div>

          <div v-show="isShowDialogTab==2"  @click="clickTab(2)" style="overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;color: #141420;flex: 1;text-align: center;">
            {{ $t('index.text94') }}
          </div>
          <div v-show="isShowDialogTab!==2"  @click="clickTab(2)" style="overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;flex: 1;text-align: center;">
            {{ $t('index.text94') }}
          </div>
          <div v-show="isShowDialogTab==3"  @click="clickTab(3)" style="overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;color: #141420;flex: 1;text-align: center;">
            {{ $t('index.text95') }}
          </div>
          <div v-show="isShowDialogTab!==3"  @click="clickTab(3)" style="overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;flex: 1;text-align: center;">
            {{ $t('index.text95') }}
          </div>
          <div v-show="isShowDialogTab==4" @click="clickTab(4)" style="overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;color: #141420;flex: 1;text-align: center;">
            {{ $t('index.text96') }}
          </div>
          <div v-show="isShowDialogTab!==4" @click="clickTab(4)" style="overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;flex: 1;text-align: center;">
            {{ $t('index.text96') }}
          </div>
        </div>



        <div style="width: 8.13rem;margin: 0.12rem auto 0 auto;display: flex;">
          <div style="flex: 1;text-align: center;">
            <img v-show="isShowDialogTab==1" :src="m_d_1" style="width: 0.75rem;height: 0.13rem;" />
          </div>
          <div style="flex: 1;text-align: center;">
            <img v-show="isShowDialogTab==2"  :src="m_d_1" style="width: 0.75rem;height: 0.13rem;" />
          </div>
          <div style="flex: 1;text-align: center;">
            <img v-show="isShowDialogTab==3"  :src="m_d_1" style="width: 0.75rem;height: 0.13rem;" />
          </div>
          <div style="flex: 1;text-align: center;">
            <img  v-show="isShowDialogTab==4" :src="m_d_1" style="width: 0.75rem;height: 0.13rem;" />
          </div>
        </div>


        <div style="width: 5.33rem;height: 5.33rem;margin: 0.8rem auto 0.53rem auto;">
          <img v-show="isShowDialogTab==1" :src="m_d_2" style="width: 5.33rem;height: 5.33rem;"/>
          <img v-show="isShowDialogTab==2" :src="m_d_3" style="width: 5.33rem;height: 5.33rem;"/>
          <img v-show="isShowDialogTab==3" :src="m_d_4" style="width: 5.33rem;height: 5.33rem;"/>
          <img v-show="isShowDialogTab==4" :src="m_d_5" style="width: 5.33rem;height: 5.33rem;"/>
        </div>

        <div v-show="isShowDialogTab==1" style="text-align: center; flex-wrap: wrap;overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all; height: 3rem;width: 7.4rem;font-size: 0.37rem;font-family: PingFang SC;font-weight: bold;line-height: 0.52rem;color: #8A899E; opacity: 1;margin: 0 auto;">
          {{ $t('index.text975') }}<br>
          {{ $t('index.text976') }}<br>
          {{ $t('index.text977') }}<br>
          {{ $t('index.text978') }}
        </div>
        <div v-show="isShowDialogTab==2" style="text-align: center; flex-wrap: wrap;overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;height: 3rem; width: 7.4rem;font-size: 0.37rem;font-family: PingFang SC;font-weight: bold;line-height: 0.52rem;color: #8A899E; opacity: 1;margin: 0 auto;">
          {{ $t('index.text986') }}<br>
          {{ $t('index.text987') }}<br>
          {{ $t('index.text988') }}<br>
          {{ $t('index.text989') }}
        </div>
        <div v-show="isShowDialogTab==3" style="text-align: center; flex-wrap: wrap;overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;height: 3rem; width: 7.4rem;font-size: 0.37rem;font-family: PingFang SC;font-weight: bold;line-height: 0.52rem;color: #8A899E; opacity: 1;margin: 0 auto;">
          {{ $t('index.text995') }}<br>
          {{ $t('index.text996') }}<br>
          {{ $t('index.text997') }}<br>

        </div>
        <div v-show="isShowDialogTab==4" style="text-align: center; flex-wrap: wrap;overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;height: 3rem; width: 7.4rem;font-size: 0.37rem;font-family: PingFang SC;font-weight: bold;line-height: 0.52rem;color: #8A899E; opacity: 1;margin: 0 auto;">
          {{ $t('index.text1005') }}<br>
          {{ $t('index.text1006') }}<br>
          {{ $t('index.text1007') }}<br>

        </div>
      </div>
      <div v-show="!isMobile">

        <div  style=" overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;margin-top: -2px;width: 600px;text-align: center;font-size: 20px;font-family: Arial Black;font-weight: 400;color: #141420;opacity: 1;">
          {{ $t('index.text92') }}
        </div>
        <div style="width: 560px;height: 1px; background: #F1F0F2; opacity: 1;margin: 20px auto 0 auto;">

        </div>

        <div style="overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;width:600px;margin: 20px auto 0 auto;text-align: center;display: flex;font-size: 16px;font-family: Arial Black; font-weight: 400; line-height: 22px; color: #8A899E;opacity: 1;">
          <div v-show="isShowDialogTab==1" @click="clickTab(1)" style="overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;color: #141420;flex: 1;">
            {{ $t('index.text93') }}
          </div>
          <div v-show="isShowDialogTab!==1" @click="clickTab(1)" style="overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;flex: 1;">
            {{ $t('index.text93') }}
          </div>

          <div v-show="isShowDialogTab==2"  @click="clickTab(2)" style="overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;color: #141420;flex: 1;">
            {{ $t('index.text94') }}
          </div>
          <div v-show="isShowDialogTab!==2"  @click="clickTab(2)" style="overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;flex: 1;">
            {{ $t('index.text94') }}
          </div>
          <div v-show="isShowDialogTab==3"  @click="clickTab(3)" style="overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;color: #141420;flex: 1;">
            {{ $t('index.text95') }}
          </div>
          <div v-show="isShowDialogTab!==3"  @click="clickTab(3)" style="overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;flex: 1;">
            {{ $t('index.text95') }}
          </div>
          <div v-show="isShowDialogTab==4" @click="clickTab(4)" style="overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;color: #141420;flex: 1;">
            {{ $t('index.text96') }}
          </div>
          <div v-show="isShowDialogTab!==4" @click="clickTab(4)" style="overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;flex: 1;">
            {{ $t('index.text96') }}
          </div>
        </div>



        <div style="width: 600px;margin: 0px auto 0 auto;display: flex;text-align: center;">
          <div style="flex: 1;">
            <img v-show="isShowDialogTab==1" :src="m_d_1" style="width: 28px;height: 5px;" />
          </div>
          <div style="flex: 1;text-align: center;">
            <img v-show="isShowDialogTab==2"  :src="m_d_1" style="width: 28px;height: 5px;" />
          </div>
          <div style="flex: 1;text-align: center;">
            <img v-show="isShowDialogTab==3"  :src="m_d_1" style="width: 28px;height: 5px;" />
          </div>
          <div style="flex: 1;">
            <img  v-show="isShowDialogTab==4" :src="m_d_1" style="width: 28px;height: 5px;" />
          </div>
        </div>

        <div style="display: flex;">
          <div style="width: 200px;height: 200px;margin: 27px 40px 40px 40px;">
            <img v-show="isShowDialogTab==1" :src="m_d_2" style="width: 200px;height: 200px;"/>
            <img v-show="isShowDialogTab==2" :src="m_d_3" style="width: 200px;height: 200px;"/>
            <img v-show="isShowDialogTab==3" :src="m_d_4" style="width: 200px;height: 200px;"/>
            <img v-show="isShowDialogTab==4" :src="m_d_5" style="width: 200px;height: 200px;"/>
          </div>
          <div

          >
            <div v-show="isShowDialogTab==1" style=" overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-word;padding-top: 70px; font-size: 16px;font-family: PingFang SC;font-weight: bold;line-height: 26px;color: #141420;opacity: 1;width: 280px;">
              {{ $t('index.text971') }}<br>
              {{ $t('index.text972') }}<br>
              {{ $t('index.text973') }}<br>
              {{ $t('index.text974') }}
            </div>
            <div v-show="isShowDialogTab==2"  style=" overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-word;padding-top: 60px; font-size: 16px;font-family: PingFang SC;font-weight: bold;line-height: 26px;color: #141420;opacity: 1;width: 280px;">
              {{ $t('index.text981') }}<br>
              {{ $t('index.text982') }}<br>
              {{ $t('index.text983') }}<br>
              {{ $t('index.text984') }}<br>
              {{ $t('index.text985') }}
            </div>
            <div v-show="isShowDialogTab==3"  style="overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-word;padding-top: 60px; font-size: 16px;font-family: PingFang SC;font-weight: bold;line-height: 26px;color: #141420;opacity: 1;width: 280px;">
              {{ $t('index.text991') }}<br>
              {{ $t('index.text992') }}<br>
              {{ $t('index.text993') }}<br>
              {{ $t('index.text994') }}
            </div>
            <div v-show="isShowDialogTab==4"  style="overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-word; padding-top: 60px; font-size: 16px;font-family: PingFang SC;font-weight: bold;line-height: 26px;color: #141420;opacity: 1;width: 280px;">
              {{ $t('index.text1001') }}<br>
              {{ $t('index.text1002') }}<br>
              {{ $t('index.text1003') }}<br>
              {{ $t('index.text1004') }}
            </div>

          </div>

        </div>




      </div>
    </my-dialog>

  </div>

</template>


<script>


import {mapGetters, mapState} from "vuex";
import {
  icon_logo,
  welcome, welcome_h5, welcome1_h5,mp_h5_1,mp_h5_2,mp_h5_3,mp_h5_4,mp_h5_5,m_d_1,
  m_d_2,
  m_d_3,
  m_d_4,
  m_d_5,l_1,
  l_2,
  l_3,m_36,m_1
} from "@/utils/images";

import MyDialog from "@/views/components/myDialog";




/*import Gallery from "vue-cover-gallery"
import BScroll from 'better-scroll'*/
export default {
  name: "Index",
  components: {
    MyDialog,
    /*    Gallery,*/


    /*  Swiper*/
  },

  data() {
    return {
      welcome, welcome_h5, welcome1_h5,mp_h5_1,mp_h5_2,mp_h5_3,mp_h5_4,mp_h5_5,icon_logo,m_d_1,
      l_1,
      l_2,
      l_3,m_36,m_1,
      m_d_2,
      m_d_3,
      m_d_4,
      m_d_5,
      index:1,
      showTab6:1,///1 2 3 4
      isShowMune:0,
      isShowDialog:false,
      isShowDialogTab:1,
      value1:'59,865',
      value2:'59,456',
      value3:'99,865',
      isShowBanner:2,
      isShowTab5:1,
      isShowTab8:1,
      isShowTab9:1,
      tabls:['1','2','3','4'],
      topBannerNavBg: {
        background: 'transparent'
      },
      topBannerTextStyle:"pc-header-normal",
      timer: '',



      isActive: false,
      bgx1:'class-leave',
      bgx2:'class-leave',
      bgx3:'class-leave',

      pages:[
        {
          title: '',
          style:{
            background:'url(src/img/testimg-1.jpg)'
          }
        },
        {
          title: '',
          style:{
            background:'url(src/img/testimg-2.jpg)'
          }
        },
        {
          title: 'slide3',
          style:{
            background:'#4bbfc3',
          },
        }
      ],
      //滑动配置[obj]
      sliderinit: {
        currentPage: 0,//当前页码
        thresholdDistance: 500,//滑动判定距离
        thresholdTime: 100,//滑动判定时间
        autoplay:1000,//自动滚动[ms]
        loop:true,//循环滚动
        direction:'vertical',//方向设置，垂直滚动
        infinite:1,//无限滚动前后遍历数
        slidesToScroll:1,//每次滑动项数
      }
    }
  },


  // swiperOption: {
  //   loop: true,
  //   autoplay: {
  //     delay: 3000,
  //     stopOnLastSlide: false,
  //     disableOnInteraction: false
  //   },
  //   // 显示分页
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true //允许分页点击跳转
  //   },
  //   // 设置点击箭头
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev"
  //   }
  // }
  // }// },
  computed: {
    ...mapState({
      isMobile: state => state.sys.isMobile,
    }),
    ...mapGetters({
      // is_connected: "is_connected"
    }),

  },
  created() {

  },
  beforeDestroy() {
    clearInterval(this.timer);
    window.removeEventListener('scroll', this.handleScroll)
  },
  mounted(){
    /*    new Swiper ('.swiper-container', {
          loop: true,
          // 如果需要分页器
          pagination: '.swiper-pagination',
          // 如果需要前进后退按钮
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          // 如果需要滚动条
          scrollbar: '.swiper-scrollbar',
        })*/
    this.timer = setInterval(this.get, 2000);
    window.addEventListener('scroll', this.handleScroll) // 监听页面滚动
  }
  ,
  methods: {
    get() {
      this.next();
      this.index++;
      if (this.index > 3) {
        this.index = 1
      }
      if(this.index == 1){
        this.showBanner1 = this.banner1;
        this.showBanner2 = this.banner2;
        this.showBanner3 = this.banner3;
      }else if(this.index == 2) {
        this.showBanner1 = this.banner3;
        this.showBanner2 = this.banner1;
        this.showBanner3 = this.banner2;
      }else if(this.index == 3){
        this.showBanner1 = this.banner2;
        this.showBanner2 = this.banner3;
        this.showBanner3 = this.banner1;
      }
      // this.changeClasss()
    },

    goPage(index){
      if(index==1){
        this.$router.push({
          name:'index',
          params:{
            id:0
          }
        })

        // this.$bus.$emit("formBus", 1);
  /*    document.querySelector("#a8").scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start",
      });*/
      }
      if(index==2){
        // this.$router.push("/index")
        this.$router.push({
          name:'index',
          params:{
            id:1
          }
        })
      }
      if(index==3) {
        this.$router.push({
          name: 'index',
          params: {
            id: 3
          }
        })
      }
    },
    clickM9Left(){
      if(this.isShowTab9<=1){
        this.isShowTab9 = 1;
        return ;
      }
      this.isShowTab9 =  this.isShowTab9 -1;
    },
    clickM9Right(){
      if(this.isShowTab9>4){
        this.isShowTab9 = 4;
        return ;
      }
      this.isShowTab9 =  this.isShowTab9 +1;
    },
    clickTab(index){
      this.isShowDialogTab = index;
    },
    showDialog(){
      this.isShowDialog = true;
    },

    openLink1(url){
      // window.open(url,"_self");
    },
    openLink(url){
      window.open(url,"_blank");
    },
    onClickSumbitIdea(){
      window.open("https://docs.google.com/forms/d/e/1FAIpQLSdlDstV0BJ9nEl27RLxjCs6Ek8ST2s1ec42-BB6LjVFGgRZgg/viewform","_blank");
    },
    pre(){
      if(this.isShowBanner == 1){
        this.isShowBanner = 3;
        return ;
      }
      this.isShowBanner = this.isShowBanner -1;
    },
    next(){
      if(this.isShowBanner == 3){
        this.isShowBanner = 1;
        return ;
      }
      this.isShowBanner = this.isShowBanner +1;
    },
    left(){
      this.isShowTab5+=1;
      if (this.isShowTab5 > (this.tabls.length -1)) {
        this.isShowTab5 = 0;
      }

    },
    right(){
      this.isShowTab5-=1;
      if (this.isShowTab5 < 0) {
        this.isShowTab5 = (this.tabls.length -1);
      }
    },
    click(i){
      this.isShowTab5 = i;
    },
    mouseOver() {
      this.isActive = true
      clearInterval(this.timer);
    },
    // 移出
    mouseLeave() {
      this.isActive = false
      this.timer = setInterval(this.get, 2000);
    },
    mouseOver1(index) {

      if(index == 1){
        this.bgx1 = 'class-over';
        this.bgx2 = 'class-leave';
        this.bgx3 = 'class-leave';
      }else if(index == 2){
        this.bgx1 = 'class-leave';
        this.bgx2 = 'class-over';
        this.bgx3 = 'class-leave';
      }else if(index == 3){
        this.bgx1 = 'class-leave';
        this.bgx2 = 'class-leave';
        this.bgx3 = 'class-over';
      }

    },
    // 移出
    mouseLeave1() {
      this.bgx1 = 'class-leave';
      this.bgx2 = 'class-leave';
      this.bgx3 = 'class-leave';
    },
    onClickLeft(){
      this.index--;
      if (this.index <1) {
        this.index = 1
      }
      if(this.index == 1){
        this.showBanner1 = this.banner1;
        this.showBanner2 = this.banner2;
        this.showBanner3 = this.banner3;
      }else if(this.index == 2) {
        this.showBanner1 = this.banner3;
        this.showBanner2 = this.banner1;
        this.showBanner3 = this.banner2;
      }else if(this.index == 3){
        this.showBanner1 = this.banner2;
        this.showBanner2 = this.banner3;
        this.showBanner3 = this.banner1;
      }
    },
    onClickRight(){
      this.index++;
      if (this.index > 3) {
        this.index = 1
      }
      if(this.index == 1){
        this.showBanner1 = this.banner1;
        this.showBanner2 = this.banner2;
        this.showBanner3 = this.banner3;
      }else if(this.index == 2) {
        this.showBanner1 = this.banner3;
        this.showBanner2 = this.banner1;
        this.showBanner3 = this.banner2;
      }else if(this.index == 3){
        this.showBanner1 = this.banner2;
        this.showBanner2 = this.banner3;
        this.showBanner3 = this.banner1;
      }
    },
    showMune(index){
      this.isShowMune = index;
    },
    closeMenu(){
      this.isShowMune = 0;
    },
    onCopy(e) {

      // this.showInviteDialog = false;
    },
    onClickTab5(index){
      this.isShowTab5 = index;
    },
    onClickTab6(index){
      this.showTab6 = index;
    },
    onClickTab8(index){
      this.isShowTab8 = index;
    },
    goA1(index){
      this.isShowMune = 0
      var id = "#a1" ;
      if(index==2){
        id = "#a2" ;
      }else if(index==3){
        id = "#a3" ;
      }else if(index==4){
        id = "#a4" ;
      }else if(index==5){
        id = "#a5" ;
      }else if(index==6){
        id = "#a6" ;
      }else if(index==7){
        id = "#a7" ;
      }else if(index==8){
        id = "#a8" ;
      }
      document.querySelector(id).scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start",
      });

    },
    goTag(index){
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
    onError(e) {
      console.log("" + e);
      this.$message.error("copy error ");
    },
    handleScroll () {
     let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      // 设置背景颜色的透明度
      if (scrollTop) {
        this.topBannerNavBg.background = '#ffffff' // scrollTop + 多少根据自己的需求设置
        this.topBannerTextStyle = "pc-header-normal-s"
      } else if (scrollTop === 0) {
        this.topBannerNavBg.background = 'transparent' // 设置回到顶部时，背景颜色为透明
        this.topBannerTextStyle = "pc-header-normal"
      }
    },

    // 滚动之前重置
    beforeDestroy () {
      window.removeEventListener('scroll', this.handleScroll)
    },
  }
};
</script>


<style lang="scss" scoped>
.xxx{
  width: 100%;height: 82px;position: fixed;top: 0px;z-index: 9999;
}

.pc-header-normal{
  margin-left:80px;
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: bold;
  line-height: 82px;
  color: #FFFFFF;
  opacity: 1;
  cursor: pointer;
}

.pc-header-normal-s{
  margin-left:80px;
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
.swiper-container {
  width: 100%;
  height: 9.375rem;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  width: 100%;
  height: 100%;
}
.recommand-wrap {
  height: 0;
  padding-bottom: 50%;
  margin-top: .2rem;
  background: #fff;
  padding-left: .24rem;
  width: 100%;
  .title {
    position: relative;
    height: 40px;
    display: flex;
    padding: 12px 0;
    box-sizing: border-box;
    .title-img {
      width: 15px;
      height: 15px;
    }
    .title-hotrec {
      font-size: 16px;
      margin-left: 4px;
    }
    .title-allrec {
      position: absolute;
      padding-top: 2px;
      font-size: 13px;
      right: 20px;
      color: gray;
    }
  }
  .cont {
    list-style: none;
    // overflow-x: scroll;
    white-space: nowrap;
    font-size: 12px;
    text-align: center;
    padding-right: .24rem;
    .cont-item {
      position: relative;
      display: inline-block;
      padding: .06rem 0 .2rem;
      width: 2rem;
      margin: 0 .1rem;
      .cont-img {
        overflow: hidden;
        width: 2rem;
        height: 0;
        padding-bottom: 100%;
        .img {
          width: 100%;
        }
      }
      .cont-dest {
        margin: .1rem 0;
      }
      .cont-price {
        .price {
          color: #ff8300;
        }
      }
    }
  }
}
.class-over{
  background: #0167BC;
}
.class-leave{
  background: #141420;
}
.xxxx{
  width: 10rem;height: 1.33rem;position: fixed;top: 0;left: 0;z-index: 999;  overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;
}
.h5-item-div{
  width: 6.4rem;height: 1.33rem;display: flex;  overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;
}
.h5-item-div-img{
  width: 0.48rem;height: 0.44rem;margin-top: 0.44rem;margin-left: 0.53rem;  overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;
}
.h5-item-div-div{
  line-height: 1.33rem;margin-left: 0.25rem; font-size: 0.37rem;font-family: PingFang SC;font-weight: 400; color: #141420;opacity: 1;  overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;
}
.swiper-container {
  width: 600px;
  height: 300px;
}
.pc-div1{
  width: 1480px;text-align: center;font-size: 54px;font-family: Arial Black;font-weight: 400;color: #141420;opacity: 1;padding-top: 160px;  overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;
}
.pc-div2{
  width: 170px;height: 60px;background: linear-gradient(86deg, #0167BC 0%, #5EAEFF 100%);opacity: 1;border-radius: 30px;margin: 40px auto ;font-size: 16px;
  font-family: PingFang SC;font-weight: bold;line-height: 60px;color: #FFFFFF;opacity: 1;padding-left: 30px;position: relative;  overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;
}
.pc-card-div1{
  width: 260px; height: 368px; background: #FFFFFF; border: 3px solid #9DDECD; opacity: 1; border-radius: 10px;
}
.pc-card-div111xxxxx{
  width: 260px; height: 260px;  overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;
}
.pc-card-div111{
  width: 260px; height: 375px; background: #FFFFFF;background: #FFFFFF;
  box-shadow: 0px 5px 30px rgba(20,20,32,0.1);
  opacity: 1;
  border-radius: 10px 10px 10px 10px;  overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;
}
.pc-card-div111-img{
  width: 260px; height: 260px;  overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;
}
.pc-card-div122{
  width: 90px;height: 34px;background: #141420;opacity: 1;border-radius: 17px;display: flex;  overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;
}
.pc-card-div122-img{
  width: 16px;height: 14px;margin-left: 20px;margin-top: 10px;  overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;
}
.pc-card-div1222{
  margin-left: 10px;line-height: 34px;font-size: 12px; font-family: PingFang SC;  overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all; font-weight: bold;color: #FFFFFF; opacity: 1;
}
.pc-card-div2{
  display: flex;padding: 10px 10px;
}
.pc-card-div3{
  font-size: 12px;font-family: PingFang SC;ont-weight: bold;  overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all; line-height: 25px;color: #FFFFFF; text-align: center;line-height: 25px;width: 60px; height: 25px; background: linear-gradient(270deg, #5EAEFF 0%, #0167BC 100%); opacity: 1; border-radius: 13px;
}
.pc-card-div4{
  width: 24px;height: 24px;  overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;
}
.pc-card-div5{
  width: 240px;height: 240px;margin-left: 10px;margin-top:3px;border-radius: 10px;  overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;
}
.pc-card-div6{
  display: flex;padding-left: 30px;padding-right: 30px;  overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;
}
.pc-card-div7{
  font-size: 12px;font-family: PingFang SC;font-weight: bold;  color: #141420;opacity: 1;  overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;}

.pc-card-div8{
  width: 10px;height: 5px;margin-top: 10px;  overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;}

.pc-card-div9{
  width:240px;margin: 10px auto 0 auto;height: 1px;background: #F1F0F2;opacity: 1;  overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;}

.pc-card-div10{
  display: flex;padding-left:20px;padding-right: 20px;margin-top: 7px;  overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;}
.pc-card-div11{
  font-size: 14px;font-family: Lantinghei SC;font-weight: 700;  color: #141420;opacity: 1;  overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;}

.pc-card-div12{
  font-size: 16px; font-family: DIN Alternate;font-weight: bold; color: #141420; opacity: 1;padding-top: -20px;  overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;}
.pc-card-div13{
  width: 16px;height: 16px;margin-left: 10px;margin-top: 3px;  overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;
}

.pc-mp-div1{
  width: 1240px;height: 60px; opacity: 1;display: flex;border-bottom: 1px solid #F1F0F2;  overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;
}
.pc-mp-div2{
  width: 4px;height: 4px; background: #0167BC;border-radius: 50%;opacity: 1;margin-left: 20px;margin-top: 27px;  overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;
}
.pc-mp-div3{
  font-size: 16px;font-family: PingFang SC; font-weight: bold;line-height: 60px; color: #141420; opacity: 1;padding-left: 20px;  overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;
}
.pc-mp-div4{
  font-size: 14px;font-family: PingFang SC;font-weight: 500;line-height: 60px;color: #8A899E;opacity: 1;  overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;
}

.pc-header-circle{
  margin-left:40px;
  width: 140px;
  height: 44px;
  border: 1px solid #C5C4D6;
  opacity: 1;
  border-radius: 26px;
  opacity: 1;
  cursor: pointer;
  margin-top: 18px;
  position: relative;
}


.pc-header-circle-center{
  position: absolute;left: 45px;line-height: 44px;
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: bold;
  color: #FFFFFF;
  opacity: 1;  overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;
}
.h5-div9-left-bg{
  width: 6.93rem;height: 9.73rem;background: #FFFFFF; opacity: 1;border-radius: 0.27rem;margin-left: 0.4rem;  overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;
}
.h5-div9-right-bg{
  opacity: 1;border-bottom-left-radius: 0.27rem;border-top-left-radius: 0.27rem;margin-left: 0.5rem;
  width: 2.71rem;height: 9.73rem;background: #FFFFFF;  overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;
}

.h5-circle{
  width: 0.11rem;height: 0.11rem;background: #0167BC;border-radius: 50%;opacity: 1;
}
.h5-text{
  font-size: 0.37rem;
  font-family: PingFang SC;
  font-weight: bold;
  line-height: 0.53rem;
  color: #141420;  overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;
  opacity: 1;
}
.h5-text1{
  font-size: 0.37rem;
  font-family: PingFang SC;
  font-weight: bold;
  line-height: 0.53rem;
  color: #FFFFFF;  overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;
  opacity: 1;
}


.h5-div7-text{
  font-size: 0.37rem;
  font-family: PingFang SC;
  font-weight: 400;
  line-height: 0.59rem;
  color: #8A899E;  overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;
  opacity: 1;
}


.h5-div8-text{
  overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;
  font-size:0.37rem;


  line-height: 0.64rem;
  color: #FFFFFF;
  opacity: 1;
  width: 7rem;
  margin-left: 0.2rem;
}
.btn1:hover {
  background: #a6a6a6;
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
  overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all
}
.el-message {
  margin-top: 400px !important;
  overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all
}
.xxxx1{
  width: 100%;position: relative; background: url('../../assets/img/new_bg.png'); background-size: 100% 100%;min-height: 1280px;
}
.xxxx6{
  width: 100%;height: 900px;position: relative; background: url('../../assets/img/index_img7.png'); background-size: 100% 100%;
}

.xxxx2{
  width: 100%;height: 900px;position: relative; background: url('../../assets/img/index_img2.png'); background-size: 100% 100%;
}
.xxxxx{
  width: 10rem;height:27rem;position: relative; background: url('../../assets/img/m_12.png'); background-size: 100% 100%;

}
.h5_div1_bg{
  width: 10rem;height: 21.65rem;position: relative; background: url('../../assets/img/welcome_h5.png'); background-size: 100% 100%;

}

</style>
