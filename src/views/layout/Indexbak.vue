<template xmlns="http://www.w3.org/1999/html">
  <div style="width: 100%;height: 100%;">
    <!--pc--->
    <div
        v-show="!isMobile"
        style="padding-bottom:20px;min-height: 1500px;margin: 0 auto;"
    >


      <div id="a11"  style="width: 100%;height: 900px;position: relative;">
        <img :src="bg1" style="width: 100%;height: 900px;position: absolute;left: 0;top: 0;" />
        <div style="width: 1480px;height: 900px;margin: 0 auto;">
          <div class="pc-div1">
            {{ $t('index.text1') }}
          </div>

          <div class="pc-div2">
            {{ $t('index.text2') }}
            <img :src="icon_right_arrow" style="width: 26px;height: 13px;position: absolute;right: 30px;top: 23px;"/>
          </div>

          <div style="width: 930px;position: relative;height: 350px;margin: 80px auto;"  @mouseover='mouseOver()' @mouseleave="mouseLeave()">
            <img :src="arrow_left" style="width: 60px;height: 60px;position: absolute;top: 145px;left: 0px;" @click="onClickLeft"/>

            <img  :src="showBanner1" style="width: 265px;height: 265px;position: absolute;top: 45px;left: 90px;"/>
            <img  :src="showBanner3" style="width: 265px;height: 265px;position: absolute;top: 45px;right: 90px;"/>
            <img  :src="showBanner2" style="width: 350px;height: 350px;z-index: 99;position: absolute;right: 290px;"/>


            <!--        <img v-show="index==1"  :src="banner2" style="width: 265px;height: 265px;position: absolute;top: 45px;left: 90px;"/>
                    <img v-show="index==1" :src="banner1" style="width: 265px;height: 265px;position: absolute;top: 45px;right: 90px;"/>
                    <img v-show="index==1" :src="banner3" style="width: 350px;height: 350px;z-index: 99;position: absolute;right: 290px;"/>


                    <img v-show="index==2"  :src="banner3" style="width: 265px;height: 265px;position: absolute;top: 45px;left: 90px;"/>
                    <img v-show="index==2"  :src="banner2" style="width: 265px;height: 265px;position: absolute;top: 45px;right: 90px;"/>
                    <img v-show="index==2"  :src="banner1" style="width: 350px;height: 350px;z-index: 99;position: absolute;right: 290px;"/>-->




            <img :src="arrow_right" style="width: 60px;height: 60px;position: absolute;top: 145px;right: 0px;" @click="onClickRight"/>
          </div>

          <!--  <div class="swiper-container">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <img :src="index_img1" style="width: 400px;height: 200px;" />
                </div>
                <div class="swiper-slide">
                  <img :src="index_img1" style="width: 400px;height: 200px;" />
                </div>
                <div class="swiper-slide">
                  <img :src="index_img1" style="width: 400px;height: 200px;" />
                </div>
              </div>

            </div>-->
          <!-- 如果需要分页器 -->
          <!--        <div class="swiper-pagination"></div>-->
          <!-- 如果需要导航按钮 -->
          <!--          <div class="swiper-button-prev"></div>-->
          <!--          <div class="swiper-button-next"></div>-->
          <!-- 如果需要滚动条 -->
          <!--         <div class="swiper-scrollbar"></div>-->




        </div>

      </div>


      <!--2 statrt-->
      <div    style="width: 100%;height: 900px;">
        <div style="width: 1200px;height: 900px;display: flex;margin: 0 auto;">
          <div style="width: 438px;">
            <div style="margin-top: 260px;font-size: 42px;font-family: Arial Black;font-weight: 400;color: #141420;opacity: 1;">{{ $t('index.text3') }}</div>
            <div style="overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;margin-top: 20px; font-size: 16px;font-family: PingFang SC; font-weight: 500; line-height: 24px; color: #141420; opacity: 1;">{{ $t('index.text4') }}</div>
          </div>
          <!--right-->
          <div>
            <img :src="index_img1" style="width: 648px;height: 378px;margin-top: 150px;margin-left: 120px" />
          </div>
        </div>
      </div>


      <!--2 end-->
      <!--3 statrt-->
      <div id="a21"  class="xxxx2">
        <div style="margin: 0 auto;max-width: 1113px; padding-top: 200px;font-size: 42px;text-align: center;font-family: Arial Black; font-weight: 400; line-height: 50px;color: #FFFFFF; opacity: 1;">{{ $t('index.text5') }}</div>

        <div style="width: 1380px;margin: 0 auto;position: relative;display: flex;padding-top:90px;">

          <div style="overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;width: 580px; font-size: 16px;font-family: PingFang SC; font-weight: 400; line-height: 30px;color: #FFFFFF; opacity: 1;">{{ $t('index.text6') }}</div>

          <img :src="index_img3" style="width: 742px;height: 372px;margin-left: 58px" />

        </div>
      </div>
      <!--3 end-->


      <!--4 statrt-->
      <!--    <div style="width: 100%;height: 900px;position: relative;">
            <img :src="bg2" style="width: 100%;height: 900px;position: absolute;left: 0;top: 0;" />
            <div style="width: 1480px;height: 900px;margin: 0 auto;">
              <div style="width: 1480px;margin-top: 130px;text-align: center;font-size: 42px;font-family: Arial Black;font-weight: 400;color: #141420;opacity: 1;"> {{ $t('index.text7') }} </div>
              <div style="margin: 20px auto;width: 1100px;margin-top: 35px;line-height: 1.8;text-align: center;font-size: 19px;font-family: PingFang SC;font-weight: 800;color: #141420;opacity: 1;"> {{ $t('index.text8') }} </div>
              <div style="width: 1200px;margin: 260px auto 0 auto;display: flex;">
                  <div style="flex: 1;">
                    <div style=" font-size: 65px;font-family: DIN Alternate;font-weight: bold;line-height: 22px; color: #0167BC; opacity: 1;text-align: center;">{{value1}}</div>
                    <div style="font-size: 14px; font-family: PingFang SC; font-weight: 400;margin-top: 40px; color: #141420;opacity: 1;text-align: center;">{{ $t('index.text9') }}</div>
                  </div>
                  <div style="flex: 1;">
                    <div style=" font-size: 65px;font-family: DIN Alternate;font-weight: bold;line-height: 22px; color: #0167BC; opacity: 1;text-align: center;">{{value2}}</div>
                    <div style="font-size: 14px; font-family: PingFang SC; font-weight: 400;margin-top: 40px; color: #141420;opacity: 1;text-align: center;">{{ $t('index.text10') }}</div>
                  </div>
                  <div style="flex: 1;">
                    <div style=" font-size: 65px;font-family: DIN Alternate;font-weight: bold;line-height: 22px; color: #0167BC; opacity: 1;text-align: center;">{{value3}}</div>
                    <div style="font-size: 14px; font-family: PingFang SC; font-weight: 400;margin-top: 40px; color: #141420;opacity: 1;text-align: center;">{{ $t('index.text11') }}</div>

                  </div>
              </div>
              <div style="text-align: center;width: 950px;margin:100px auto 0 auto;font-size: 14px; font-family: PingFang SC;font-weight: 500; line-height: 30px; color: #8A899E; opacity: 1;">
                {{ $t('index.text12') }}
              </div>
            </div>
          </div>-->

      <!--4 end-->

      <!--5 statrt-->
      <div style="width: 100%;height: 900px;background: #FAFAFA;">
        <div style="width: 1480px;height: 900px;margin: 0 auto;padding-top: 66px;">
          <div style="width: 400px;margin: 0 auto ;display: flex;">
            <div  @click="onClickTab5(1)" style="width: 150px;">
              <div v-show="isShowTab5==1"  style="width: 150px;text-align: center;font-size: 36px;font-family: Arial Black; font-weight: 400; line-height: 50px; color: #141420; opacity: 1;">{{ $t('index.text13') }}</div>
              <div v-show="isShowTab5!==1"  style="width: 150px;text-align: center;font-size: 36px;font-family: Arial Black; font-weight: 400; line-height: 50px; color: #8A899E; opacity: 1;">{{ $t('index.text13') }}</div>

              <div  v-show="isShowTab5==1"  style=" margin: 10px auto 0px;width: 60px;height: 4px; background: linear-gradient(90deg, #0167BC 0%, #5EAEFF 100%);opacity: 1;"></div>
            </div>
            <div @click="onClickTab5(2)" style="width: 150px;margin-left: 100px;">
              <div v-show="isShowTab5==2"  style="width: 150px;text-align: center;font-size: 36px;font-family: Arial Black; font-weight: 400; line-height: 50px; color: #141420; opacity: 1;">{{ $t('index.text14') }}</div>
              <div v-show="isShowTab5!=2"  style="width: 150px;text-align: center;font-size: 36px;font-family: Arial Black; font-weight: 400; line-height: 50px; color: #8A899E; opacity: 1;">{{ $t('index.text14') }}</div>
              <div  v-show="isShowTab5==2"  style=" margin: 10px auto 0px;width: 60px;height: 4px; background: linear-gradient(90deg, #0167BC 0%, #5EAEFF 100%);opacity: 1;"></div>
            </div>
          </div>


          <div v-show="isShowTab5==1" style=" width: 1100px; font-size: 16px;font-family: PingFang SC; font-weight: 500; line-height: 28px; color: #141420; opacity: 1;margin: 20px auto 0px;text-align: center;">{{ $t('index.text15') }}</div>


          <div v-show="isShowTab5==1"  style="display: flex;margin: 30px auto ;width: 1298px;">
            <div style="width: 360px; height: 500px">
              <img :src="index_img4" style="width: 360px;height: 300px;"/>
              <div style="margin-top: -20px;  width: 360px; height: 200px; background: #FFFFFF; opacity: 1; border-radius: 0px 0px 10px 10px;">
                <div style="overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;padding-top: 20px;font-size: 18px; font-family: Arial Black; font-weight: 400; line-height: 22px;  color: #141420; opacity: 1;width: 360px;text-align: center;">
                  {{ $t('index.text16') }}
                </div>
                <div style="overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all; width: 300px;font-size: 14px;font-family: PingFang SC; font-weight: 500;line-height: 24px;color: #8A899E;opacity: 1;margin: 10px auto; ">
                  {{ $t('index.text17') }}
                </div>
              </div>
            </div>

            <div style="width: 360px; height: 500px;margin-left: 109px;">
              <img :src="index_img5" style="width: 360px;height: 300px;"/>
              <div style="margin-top: -20px;  width: 360px; height: 200px; background: #FFFFFF; opacity: 1; border-radius: 0px 0px 10px 10px;">
                <div style="overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;padding-top: 20px;font-size: 18px; font-family: Arial Black; font-weight: 400; line-height: 22px;  color: #141420; opacity: 1;width: 360px;text-align: center;">
                  {{ $t('index.text18') }}
                </div>
                <div style="overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all; width: 300px;font-size: 14px;font-family: PingFang SC; font-weight: 500;line-height: 24px;color: #8A899E;opacity: 1;margin: 10px auto; ">
                  {{ $t('index.text19') }}
                </div>
              </div>
            </div>


            <div style="width: 360px; height: 500px;margin-left: 109px;">
              <img :src="index_img6" style="width: 360px;height: 300px;"/>
              <div style=" margin-top: -20px; width: 360px; height: 200px; background: #FFFFFF; opacity: 1; border-radius: 0px 0px 10px 10px;">
                <div style="overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;padding-top: 20px;font-size: 18px; font-family: Arial Black; font-weight: 400; line-height: 22px;  color: #141420; opacity: 1;width: 360px;text-align: center;">
                  {{ $t('index.text20') }}
                </div>
                <div style="overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all; width: 300px;font-size: 14px;font-family: PingFang SC; font-weight: 500;line-height: 24px;color: #8A899E;opacity: 1;margin: 10px auto; ">
                  {{ $t('index.text21') }}
                </div>
              </div>
            </div>



          </div>

          <div v-show="isShowTab5==2"  style="display: flex;margin: 100px auto ;width: 1298px;">
            <div style="width: 360px; height: 500px">
              <img :src="pc_n_1" style="width: 360px;height: 360px;"/>
              <div style=" margin-top: -20px; width: 360px; height: 200px; background: #FFFFFF; opacity: 1; border-radius: 0px 0px 10px 10px;">
                <div style="overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;padding-top: 20px;font-size: 18px; font-family: Arial Black; font-weight: 400; line-height: 22px;  color: #141420; opacity: 1;width: 360px;text-align: center;">
                  {{ $t('index.text77') }}
                </div>
                <div style="overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all; width: 300px;font-size: 14px;font-family: PingFang SC; font-weight: 500;line-height: 24px;color: #8A899E;opacity: 1;margin: 10px auto; ">
                  {{ $t('index.text78') }}
                </div>
              </div>
            </div>

            <div style="width: 360px; height: 500px;margin-left: 109px;">
              <img :src="pc_n_2" style="width: 360px;height: 360px;"/>
              <div style=" margin-top: -20px;  width: 360px; height: 200px; background: #FFFFFF; opacity: 1; border-radius: 0px 0px 10px 10px;">
                <div style="overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;padding-top: 20px;font-size: 18px; font-family: Arial Black; font-weight: 400; line-height: 22px;  color: #141420; opacity: 1;width: 360px;text-align: center;">
                  {{ $t('index.text79') }}
                </div>
                <div style="overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all; width: 300px;font-size: 14px;font-family: PingFang SC; font-weight: 500;line-height: 24px;color: #8A899E;opacity: 1;margin: 10px auto; ">
                  {{ $t('index.text80') }}
                </div>
              </div>
            </div>


            <div style="width: 360px; height: 500px;margin-left: 109px;">
              <img :src="pc_n_3" style="width: 360px;height: 360px;"/>
              <div style=" margin-top: -20px; width: 360px; height: 200px; background: #FFFFFF; opacity: 1; border-radius: 0px 0px 10px 10px;">
                <div style="overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;padding-top: 20px;font-size: 18px; font-family: Arial Black; font-weight: 400; line-height: 22px;  color: #141420; opacity: 1;width: 360px;text-align: center;">
                  {{ $t('index.text81') }}
                </div>
                <div style="overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all; width: 300px;font-size: 14px;font-family: PingFang SC; font-weight: 500;line-height: 24px;color: #8A899E;opacity: 1;margin: 10px auto; ">
                  {{ $t('index.text82') }}
                </div>
              </div>
            </div>



          </div>
        </div>
      </div>


      <!--5 end-->


      <!--6 statrt-->
      <div  id="a31"  class="xxxx6">




        <!--    <img :src="index_img7" style="width: 100%;height: 900px;position: absolute;left: 0;top: 0;" />-->

        <div style="overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;max-width: 800px;margin: 0 auto;font-size: 42px;font-family: Arial Black;font-weight: 400;line-height: 50px;color: #FFFFFF;opacity: 1;padding-top: 90px;text-align: center;">
          {{ $t('index.text220') }}</div>



        <div style="margin: 0 auto;padding-top:120px;display: flex;width: 1320px;">
          <div style="width: 350px; ">
            <div style="overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;font-size: 26px;font-family: Arial Black; font-weight: 400;line-height: 22px; color: #FFFFFF; opacity: 1;">
              {{ $t('index.text22') }}</div>


            <div style="display: flex;margin-top: 40px;">
              <div style=" width: 4px; height: 4px;background: #0167BC; border-radius: 50%; opacity: 1;margin-top: 8px;"></div>
              <div style="overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all; font-size: 14px;font-family: PingFang SC;  color: #FFFFFF;  opacity: 1;margin-left: 8px;">
                {{ $t('index.text23') }}
              </div>
            </div>
            <div style="display: flex;margin-top: 20px;">
              <div style=" width: 4px; height: 4px;background: #0167BC; border-radius: 50%; opacity: 1;margin-top: 8px;"></div>
              <div style="overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all; font-size: 14px;font-family: PingFang SC;  color: #FFFFFF;  opacity: 1;margin-left: 8px;">
                {{ $t('index.text231') }}
              </div>
            </div>
            <div style="display: flex;margin-top: 20px;">
              <div style=" width: 4px; height: 4px;background: #0167BC; border-radius: 50%; opacity: 1;margin-top: 8px;"></div>
              <div style="overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all; font-size: 14px;font-family: PingFang SC;  color: #FFFFFF;  opacity: 1;margin-left: 8px;">
                {{ $t('index.text251') }}
              </div>
            </div>
            <div style="display: flex;margin-top: 20px;">
              <div style=" width: 4px; height: 4px;background: #0167BC; border-radius: 50%; opacity: 1;margin-top: 8px;"></div>
              <div style="overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all; font-size: 14px;font-family: PingFang SC;  color: #FFFFFF;  opacity: 1;margin-left: 8px;">
                {{ $t('index.text25') }}
              </div>
            </div>

            <div style="display: flex;margin-top: 20px;">
              <div style=" width: 4px; height: 4px;background: #0167BC; border-radius: 50%; opacity: 1;margin-top: 8px;"></div>
              <div style="overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all; font-size: 14px;font-family: PingFang SC;  color: #FFFFFF;  opacity: 1;margin-left: 8px;">
                {{ $t('index.text261') }}
              </div>
            </div>
            <div style="display: flex;margin-top: 20px;">
              <div style=" width: 4px; height: 4px;background: #0167BC; border-radius: 50%; opacity: 1;margin-top: 8px;"></div>
              <div style=" overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;font-size: 14px;font-family: PingFang SC;  color: #FFFFFF;  opacity: 1;margin-left: 8px;">
                {{ $t('index.text262') }}
              </div>
            </div>
            <div style="display: flex;margin-top: 20px;">
              <div style=" width: 4px; height: 4px;background: #0167BC; border-radius: 50%; opacity: 1;margin-top: 8px;"></div>
              <div style="overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all; font-size: 14px;font-family: PingFang SC;  color: #FFFFFF;  opacity: 1;margin-left: 8px;">
                {{ $t('index.text27') }}
              </div>
            </div>
          </div>

          <div style="width: 820px; margin-left: 150px;">
            <div @mouseover='mouseOver1(1)' @mouseleave='mouseLeave1()' :class="bgx1" style=" cursor: pointer;width: 820px; height: 130px; opacity: 0.8; border-radius: 5px;position: relative;">
              <img :src="ppp1" style="width: 60px;height: 52px;position: absolute;left: 26px;top: 35px;" />
              <div style=" overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;position: absolute;left: 133px;top: 25px;font-size: 22px; font-family: Arial Black;font-weight: 400; line-height: 22px;color: #FFFFFF; opacity: 1;">
                {{ $t('index.text28') }}
              </div>
              <div style="overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all; width:620px;;position: absolute;left: 133px;bottom: 25px;font-size: 14px; font-family: PingFang SC;font-weight: 400; line-height:20px;color: #FFFFFF; opacity: 1;">
                {{ $t('index.text29') }}
              </div>
            </div>
            <div @mouseover='mouseOver1(2)' @mouseleave='mouseLeave1()' :class="bgx2" style=" cursor: pointer; margin-top: 20px;width: 820px; height: 130px;opacity: 0.8; border-radius: 5px;position: relative;">
              <img :src="ppp2" style="width: 60px;height: 52px;position: absolute;left: 26px;top: 35px;" />
              <div style="overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all; position: absolute;left: 133px;top: 25px;font-size: 22px; font-family: Arial Black;font-weight: 400; line-height: 22px;color: #FFFFFF; opacity: 1;">
                {{ $t('index.text30') }}
              </div>
              <div style="overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all; width:620px;;position: absolute;left: 133px;bottom: 25px;font-size: 14px; font-family: PingFang SC;font-weight: 400; line-height:20px;color: #FFFFFF; opacity: 1;">
                {{ $t('index.text31') }}
              </div>
            </div>

            <div @mouseover='mouseOver1(3)' @mouseleave='mouseLeave1()' :class="bgx3" style=" cursor: pointer; margin-top: 20px;width: 820px; height: 130px; opacity: 0.8; border-radius: 5px;position: relative;">
              <img :src="ppp3" style="width: 60px;height: 52px;position: absolute;left: 26px;top: 35px;" />
              <div style=" overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;position: absolute;left: 133px;top: 25px;font-size: 22px; font-family: Arial Black;font-weight: 400; line-height: 22px;color: #FFFFFF; opacity: 1;">
                {{ $t('index.text32') }}
              </div>
              <div style="overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all; width:620px;;position: absolute;left: 133px;bottom: 25px;font-size: 14px; font-family: PingFang SC;font-weight: 400; line-height:20px;color: #FFFFFF; opacity: 1;">
                {{ $t('index.text33') }}
              </div>
            </div>

          </div>




          <!--   <div style="width: 330px;height: 470px;background: #FFFFFF;border-radius: 10px; position: relative; margin-left: 20px;">
               <img :src="index_img9" style="width: 330px;height: 470px;position: absolute;left: 0;top: 0;" />
               <div style="width: 330px;top: 53px;position: absolute; font-size: 22px;font-family: Arial Black; font-weight: 400;line-height: 22px;color: #141420;opacity: 1;text-align: center;">
                 {{ $t('index.text28') }}</div>

               <div style=" width: 4px; height: 4px;background: #0167BC; border-radius: 50%; opacity: 1;position: absolute;top: 112px;left: 30px;"></div>
               <div style=" width: 260px;font-size: 14px;font-family: PingFang SC;font-weight: 500; line-height: 20px; color: #141420;  opacity: 1;left: 40px;position: absolute;top: 108px;">
                 {{ $t('index.text29') }}
               </div>
             </div>


             <div style="width: 330px;height: 470px;background: #FFFFFF;border-radius: 10px; position: relative; margin-left: 20px;">
               <img :src="index_img10" style="width: 330px;height: 470px;position: absolute;left: 0;top: 0;" />
               <div style="width: 330px;top: 53px;position: absolute; font-size: 22px;font-family: Arial Black; font-weight: 400;line-height: 22px;color: #141420;opacity: 1;text-align: center;">
                 {{ $t('index.text30') }}</div>

               <div style=" width: 4px; height: 4px;background: #0167BC; border-radius: 50%; opacity: 1;position: absolute;top: 112px;left: 30px;"></div>
               <div style=" width: 260px;font-size: 14px;font-family: PingFang SC;font-weight: 500; line-height: 20px; color: #141420;  opacity: 1;left: 40px;position: absolute;top: 108px;">
                 {{ $t('index.text31') }}
               </div>
             </div>


             <div style="width: 330px;height: 470px;background: #FFFFFF;border-radius: 10px; position: relative; margin-left: 20px;">
               <img :src="index_img11" style="width: 330px;height: 470px;position: absolute;left: 0;top: 0;" />
               <div style="width: 330px;top: 53px;position: absolute; font-size: 22px;font-family: Arial Black; font-weight: 400;line-height: 22px;color: #141420;opacity: 1;text-align: center;">
                 {{ $t('index.text32') }}</div>

               <div style=" width: 4px; height: 4px;background: #0167BC; border-radius: 50%; opacity: 1;position: absolute;top: 112px;left: 30px;"></div>
               <div style=" width: 260px;font-size: 14px;font-family: PingFang SC;font-weight: 500; line-height: 20px; color: #141420;  opacity: 1;left: 40px;position: absolute;top: 108px;">
                 {{ $t('index.text33') }}
               </div>
             </div>
     -->

        </div>
      </div>


      <!--6 end-->


      <!--7 statrt-->
      <div v-show="false"  id="a41"  style="width: 100%;height: 1380px;background: #FAFAFA;">
        <div style="width: 1380px;height: 1380px;margin: 0 auto;padding-top: 80px;">
          <div style="overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;font-size: 42px;font-family: Arial Black;font-weight: 400;color: #141420; opacity: 1;width: 1380px;text-align: center;">
            {{ $t('index.text66') }}
          </div>
          <div style="overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;font-style: italic;margin-top: 8px;font-size: 18px;font-family: PingFang SC;font-weight: bold;color: #141420; opacity: 1;width: 1380px;text-align: center;">
            {{ $t('index.text67') }}
          </div>

          <div style="width: 1380px;margin: 10px auto;">
            <div style="display: flex; font-size: 18px;font-family: PingFang SC;font-weight: 400;color: #141420; opacity: 1;margin-top: 50px;">
              <div style="overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;width: 70px;">
                <div>{{ $t('index.text68') }}</div>
                <div style="width: 26px;height: 2px; background: linear-gradient(90deg, #0167BC 0%, #5EAEFF 100%);margin: 2px auto;"></div>
              </div>

              <div style="flex: 1;"> </div>

              <div style="width: 250px;height: 34px;background: #FAFAFA; border: 1px solid #C5C4D6;opacity: 1;border-radius: 23px;display: flex;position: relative;">
                <img :src="icon_search" style="width: 14px;height: 14px;position: absolute;left: 14px;top: 11px;"/>
                <div style="overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;font-size: 12px;font-family: PingFang SC;font-weight: 400;line-height: 34px;color: #8A899E; opacity: 1;position: absolute;left: 50px;">{{ $t('index.text69') }}</div>
                <div style="width: 1px;height: 12px; background: #C5C4D6; opacity: 1;position: absolute;right: 65px;top: 11px;"></div>
                <div style="overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all; line-height: 34px; opacity: 1;position: absolute;right: 14px;font-size: 12px;font-family: PingFang SC;font-weight: bold;">{{ $t('index.text70') }}</div>
              </div>

              <div style="margin-left: 20px;width: 120px;height: 34px;background: #FAFAFA; border: 1px solid #C5C4D6;opacity: 1;border-radius: 23px;display: flex;position: relative;">
                <div style="overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all; line-height: 34px; opacity: 1;position: absolute;left: 14px;font-size: 12px;font-family: PingFang SC;font-weight: bold;">{{ $t('index.text71') }}</div>
                <img :src="m_16" style="width: 10px;height: 5px;position: absolute;right: 15px;top: 8px;"/>
                <img :src="index_img18" style="width: 10px;height: 5px;position: absolute;right: 15px;bottom: 8px;"/>
              </div>

              <div style="margin-left: 20px;width: 120px;height: 34px;background: #FAFAFA; border: 1px solid #C5C4D6;opacity: 1;border-radius: 23px;display: flex;position: relative;">
                <div style="overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all; line-height: 34px; opacity: 1;position: absolute;left: 14px;font-size: 12px;font-family: PingFang SC;font-weight: bold;">{{ $t('index.text72') }}</div>
                <img :src="index_img18" style="width: 10px;height: 5px;position: absolute;right: 15px;top: 14px;"/>
              </div>


            </div>
            <div style="display: flex; font-size: 14px;font-family: PingFang SC;font-weight: 400;line-height: 50px;color: #8A899E; opacity: 1;border-bottom: 1px solid #F1F0F2">
              <div style="overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;width: 200px;padding-left: 20px;"> {{ $t('index.text73') }}</div>
              <div style="overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;width: 400px;padding-left: 15px;"> {{ $t('index.text74') }}</div>
              <div style="overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;width: 200px;"> {{ $t('index.text75') }}</div>
              <div style="overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;flex: 1;text-align: right;padding-right: 20px;"> {{ $t('index.text76') }}</div>
            </div>

            <div style=" background: linear-gradient(180deg, rgba(230,168,68,0) 0%, rgba(230,168,68,0.1) 57%, rgba(230,168,68,0.2) 100%); height: 139px;display: flex; font-size: 14px;font-family: PingFang SC;font-weight: 400;line-height: 50px;color: #8A899E; opacity: 1;border-left: 2px solid #0167BC;border-bottom: 1px solid #F1F0F2">
              <div style="width: 200px;padding-left: 34px;display: flex;">
                <div style=" font-size: 54px;font-family: PingFang SC;font-weight: 800; line-height: 139px; color: #141420; opacity: 1;">1</div>
                <img :src="index_img27" style="width: 28px;height: 43px;margin-left: 38px;margin-top: 50px;"/>
              </div>
              <div style="width: 400px;display: flex;">
                <img :src="c1" style="width: 120px;height: 120px;margin-top:9px;"/>
                <div style="margin-left: 20px;font-size: 20px; font-family: PingFang SC;font-weight: bold; line-height: 139px; color: #141420;">Queen</div>
              </div>
              <div style="width: 200px;font-size: 22px; font-family: PingFang SC;font-weight: bold; line-height: 139px; color: #141420;"> LV 13</div>
              <div style="flex: 1;text-align: right;padding-right: 20px;font-size: 22px; font-family: PingFang SC;font-weight: bold; line-height: 139px; color: #141420;"> 0XOI21…EWQQ</div>
            </div>



            <div style=" background: linear-gradient(180deg, rgba(207,94,255,0) 0%, rgba(207,94,255,0.1) 60%, rgba(207,94,255,0.2) 100%); height: 120px;display: flex; font-size: 14px;font-family: PingFang SC;font-weight: 400;line-height: 50px;color: #8A899E; opacity: 1;">
              <div style="width: 200px;padding-left: 34px;display: flex;">
                <div style=" font-size: 40px;font-family: PingFang SC;font-weight: 800; line-height: 120px; color: #141420; opacity: 1;">2</div>
                <img :src="index_img29" style="width: 28px;height: 43px;margin-left: 45px;margin-top:45px;"/>
              </div>
              <div style="width: 400px;display: flex;">
                <img :src="c2" style="width: 100px;height: 100px;margin-top:9px;"/>
                <div style="margin-left: 36px;font-size: 16px; font-family: PingFang SC;font-weight: bold; line-height: 120px; color: #141420;">Bubble</div>
              </div>
              <div style="width: 200px;font-size: 22px; font-family: PingFang SC;font-weight: bold; line-height: 120px; color: #141420;"> LV 12</div>
              <div style="flex: 1;text-align: right;padding-right: 20px;font-size: 22px; font-family: PingFang SC;font-weight: bold; line-height: 120px; color: #141420;"> 0XOI21…EWQQ</div>
            </div>


            <div style=" background: linear-gradient(180deg, rgba(97,77,246,0) 0%, rgba(97,77,246,0.1) 60%, rgba(97,77,246,0.2) 100%);height: 100px;display: flex; font-size: 14px;font-family: PingFang SC;font-weight: 400;line-height: 50px;color: #8A899E; opacity: 1;">
              <div style="width: 200px;padding-left: 34px;display: flex;">
                <div style=" font-size: 24px;font-family: PingFang SC;font-weight: 800; line-height: 100px; color: #141420; opacity: 1;">3</div>
                <img :src="index_img31" style="width: 28px;height: 43px;margin-left:55px;margin-top:38px;"/>
              </div>
              <div style="width: 400px;display: flex;">
                <img :src="c3" style="width: 80px;height: 80px;margin-top:9px;"/>
                <div style="margin-left: 56px;font-size: 16px; font-family: PingFang SC;font-weight: bold; line-height: 100px; color: #141420;">Despair</div>
              </div>
              <div style="width: 200px;font-size: 22px; font-family: PingFang SC;font-weight: bold; line-height: 100px; color: #141420;"> LV 12</div>
              <div style="flex: 1;text-align: right;padding-right: 20px;font-size: 22px; font-family: PingFang SC;font-weight: bold; line-height: 100px; color: #141420;"> 0XOI21…EWQQ</div>
            </div>

            <div style=" height: 100px;display: flex; font-size: 14px;font-family: PingFang SC;font-weight: 400;color: #8A899E; opacity: 1;border-bottom: 1px solid #F1F0F2">
              <div style="width: 200px;padding-left: 34px;display: flex;">
                <div style=" font-size: 24px;font-family: PingFang SC;font-weight: 800; line-height: 100px; color: #141420; opacity: 1;">4</div>

              </div>
              <div style="width: 400px;display: flex;">
                <img :src="c4" style="width: 80px;height: 80px;margin-top:9px;"/>
                <div style="margin-left: 56px;font-size: 16px; font-family: PingFang SC;font-weight: bold; line-height: 100px; color: #141420;">Eternity</div>
              </div>
              <div style="width: 200px;font-size: 22px; font-family: PingFang SC;font-weight: bold; line-height: 100px; color: #141420;"> LV 11</div>
              <div style="flex: 1;text-align: right;padding-right: 20px;font-size: 22px; font-family: PingFang SC;font-weight: bold; line-height: 100px; color: #141420;"> 0XOI21…EWQQ</div>
            </div>

            <div style=" height: 100px;display: flex; font-size: 14px;font-family: PingFang SC;font-weight: 400;color: #8A899E; opacity: 1;border-bottom: 1px solid #F1F0F2">
              <div style="width: 200px;padding-left: 34px;display: flex;">
                <div style=" font-size: 24px;font-family: PingFang SC;font-weight: 800; line-height: 100px; color: #141420; opacity: 1;">5</div>

              </div>
              <div style="width: 400px;display: flex;">
                <img :src="c5" style="width: 80px;height: 80px;margin-top:9px;"/>
                <div style="margin-left: 56px;font-size: 16px; font-family: PingFang SC;font-weight: bold; line-height: 100px; color: #141420;">Ambition</div>
              </div>
              <div style="width: 200px;font-size: 22px; font-family: PingFang SC;font-weight: bold; line-height: 100px; color: #141420;"> LV 11</div>
              <div style="flex: 1;text-align: right;padding-right: 20px;font-size: 22px; font-family: PingFang SC;font-weight: bold; line-height: 100px; color: #141420;"> 0XOI21…EWQQ</div>
            </div>

            <div style=" height: 100px;display: flex; font-size: 14px;font-family: PingFang SC;font-weight: 400;color: #8A899E; opacity: 1;border-bottom: 1px solid #F1F0F2">
              <div style="width: 200px;padding-left: 34px;display: flex;">
                <div style=" font-size: 24px;font-family: PingFang SC;font-weight: 800; line-height: 100px; color: #141420; opacity: 1;">6</div>

              </div>
              <div style="width: 400px;display: flex;">
                <img :src="c6" style="width: 80px;height: 80px;margin-top:9px;"/>
                <div style="margin-left: 56px;font-size: 16px; font-family: PingFang SC;font-weight: bold; line-height: 100px; color: #141420;">Elegant</div>
              </div>
              <div style="width: 200px;font-size: 22px; font-family: PingFang SC;font-weight: bold; line-height: 100px; color: #141420;"> LV 11</div>
              <div style="flex: 1;text-align: right;padding-right: 20px;font-size: 22px; font-family: PingFang SC;font-weight: bold; line-height: 100px; color: #141420;"> 0XOI21…EWQQ</div>
            </div>

            <div style=" height: 100px;display: flex; font-size: 14px;font-family: PingFang SC;font-weight: 400;color: #8A899E; opacity: 1;border-bottom: 1px solid #F1F0F2">
              <div style="width: 200px;padding-left: 34px;display: flex;">
                <div style=" font-size: 24px;font-family: PingFang SC;font-weight: 800; line-height: 100px; color: #141420; opacity: 1;">7</div>

              </div>
              <div style="width: 400px;display: flex;">
                <img :src="c7" style="width: 80px;height: 80px;margin-top:9px;"/>
                <div style="margin-left: 56px;font-size: 16px; font-family: PingFang SC;font-weight: bold; line-height: 100px; color: #141420;">Ronin</div>
              </div>
              <div style="width: 200px;font-size: 22px; font-family: PingFang SC;font-weight: bold; line-height: 100px; color: #141420;"> LV 11</div>
              <div style="flex: 1;text-align: right;padding-right: 20px;font-size: 22px; font-family: PingFang SC;font-weight: bold; line-height: 100px; color: #141420;"> 0XOI21…EWQQ</div>
            </div>

            <div style=" height: 100px;display: flex; font-size: 14px;font-family: PingFang SC;font-weight: 400;color: #8A899E; opacity: 1;border-bottom: 1px solid #F1F0F2">
              <div style="width: 200px;padding-left: 34px;display: flex;">
                <div style=" font-size: 24px;font-family: PingFang SC;font-weight: 800; line-height: 100px; color: #141420; opacity: 1;">8</div>

              </div>
              <div style="width: 400px;display: flex;">
                <img :src="c8" style="width: 80px;height: 80px;margin-top:9px;"/>
                <div style="margin-left: 56px;font-size: 16px; font-family: PingFang SC;font-weight: bold; line-height: 100px; color: #141420;">Distance</div>
              </div>
              <div style="width: 200px;font-size: 22px; font-family: PingFang SC;font-weight: bold; line-height: 100px; color: #141420;"> LV 11</div>
              <div style="flex: 1;text-align: right;padding-right: 20px;font-size: 22px; font-family: PingFang SC;font-weight: bold; line-height: 100px; color: #141420;"> 0XOI21…EWQQ</div>
            </div>

            <div style="display: flex;margin-top: 40px">
              <div style="flex: 1"></div>
              <div style="display: flex;cursor: pointer">
                <img :src="left_no" style="width:30px ;height: 30px;cursor: pointer"/>
                <div style="width: 30px;height: 30px;background: #F1F0F2;opacity: 1;font-size: 12px;font-family: PingFang SC; font-weight: bold;color: #141420; border-radius: 20px;text-align: center;line-height: 30px;margin-left: 5px;margin-right: 5px;">
                  1</div>
                <div style="width: 30px;height: 30px;font-size: 12px;font-family: PingFang SC; font-weight: bold;color: #8A899E; text-align: center;line-height: 30px;margin-left: 5px;margin-right: 5px;">
                  2</div>
                <div style="width: 30px;height: 30px;font-size: 12px;font-family: PingFang SC; font-weight: bold;color: #8A899E; text-align: center;line-height: 30px;margin-left: 5px;margin-right: 5px;">
                  3</div>
                <div style="width: 30px;height: 30px;font-size: 12px;font-family: PingFang SC; font-weight: bold;color: #8A899E; text-align: center;line-height: 30px;margin-left: 5px;margin-right: 5px;">
                  4</div>
                <div style="width: 30px;height: 30px;font-size: 12px;font-family: PingFang SC; font-weight: bold;color: #8A899E; text-align: center;line-height: 30px;margin-left: 5px;margin-right: 5px;">
                  5</div>
                <img :src="right_ok" style="width:30px ;height: 30px;"/>
              </div>
            </div>

          </div>


        </div>
      </div>
      <!--7 end-->

      <!--8 statrt-->
      <div  id="a51"  style="width: 100%;height: 1000px;background:  #141420;;">
        <div style="width: 1380px;height: 1000px;margin: 0 auto;padding-top: 80px;">
          <div style="font-size: 40px;font-family: Arial Black;font-weight: 300;line-height: 50px;color: #FFFFFF;opacity: 1;width: 1480px;text-align: center;">
            {{ $t('index.text34') }}</div>

          <div style="width: 480px;margin: 0 auto ;display: flex;margin-top: 40px;">
            <div  @click="onClickTab8(1)"  style="width: 160px;">
              <div v-show="isShowTab8==1" style="width: 160px;text-align: center;font-size: 34px;font-family: Arial Black; font-weight: 200; line-height: 50px; color: #FFFFFF; opacity: 1;">{{ $t('index.text35') }}</div>
              <div v-show="isShowTab8!==1" style="width: 160px;text-align: center;font-size: 34px;font-family: Arial Black; font-weight: 200; line-height: 50px; color: #8A899E; opacity: 1;">{{ $t('index.text35') }}</div>

              <div v-show="isShowTab8==1" style=" margin: 10px auto 0px;width: 60px;height: 4px; background: linear-gradient(90deg, #0167BC 0%, #5EAEFF 100%);opacity: 1;"></div>
            </div>
            <div  @click="onClickTab8(2)"  style="width: 160px;margin-left: 120px;">
              <div v-show="isShowTab8==2"  style="width:160px;text-align: center;font-size: 34px;font-family: Arial Black; font-weight: 200; line-height: 50px; color: #FFFFFF; opacity: 1;">{{ $t('index.text351') }}</div>

              <div v-show="isShowTab8!==2"  style="width: 160px;text-align: center;font-size: 34px;font-family: Arial Black; font-weight: 200; line-height: 50px; color: #8A899E; opacity: 1;">{{ $t('index.text351') }}</div>
              <div v-show="isShowTab8==2"  style=" margin: 10px auto 0px;width: 60px;height: 4px; background: linear-gradient(90deg, #0167BC 0%, #5EAEFF 100%);opacity: 1;"></div>
            </div>
          </div>

          <div v-show="isShowTab8==1"   style="overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;font-style: italic;width: 1380px;margin: 35px auto 0 auto;text-align: center;font-family: PingFang SC;font-weight: bold;font-size: 22px;
          color: #FFFFFF; opacity: 1;">{{ $t('index.text361') }} </div>


          <div  v-show="isShowTab8==1" style="width: 1380px;margin: 90px auto 0 auto;display: flex;">

            <div style="width: 600px;">
              <!-- <div v-show="isShowTab8==1" style="font-size: 16px; font-family: PingFang SC;font-weight: bold; line-height: 24px; color: #FFFFFF; opacity: 1;display: flex;">
            <div style="width: 4px;height: 4px;background: #0167BC;border-radius: 50%;opacity: 1;margin-top: 12px;margin-right: 10px;"></div>
               {{ $t('index.text361') }}
             </div>-->

              <div v-show="isShowTab8==1" style="overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;font-size: 20px;font-family: PingFang SC; font-weight: bold; line-height: 24px; color: #FFFFFF; opacity: 1;display: flex;">
                <!--<div style="width: 4px;height: 4px;background: #0167BC;border-radius: 50%;opacity: 1;margin-top: 12px;margin-right: 10px;"></div>-->
                {{ $t('index.text362') }}
              </div>

              <div v-show="isShowTab8==1" style="overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;margin-top: 20px;font-family: PingFang SC;font-size:18px;font-weight: bold; line-height: 24px; color: #FFFFFF; opacity: 1;display: flex;">

                {{ $t('index.text363') }}
              </div>

              <!--  <div v-show="isShowTab8==1" style="margin-top: 30px;font-size: 18px; font-family: Arial Black;font-weight: 400; line-height: 24px; color: #FFFFFF; opacity: 1;display: flex;">
                  {{ $t('index.text3632') }}
                </div>-->



              <!--   <div  v-show="isShowTab8==1" style="font-size: 20px; font-family: Arial Black;font-weight: 200; margin-top: 20px;line-height: 24px; color: #FFFFFF; opacity: 1;">
                   {{ $t('index.text363') }}
                 </div>
                 <div v-show="isShowTab8==1" style="font-size: 18px; font-family: Arial Black;font-weight: 200; margin-top: 20px;line-height: 24px; color: #FFFFFF; opacity: 1;">
                   <span style="color:#0167BC; " >1.</span>
                   {{ $t('index.text38') }}
                 </div>-->
              <div v-show="isShowTab8==1" style="overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;font-size: 16px;font-family: PingFang SC; margin-top: 20px;line-height: 28px; color: #FFFFFF; opacity: 1;">
                <span style="color:#0167BC; font-size: 16px; " >1.</span>
                {{ $t('index.text38') }}
              </div>
              <div v-show="isShowTab8==1" style="overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;font-size: 16px;font-family: PingFang SC;margin-top: 20px;line-height: 28px; color: #FFFFFF; opacity: 1;">
                <span style="color:#0167BC; font-size: 16px; " >2.</span>
                {{ $t('index.text431') }}
              </div>

              <div  v-show="isShowTab8==1" style="overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;font-size: 16px;font-family: PingFang SC;  margin-top: 20px;line-height: 28px; color: #FFFFFF; opacity: 1;">
                <span style="color:#0167BC;font-size: 16px;  " >3.</span>
                {{ $t('index.text365') }}
                <span style="color:#0167BC;font-size: 16px;  " >$USDT</span>
                {{", 100 " }}
                <span style="color:#0167BC;font-size: 16px;  " >$USDT</span>
                {{", 300 " }}
                <span style="color:#0167BC;font-size: 16px;  " >$USDT</span>
                {{ $t('index.text366') }}
              </div>
              <div v-show="isShowTab8==1" style="overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all;font-size: 16px; font-family: PingFang SC; margin-top: 20px;line-height: 24px; color: #FFFFFF; opacity: 1;">
                {{ $t('index.text367') }}
                <span style="color:#0167BC;font-size: 18px;  " >$LYNK</span>
                {{ $t('index.text368') }}
                <span style="color:#0167BC;font-size: 18px;  " >$LYNK</span>
                {{ $t('index.text369') }}
              </div>
              <div @click="showDialog"   v-show="isShowTab8==1" style="padding-left: 30px;font-family: PingFang SC;position: relative;display: flex;cursor: pointer;text-align: center;font-size: 16px; font-family: PingFang SC; font-weight: bold; line-height:50px; color: #FFFFFF; opacity: 1; margin-top: 30px; width: 230px; height: 50px; background: linear-gradient(90deg, #0167BC 0%, #5EAEFF 100%);opacity: 1; border-radius: 100px;">
                {{ $t('index.text421') }}
                <img :src="icon_right_arrow" style="width: 26px;height: 13px;position: absolute;right: 30px;top: 18px;"/>

              </div>


              <!--  <div v-show="isShowTab8==1" style=" font-size: 0.43rem;font-family: PingFang SC;font-weight: bold;color: #FFFFFF;opacity: 1;cursor: pointer;text-align: center;line-height: 1.17rem;margin: 1.07rem auto;width: 5.33rem;height: 1.17rem;background: linear-gradient(90deg, #0167BC 0%, #5EAEFF 100%);opacity: 1;border-radius: 2.67rem;">
                  {{ $t('index.text421') }}
                </div>-->


              <!-- <div style=" font-size: 18px; font-family: Arial Black;font-weight: 400; line-height: 24px; color: #FFFFFF; opacity: 1;">
                 {{ $t('index.text37') }}
               </div>
               <div style="display: flex;position: relative;margin-top: 15px;">
                 <div style=" width: 4px; height: 4px;background: #0167BC; border-radius: 50%; opacity: 1;position: absolute;top: 5px;left: 0px;"></div>
                 <div style=" width: 260px;font-size: 14px;font-family: PingFang SC;font-weight: 500; line-height: 24px; color: #FFFFFF;  opacity: 1;left: 10px;position: absolute;top: 0">
                   {{ $t('index.text38') }}
                 </div>
               </div>

               <div style="display: flex;position: relative;margin-top: 30px;">
                 <div style=" width: 4px; height: 4px;background: #0167BC; border-radius: 50%; opacity: 1;position: absolute;top: 5px;left: 0px;"></div>
                 <div style=" width: 260px;font-size: 14px;font-family: PingFang SC;font-weight: 500; line-height: 24px; color: #FFFFFF;  opacity: 1;left: 10px;position: absolute;top: 0">
                   {{ $t('index.text39') }}
                 </div>
               </div>

               <div style=" font-size: 18px; font-family: Arial Black;font-weight: 400; line-height: 24px; color: #FFFFFF; opacity: 1;margin-top: 60px">
                 {{ $t('index.text40') }}
               </div>

               <div style="display: flex;position: relative;margin-top: 50px;">
                 <div style=" width: 4px; height: 4px;background: #0167BC; border-radius: 50%; opacity: 1;position: absolute;top: 5px;left: 0px;"></div>
                 <div style=" width: 260px;font-size: 14px;font-family: PingFang SC;font-weight: 500; line-height: 24px; color: #FFFFFF;  opacity: 1;left: 10px;position: absolute;top: 0">
                   {{ $t('index.text41') }}
                 </div>
               </div>


               <div style=" font-size: 16px; font-family: PingFang SC;font-weight: bold; line-height: 24px; color: #0167BC; opacity: 1;margin-top: 100px">
                 {{ $t('index.text42') }}
               </div>-->


            </div>



            <div v-show="isShowTab8==1" style="margin-left: 150px;position: relative;width: 612px;height: 342px;">

              <img v-show="isShowTab8==1"  :src="index_img12" style="width: 612px;height: 342px;position: absolute;"/>

              <div v-show="isShowTab8==1"  style="text-align: center;position:absolute;width: 612px;bottom: 33px;font-size: 19px;font-family: Arial Black;font-weight: 400;line-height: 30px;color: #FFFFFF;opacity: 1; "> {{ $t('index.text43') }}</div>


            </div>

          </div>

          <div style="width: 1480px;margin: 0 auto;display: flex;">
            <div style="width: 600px;">
              <div v-show="isShowTab8==2" style="width: 600px;margin-top: 60px;font-size: 16px; font-family: PingFang SC; margin-top: 20px;line-height: 24px; color: #FFFFFF; opacity: 1;display: flex;">
                <div style="width: 4px;height: 4px;background: #0167BC;border-radius: 50%;opacity: 1;margin-top: 12px;margin-right: 10px;"></div>
                {{ $t('index.text83') }}
              </div>
              <div v-show="isShowTab8==2" style="width: 600px;margin-top: 20px;font-size: 16px; font-family: PingFang SC; margin-top: 20px;line-height: 24px; color: #FFFFFF; opacity: 1;display: flex;">
                <div style="width: 4px;height: 4px;background: #0167BC;border-radius: 50%;opacity: 1;margin-top: 12px;margin-right: 10px;"></div>
                {{ $t('index.text84') }}
              </div>
              <div v-show="isShowTab8==2" style="width: 600px;margin-top: 20px;font-size: 16px; font-family: PingFang SC; margin-top: 20px;line-height: 24px; color: #FFFFFF; opacity: 1;display: flex;">
                <div style="width: 4px;height: 4px;background: #0167BC;border-radius: 50%;opacity: 1;margin-top: 12px;margin-right: 10px;"></div>
                {{ $t('index.text85') }}
              </div>

              <div v-show="isShowTab8==2" style="width: 600px;margin-left: 14px;margin-top: 20px;font-size: 16px; font-family: PingFang SC; margin-top: 20px;line-height: 24px; color: #FFFFFF; opacity: 1;display: flex;">
                {{ $t('index.text86') }}
              </div>

              <div v-show="isShowTab8==2" style="width: 600px;margin-left: 14px;margin-top: 7px;font-size: 14px; font-family: PingFang SC;line-height: 24px; color: #FFFFFF; opacity: 1;display: flex;">
                {{ $t('index.text861') }}{{ $t('index.text862') }}
              </div>
              <div v-show="isShowTab8==2" style="width: 600px;margin-left: 14px;margin-top: 7px;font-size: 14px; font-family: PingFang SC; line-height: 24px; color: #FFFFFF; opacity: 1;display: flex;">
                {{ $t('index.text863') }}{{ $t('index.text864') }}
              </div>
              <div v-show="isShowTab8==2" style="width: 600px;margin-left: 14px;margin-top: 7px;font-size: 14px; font-family: PingFang SC;line-height: 24px; color: #FFFFFF; opacity: 1;display: flex;">
                {{ $t('index.text865') }}{{ $t('index.text866') }}
              </div>
              <div v-show="isShowTab8==2" style="width: 600px;margin-left: 14px;margin-top: 7px;font-size: 14px; font-family: PingFang SC;line-height: 24px; color: #FFFFFF; opacity: 1;display: flex;">
                {{ $t('index.text867') }}{{ $t('index.text868') }}
              </div>
              <div v-show="isShowTab8==2" style="width: 600px;margin-left: 14px;margin-top:20px;font-size: 16px; font-family: PingFang SC; line-height: 24px; color: #FFFFFF; opacity: 1;display: flex;">
                {{ $t('index.text87') }}
              </div>
              <div v-show="isShowTab8==2" style="width: 600px;margin-left: 14px;margin-top:20px;font-size: 16px; font-family: PingFang SC;line-height: 24px; color: #FFFFFF; opacity: 1;display: flex;">
                {{ $t('index.text88') }}
              </div>
              <div v-show="isShowTab8==2" style="width: 600px;margin-left: 14px;margin-top:20px;font-size: 16px; font-family: PingFang SC; line-height: 24px; color: #FFFFFF; opacity: 1;display: flex;">
                {{ $t('index.text90') }}
              </div>
            </div>

            <!------>
            <div v-show="isShowTab8==2" style="width: 680px;height: 540px;margin-left: 150px;position: relative;margin-top: 60px;">
              <img  v-show="isShowTab8==2" :src="xxxx" style="width: 680px;height: 540px;position: absolute;" />
              <div style="left: 90px;width: 500px;text-align: center;position: absolute;bottom: 60px; font-size: 16px;font-family: PingFang SC;font-weight: bold;line-height: 24px; color: #FFFFFF; opacity: 1;">
                {{ $t('index.text91') }}
              </div>
            </div>


            <!---->

          </div>


        </div>
      </div>


      <!--8 end-->

      <!--9 statrt-->
      <div  id="a61"  style="width: 100%;height: 1200px;background: #FAFAFA">
        <div style="width: 1380px;height: 1200px;margin: 0 auto;">
          <div style="width: 1380px;padding-top: 100px;text-align: center;font-size: 42px;font-family: Arial Black;font-weight: 400;color: #141420;opacity: 1;"> {{ $t('index.text44') }} </div>

          <div style="display: flex;margin-top: 45px;">
            <!--  <div class="pc-card-div1">
                <div class="pc-card-div2" >
                  <div class="pc-card-div3" >
                    {{ $t('index.text45') }}
                  </div>
                  <div style="flex: 1"></div>
                  <img :src="index_img13"  class="pc-card-div4" />
                </div>
                <img
                  :src="index_img17"
                  class="pc-card-div5"

                />
                <div   class="pc-card-div6" >
                  <div  class="pc-card-div7" >{{ $t('index.text46') }}</div>
                  <div style="flex: 1;"></div>
                   <img :src="index_img18"  class="pc-card-div8" />
                 </div>

                <div  class="pc-card-div9" ></div>


                <div  class="pc-card-div10" >
                  <div class="pc-card-div11"  >LynkPTER</div>
                  <div style="flex: 1;"></div>
                  <div style="display: flex;">
                    <div  class="pc-card-div12"  >550</div>
                    <img :src="index_img19"  class="pc-card-div13" />
                  </div>
                </div>


                </div>-->

            <div class="pc-card-div111">
              <img :src="m_p1"  class="pc-card-div111-img" />

              <div  class="pc-card-div10" >
                <div class="pc-card-div11"  >LynkPTER</div>
                <div style="flex: 1;"></div>
                <div class="pc-card-div11"  >L1</div>
              </div>

              <div  class="pc-card-div10" style="margin-top: 20px;" >
                <div style="display: flex;margin-top: 5px;">
                  <div  class="pc-card-div12"  >550</div>
                  <img :src="index_img19"  class="pc-card-div13" />
                </div>
                <div style="flex: 1;"></div>
                <div class="pc-card-div122"  >
                  <img :src="icon_cart" class="pc-card-div122-img" />
                  <div class="pc-card-div1222">{{ $t('index.text441') }}</div>
                </div>
              </div>

            </div>
            <!--
                     </div>
                     font-size: 14px;
                     font-family: Swis721 Blk BT;
                     font-weight: 900;
                     line-height: 19px;
                     color: #14142-->
            <!---2--->
            <div class="pc-card-div111" style="margin-left: 20px;">
              <img :src="m_p2"  class="pc-card-div111-img" />

              <div  class="pc-card-div10" >
                <div class="pc-card-div11"  >LynkPTER</div>
                <div style="flex: 1;"></div>
                <div class="pc-card-div11"  >L1</div>
              </div>

              <div  class="pc-card-div10" style="margin-top: 20px;" >
                <div style="display: flex;margin-top: 5px;">
                  <div  class="pc-card-div12"  >550</div>
                  <img :src="index_img19"  class="pc-card-div13" />
                </div>
                <div style="flex: 1;"></div>
                <div class="pc-card-div122"  >
                  <img :src="icon_cart" class="pc-card-div122-img" />
                  <div class="pc-card-div1222">{{ $t('index.text441') }}</div>
                </div>
              </div>

            </div>

            <!---3--->
            <div class="pc-card-div111" style="margin-left: 20px;">
              <img :src="m_p3"  class="pc-card-div111-img" />

              <div  class="pc-card-div10" >
                <div class="pc-card-div11"  >LynkPTER</div>
                <div style="flex: 1;"></div>
                <div class="pc-card-div11"  >L1</div>
              </div>

              <div  class="pc-card-div10" style="margin-top: 20px;" >
                <div style="display: flex;margin-top: 5px;">
                  <div  class="pc-card-div12"  >550</div>
                  <img :src="index_img19"  class="pc-card-div13" />
                </div>
                <div style="flex: 1;"></div>
                <div class="pc-card-div122"  >
                  <img :src="icon_cart" class="pc-card-div122-img" />
                  <div class="pc-card-div1222">{{ $t('index.text441') }}</div>
                </div>
              </div>

            </div>
            <!---4--->
            <div class="pc-card-div111" style="margin-left: 20px;">
              <img :src="m_p4"  class="pc-card-div111-img" />

              <div  class="pc-card-div10" >
                <div class="pc-card-div11"  >LynkPTER</div>
                <div style="flex: 1;"></div>
                <div class="pc-card-div11"  >L1</div>
              </div>

              <div  class="pc-card-div10" style="margin-top: 20px;" >
                <div style="display: flex;margin-top: 5px;">
                  <div  class="pc-card-div12"  >550</div>
                  <img :src="index_img19"  class="pc-card-div13" />
                </div>
                <div style="flex: 1;"></div>
                <div class="pc-card-div122"  >
                  <img :src="icon_cart" class="pc-card-div122-img" />
                  <div class="pc-card-div1222">{{ $t('index.text441') }}</div>
                </div>
              </div>

            </div>
            <!--5--->
            <div class="pc-card-div111" style="margin-left: 20px;">
              <img :src="m_p5"  class="pc-card-div111-img" />

              <div  class="pc-card-div10" >
                <div class="pc-card-div11"  >LynkPTER</div>
                <div style="flex: 1;"></div>
                <div class="pc-card-div11"  >L1</div>
              </div>

              <div  class="pc-card-div10" style="margin-top: 20px;" >
                <div style="display: flex;margin-top: 5px;">
                  <div  class="pc-card-div12"  >550</div>
                  <img :src="index_img19"  class="pc-card-div13" />
                </div>
                <div style="flex: 1;"></div>
                <div class="pc-card-div122"  >
                  <img :src="icon_cart" class="pc-card-div122-img" />
                  <div class="pc-card-div1222">{{ $t('index.text441') }}</div>
                </div>
              </div>

            </div>
            <!---6-->
          </div>

          <!----2222---->
          <div style="display: flex;margin-top: 20px;">
            <div class="pc-card-div111">
              <img :src="m_p6"  class="pc-card-div111-img" />

              <div  class="pc-card-div10" >
                <div class="pc-card-div11"  >LynkPTER</div>
                <div style="flex: 1;"></div>
                <div class="pc-card-div11"  >L1</div>
              </div>

              <div  class="pc-card-div10" style="margin-top: 20px;" >
                <div style="display: flex;margin-top: 5px;">
                  <div  class="pc-card-div12"  >550</div>
                  <img :src="index_img19"  class="pc-card-div13" />
                </div>
                <div style="flex: 1;"></div>
                <div class="pc-card-div122"  >
                  <img :src="icon_cart" class="pc-card-div122-img" />
                  <div class="pc-card-div1222">{{ $t('index.text441') }}</div>
                </div>
              </div>

            </div>

            <!---2--->
            <div class="pc-card-div111" style="margin-left: 20px;">
              <img :src="m_p7"  class="pc-card-div111-img" />

              <div  class="pc-card-div10" >
                <div class="pc-card-div11"  >LynkPTER</div>
                <div style="flex: 1;"></div>
                <div class="pc-card-div11"  >L1</div>
              </div>

              <div  class="pc-card-div10" style="margin-top: 20px;" >
                <div style="display: flex;margin-top: 5px;">
                  <div  class="pc-card-div12"  >550</div>
                  <img :src="index_img19"  class="pc-card-div13" />
                </div>
                <div style="flex: 1;"></div>
                <div class="pc-card-div122"  >
                  <img :src="icon_cart" class="pc-card-div122-img" />
                  <div class="pc-card-div1222">{{ $t('index.text441') }}</div>
                </div>
              </div>

            </div>

            <!---3--->
            <div class="pc-card-div111" style="margin-left: 20px;">
              <img :src="m_p8"  class="pc-card-div111-img" />

              <div  class="pc-card-div10" >
                <div class="pc-card-div11"  >LynkPTER</div>
                <div style="flex: 1;"></div>
                <div class="pc-card-div11"  >L1</div>
              </div>

              <div  class="pc-card-div10" style="margin-top: 20px;" >
                <div style="display: flex;margin-top: 5px;">
                  <div  class="pc-card-div12"  >550</div>
                  <img :src="index_img19"  class="pc-card-div13" />
                </div>
                <div style="flex: 1;"></div>
                <div class="pc-card-div122"  >
                  <img :src="icon_cart" class="pc-card-div122-img" />
                  <div class="pc-card-div1222">{{ $t('index.text441') }}</div>
                </div>
              </div>

            </div>
            <!---4--->
            <div class="pc-card-div111" style="margin-left: 20px;">
              <img :src="m_p9"  class="pc-card-div111-img" />

              <div  class="pc-card-div10" >
                <div class="pc-card-div11"  >LynkPTER</div>
                <div style="flex: 1;"></div>
                <div class="pc-card-div11"  >L1</div>
              </div>

              <div  class="pc-card-div10" style="margin-top: 20px;" >
                <div style="display: flex;margin-top: 5px;">
                  <div  class="pc-card-div12"  >550</div>
                  <img :src="index_img19"  class="pc-card-div13" />
                </div>
                <div style="flex: 1;"></div>
                <div class="pc-card-div122"  >
                  <img :src="icon_cart" class="pc-card-div122-img" />
                  <div class="pc-card-div1222">{{ $t('index.text441') }}</div>
                </div>
              </div>

            </div>
            <!--5--->
            <div class="pc-card-div111" style="margin-left: 20px;">
              <img :src="m_p10"  class="pc-card-div111-img" />

              <div  class="pc-card-div10" >
                <div class="pc-card-div11"  >LynkPTER</div>
                <div style="flex: 1;"></div>
                <div class="pc-card-div11"  >L1</div>
              </div>

              <div  class="pc-card-div10" style="margin-top: 20px;" >
                <div style="display: flex;margin-top: 5px;">
                  <div  class="pc-card-div12"  >550</div>
                  <img :src="index_img19"  class="pc-card-div13" />
                </div>
                <div style="flex: 1;"></div>
                <div class="pc-card-div122"  >
                  <img :src="icon_cart" class="pc-card-div122-img" />
                  <div class="pc-card-div1222">{{ $t('index.text441') }}</div>
                </div>
              </div>

            </div>
            <!---6-->
          </div>
          <!-----222edn-->

          <div style="position: relative;line-height: 44px;padding-left: 30px;cursor: pointer; margin: 60px auto;width:170px;height: 44px;border-radius: 44px ;border:1px solid #0167BC; font-size: 16px; font-family: PingFang SC; font-weight: bold;  color: #141420; opacity: 1;">
            {{ $t('index.text48') }}
            <img :src="index_img20" style="width: 22px;height: 11px;position: absolute;right: 20px;top: 17px;"/>
          </div>



        </div>


      </div>


      <!--9 end-->

      <!--10 statrt-->
      <!--<div style="width: 100%;height: 900px;background: #FAFAFA">
        <div style="width: 1480px;height: 900px;margin: 0 auto;">
          <div style="width: 1398px;padding-top: 80px;text-align: center;font-size: 42px;font-family: Arial Black;font-weight: 400;color: #141420;opacity: 1;"> {{ $t('index.text49') }} </div>

       <div style="display: flex;margin-top: 58px;">
         <div style=" font-size: 18px;font-family: Arial Black;font-weight: 400; color: #141420; opacity: 1;">
           <div>{{ $t('index.text50') }} </div>
           <div style="margin-top: 90px;">{{ $t('index.text51') }} </div>
         </div>
         <div style="position: relative;margin-left: 20px;">
            <div style="width: 1px; height: 570px;background:#0167BC;position: absolute;left: 7px; "></div>

           <div style=" width: 13px;height: 13px; border: 1px solid #0167BC; border-radius: 50%; opacity: 1;background: #FFFFFF;position: absolute;left: 0px;top: 0px;"></div>

           <div style=" width: 13px;height: 13px; border: 1px solid #0167BC; border-radius: 50%; opacity: 1;background: #FFFFFF;position: absolute;left: 0px;top: 116px;"></div>
         </div>
         <div style="margin-left: 30px;">
           <div class="pc-mp-div1" >
              <div  class="pc-mp-div2"></div>
             <div class="pc-mp-div3" >{{ $t('index.text52') }}</div>
             <div style="flex: 1;"></div>
             <div class="pc-mp-div4" >{{ $t('index.text61') }}</div>
           </div>
           <div class="pc-mp-div1" >
             <div  class="pc-mp-div2"></div>
             <div class="pc-mp-div3" >{{ $t('index.text53') }}</div>
             <div style="flex: 1;"></div>
             <div class="pc-mp-div4" >{{ $t('index.text61') }}</div>
           </div>
           <div class="pc-mp-div1" >
             <div  class="pc-mp-div2"></div>
             <div class="pc-mp-div3" >{{ $t('index.text54') }}</div>
             <div style="flex: 1;"></div>
             <div class="pc-mp-div4" >{{ $t('index.text62') }}</div>
           </div>
           <div class="pc-mp-div1" >
             <div  class="pc-mp-div2"></div>
             <div class="pc-mp-div3" >{{ $t('index.text55') }}</div>
             <div style="flex: 1;"></div>
             <div class="pc-mp-div4" >{{ $t('index.text62') }}</div>
           </div>
           <div class="pc-mp-div1" >
             <div  class="pc-mp-div2"></div>
             <div class="pc-mp-div3" >{{ $t('index.text56') }}</div>
             <div style="flex: 1;"></div>
             <div class="pc-mp-div4" >{{ $t('index.text62') }}</div>
           </div>
           <div class="pc-mp-div1" >
             <div  class="pc-mp-div2"></div>
             <div class="pc-mp-div3" >{{ $t('index.text57') }}</div>
             <div style="flex: 1;"></div>
             <div class="pc-mp-div4" >{{ $t('index.text62') }}</div>
           </div>
           <div class="pc-mp-div1" >
             <div  class="pc-mp-div2"></div>
             <div class="pc-mp-div3" >{{ $t('index.text58') }}</div>
             <div style="flex: 1;"></div>
             <div class="pc-mp-div4" >{{ $t('index.text62') }}</div>
           </div>
           <div class="pc-mp-div1" >
             <div  class="pc-mp-div2"></div>
             <div class="pc-mp-div3" >{{ $t('index.text59') }}</div>
             <div style="flex: 1;"></div>
             <div class="pc-mp-div4" >{{ $t('index.text62') }}</div>
           </div>
           <div class="pc-mp-div1" >
             <div  class="pc-mp-div2"></div>
             <div class="pc-mp-div3" >{{ $t('index.text60') }}</div>
             <div style="flex: 1;"></div>
             <div class="pc-mp-div4" >{{ $t('index.text62') }}</div>
           </div>
         </div>
       </div>






        </div>


      </div>-->


      <!--10 end-->
      <!--road map--->
      <div   id="a71"   style="width: 100%;height: 900px;background: #FFFFFF">
        <div style="width: 1380px;height: 900px;margin: 0 auto;">

          <div style="width: 1380px;padding-top: 80px;padding-bottom:100px;text-align: center;font-size: 42px;font-family: Arial Black;font-weight: 400;color: #141420;opacity: 1;">
            {{ $t('index.text49') }} </div>





          <div style="width: 1300px;height: 180px;display: flex;margin: 0 auto;">
            <div style="flex: 1;text-align: center;padding-top: 120px;font-size: 16px; font-family: PingFang SC; font-weight: bold; color: #141420; opacity: 1;">
              {{ $t('index.text52') }} </div>
            <div style="flex: 1;justify-content: center;align-items: center;">
              <img :src="index_img34" style="width: 100px;height: 100px;margin-top: 80px;margin-left: 40px;" >
            </div>
            <div style="flex: 1;text-align: center;margin-top: 70px;line-height:24px;font-size: 16px; font-family: PingFang SC; font-weight: bold; color: #141420; opacity: 1;">
              {{ $t('index.text54') }} </div>
            <div style="flex: 1;justify-content: center;align-items: center;">
              <img :src="index_img36" style="width: 100px;height: 100px;margin-top: 80px;margin-left: 30px;" >
            </div>
            <div style="flex: 1;text-align: center;margin-top: 0px;line-height:24px;font-size: 16px; font-family: PingFang SC; font-weight: bold; color: #141420; opacity: 1;">
              {{ $t('index.text57') }} </div>
            <div style="flex: 1;justify-content: center;align-items: center;">
              <img :src="index_img38" style="width: 100px;height: 100px;margin-top: 80px;margin-left: 30px;" >
            </div>
            <div style="flex: 1;text-align: center;margin-top:95px;line-height:24px;font-size: 16px; font-family: PingFang SC; font-weight: bold; color: #141420; opacity: 1;">
              {{ $t('index.text59') }} </div>
            <div style="flex: 1;justify-content: center;align-items: center;">
              <img :src="index_img40" style="width: 100px;height: 100px;margin-top: 80px;margin-left: 20px;" >
            </div>
          </div>
          <div style="width: 1380px;height: 94px;">
            <img :src="index_img32" style="width: 1380px;height: 94px;">
          </div>
          <!--圆圈-->
          <div style="width: 1300px;height: 94px;display: flex;margin: 0 auto;margin-top: -105px;">
            <div style="flex: 1;">
              <div style="margin-top: 18px;margin-left: 68px;width: 26px;height: 26px;background: #FFFFFF; border: 4px solid #0167BC; border-radius: 50%; opacity: 1;"></div>
            </div>
            <div style="flex: 1;">
              <div style="margin-top: 75px;margin-left: 76px;width: 26px;height: 26px;background: #FFFFFF; border: 4px solid #0167BC; border-radius: 50%; opacity: 1;"></div>
            </div>
            <div style="flex: 1;justify-content: center;align-items: center;">
              <div style="margin-top: 5px;margin-left: 70px;width: 26px;height: 26px;background: #FFFFFF; border: 4px solid #0167BC; border-radius: 50%; opacity: 1;"></div>
            </div>
            <div style="flex: 1;">
              <div style="margin-top: 75px;margin-left: 70px;width: 26px;height: 26px;background: #FFFFFF; border: 4px solid #0167BC; border-radius: 50%; opacity: 1;"></div>
            </div>
            <div style="flex: 1;justify-content: center;align-items: center;">
              <div style="top: 8px;margin-left: 60px;width: 26px;height: 26px;background: #FFFFFF; border: 4px solid #0167BC; border-radius: 50%; opacity: 1;"></div>
            </div>
            <div style="flex: 1;">
              <div style="margin-top: 78px;margin-left: 61px;width: 26px;height: 26px;background: #FFFFFF; border: 4px solid #0167BC; border-radius: 50%; opacity: 1;"></div>
            </div>
            <div style="flex: 1;justify-content: center;align-items: center;">
              <div style="top: 10px;margin-left: 58px;width: 26px;height: 26px;background: #FFFFFF; border: 4px solid #0167BC; border-radius: 50%; opacity: 1;"></div>
            </div>
            <div style="flex: 1;">
              <div style="margin-top:40px;margin-left: 55px;width: 26px;height: 26px;background: #FFFFFF; border: 4px solid #0167BC; border-radius: 50%; opacity: 1;"></div>
            </div>
          </div>

          <div style="width: 1300px;display: flex;margin: 0 auto;">

            <div style="flex: 1;justify-content: center;align-items: center;">
              <img :src="index_img33" style="width: 100px;height: 100px;margin-top: 5px;margin-left: 30px;" >
            </div>
            <div style="flex: 1;text-align: center;margin-top: 25px;line-height:24px;font-size: 16px; font-family: PingFang SC; font-weight: bold; color: #141420; opacity: 1;">
              {{ $t('index.text53') }} </div>
            <div style="flex: 1;justify-content: center;align-items: center;">
              <img :src="index_img35" style="width: 100px;height: 100px;margin-top: 5px;margin-left: 30px;" >
            </div>
            <div style="flex: 1;text-align: center;margin-top: 25px;line-height:24px;font-size: 16px; font-family: PingFang SC; font-weight: bold; color: #141420; opacity: 1;">
              {{ $t('index.text55') }}<br/><br/>{{ $t('index.text56') }} </div>
            <div style="flex: 1;justify-content: center;align-items: center;">
              <img :src="index_img37" style="width: 100px;height: 100px;margin-top: 5px;margin-left: 25px;" >
            </div>
            <div style="flex: 1;text-align: center;margin-top: 25px;line-height:24px;font-size: 16px; font-family: PingFang SC; font-weight: bold; color: #141420; opacity: 1;">
              {{ $t('index.text58') }} </div>
            <div style="flex: 1;justify-content: center;align-items: center;">
              <img :src="index_img39" style="width: 100px;height: 100px;margin-top: 5px;margin-left: 25px;" >
            </div>
            <div style="flex: 1;text-align: center;line-height:24px;margin-top: 25px;font-size: 16px; font-family: PingFang SC; font-weight: bold; color: #141420; opacity: 1;">
              {{ $t('index.text60') }} </div>
          </div>


        </div>
      </div>
      <!--roadmap end--->
      <!--11 statrt-->
      <div    id="a81"  style="width: 100%;height: 900px;background:  #141420;">
        <div style="width: 1480px;margin: 0 auto;">
          <div style="padding-top: 180px;font-size: 42px;font-family: Arial Black;font-weight: 400;line-height: 50px;color: #FFFFFF;opacity: 1;width: 1480px;text-align: center;">
            {{ $t('index.text63') }}</div>


          <div style="width: 1480px;padding-top: 35px;text-align: center;font-size: 30px;font-family: PingFang SC;font-weight: bold;line-height: 0px; color: #FFFFFF; opacity: 1;">
            {{ $t('index.text64') }}
          </div>

          <!--  <div style="font-size: 18px; font-family: PingFang SC;font-weight: bold;line-height: 60px; color: #FFFFFF;width: 240px;height: 60px; line-height: 60px; background: linear-gradient(86deg, #0167BC 0%, #5EAEFF 100%);opacity: 1; border-radius: 30px;text-align: center;">
              {{ $t('index.text65') }}
            </div>-->

          <div  style="padding-left: 30px;position: relative;display: flex;cursor: pointer;font-size: 16px; font-family: PingFang SC; font-weight: bold; line-height:50px; color: #FFFFFF; opacity: 1;margin: 90px auto 0 auto; width: 170px; height: 50px; background: linear-gradient(90deg, #0167BC 0%, #5EAEFF 100%);opacity: 1; border-radius: 100px;">
            {{ $t('index.text65') }}
            <img :src="icon_right_arrow" style="width: 26px;height: 13px;position: absolute;right: 30px;top: 18px;"/>

          </div>

        </div>

        <div style="width: 1920px;height: 1px;background: linear-gradient(135deg, #0167BC 0%, #5EAEFF 100%);margin-top: 130px;"></div>

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
            <!-- <a href="https://github.com/" title='Github' target='_blank'>
               <img  :src="index_img24" style='width: 46px;height: 46px;margin-left: 20px;'/>
             </a>-->

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


      </div>


      <!--11 end-->
    </div>


    <!--h5--->

    <div
        v-show="isMobile"
        style="width: 10rem;"
    >
      <div style="width: 10rem;position: relative;height: 20rem;"  id="a1">
        <img :src="m_37" style="width: 10rem;height: 20rem;position: absolute;top:0rem;" />

        <div class="xxxx"  :style="topBannerNavBg">
          <img @click="showMune(1)" :src="l_1" style="width: 0.48rem;height: 0.43rem;left: 0.53rem;position: fixed;top: 0.42rem;" />
          <img :src="m_1" style="width: 2.67rem;height: 0.63rem;left: 3.65rem;position: absolute;top: 0.35rem;" />
        </div>
        <div style="padding-top: 2.4rem;width: 7.57rem ; font-size: 0.69rem; font-family: Microsoft YaHei;  font-weight: bold;color: #141420;opacity: 1;margin: 0rem auto;text-align: center;">
          {{ $t('index.text1') }}
        </div>

        <div style="width: 10rem;height: 1.2rem;"></div>
        <div style=" margin: 0rem auto;position: relative; padding-left: 0.7rem;font-size: 0.43rem;font-family: PingFang SC; font-weight: bold;line-height: 1.2rem;color: #FFFFFF; opacity: 1;cursor: pointer; width: 4.5rem; height: 1.2rem; background: linear-gradient(86deg, #0167BC 0%, #5EAEFF 100%); opacity: 1;  border-radius: 0.8rem;">
          {{ $t('index.text2') }}
          <img :src="icon_right_arrow" style="width: 0.6rem;height: 0.3rem;position: absolute;right: 0.7rem;top: 0.447rem;"/>
        </div>

        <div style="width: 9.2rem;height: 9.2rem;margin: 1.2rem auto 1.8rem auto;position: relative;">
          <img v-show="isShowBanner==1" style="width: 9.2rem;height: 9.2rem;" :src="m_201"/>
          <img v-show="isShowBanner==2" style="width: 9.2rem;height: 9.2rem;" :src="m_2"/>
          <img v-show="isShowBanner==3" style="width: 9.2rem;height: 9.2rem;" :src="m_203"/>
          <div  @click="pre"  style="width: 1.07rem;height: 1.07rem;position: absolute;top:4.06rem;left: 0.27rem;border-radius: 1.07rem;background: #141420; opacity: 0.3;  ">
          </div>
          <div @click="next"  style="width: 1.07rem;height: 1.07rem;position: absolute;top:4.06rem;right: 0.27rem;border-radius: 1.07rem;background: #141420; opacity: 0.3;  ">
          </div>
          <img  @click="pre"  style="width: 0.32rem;height: 0.26rem;position: absolute;left: 0.645rem;top: 4.47rem; " :src="m_3"/>
          <img  @click="next"  style="width: 0.32rem;height: 0.26rem;position: absolute;right: 0.645rem;top: 4.47rem;" :src="m_4"/>
        </div>

      </div>

      <!----2 start--->

      <div id="a2" style="width: 10rem;background: #FAFAFA;" >

        <div style="width: 7.57rem ; font-size: 0.75rem; font-family: Microsoft YaHei;  font-weight: bold;color: #141420;opacity: 1;padding-top: 1.09rem;margin: 0 auto;text-align: center;">
          {{ $t('index.text3') }}
        </div>

        <div style="margin: 0.53rem auto;width: 9.2rem; font-size: 0.43rem; font-family: PingFang SC;font-weight: 500; line-height: 0.65rem; color: #141420; opacity: 1; ">
          {{ $t('index.text4') }}
        </div>

        <div  style="width: 9.2rem;height: 9.2rem;margin: 1.2rem auto 1.57rem auto;" >
          <img style="width: 9.2rem;height: 9.2rem;" :src="m_5"/>
        </div>


      </div>
      <!----2 end--->
      <!----3 start--->
      <div  style="width: 10rem;position: relative;height: 24rem;">
        <img :src="m_6" style="width: 10rem;height: 24rem;position: absolute;top: 0rem;" />

        <div style="top: 1.09rem;position: absolute;left:0.85rem;width: 8.27rem;font-size: 0.64rem;font-family: Microsoft YaHei; font-weight: bold; line-height: 0.9rem; color: #FFFFFF; opacity: 1;">
          {{ $t('index.text5') }}
        </div>


        <div style="top: 5.1rem;position: absolute;left: 0.85rem;width: 8.4rem;font-size: 0.37rem;font-family: Microsoft YaHei; font-weight: 500; line-height: 0.55rem; color: #FFFFFF; opacity: 1;">
          {{ $t('index.text6') }}
        </div>

        <img :src="m_7" style="width: 10rem;height: 5.29rem;position: absolute;top: 16rem;" />


      </div>
      <!----3 end--->
      <!----4 start--->
      <!--    <div   style="width: 10rem;position: relative;height: 27.2rem;">
            <img :src="m_8" style="width: 10rem;height: 27.2rem;position: absolute;top: 0rem;" />
            <div style="width: 10rem;text-align: center;position: absolute;top: 1.63rem;font-size: 0.75rem;font-family: Microsoft YaHei;font-weight: bold; line-height: 1.15rem; color: #141420;opacity: 1;">
              {{ $t('index.text7') }}
            </div>

            <div style="left: 0.9rem;width: 8.4rem;text-align: center;position: absolute;top: 3rem;font-size: 0.48rem;font-family:  PingFang SC;font-weight: 400; line-height: 0.65rem; color: #141420;opacity: 1;">
              {{ $t('index.text8') }}
            </div>

            <div style="width: 10rem;text-align: center;position: absolute;top: 7.3rem;font-size: 1.39rem;font-family: Microsoft YaHei;font-weight: bold; line-height: 0.6rem; color: #0167BC;opacity: 1;">
              {{ value1 }}
            </div>

            <div style="width: 10rem;text-align: center;position: absolute;top: 8.8rem;font-size: 0.37rem;font-family: PingFang SC;font-weight: 400; line-height: 0.6rem; color: #141420;opacity: 1;">
              {{ $t('index.text9') }}
            </div>

            <div style="width: 10rem;text-align: center;position: absolute;top: 11rem;font-size: 1.39rem;font-family: Microsoft YaHei;font-weight: bold; line-height: 0.6rem; color: #0167BC;opacity: 1;">
              {{ value2 }}
            </div>

            <div style="width: 10rem;text-align: center;position: absolute;top: 12.5rem;font-size: 0.37rem;font-family: PingFang SC;font-weight: 400; line-height: 0.6rem; color: #141420;opacity: 1;">
              {{ $t('index.text10') }}
            </div>

            <div style="width: 10rem;text-align: center;position: absolute;top: 14.7rem;font-size: 1.39rem;font-family: Microsoft YaHei;font-weight: bold; line-height: 0.6rem; color: #0167BC;opacity: 1;">
              {{ value3 }}
            </div>

            <div style="width: 10rem;text-align: center;position: absolute;top: 16.2rem;font-size: 0.37rem;font-family: PingFang SC;font-weight: 400; line-height: 0.6rem; color: #141420;opacity: 1;">
              {{ $t('index.text11') }}
            </div>


            <div style="width: 8.8rem;left: 0.51rem;text-align: center;position: absolute;top: 19.5rem;font-size: 0.37rem;font-family: PingFang SC;font-weight: 500; line-height: 0.6rem; color: #8A899E;opacity: 1;">
              {{ $t('index.text12') }}
            </div>

          </div>-->


      <!----4 end--->
      <!----5 start--->
      <div   style="width: 10rem;background: #FAFAFA;">
        <div style="width: 7rem;margin: 0rem auto 0rem auto;display: flex;padding-top: 1.6rem;">
          <div @click="onClickTab5(1)" style="width:3.5rem; ">
            <div  v-show="isShowTab5==1" style="width:3.5rem;text-align: center; font-size: 0.64rem; font-family: Microsoft YaHei;font-weight: bold;line-height: 1rem; color: #141420; opacity: 1;">
              {{ $t('index.text13') }}
            </div>
            <div  v-show="isShowTab5!==1" style="width:3.5rem;text-align: center; font-size: 0.64rem; font-family: Microsoft YaHei;font-weight: bold;line-height: 1rem; color: #8A899E; opacity: 1;">
              {{ $t('index.text13') }}
            </div>
            <div  v-show="isShowTab5==1"  style="width: 1rem;height: 0.05rem;background: linear-gradient(90deg, #0167BC 0%, #5EAEFF 100%);opacity: 1;margin-left: 1.25rem;"></div>
          </div>
          <div @click="onClickTab5(2)"  style="width:3.5rem; ">
            <div v-show="isShowTab5==2" style="width:3.5rem;text-align: center; font-size: 0.64rem; font-family: Microsoft YaHei;font-weight: bold;line-height: 1rem; color: #141420; opacity: 1;">
              {{ $t('index.text14') }}
            </div>
            <div v-show="isShowTab5!==2" style="width:3.5rem;text-align: center; font-size: 0.64rem; font-family: Microsoft YaHei;font-weight: bold;line-height: 1rem; color: #8A899E; opacity: 1;">
              {{ $t('index.text14') }}
            </div>
            <div v-show="isShowTab5==2"  style="width: 1rem;height: 0.05rem;background: linear-gradient(90deg, #0167BC 0%, #5EAEFF 100%);opacity: 1;margin-left: 1.25rem;"></div>
          </div>
        </div>

        <div v-show="isShowTab5==1" style="width: 8.8rem;margin: 1rem auto 0 auto; font-size: 0.37rem;font-family: PingFang SC;font-weight: 500; line-height: 0.55rem; color: #141420; opacity: 1;">
          {{ $t('index.text151') }}
        </div>
        <div v-show="isShowTab5==1"  style="width: 8.8rem;margin: 0.5rem auto 0 auto; font-size: 0.37rem;font-family: PingFang SC;font-weight: 500; line-height: 0.55rem; color: #141420; opacity: 1;">
          {{ $t('index.text152') }}
        </div>
        <div v-show="isShowTab5==1"  style="width: 8.8rem;margin: 0.5rem auto 0 auto; font-size: 0.37rem;font-family: PingFang SC;font-weight: 500; line-height: 0.55rem; color: #141420; opacity: 1;">
          {{ $t('index.text153') }}
        </div>
        <div  v-show="isShowTab5==1" style="width: 8.8rem;margin: 0.5rem auto 0 auto; font-size: 0.37rem;font-family: PingFang SC;font-weight: 500; line-height: 0.55rem; color: #141420; opacity: 1;">
          {{ $t('index.text154') }}
        </div>


        <img  v-show="isShowTab5==1"
              :src="m_9"
              style="width: 8.8rem;height: 7.47rem;margin-left: 0.6rem;margin-top: 0.8rem;"
        />
        <div v-show="isShowTab5==1"  style=" margin: 0 auto;width: 8.8rem;height: 5.87rem;background: #FFFFFF;opacity: 1;border-radius: 0rem 0rem  0.3rem 0.3rem;margin-top: -0.3rem;">
          <div style="padding-top: 0.6rem;width: 8.8rem;text-align: center;font-size: 0.48rem;font-family: Microsoft YaHei;font-weight: bold; line-height: 0.59rem; color: #141420; opacity: 1;">
            {{ $t('index.text16') }}
          </div>

          <div style="margin: 0 auto;padding-top: 0.3rem;width: 7.5rem;text-align: center;font-size: 0.37rem;font-family: PingFang SC;font-weight: bold; line-height: 0.59rem; color: #8A899E; opacity: 1;">
            {{ $t('index.text17') }}
          </div>

        </div>


        <img  v-show="isShowTab5==1"
              :src="m_10"
              style="width: 8.8rem;height: 7.47rem;margin-left: 0.6rem;margin-top: 0.5rem;"
        />
        <div v-show="isShowTab5==1"  style=" margin: 0 auto;width: 8.8rem;height: 5.87rem;background: #FFFFFF;opacity: 1;border-radius: 0rem 0rem  0.3rem 0.3rem;margin-top: -0.3rem;">
          <div style="padding-top: 0.6rem;width: 8.8rem;text-align: center;font-size: 0.48rem;font-family: Microsoft YaHei;font-weight: bold; line-height: 0.59rem; color: #141420; opacity: 1;">
            {{ $t('index.text18') }}
          </div>

          <div style="margin: 0 auto;padding-top: 0.3rem;width: 7.5rem;text-align: center;font-size: 0.37rem;font-family: PingFang SC;font-weight: bold; line-height: 0.59rem; color: #8A899E; opacity: 1;">
            {{ $t('index.text19') }}
          </div>

        </div>

        <img  v-show="isShowTab5==1"
              :src="m_11"
              style="width: 8.8rem;height: 7.47rem;margin-left: 0.6rem;margin-top: 0.5rem;"
        />
        <div v-show="isShowTab5==1"  style=" margin: 0 auto;width: 8.8rem;height: 5.87rem;background: #FFFFFF;opacity: 1;border-radius: 0rem 0rem  0.3rem 0.3rem;margin-top: -0.3rem;">
          <div style="padding-top: 0.6rem;width: 8.8rem;text-align: center;font-size: 0.48rem;font-family: Microsoft YaHei;font-weight: bold; line-height: 0.59rem; color: #141420; opacity: 1;">
            {{ $t('index.text20') }}
          </div>

          <div style="margin: 0 auto;padding-top: 0.3rem;width: 7.5rem;text-align: center;font-size: 0.37rem;font-family: PingFang SC;font-weight: bold; line-height: 0.59rem; color: #8A899E; opacity: 1;">
            {{ $t('index.text21') }}
          </div>

        </div>







        <img  v-show="isShowTab5==2"
              :src="m_38"
              style="width: 9.2rem;height: 9.2rem;margin-left: 0.4rem;margin-top: 0.8rem;"
        />
        <div v-show="isShowTab5==2"  style=" margin: 0 auto;width: 9.2rem;height: 5.87rem;background: #FFFFFF;opacity: 1;border-radius: 0rem 0rem  0.3rem 0.3rem;margin-top: -0.3rem;">
          <div style="padding-top: 0.6rem;width: 8.8rem;text-align: center;font-size: 0.48rem;font-family: Microsoft YaHei;font-weight: bold; line-height: 0.59rem; color: #141420; opacity: 1;">
            {{ $t('index.text77') }}
          </div>

          <div style="margin: 0 auto;padding-top: 0.3rem;width: 7.5rem;text-align: center;font-size: 0.37rem;font-family: PingFang SC;font-weight: bold; line-height: 0.59rem; color: #8A899E; opacity: 1;">
            {{ $t('index.text78') }}
          </div>

        </div>

        <img  v-show="isShowTab5==2"
              :src="m_39"
              style="width: 9.2rem;height: 9.2rem;margin-left: 0.4rem;margin-top: 0.8rem;"
        />
        <div v-show="isShowTab5==2"  style=" margin: 0 auto;width: 9.2rem;height: 5.87rem;background: #FFFFFF;opacity: 1;border-radius: 0rem 0rem  0.3rem 0.3rem;margin-top: -0.3rem;">
          <div style="padding-top: 0.6rem;width: 8.8rem;text-align: center;font-size: 0.48rem;font-family: Microsoft YaHei;font-weight: bold; line-height: 0.59rem; color: #141420; opacity: 1;">
            {{ $t('index.text79') }}
          </div>

          <div style="margin: 0 auto;padding-top: 0.3rem;width: 7.5rem;text-align: center;font-size: 0.37rem;font-family: PingFang SC;font-weight: bold; line-height: 0.59rem; color: #8A899E; opacity: 1;">
            {{ $t('index.text80') }}
          </div>

        </div>

        <img  v-show="isShowTab5==2"
              :src="m_40"
              style="width: 9.2rem;height: 9.2rem;margin-left: 0.4rem;margin-top: 0.8rem;"
        />
        <div v-show="isShowTab5==2"  style=" margin: 0 auto;width: 9.2rem;height: 5.87rem;background: #FFFFFF;opacity: 1;border-radius: 0rem 0rem  0.3rem 0.3rem;margin-top: -0.3rem;">
          <div style="padding-top: 0.6rem;width: 8.8rem;text-align: center;font-size: 0.48rem;font-family: Microsoft YaHei;font-weight: bold; line-height: 0.59rem; color: #141420; opacity: 1;">
            {{ $t('index.text81') }}
          </div>

          <div style="margin: 0 auto;padding-top: 0.3rem;width: 7.5rem;text-align: center;font-size: 0.37rem;font-family: PingFang SC;font-weight: bold; line-height: 0.59rem; color: #8A899E; opacity: 1;">
            {{ $t('index.text82') }}
          </div>

        </div>
        <div style="width: 10rem;height: 2rem;"></div>
      </div>
      <!----5 end--->

      <!----6 start--->
      <div  id="a3" class="xxxxx">


        <div style="text-align: center;padding-top: 1.6rem;width: 10rem;font-size: 0.75rem;font-family: Microsoft YaHei; font-weight: bold; line-height: 1.33rem; color: #FFFFFF; opacity: 1;">
          {{ $t('index.text220') }}
        </div>

        <div  v-show="showTab6==1"  style="padding-top: 1rem;padding-left: 0.53rem;font-size: 0.59rem;font-family:  Arial Black;font-weight: 400;color: #FFFFFF;opacity: 1;">
          {{ $t('index.text22') }}
        </div>


        <div style="display: flex;width: 10rem;margin-top: 0.27rem;">
          <div    class="h5-circle" style="margin-left: 0.53rem;margin-top: 0.2rem;"></div>
          <div    class="h5-text1"    style="margin-left: 0.27rem ;"> {{ $t('index.text23') }}</div>
        </div>
        <div style="display: flex;width: 10rem;margin-top: 0.27rem;">
          <div    class="h5-circle" style="margin-left: 0.53rem;margin-top: 0.2rem;"></div>
          <div    class="h5-text1"    style="margin-left: 0.27rem ;"> {{ $t('index.text241') }}</div>
        </div>
        <div style="display: flex;width: 10rem;margin-top: 0.27rem;">
          <div    class="h5-circle" style="margin-left: 0.53rem;margin-top: 0.2rem;"></div>
          <div    class="h5-text1"    style="margin-left: 0.27rem ;"> {{ $t('index.text251') }}</div>
        </div>
        <div style="display: flex;width: 10rem;margin-top: 0.27rem;">
          <div    class="h5-circle" style="margin-left: 0.53rem;margin-top: 0.2rem;"></div>
          <div    class="h5-text1"    style="margin-left: 0.27rem ;width: 7rem;"> {{ $t('index.text252') }}</div>
        </div>
        <div style="display: flex;width: 10rem;margin-top: 0.27rem;">
          <div    class="h5-circle" style="margin-left: 0.53rem;margin-top: 0.2rem;"></div>
          <div    class="h5-text1"    style="margin-left: 0.27rem ;"> {{ $t('index.text261') }}</div>
        </div>
        <div style="display: flex;width: 10rem;margin-top: 0.27rem;">
          <div    class="h5-circle" style="margin-left: 0.53rem;margin-top: 0.2rem;"></div>
          <div    class="h5-text1"    style="margin-left: 0.27rem ;"> {{ $t('index.text262') }}</div>
        </div>
        <div style="display: flex;width: 10rem;margin-top: 0.27rem;">
          <div    class="h5-circle" style="margin-left: 0.53rem;margin-top: 0.2rem;"></div>
          <div    class="h5-text1"    style="margin-left: 0.27rem ;"> {{ $t('index.text27') }}</div>
        </div>


        <div style="width: 9.2rem;height: 4rem;position: relative;margin: 0.8rem auto 0.27rem auto;background: #141420; opacity: 0.8; border-radius: 0.13rem;">
          <img :src="mmm1" style="width: 1.07rem;height: 0.94rem;position: absolute;left: 0.67rem;top: 1.52rem;"/>
          <div style="position: absolute;left: 2.43rem;top: 0.4rem;font-size: 0.48rem;font-family: Arial Black;font-weight: 400;line-height: 0.59rem; color: #FFFFFF; opacity: 1;">
            {{ $t('index.text28') }}
          </div>
          <div style="position: absolute;left: 2.43rem;top: 1.4rem; width: 6.31rem;font-size: 0.37rem; font-family: PingFang SC; font-weight: 500; line-height: 0.48rem; color: #FFFFFF; opacity: 1;">
            {{ $t('index.text29') }}
          </div>
        </div>

        <div style="width: 9.2rem;height: 4rem;position: relative;margin: 0.27rem auto 0.27rem auto;background: #141420; opacity: 0.8; border-radius: 0.13rem;">
          <img :src="mmm2" style="width: 1.07rem;height: 0.94rem;position: absolute;left: 0.67rem;top: 1.52rem;"/>
          <div style="position: absolute;left: 2.43rem;top: 0.4rem;font-size: 0.48rem;font-family: Arial Black;font-weight: 400;line-height: 0.59rem; color: #FFFFFF; opacity: 1;">
            {{ $t('index.text30') }}
          </div>
          <div style="position: absolute;left: 2.43rem;top: 1.4rem; width: 6.31rem;font-size: 0.37rem; font-family: PingFang SC; font-weight: 500; line-height: 0.48rem; color: #FFFFFF; opacity: 1;">
            {{ $t('index.text31') }}
          </div>
        </div>

        <div style="width: 9.2rem;height: 4rem;position: relative;margin: 0.27rem auto 0.27rem auto;background: #141420; opacity: 0.8; border-radius: 0.13rem;">
          <img :src="mmm3" style="width: 1.07rem;height: 0.94rem;position: absolute;left: 0.67rem;top: 1.52rem;"/>
          <div style="position: absolute;left: 2.43rem;top: 0.4rem;font-size: 0.48rem;font-family: Arial Black;font-weight: 400;line-height: 0.59rem; color: #FFFFFF; opacity: 1;">
            {{ $t('index.text32') }}
          </div>
          <div style="position: absolute;left: 2.43rem;top: 1.4rem; width: 6.31rem;font-size: 0.37rem; font-family: PingFang SC; font-weight: 500; line-height: 0.48rem; color: #FFFFFF; opacity: 1;">
            {{ $t('index.text33') }}
          </div>
        </div>






        <div>
          <div  v-show="showTab6==2"  style="position: absolute; top: 6.64rem;left: 1.4rem;font-size: 0.59rem;font-family: Microsoft YaHei;font-weight: bold;color: #141420;opacity: 1;">

          </div>
          <div  v-show="showTab6==2"  class="h5-circle" style="position: absolute;left: 1.4rem;top: 8rem;"></div>
          <div   v-show="showTab6==2"  class="h5-text" style="position: absolute;left: 1.79rem;top: 7.8rem;width: 7rem;"> {{ $t('index.') }}</div>
        </div>
        <div>
          <div  v-show="showTab6==3"  style="position: absolute; top: 6.64rem;left: 1.4rem;font-size: 0.59rem;font-family: Microsoft YaHei;font-weight: bold;color: #141420;opacity: 1;">
            {{ $t('index.text30') }}
          </div>
          <div  v-show="showTab6==3"  class="h5-circle" style="position: absolute;left: 1.4rem;top: 8rem;"></div>
          <div   v-show="showTab6==3"  class="h5-text" style="position: absolute;left: 1.79rem;top: 7.8rem;width: 7rem;"> {{ $t('index.text31') }}</div>
        </div>
        <div>
          <div  v-show="showTab6==4"  style="position: absolute; top: 6.64rem;left: 1.4rem;font-size: 0.59rem;font-family: Microsoft YaHei;font-weight: bold;color: #141420;opacity: 1;">
            {{ $t('index.text32') }}
          </div>
          <div  v-show="showTab6==4"  class="h5-circle" style="position: absolute;left: 1.4rem;top: 8rem;"></div>
          <div   v-show="showTab6==4"  class="h5-text" style="position: absolute;left: 1.79rem;top: 7.8rem;width: 7rem;"> {{ $t('index.text33') }}</div>
        </div>







      </div>
      <!----6 end--->
      <!----7 start--->
      <div v-show="false"  id="a4" style="width: 10rem;background: #FAFAFA;">
        <div style="line-height: 0;text-align: center;width: 10rem;font-size: 0.75rem;font-family: Microsoft YaHei;font-weight: bold;color: #141420;opacity: 1;padding-top: 1.09rem;">
          {{ $t('index.text66') }}
        </div>
        <div style="font-style: italic;text-align: center;width: 8.8rem;margin: 0rem auto ;line-height: 0.6rem;font-size: 0.37rem;font-family: PingFang SC;font-weight: bold;color: #141420;opacity: 1;padding-top: 1.09rem;">
          {{ $t('index.text67') }}
        </div>

        <div style="width: 8.8rem;margin: 0 auto;display: flex;padding-top: 0.4rem;height: 0.91rem;">
          <div style="padding-top:0.5rem;font-size: 0.48rem; font-family: PingFang SC;font-weight: bold; line-height: 0rem; color: #2B2B35; opacity: 1;">
            {{ $t('index.text68') }}
          </div>
          <div style="flex: 1;"></div>
          <div style="width: 3.2rem; height: 0.91rem; border: 1px solid #C5C4D6; opacity: 1;border-radius: 0.61rem;display: flex;">
            <div style="font-size: 0.32rem;line-height: 0.91rem; padding-left: 0.35rem;font-family: PingFang SC; font-weight: bold; color: #141420; opacity: 1;">
              {{ $t('index.text72') }}
            </div>
            <img :src="m_14" style="width: 0.27rem;height: 0.13rem;margin-top: 0.39rem;margin-left: 0.2rem;"/>
          </div>
        </div>

        <div style=" width: 8.8rem;height: 0.03rem; background: #F1F0F2; opacity: 1;margin: 0.27rem auto;"></div>

        <div style="width: 8.8rem;margin: 0 auto;display: flex;padding-top: 0.1rem;height: 0.91rem;">
          <div style="width: 6.4rem; height: 0.91rem; border: 1px solid #C5C4D6; opacity: 1;border-radius: 0.61rem;display: flex;">
            <img :src="m_15" style="width: 0.39rem;height: 0.38rem;margin-left: 0.35rem;margin-top: 0.27rem;"/>

            <div style="width: 0.03rem;height: 0.32rem;background: #C5C4D6;opacity: 1;margin-left:3.8rem;margin-top:0.29rem;" ></div>
            <div style="margin-left: 0.2rem;line-height: 0.91rem;font-size: 0.32rem;font-family: PingFang SC;font-weight: bold;color: #141420;">
              {{ $t('index.text70') }}
            </div>

          </div>

          <div style="margin-left: 0.2rem;width: 2.27rem; height: 0.91rem; border: 1px solid #C5C4D6; opacity: 1;border-radius: 0.61rem;display: flex;">



            <div style="margin-left: 0.2rem;line-height: 0.91rem;font-size: 0.32rem;font-family: PingFang SC;font-weight: bold;color: #8A899E;">
              {{ $t('index.text71') }}
            </div>
            <div style="margin-left: 0.2rem;">
              <div style="line-height: 0rem;">
                <img :src="m_16" style="width: 0.21rem;height: 0.11rem;margin-top: 0.1rem;"/>
              </div>
              <div style="line-height: 0rem;">
                <img :src="m_14" style="width: 0.21rem;height: 0.11rem;"/>
              </div>


            </div>

          </div>
        </div>

        <div style="display: flex;padding-top: 0.53rem;padding-bottom: 0.25rem;border-bottom: 0.03rem solid  #F1F0F2;">
          <div class="h5-div7-text" style="padding-left: 0.4rem;flex: 1;"> {{ $t('index.text73') }}</div>
          <div class="h5-div7-text" style="padding-left: 0.4rem;flex: 1;">{{ $t('index.text74') }}</div>
          <div class="h5-div7-text" style="padding-left: 0.4rem;flex: 1;">{{ $t('index.text75') }}</div>
          <div class="h5-div7-text" style="padding-left: 0.4rem;flex: 2;text-align: right;padding-right:0.4rem; ">{{ $t('index.text76') }}</div>
        </div>

        <div style="border-left:0.05rem solid #0167BC ;border-bottom: 0.01rem solid   #F1F0F2;width: 10rem;height: 2.13rem;background: #FFFFFF; opacity: 1;display: flex;">
          <div style="display: flex;flex: 1;">
            <div style="font-size: 0.53rem;font-family: PingFang SC;font-weight: bold; line-height: 2.13rem;color: #E6A844;opacity: 1;padding-left: 0.38rem;">1</div>

            <img :src="c1" style="width: 1.4rem; height: 1.4rem;margin-top: 0.37rem; margin-left: 0.15rem;" />
          </div>

          <div style=" margin-left: 0.13rem;flex: 1;font-size: 0.32rem;font-family: PingFang SC; font-weight: bold; line-height:  2.13rem;color: #141420; opacity: 1;">Queen</div>

          <div style="margin-left: 0.2rem; flex: 1;font-size: 0.32rem;font-family: PingFang SC; font-weight: bold; line-height:  2.13rem;color: #141420; opacity: 1;">LV 13</div>

          <div style="margin-right: 0.4rem;text-align: right;text-decoration: underline; flex:2;font-size:0.32rem;font-family: PingFang SC; font-weight: bold; line-height:  2.13rem;color: #141420; opacity: 1;">
            0XQE21…EQWQ</div>
        </div>

        <div style="border-bottom: 0.01rem solid   #F1F0F2;width: 10rem;height: 1.87rem;background: #FFFFFF; opacity: 1;display: flex;">
          <div style="display: flex;flex: 1;">
            <div style="font-size: 0.53rem;font-family: PingFang SC;font-weight: bold; line-height: 1.87rem;color: #9191A5;opacity: 1;padding-left: 0.38rem;">2</div>

            <img :src="c2" style="width: 1.2rem; height: 1.2rem;margin-top: 0.33rem; margin-left: 0.18rem;" />
          </div>

          <div style=" margin-left: 0.33rem;flex: 1;font-size: 0.32rem;font-family: PingFang SC; font-weight: bold; line-height:  1.87rem;color: #141420; opacity: 1;">Bubble</div>

          <div style=" margin-left: 0.25rem;flex: 1;font-size: 0.32rem;font-family: PingFang SC; font-weight: bold; line-height:  1.87rem;color: #141420; opacity: 1;">LV 13</div>

          <div style="margin-right: 0.4rem;text-align: right;text-decoration: underline; flex:2;font-size:0.32rem;font-family: PingFang SC; font-weight: bold; line-height: 1.87rem;color: #141420; opacity: 1;">
            0XQE21…EQWQ</div>
        </div>


        <div style="border-bottom: 0.01rem solid   #F1F0F2;width: 10rem;height: 1.6rem;background: #FFFFFF; opacity: 1;display: flex;">
          <div style="display: flex;flex: 1;">
            <div style="font-size: 0.53rem;font-family: PingFang SC;font-weight: bold; line-height: 1.6rem;color: #9B5B4C;opacity: 1;padding-left: 0.38rem;">3</div>

            <img :src="c3" style="width: 0.9rem; height: 0.9rem;margin-top: 0.33rem; margin-left: 0.2rem;" />
          </div>

          <div style=" margin-left: 0.6rem;flex: 1;font-size: 0.32rem;font-family: PingFang SC; font-weight: bold; line-height: 1.6rem;color: #141420; opacity: 1;">Despair</div>

          <div style="margin-left: 0.25rem; flex: 1;font-size: 0.32rem;font-family: PingFang SC; font-weight: bold; line-height:  1.6rem;color: #141420; opacity: 1;">LV 13</div>

          <div style="margin-right: 0.4rem;text-align: right;text-decoration: underline; flex:2;font-size:0.32rem;font-family: PingFang SC; font-weight: bold; line-height: 1.6rem;color: #141420; opacity: 1;">
            0XQE21…EQWQ</div>
        </div>

        <div style="border-bottom: 0.01rem solid   #F1F0F2;width: 10rem;height: 1.6rem;background: #FFFFFF; opacity: 1;display: flex;">
          <div style="display: flex;flex: 1;">
            <div style="font-size: 0.53rem;font-family: PingFang SC; line-height: 1.6rem;color: #141420;opacity: 1;padding-left: 0.38rem;">4</div>

            <img :src="c4" style="width: 0.9rem; height:0.9rem;margin-top: 0.33rem; margin-left: 0.15rem;" />
          </div>

          <div style=" margin-left: 0.6rem;flex: 1;font-size: 0.32rem;font-family: PingFang SC;  line-height: 1.6rem;color: #141420; opacity: 1;">Eternity</div>

          <div style=" margin-left: 0.25rem; flex: 1;font-size: 0.32rem;font-family: PingFang SC;  line-height:  1.6rem;color: #141420; opacity: 1;">LV 13</div>

          <div style="margin-right: 0.4rem;text-align: right;text-decoration: underline; flex:2;font-size:0.32rem;font-family: PingFang SC; line-height: 1.6rem;color: #141420; opacity: 1;">
            0XQE21…EQWQ</div>
        </div>

        <div style="border-bottom: 0.01rem solid   #F1F0F2;width: 10rem;height: 1.6rem;background: #FFFFFF; opacity: 1;display: flex;">
          <div style="display: flex;flex: 1;">
            <div style="font-size: 0.53rem;font-family: PingFang SC; line-height: 1.6rem;color: #141420;opacity: 1;padding-left: 0.38rem;">5</div>

            <img :src="c5" style="width: 0.9rem; height:0.9rem;margin-top: 0.33rem; margin-left: 0.15rem;" />
          </div>

          <div style=" margin-left: 0.6rem;flex: 1;font-size: 0.32rem;font-family: PingFang SC;  line-height: 1.6rem;color: #141420; opacity: 1;">Ambition</div>

          <div style=" margin-left: 0.25rem; flex: 1;font-size: 0.32rem;font-family: PingFang SC;  line-height:  1.6rem;color: #141420; opacity: 1;">LV 13</div>

          <div style="margin-right: 0.4rem;text-align: right;text-decoration: underline; flex:2;font-size:0.32rem;font-family: PingFang SC; line-height: 1.6rem;color: #141420; opacity: 1;">
            0XQE21…EQWQ</div>
        </div>

        <div style="border-bottom: 0.01rem solid   #F1F0F2;width: 10rem;height: 1.6rem;background: #FFFFFF; opacity: 1;display: flex;">
          <div style="display: flex;flex: 1;">
            <div style="font-size: 0.53rem;font-family: PingFang SC; line-height: 1.6rem;color: #141420;opacity: 1;padding-left: 0.38rem;">6</div>

            <img :src="c6" style="width: 0.9rem; height: 0.9rem;margin-top: 0.33rem; margin-left: 0.15rem;" />
          </div>

          <div style=" margin-left: 0.6rem;flex: 1;font-size: 0.32rem;font-family: PingFang SC;  line-height: 1.6rem;color: #141420; opacity: 1;">Elegant</div>

          <div style=" margin-left: 0.25rem; flex: 1;font-size: 0.32rem;font-family: PingFang SC;  line-height:  1.6rem;color: #141420; opacity: 1;">LV 13</div>

          <div style="margin-right: 0.4rem;text-align: right;text-decoration: underline; flex:2;font-size:0.32rem;font-family: PingFang SC; line-height: 1.6rem;color: #141420; opacity: 1;">
            0XQE21…EQWQ</div>
        </div>


        <div style="border-bottom: 0.01rem solid   #F1F0F2;width: 10rem;height: 1.6rem;background: #FFFFFF; opacity: 1;display: flex;">
          <div style="display: flex;flex: 1;">
            <div style="font-size: 0.53rem;font-family: PingFang SC; line-height: 1.6rem;color: #141420;opacity: 1;padding-left: 0.38rem;">7</div>

            <img :src="c7" style="width: 0.9rem; height: 0.9rem;margin-top: 0.33rem; margin-left: 0.15rem;" />
          </div>

          <div style=" margin-left: 0.6rem;flex: 1;font-size: 0.32rem;font-family: PingFang SC;  line-height: 1.6rem;color: #141420; opacity: 1;">Ronin</div>

          <div style=" margin-left: 0.25rem; flex: 1;font-size: 0.32rem;font-family: PingFang SC;  line-height:  1.6rem;color: #141420; opacity: 1;">LV 13</div>

          <div style="margin-right: 0.4rem;text-align: right;text-decoration: underline; flex:2;font-size:0.32rem;font-family: PingFang SC; line-height: 1.6rem;color: #141420; opacity: 1;">
            0XQE21…EQWQ</div>
        </div>

        <div style="border-bottom: 0.01rem solid   #F1F0F2;width: 10rem;height: 1.6rem;background: #FFFFFF; opacity: 1;display: flex;">
          <div style="display: flex;flex: 1;">
            <div style="font-size: 0.53rem;font-family: PingFang SC; line-height: 1.6rem;color: #141420;opacity: 1;padding-left: 0.38rem;">8</div>

            <img :src="c8" style="width: 0.9rem; height: 0.9rem;margin-top: 0.33rem; margin-left: 0.15rem;" />
          </div>

          <div style=" margin-left: 0.6rem;flex: 1;font-size: 0.32rem;font-family: PingFang SC;  line-height: 1.6rem;color: #141420; opacity: 1;">Distance</div>

          <div style=" margin-left: 0.25rem; flex: 1;font-size: 0.32rem;font-family: PingFang SC;  line-height:  1.6rem;color: #141420; opacity: 1;">LV 13</div>

          <div style="margin-right: 0.4rem;text-align: right;text-decoration: underline; flex:2;font-size:0.32rem;font-family: PingFang SC; line-height: 1.6rem;color: #141420; opacity: 1;">
            0XQE21…EQWQ</div>
        </div>



        <div style="display: flex;padding-top: 0.8rem ;padding-bottom: 1.2rem;">
          <div style="flex: 1;"></div>
          <div style="flex: 1;display: flex">
            <img :src="left_no" style="width: 0.8rem;height: 0.8rem;"/>
            <div style=" width: 0.8rem;height: 0.8rem; background: #F1F0F2;opacity: 1; border-radius: 0.53rem;text-align: center;line-height: 0.8rem;   font-size: 0.32rem; font-family: PingFang SC; font-weight: bold;line-height: 0.8rem;color: #141420;opacity: 1;">
              1</div>
            <div style=" width: 0.8rem;height: 0.8rem; opacity: 1; border-radius: 0.53rem;text-align: center;line-height: 0.8rem;   font-size: 0.32rem; font-family: PingFang SC; font-weight: bold;line-height: 0.8rem;color: #8A899E;opacity: 1;">
              2</div>
            <div style=" width: 0.8rem;height: 0.8rem; opacity: 1; border-radius: 0.53rem;text-align: center;line-height: 0.8rem;   font-size: 0.32rem; font-family: PingFang SC; font-weight: bold;line-height: 0.8rem;color: #8A899E;opacity: 1;">
              3</div>
            <div style=" width: 0.8rem;height: 0.8rem; opacity: 1; border-radius: 0.53rem;text-align: center;line-height: 0.8rem;   font-size: 0.32rem; font-family: PingFang SC; font-weight: bold;line-height: 0.8rem;color: #8A899E;opacity: 1;">
              4</div>
            <img :src="right_ok" style="width: 0.8rem;height: 0.8rem;"/>
          </div>
        </div>
      </div>
      <!----7 end--->
      <!----8 start--->
      <div  id="a5" style="width: 10rem;background: #141420;">
        <div style="padding-top: 1.65rem;width: 10rem;text-align: center; font-size: 0.7rem;font-family: Microsoft YaHei; font-weight: bold;color: #FFFFFF; opacity: 1;">
          {{ $t('index.text34') }}
        </div>

        <div style="width: 7rem;margin: 0rem auto 0rem auto;display: flex;padding-top: 0.5rem;">
          <div @click="onClickTab8(1)" style="width:3.5rem; ">
            <div v-show="isShowTab8==1" style="width:3.5rem;text-align: center; font-size: 0.55rem; font-family: Microsoft YaHei;font-weight: bold;line-height: 1rem; color: #FFFFFF; opacity: 1;">
              {{ $t('index.text35') }}
            </div>
            <div v-show="isShowTab8!==1" style="width:3.5rem;text-align: center; font-size: 0.55rem; font-family: Microsoft YaHei;font-weight: bold;line-height: 1rem; color: #8A899E; opacity: 1;">
              {{ $t('index.text35') }}
            </div>
            <div v-show="isShowTab8==1"  style="width: 1rem;height: 0.05rem;background: linear-gradient(90deg, #0167BC 0%, #5EAEFF 100%);opacity: 1;margin-left: 1.25rem;"></div>
          </div>
          <div @click="onClickTab8(2)"  style="width:3.5rem; ">
            <div v-show="isShowTab8==2"  style="width:3.5rem;text-align: center; font-size: 0.55rem; font-family: Microsoft YaHei;font-weight: bold;line-height: 1rem; color: #FFFFFF; opacity: 1;">
              {{ $t('index.text351') }}
            </div>
            <div v-show="isShowTab8!==2"  style="width:3.5rem;text-align: center; font-size: 0.55rem; font-family: Microsoft YaHei;font-weight: bold;line-height: 1rem; color: #8A899E; opacity: 1;">
              {{ $t('index.text351') }}
            </div>
            <div v-show="isShowTab8==2"  style="width: 1rem;height: 0.05rem;background: linear-gradient(90deg, #0167BC 0%, #5EAEFF 100%);opacity: 1;margin-left: 1.25rem;"></div>

          </div>
        </div>

        <div v-show="isShowTab8==1" style="display: flex;width: 9.2rem;margin: 0 auto;display: flex;margin-top: 0.6rem;">
          <!--          <div    class="h5-circle" style="margin-top: 0.2rem;"></div>-->
          <div    class="h5-div8-text" style="width: 6.5rem;font-style: italic;font-size: 0.43rem;text-align: center;margin: 0 auto;"> {{ $t('index.text361') }}</div>
        </div>

        <!--<div style="display: flex;width: 9.2rem;margin: 0 auto;display: flex;margin-top: 0.2rem;">
          <div    class="h5-circle" style="margin-top: 0.2rem;"></div>
          <div    class="h5-div8-text" style="width: 9rem;"> {{ $t('index.text362') }}</div>
        </div>-->
        <div v-show="isShowTab8==1"  style="padding-top: 0.7rem;margin: 0 auto;width: 9.2rem;font-size: 0.4rem;font-weight: 700;color: #FFFFFF; opacity: 1;">
          {{ $t('index.text362') }}
        </div>
        <div  v-show="isShowTab8==1" style="padding-top: 0.3rem;margin: 0 auto;width: 9.2rem;font-size: 0.38rem;font-weight: 700;color: #FFFFFF; opacity: 1;">
          {{ $t('index.text363') }}
        </div>

        <!-- <div style="display: flex;width: 9.2rem;margin: 0 auto;display: flex;margin-top: 0.2rem;">
           <div    class="h5-circle" style="margin-top: 0.2rem;"></div>
           <div    class="h5-div8-text" style="width: 9rem;"> {{ $t('index.text38') }}</div>
         </div>-->
        <div v-show="isShowTab8==1" style="width: 9.2rem;margin:0 auto;font-size: 0.37rem; line-height: 0.52rem;color: #FFFFFF;opacity: 1;padding-top: 0.4rem;">
          <span style="color:#0167BC;font-size: 0.37rem; " >1.</span>
          {{ $t('index.text38') }}
        </div>
        <div v-show="isShowTab8==1" style="width: 9.2rem;margin:0 auto;font-size: 0.37rem;line-height: 0.52rem;color: #FFFFFF;opacity: 1;padding-top: 0.4rem;">
          <span style="color:#0167BC;font-size: 0.37rem; " >2.</span>
          {{ $t('index.text364') }}
        </div>
        <div  v-show="isShowTab8==1" style="width: 9.2rem;margin:0 auto;font-size: 0.37rem; line-height: 0.52rem;color: #FFFFFF;opacity: 1;padding-top: 0.4rem;">
          <span style="color:#0167BC;font-size: 0.37rem; " >3.</span>
          {{ $t('index.text365') }}
          <span style="color:#0167BC;font-size: 0.37rem; " >$USDT</span>
          {{", 100 " }}
          <span style="color:#0167BC;font-size: 0.37rem; " >$USDT</span>
          {{", 300 " }}
          <span style="color:#0167BC;font-size: 0.37rem; " >$USDT</span>
          {{ $t('index.text366') }}
        </div>

        <div v-show="isShowTab8==1" style="width: 9.2rem;margin:0 auto;font-size: 0.37rem; line-height: 0.52rem;color: #FFFFFF;opacity: 1;padding-top: 0.4rem;">

          {{ $t('index.text367') }}
          <span style="color:#0167BC;font-size: 0.37rem; " >$LYNK</span>
          {{ $t('index.text368') }}
          <span style="color:#0167BC;font-size: 0.37rem; " >$LYNK</span>
          {{ $t('index.text369') }}

        </div>

        <!--       <div style="display: flex;width: 9.2rem;margin: 0 auto;display: flex;margin-top: 0.2rem;">
                 <div    class="h5-circle" style="margin-top: 0.2rem;"></div>
                 <div    class="h5-div8-text" style="width: 9rem;line-height: 1.5"> {{ $t('index.text41') }}</div>
               </div>

               <div  style="padding-top: 0.55rem;margin: 0 auto;width: 9.2rem;font-size: 0.48rem;font-family: Arial Black;font-weight: 300;color: #FFFFFF; opacity: 1;">
                 {{ $t('index.text40') }}
               </div>
               <div style="width: 9.2rem;margin:0 auto;font-size: 0.37rem;font-family: PingFang SC; font-weight: bold; line-height: 0.48rem;color: #FFFFFF;opacity: 1;padding-top: 0.4rem;">
                 <span style="color:#0167BC;font-size: 0.37rem; " >1.</span>
                 {{ $t('index.text431') }}
               </div>

               <div style="width: 9.2rem;margin:0 auto;font-size: 0.37rem;font-family: PingFang SC; font-weight: bold; line-height: 0.48rem;color: #FFFFFF;opacity: 1;padding-top: 0.3rem;">
                 <span style="color:#0167BC;font-size: 0.37rem; " >2.</span>
                 {{ $t('index.text432') }}
               </div>-->

        <div @click="showDialog" v-show="isShowTab8==1" style="position: relative; font-size: 0.43rem;font-family: PingFang SC;font-weight: bold;color: #FFFFFF;opacity: 1;cursor: pointer;padding-left: 0.7rem;line-height: 1.17rem;margin: 1.07rem auto;width: 5.5rem;height: 1.17rem;background: linear-gradient(90deg, #0167BC 0%, #5EAEFF 100%);opacity: 1;border-radius: 2.67rem;">
          {{ $t('index.text421') }}
          <img :src="icon_right_arrow" style="width: 0.6rem;height: 0.3rem;position: absolute;right: 0.7rem;top: 0.447rem;"/>
        </div>


        <div  v-show="isShowTab8==1" style="width:9.09rem ;height: 5.09rem;margin: 1.98rem auto 0rem auto;position: relative;padding-bottom: 5.09rem;">
          <img :src="m_17" style="width: 9.09rem ;height: 5.09rem;position: absolute;top: 0;left: 0;" />
          <div style="width: 9.09rem ;position: absolute;top:4.2rem;text-align: center;font-size: 0.24rem;font-family: Arial Black; font-weight: 400;color: #FFFFFF; opacity: 1;">
            {{ $t('index.text43') }}
          </div>
        </div>




        <div v-show="isShowTab8==2"  style="display: flex;width: 9.2rem;margin: 0 auto;display: flex;margin-top: 0.8rem;">
          <div    class="h5-circle" style="margin-top: 0.2rem;"></div>
          <div    class="h5-div8-text" style="width: 9rem;"> {{ $t('index.text83') }}</div>
        </div>
        <div v-show="isShowTab8==2"  style="display: flex;width: 9.2rem;margin: 0 auto;display: flex;margin-top: 0.2rem;">
          <div    class="h5-circle" style="margin-top: 0.2rem;"></div>
          <div    class="h5-div8-text" style="width: 9rem;"> {{ $t('index.text84') }}</div>
        </div>
        <div v-show="isShowTab8==2"  style="display: flex;width: 9.2rem;margin: 0 auto;display: flex;margin-top: 0.2rem;">
          <div    class="h5-circle" style="margin-top: 0.2rem;"></div>
          <div    class="h5-div8-text" style="width: 9rem;"> {{ $t('index.text85') }}</div>
        </div>

        <div v-show="isShowTab8==2"  style="display: flex;width: 9.2rem;margin: 0 auto;display: flex;margin-top: 0.4rem;">
          <!--  <div    class="h5-circle" style="margin-top: 0.2rem;"></div>-->
          <div    class="h5-div8-text" style="width: 9rem;"> {{ $t('index.text86') }}</div>
        </div>
        <div v-show="isShowTab8==2" style="margin-left: 0.6rem;width: 8.8rem;font-size: 0.37rem;font-family: PingFang SC; font-weight: 400; line-height: 0.64rem; color: #FFFFFF; opacity: 1;">
          <span style="font-style: 0.4rem;">{{ $t('index.text861') }}</span> {{ $t('index.text862') }}
        </div>
        <div v-show="isShowTab8==2" style="margin-left: 0.6rem;width: 8.8rem;font-size: 0.37rem;font-family: PingFang SC; font-weight: 400; line-height: 0.64rem; color: #FFFFFF; opacity: 1;">
          <span style="font-style: 0.4rem;">{{ $t('index.text863') }}</span> {{ $t('index.text864') }}
        </div>

        <div v-show="isShowTab8==2" style="margin-left: 0.6rem;width: 8.8rem;font-size: 0.37rem;font-family: PingFang SC; font-weight: 400; line-height: 0.64rem; color: #FFFFFF; opacity: 1;">
          <span style="font-style: 0.4rem;">{{ $t('index.text865') }}</span> {{ $t('index.text866') }}
        </div>
        <div v-show="isShowTab8==2" style="margin-left: 0.6rem;width: 8.8rem;font-size: 0.37rem;font-family: PingFang SC; font-weight: 400; line-height: 0.64rem; color: #FFFFFF; opacity: 1;">
          <span style="font-style: 0.4rem;">{{ $t('index.text867') }}</span> {{ $t('index.text868') }}
        </div>
        <div v-show="isShowTab8==2"  style="display: flex;width: 9.2rem;margin: 0 auto;display: flex;margin-top: 0.4rem;">
          <!--  <div    class="h5-circle" style="margin-top: 0.2rem;"></div>-->
          <div    class="h5-div8-text" style="width: 9rem;"> {{ $t('index.text87') }}</div>
        </div>

        <div v-show="isShowTab8==2"  style="display: flex;width: 9.2rem;margin: 0 auto;display: flex;margin-top: 0.4rem;">
          <!--  <div    class="h5-circle" style="margin-top: 0.2rem;"></div>-->
          <div    class="h5-div8-text" style="width: 9rem;"> {{ $t('index.text88') }}</div>
        </div>

        <div v-show="isShowTab8==2"  style="display: flex;width: 9.2rem;margin: 0 auto;display: flex;margin-top: 0.4rem;padding-bottom: 0.53rem;">
          <!--  <div    class="h5-circle" style="margin-top: 0.2rem;"></div>-->
          <div    class="h5-div8-text" style="width: 9rem;"> {{ $t('index.text89') }}</div>
        </div>



        <div v-show="isShowTab8==2"   style="margin: 0 auto ;position: relative;width: 8.5rem;height: 6.72rem;">
          <img :src="mxx" style="width: 8.5rem;height: 6.72rem;position: absolute;top: 0;left: 0" />

          <div style="text-align: center;width: 8.2rem;position:absolute;left: 0.1rem;bottom: 0.2rem;font-size: 0.43rem; font-family: PingFang SC;font-weight: bold; line-height: 0.59rem; color: #FFFFFF; opacity: 1;">
            {{ $t('index.text91') }}
          </div>


        </div>
        <div v-show="isShowTab8==2" style="width: 1rem;height: 2.5rem;"></div>
      </div>


      <!----8 end--->

      <!----9 start 9999--->
      <div id="a6" style="width: 10rem;background: #FAFAFA;">
        <div style="padding-top: 1.65rem;width: 10rem;text-align: center; font-size: 0.75rem;font-family: Microsoft YaHei; font-weight: bold;color: #141420; opacity: 1;">
          {{ $t('index.text44') }}
        </div>


        <div style="display: flex;margin-top: 1rem;position: relative;">
          <div v-show="isShowTab9==1" style=" border: 0.1rem solid #9DDECD;" class="h5-div9-left-bg">
            <div style="display: flex;width: 5.8rem;margin: 0.3rem auto;">
              <div style="font-size: 0.32rem;font-family: PingFang SC;font-weight: bold;color: #FFFFFF;opacity: 1;text-align: center;line-height: 0.67rem;width: 1.6rem; height: 0.67rem;background: linear-gradient(270deg, #5EAEFF 0%, #0167BC 100%);opacity: 1; border-radius: 0.35rem;">
                LV 20
              </div>
              <div style="flex: 1"></div>
              <img v-show="isShowTab9==1"  :src="m_20" style="width: 0.64rem;height: 0.64rem;"/>
            </div>

            <img :src="index_img17" style="width: 4.3rem;height: 4.3rem;margin-left: 0.9rem;margin-top: 0.05rem;border-radius: 0.17rem;"/>
            <img :src="m_21" style="width: 1.34rem;height: 1.34rem;margin-left: 0.53rem;margin-top: 0.1rem;"/>
            <div style="width: 4.8rem;margin:0.3rem auto;display: flex;">
              <div style=" font-size: 0.32rem;font-family: PingFang SC; font-weight: bold;color: #141420;opacity: 1;">Attribute</div>
              <div style="flex: 1;"></div>
              <img style="width: 0.27rem ;height: 0.13rem;margin-top: 0.13rem;" :src="m_14"/>
            </div>

            <div style=" margin: 0.2rem auto;width: 5.87rem; height: 0.03rem; background: #F1F0F2;opacity: 1; border-radius: 0.27rem;"></div>

            <div style=" margin: 0.2rem auto;width: 5.87rem;display: flex; ">
              <div style=" font-size: 0.37rem;font-family: Lantinghei SC; font-weight: 800;color: #141420; opacity: 1;">
                LynkPTER
              </div>
              <div style="flex: 1;" ></div>
              <div style="flex: 1;display: flex;" >
                <div style="font-size: 0.43rem; font-family: DIN Alternate; font-weight: bold; color: #141420; opacity: 1;"> 5000</div>

                <img style="width: 0.43rem ;height: 0.43rem;margin-left: 0.2rem;margin-top: 0.1rem;" :src="m_23"/>
              </div>
            </div>
          </div>
          <!---2--->
          <div v-show="isShowTab9==2" style=" border: 0.1rem solid #5EAEFF;" class="h5-div9-left-bg">
            <div style="display: flex;width: 5.8rem;margin: 0.3rem auto;">
              <div style="font-size: 0.32rem;font-family: PingFang SC;font-weight: bold;color: #FFFFFF;opacity: 1;text-align: center;line-height: 0.67rem;width: 1.6rem; height: 0.67rem;background: linear-gradient(270deg, #5EAEFF 0%, #0167BC 100%);opacity: 1; border-radius: 0.35rem;">
                LV 20
              </div>
              <div style="flex: 1"></div>

              <img v-show="isShowTab9==2"  :src="index_img14" style="width: 0.64rem;height: 0.64rem;"/>

            </div>

            <img :src="index_img17" style="width: 4.3rem;height: 4.3rem;margin-left: 0.9rem;margin-top: 0.05rem;border-radius: 0.17rem;"/>
            <img :src="m_22" style="width: 1.34rem;height: 1.34rem;margin-left: 0.53rem;margin-top: 0.1rem;"/>
            <div style="width: 4.8rem;margin:0.3rem auto;display: flex;">
              <div style=" font-size: 0.32rem;font-family: PingFang SC; font-weight: bold;color: #141420;opacity: 1;">Attribute</div>
              <div style="flex: 1;"></div>
              <img style="width: 0.27rem ;height: 0.13rem;margin-top: 0.13rem;" :src="m_14"/>
            </div>

            <div style=" margin: 0.2rem auto;width: 5.87rem; height: 0.03rem; background: #F1F0F2;opacity: 1; border-radius: 0.27rem;"></div>

            <div style=" margin: 0.2rem auto;width: 5.87rem;display: flex; ">
              <div style=" font-size: 0.37rem;font-family: Lantinghei SC; font-weight: 800;color: #141420; opacity: 1;">
                LynkPTER
              </div>
              <div style="flex: 1;" ></div>
              <div style="flex: 1;display: flex;" >
                <div style="font-size: 0.43rem; font-family: DIN Alternate; font-weight: bold; color: #141420; opacity: 1;"> 5000</div>

                <img style="width: 0.43rem ;height: 0.43rem;margin-left: 0.2rem;margin-top: 0.1rem;" :src="m_23"/>
              </div>
            </div>
          </div>
          <!---2--->
          <!----333--->
          <div v-show="isShowTab9==3" style=" border: 0.1rem solid #614DF6;" class="h5-div9-left-bg">
            <div style="display: flex;width: 5.8rem;margin: 0.3rem auto;">
              <div style="font-size: 0.32rem;font-family: PingFang SC;font-weight: bold;color: #FFFFFF;opacity: 1;text-align: center;line-height: 0.67rem;width: 1.6rem; height: 0.67rem;background: linear-gradient(270deg, #5EAEFF 0%, #0167BC 100%);opacity: 1; border-radius: 0.35rem;">
                LV 20
              </div>
              <div style="flex: 1"></div>

              <img v-show="isShowTab9==3"  :src="index_img15" style="width: 0.64rem;height: 0.64rem;"/>

            </div>

            <img :src="index_img17" style="width: 4.3rem;height: 4.3rem;margin-left: 0.9rem;margin-top: 0.05rem;border-radius: 0.17rem;"/>
            <img :src="m_21" style="width: 1.34rem;height: 1.34rem;margin-left: 0.53rem;margin-top: 0.1rem;"/>
            <div style="width: 4.8rem;margin:0.3rem auto;display: flex;">
              <div style=" font-size: 0.32rem;font-family: PingFang SC; font-weight: bold;color: #141420;opacity: 1;">Attribute</div>
              <div style="flex: 1;"></div>
              <img style="width: 0.27rem ;height: 0.13rem;margin-top: 0.13rem;" :src="m_14"/>
            </div>

            <div style=" margin: 0.2rem auto;width: 5.87rem; height: 0.03rem; background: #F1F0F2;opacity: 1; border-radius: 0.27rem;"></div>

            <div style=" margin: 0.2rem auto;width: 5.87rem;display: flex; ">
              <div style=" font-size: 0.37rem;font-family: Lantinghei SC; font-weight: 800;color: #141420; opacity: 1;">
                LynkPTER
              </div>
              <div style="flex: 1;" ></div>
              <div style="flex: 1;display: flex;" >
                <div style="font-size: 0.43rem; font-family: DIN Alternate; font-weight: bold; color: #141420; opacity: 1;"> 5000</div>

                <img style="width: 0.43rem ;height: 0.43rem;margin-left: 0.2rem;margin-top: 0.1rem;" :src="m_23"/>
              </div>
            </div>
          </div>
          <!----333--->
          <!----444--->
          <div v-show="isShowTab9==4" style=" border: 0.1rem solid #CF5EFF;" class="h5-div9-left-bg">
            <div style="display: flex;width: 5.8rem;margin: 0.3rem auto;">
              <div style="font-size: 0.32rem;font-family: PingFang SC;font-weight: bold;color: #FFFFFF;opacity: 1;text-align: center;line-height: 0.67rem;width: 1.6rem; height: 0.67rem;background: linear-gradient(270deg, #5EAEFF 0%, #0167BC 100%);opacity: 1; border-radius: 0.35rem;">
                LV 20
              </div>
              <div style="flex: 1"></div>

              <img v-show="isShowTab9==4"  :src="index_img16" style="width: 0.64rem;height: 0.64rem;"/>

            </div>

            <img :src="index_img17" style="width: 4.3rem;height: 4.3rem;margin-left: 0.9rem;margin-top: 0.05rem;border-radius: 0.17rem;"/>
            <img :src="m_22" style="width: 1.34rem;height: 1.34rem;margin-left: 0.53rem;margin-top: 0.1rem;"/>
            <div style="width: 4.8rem;margin:0.3rem auto;display: flex;">
              <div style=" font-size: 0.32rem;font-family: PingFang SC; font-weight: bold;color: #141420;opacity: 1;">Attribute</div>
              <div style="flex: 1;"></div>
              <img style="width: 0.27rem ;height: 0.13rem;margin-top: 0.13rem;" :src="m_14"/>
            </div>

            <div style=" margin: 0.2rem auto;width: 5.87rem; height: 0.03rem; background: #F1F0F2;opacity: 1; border-radius: 0.27rem;"></div>

            <div style=" margin: 0.2rem auto;width: 5.87rem;display: flex; ">
              <div style=" font-size: 0.37rem;font-family: Lantinghei SC; font-weight: 800;color: #141420; opacity: 1;">
                LynkPTER
              </div>
              <div style="flex: 1;" ></div>
              <div style="flex: 1;display: flex;" >
                <div style="font-size: 0.43rem; font-family: DIN Alternate; font-weight: bold; color: #141420; opacity: 1;"> 5000</div>

                <img style="width: 0.43rem ;height: 0.43rem;margin-left: 0.2rem;margin-top: 0.1rem;" :src="m_23"/>
              </div>
            </div>
          </div>
          <!----444--->
          <!---5555--->
          <div v-show="isShowTab9==5" style=" border: 0.1rem solid #E6A844;" class="h5-div9-left-bg">

            <div style="display: flex;width: 5.8rem;margin: 0.3rem auto;">
              <div style="font-size: 0.32rem;font-family: PingFang SC;font-weight: bold;color: #FFFFFF;opacity: 1;text-align: center;line-height: 0.67rem;width: 1.6rem; height: 0.67rem;background: linear-gradient(270deg, #5EAEFF 0%, #0167BC 100%);opacity: 1; border-radius: 0.35rem;">
                LV 20
              </div>
              <div style="flex: 1"></div>

              <img v-show="isShowTab9==5"  :src="index_img16" style="width: 0.64rem;height: 0.64rem;"/>
            </div>

            <img :src="index_img17" style="width: 4.3rem;height: 4.3rem;margin-left: 0.9rem;margin-top: 0.05rem;border-radius: 0.17rem;"/>
            <img :src="m_22" style="width: 1.34rem;height: 1.34rem;margin-left: 0.53rem;margin-top: 0.1rem;"/>
            <div style="width: 4.8rem;margin:0.3rem auto;display: flex;">
              <div style=" font-size: 0.32rem;font-family: PingFang SC; font-weight: bold;color: #141420;opacity: 1;">Attribute</div>
              <div style="flex: 1;"></div>
              <img style="width: 0.27rem ;height: 0.13rem;margin-top: 0.13rem;" :src="m_14"/>
            </div>

            <div style=" margin: 0.2rem auto;width: 5.87rem; height: 0.03rem; background: #F1F0F2;opacity: 1; border-radius: 0.27rem;"></div>

            <div style=" margin: 0.2rem auto;width: 5.87rem;display: flex; ">
              <div style=" font-size: 0.37rem;font-family: Lantinghei SC; font-weight: 800;color: #141420; opacity: 1;">
                LynkPTER
              </div>
              <div style="flex: 1;" ></div>
              <div style="flex: 1;display: flex;" >
                <div style="font-size: 0.43rem; font-family: DIN Alternate; font-weight: bold; color: #141420; opacity: 1;"> 5000</div>

                <img style="width: 0.43rem ;height: 0.43rem;margin-left: 0.2rem;margin-top: 0.1rem;" :src="m_23"/>
              </div>
            </div>
          </div>
          <!------55555-->

          <!---1--->
          <div v-show="isShowTab9==1"  style="border-top: 0.1rem solid #5EAEFF;border-left: 0.1rem solid #5EAEFF; border-bottom: 0.1rem solid #5EAEFF;" class="h5-div9-right-bg">
            <div style="margin-left: 0.5rem;margin-top:0.3rem; ;font-size: 0.32rem;font-family: PingFang SC;font-weight: bold;color: #FFFFFF;opacity: 1;text-align: center;line-height: 0.67rem;width: 1.6rem; height: 0.67rem;background: linear-gradient(270deg, #5EAEFF 0%, #0167BC 100%);opacity: 1; border-radius: 0.35rem;">
              LV 20
            </div>
            <img :src="m_22" style="width: 1.34rem;height: 1.34rem;margin-left: 0.53rem;margin-top: 4.7rem;"/>
            <div style=" font-size: 0.32rem;font-family: PingFang SC; font-weight: bold;color: #141420;opacity: 1;margin-left: 0.6rem;margin-top: 0.55rem;">Attribute</div>

            <div style=" margin-top: 0.4rem;width: 2.4rem; height: 0.03rem;margin-left: 0.31rem; background: #F1F0F2;opacity: 1; border-radius: 0.27rem;"></div>
            <div style=" font-size: 0.37rem;font-family: Lantinghei SC; font-weight: 800;color: #141420; opacity: 1;margin-left: 0.4rem;margin-top: 0.2rem;">
              LynkPTER
            </div>

          </div>
          <!---1--->
          <!---2--->
          <div v-show="isShowTab9==2"  style="border-top: 0.1rem solid #614DF6;border-left: 0.1rem solid #614DF6; border-bottom: 0.1rem solid #614DF6;" class="h5-div9-right-bg">
            <div style="margin-left: 0.5rem;margin-top:0.3rem; ;font-size: 0.32rem;font-family: PingFang SC;font-weight: bold;color: #FFFFFF;opacity: 1;text-align: center;line-height: 0.67rem;width: 1.6rem; height: 0.67rem;background: linear-gradient(270deg, #5EAEFF 0%, #0167BC 100%);opacity: 1; border-radius: 0.35rem;">
              LV 20
            </div>
            <img :src="m_22" style="width: 1.34rem;height: 1.34rem;margin-left: 0.53rem;margin-top: 4.7rem;"/>
            <div style=" font-size: 0.32rem;font-family: PingFang SC; font-weight: bold;color: #141420;opacity: 1;margin-left: 0.6rem;margin-top: 0.55rem;">Attribute</div>

            <div style=" margin-top: 0.4rem;width: 2.4rem; height: 0.03rem;margin-left: 0.31rem; background: #F1F0F2;opacity: 1; border-radius: 0.27rem;"></div>
            <div style=" font-size: 0.37rem;font-family: Lantinghei SC; font-weight: 800;color: #141420; opacity: 1;margin-left: 0.4rem;margin-top: 0.2rem;">
              LynkPTER
            </div>
          </div>
          <!---2--->
          <!---3--->
          <div v-show="isShowTab9==3"  style="border-top: 0.1rem solid #CF5EFF;border-left: 0.1rem solid #CF5EFF; border-bottom: 0.1rem solid #CF5EFF;" class="h5-div9-right-bg">
            <div style="margin-left: 0.5rem;margin-top:0.3rem; ;font-size: 0.32rem;font-family: PingFang SC;font-weight: bold;color: #FFFFFF;opacity: 1;text-align: center;line-height: 0.67rem;width: 1.6rem; height: 0.67rem;background: linear-gradient(270deg, #5EAEFF 0%, #0167BC 100%);opacity: 1; border-radius: 0.35rem;">
              LV 20
            </div>
            <img :src="m_22" style="width: 1.34rem;height: 1.34rem;margin-left: 0.53rem;margin-top: 4.7rem;"/>
            <div style=" font-size: 0.32rem;font-family: PingFang SC; font-weight: bold;color: #141420;opacity: 1;margin-left: 0.6rem;margin-top: 0.55rem;">Attribute</div>

            <div style=" margin-top: 0.4rem;width: 2.4rem; height: 0.03rem;margin-left: 0.31rem; background: #F1F0F2;opacity: 1; border-radius: 0.27rem;"></div>
            <div style=" font-size: 0.37rem;font-family: Lantinghei SC; font-weight: 800;color: #141420; opacity: 1;margin-left: 0.4rem;margin-top: 0.2rem;">
              LynkPTER
            </div>
          </div>
          <!---3--->
          <!---4--->
          <div v-show="isShowTab9==4"  style="border-top: 0.1rem solid #E6A844;border-left: 0.1rem solid #E6A844; border-bottom: 0.1rem solid #E6A844;" class="h5-div9-right-bg">



            <div style="margin-left: 0.5rem;margin-top:0.3rem; ;font-size: 0.32rem;font-family: PingFang SC;font-weight: bold;color: #FFFFFF;opacity: 1;text-align: center;line-height: 0.67rem;width: 1.6rem; height: 0.67rem;background: linear-gradient(270deg, #5EAEFF 0%, #0167BC 100%);opacity: 1; border-radius: 0.35rem;">
              LV 20
            </div>
            <img :src="m_22" style="width: 1.34rem;height: 1.34rem;margin-left: 0.53rem;margin-top: 4.7rem;"/>
            <div style=" font-size: 0.32rem;font-family: PingFang SC; font-weight: bold;color: #141420;opacity: 1;margin-left: 0.6rem;margin-top: 0.55rem;">Attribute</div>

            <div style=" margin-top: 0.4rem;width: 2.4rem; height: 0.03rem;margin-left: 0.31rem; background: #F1F0F2;opacity: 1; border-radius: 0.27rem;"></div>
            <div style=" font-size: 0.37rem;font-family: Lantinghei SC; font-weight: 800;color: #141420; opacity: 1;margin-left: 0.4rem;margin-top: 0.2rem;">
              LynkPTER
            </div>
          </div>
          <!---4--->
          <img @click="clickM9Left" :src="m_18" style="width: 1.07rem;height: 1.07rem;position: absolute;top: 4.29rem;left: 0.65rem;"/>
          <img v-show="isShowTab9!==5" @click="clickM9Right" :src="m_19" style="width: 1.07rem;height: 1.07rem;position: absolute;top: 4.29rem;right: 0.65rem;"/>
        </div>

        <div style="cursor: pointer; font-size: 0.43rem;font-family: PingFang SC; font-weight: bold;color: #0167BC; opacity: 1;padding-left: 1rem;line-height:1.17rem ;border-radius:1.17rem ; margin: 1.6rem auto 0rem auto;width: 4.33rem;height: 1.17rem;border:0.1rem solid #5EAEFF; opacity: 1;">
          {{ $t('index.text48') }}
          <img :src="m_24" style="width: 0.59rem;height: 0.3rem;margin-left: 0.4rem;"/>
        </div>
        <div style="width: 10rem;height: 3rem;"></div>

      </div>
      <!----9 end--->


      <!----10 start--->
      <div id="a7" style="width: 10rem;background: #FFFFFF;height: 39rem;position: relative;">
        <div style="padding-top: 1.65rem;width: 10rem;text-align: center; font-size: 0.75rem;font-family: Arial Black; font-weight: bold;color: #141420; opacity: 1;">
          {{ $t('index.text49') }}
        </div>
        <img :src="m_25" style="position: absolute;top: 3.3rem;left: 3.9rem;width: 2.22rem;height: 35rem;" />
        <img :src="m_26" style="position: absolute;top: 4rem;left: 1.52rem;width: 2.13rem;height: 2.13rem;" />
        <div style="position: absolute; top: 4.71rem;left: 4.67rem;width: 0.5rem;height: 0.5rem; background: #FFFFFF; border: 0.1rem solid #0167BC; border-radius: 50%; opacity: 1;"></div>
        <div style=" left: 6.1rem;position: absolute;top: 4.7rem;font-size: 0.43rem;font-family: PingFang SC;font-weight: bold;line-height: 0.64rem; color: #141420; opacity: 1;">{{ $t('index.text52') }} </div>

        <img :src="m_27" style="position: absolute;top: 7.8rem;left: 6.1rem;width: 2.13rem;height: 2.13rem;" />
        <div style="position: absolute; top: 8.45rem;left: 4.67rem;width: 0.5rem;height: 0.5rem; background: #FFFFFF; border: 0.1rem solid #0167BC; border-radius: 50%; opacity: 1;"></div>
        <div style=" text-align: right;left: 1.12rem;width: 2.4rem;position: absolute;top: 7.9rem;font-size: 0.43rem;font-family: PingFang SC;font-weight: bold;line-height: 0.64rem; color: #141420; opacity: 1;">{{ $t('index.text53') }} </div>


        <img :src="m_28" style="position: absolute;top: 11.8rem;left: 1.52rem;width: 2.13rem;height: 2.13rem;" />
        <div style="position: absolute; top: 12.305rem;left: 4.67rem;width: 0.5rem;height: 0.5rem; background: #FFFFFF; border: 0.1rem solid #0167BC; border-radius: 50%; opacity: 1;"></div>
        <div style=" left: 6.1rem;position: absolute;top: 11.67rem;font-size: 0.43rem;font-family: PingFang SC;font-weight: bold;line-height: 0.64rem; color: #141420; opacity: 1;">
          {{ $t('index.text54') }} </div>

        <img :src="m_29" style="position: absolute;top: 16.9rem;left: 6.1rem;width: 2.13rem;height: 2.13rem;" />
        <div style="position: absolute; top: 17.715rem;left: 4.67rem;width: 0.5rem;height: 0.5rem; background: #FFFFFF; border: 0.1rem solid #0167BC; border-radius: 50%; opacity: 1;"></div>
        <div style=" text-align: right;left: 0.22rem;width: 4rem;position: absolute;top: 14.5rem;font-size: 0.43rem;font-family: PingFang SC;font-weight: bold;line-height: 0.64rem; color: #141420; opacity: 1;">
          {{ $t('index.text55') }}
        </div>
        <div style=" text-align: right;left: 0.22rem;width: 4rem;position: absolute;top: 18rem;font-size: 0.43rem;font-family: PingFang SC;font-weight: bold;line-height: 0.64rem; color: #141420; opacity: 1;">
          {{ $t('index.text56') }}
        </div>


        <img :src="m_30" style="position: absolute;top: 22.9rem;left: 1.52rem;width: 2.13rem;height: 2.13rem;" />
        <div style="position: absolute; top: 23.49rem;left: 4.67rem;width: 0.5rem;height: 0.5rem; background: #FFFFFF; border: 0.1rem solid #0167BC; border-radius: 50%; opacity: 1;"></div>
        <div style=" left: 6.1rem;position: absolute;top:21.5rem;font-size: 0.43rem;font-family: PingFang SC;font-weight: bold;line-height: 0.64rem; color: #141420; opacity: 1;">
          {{ $t('index.text57') }} </div>

        <img :src="m_31" style="position: absolute;top:26.8rem;left: 6.1rem;width: 2.13rem;height: 2.13rem;" />
        <div style="position: absolute; top: 27.33rem;left: 4.67rem;width: 0.5rem;height: 0.5rem; background: #FFFFFF; border: 0.1rem solid #0167BC; border-radius: 50%; opacity: 1;"></div>
        <div style=" text-align: right;left: 1.12rem;width: 2.4rem;position: absolute;top: 26rem;font-size: 0.43rem;font-family: PingFang SC;font-weight: bold;line-height: 0.64rem; color: #141420; opacity: 1;">{{ $t('index.text58') }} </div>


        <img :src="m_32" style="position: absolute;top:30.6rem;left: 1.52rem;width: 2.13rem;height: 2.13rem;" />
        <div style="position: absolute; top: 31.2rem;left: 4.67rem;width: 0.5rem;height: 0.5rem; background: #FFFFFF; border: 0.1rem solid #0167BC; border-radius: 50%; opacity: 1;"></div>
        <div style=" left: 6.1rem;position: absolute;top:30.9rem;font-size: 0.43rem;font-family: PingFang SC;font-weight: bold;line-height: 0.64rem; color: #141420; opacity: 1;">
          {{ $t('index.text59') }} </div>

        <img :src="m_33" style="position: absolute;top:34.5rem;left: 6.1rem;width: 2.13rem;height: 2.13rem;" />
        <div style="position: absolute; top: 35.07rem;left: 4.67rem;width: 0.5rem;height: 0.5rem; background: #FFFFFF; border: 0.1rem solid #0167BC; border-radius: 50%; opacity: 1;"></div>
        <div style=" text-align: right;left: 1.12rem;width: 2.4rem;position: absolute;top: 34rem;font-size: 0.43rem;font-family: PingFang SC;font-weight: bold;line-height: 0.64rem; color: #141420; opacity: 1;">{{ $t('index.text60') }} </div>


      </div>
      <!----10 end--->

      <!----11 start-->
      <div id="a8" style="width: 10rem;background: #141420; opacity: 1;">
        <div style="padding-top: 3.67rem;text-align: center;width: 10rem;height: 1.07rem; font-size: 0.75rem; font-family: Arial Black; font-weight: 400; color: #FFFFFF;"> {{ $t('index.text63') }}</div>

        <div style="margin: 0rem auto;text-align: center;margin-top: 0.8rem;width: 8.93rem; height: 1.25rem; font-size: 0.43rem; font-family: PingFang SC; font-weight: bold; line-height: 0.6rem; color: #FFFFFF; opacity: 1;">
          {{ $t('index.text64') }}
        </div>
        <div style="width: 10rem;height: 2rem;"></div>


        <div   style="position: relative; font-size: 0.43rem;font-family: PingFang SC;font-weight: bold;color: #FFFFFF;opacity: 1;cursor: pointer;padding-left: 0.7rem;line-height: 1.17rem;margin: 0rem auto;width: 4.5rem;height: 1.17rem;background: linear-gradient(90deg, #0167BC 0%, #5EAEFF 100%);opacity: 1;border-radius: 2.67rem;">
          {{ $t('index.text65') }}
          <img :src="icon_right_arrow" style="width: 0.6rem;height: 0.3rem;position: absolute;right: 0.7rem;top: 0.447rem;"/>
        </div>
        <div style="  margin-top: 4rem;width: 10rem;height: 0.03rem; background: linear-gradient(135deg, #0167BC 0%, #5EAEFF 100%);opacity: 1;"></div>

        <div style="width: 10rem;height: 3rem;position: relative">
          <img :src="m_34" style="width: 2.13rem;height: 0.5rem;position: absolute;left: 0.43rem;top: 0.5rem;"/>
          <div  style="cursor: pointer;display: flex;right:0.48rem ;top: 0.6rem;position: absolute;display: flex;width: 3.15rem;height: 0.8rem; border:0.01rem solid #C5C4D6; opacity: 1;border-radius: 0.69rem;">
            <img :src="index_img26" style="width: 0.48rem;height: 0.48rem;margin-top: 0.16rem;margin-left: 0.2rem;"/>

            <div style="font-size: 0.32rem;font-family: PingFang SC; font-weight: bold;color: #FFFFFF;opacity: 1;line-height: 0.8rem;margin-left: 0.2rem;">English</div>
            <img :src="m_36" style="width: 0.21rem;height: 0.11rem;margin-top: 0.34rem;margin-left: 0.3rem;"/>

          </div>

          <div style="top: 1.2rem;position: absolute;left: 0.43rem;">
            <a href="https://twitter.com/lynksanctuary" title='Twitter' target='_blank'>
              <img  :src="index_img25" style='width:  0.53rem;height:  0.53rem;'/>
            </a>
            <a href="https://discord.gg/6JcgvUzdPj" title='Discord' target='_blank'>

              <img  :src="index_img22" style='width: 0.53rem;height:  0.53rem;margin-left: 0.2rem;'/>
            </a>
            <a href="https://medium.com/@lynksanctuary" title='Medium' target='_blank'>
              <img  :src="index_img23" style='width:  0.53rem;height:  0.53rem;margin-left: 0.2rem;'/>
            </a>
            <!--  <a href="https://github.com/" title='Github' target='_blank'>
                <img  :src="index_img24" style='width:  0.53rem;height:  0.53rem;margin-left: 0.2rem;'/>
              </a>-->

          </div>


        </div>




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


          <div @click="goA1(1)" class="h5-item-div" style="margin-top: 0.3rem;">
            <img :src="icon1_ok" class="h5-item-div-img"/>
            <div class="h5-item-div-div"> {{ $t('header.text1') }}</div>
          </div>
          <div @click="goA1(2)"  class="h5-item-div" >
            <img :src="icon2_ok" class="h5-item-div-img"/>
            <div class="h5-item-div-div"> {{ $t('header.text2') }}</div>
          </div>
          <div @click="goA1(3)"  class="h5-item-div" >
            <img :src="icon3_ok" class="h5-item-div-img"/>
            <div class="h5-item-div-div"> {{ $t('header.text3') }}</div>
          </div>
          <div  @click="goA1(4)"  class="h5-item-div" >
            <img :src="icon4_ok" class="h5-item-div-img"/>
            <div class="h5-item-div-div"> {{ $t('header.text4') }}</div>
          </div>
          <div  @click="goA1(5)"  class="h5-item-div" >
            <img :src="icon5_ok" class="h5-item-div-img"/>
            <div class="h5-item-div-div"> {{ $t('header.text5') }}</div>
          </div>
          <div  @click="goA1(6)"  class="h5-item-div" >
            <img :src="icon6_ok" class="h5-item-div-img"/>
            <div class="h5-item-div-div"> {{ $t('header.text6') }}</div>
          </div>
          <div  @click="goA1(7)"  class="h5-item-div" >
            <img :src="icon7_ok" class="h5-item-div-img"/>
            <div class="h5-item-div-div"> {{ $t('header.text7') }}</div>
          </div>
          <div  @click="goA1(8)"  class="h5-item-div" >
            <img :src="icon8_ok" class="h5-item-div-img"/>
            <div class="h5-item-div-div"> {{ $t('header.text8') }}</div>
          </div>

          <div style="bottom: 0.8rem;position: fixed;left: 0.53rem;">
            <a href="https://twitter.com/" title='Twitter' target='_blank'>

              <img  :src="index_img22" style='width: 0.53rem;height:  0.53rem;'/>
            </a>
            <a href="https://github.com/" title='Github' target='_blank'>
              <img  :src="index_img23" style='width:  0.53rem;height:  0.53rem;margin-left: 0.2rem;'/>
            </a>
            <!--<a href="https://github.com/" title='Github' target='_blank'>
              <img  :src="index_img24" style='width:  0.53rem;height:  0.53rem;margin-left: 0.2rem;'/>
            </a>-->
            <a href="https://github.com/" title='Github' target='_blank'>
              <img  :src="index_img25" style='width:  0.53rem;height:  0.53rem;margin-left: 0.2rem;'/>
            </a>
          </div>
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


    <div style="height: 10rem;display: flex;overflow-x: auto;">
      <img :src="index_img1" style="width: 10rem;height: 10rem;" />
      <img :src="index_img1" style="width: 10rem;height: 10rem;" />
      <img :src="index_img1" style="width: 10rem;height: 10rem;" />
      <img :src="index_img1" style="width: 10rem;height: 10rem;" />
      <img :src="index_img1" style="width: 10rem;height: 10rem;" />
    </div>


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
import { index_img1,index_img2,index_img3, index_img4,left_no,icon_arrow,
  right_ok  ,
  index_img5,
  index_img6 ,
  index_img7,
  index_img8,
  index_img9,
  index_img10,
  index_img11,
  index_img12,
  index_img13,
  index_img14,
  index_img15,
  index_img16,
  index_img17,
  index_img18,
  index_img19,
  index_img20,
  index_img21,
  index_img22,
  index_img23,
  index_img24,
  index_img25,
  index_img26,
  icon_search,
  index_img27,
  index_img28,
  index_img29,
  index_img30,
  index_img31,icon_cart,c1,c2,c3,c4,c5,c6,c7,c8,m_201,m_203,mmm1,mmm2,mmm3,
  index_img32,pc_n_2,pc_n_1,pc_n_3,m_p1,m_p2,m_p3,m_p4,m_p5,m_p6,m_p7,m_p8,m_p9,m_p10,
  index_img33,index_img34,index_img35,index_img36,index_img37,index_img38,index_img39,index_img40,ppp1,ppp2,ppp3,icon_right_arrow,
  icon1_no,icon2_no ,icon3_no,icon4_no,icon5_no,icon6_no,icon7_no,icon8_no,icon1_ok,icon2_ok,icon3_ok,icon4_ok,icon5_ok,icon6_ok,icon7_ok,icon8_ok,l_1,l_2,l_3,mxx,xxxx,
  m_d_1,
  m_d_2,
  m_d_3,
  m_d_4,
  m_d_5,
  bg1,
  bg2,
  banner1,
  banner2,
  banner3,
  arrow_left,
  arrow_right,
  m_1,
  m_2,
  m_3,
  m_4,
  m_5,
  m_6,
  m_7,
  m_8,
  m_9,
  m_10,
  m_11,
  m_12,
  m_13,
  m_14,
  m_15,
  m_16,
  m_17,
  m_18,m_19,m_20,m_21,m_22,m_23,m_24,m_25,m_26,m_27,m_28,m_29,m_30,m_31,m_32,m_33,m_34,m_35,m_36,m_37,m_38,m_39,m_40
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

      left_no,
      right_ok  ,icon_arrow,
      index_img1,
      index_img2,
      index_img3,
      index_img4,
      index_img5,
      index_img6,
      index_img7,
      index_img8,
      index_img9,
      index_img10,
      index_img11,
      index_img12,
      index_img13,
      index_img14,
      index_img15,
      index_img16,
      index_img17,
      index_img18,
      index_img19,
      pc_n_2,pc_n_1,pc_n_3,
      index_img20,
      index_img21,
      index_img22,
      index_img23,
      index_img24,
      index_img25  ,
      index_img26 ,
      icon_search,
      index_img27,
      index_img28,
      index_img29,
      index_img30,
      index_img31,
      index_img32,icon_cart,c1,c2,c3,c4,c5,c6,c7,c8,m_201,m_203,ppp1,ppp2,ppp3,mmm1,mmm2,mmm3,icon_right_arrow,
      index_img33,index_img34,index_img35,index_img36,index_img37,index_img38,index_img39,index_img40,m_p1,m_p2,m_p3,m_p4,m_p5,m_p6,m_p7,m_p8,m_p9,m_p10,
      icon1_no,icon2_no ,icon3_no,icon4_no,icon5_no,icon6_no,icon7_no,icon8_no,icon1_ok,icon2_ok,icon3_ok,icon4_ok,icon5_ok,icon6_ok,icon7_ok,icon8_ok,l_1,l_2,l_3,xxxx,
      bg1,
      bg2,
      banner1,
      banner2,
      banner3,
      showBanner1:banner1,
      showBanner2:banner2,
      showBanner3:banner3,
      m_d_1,
      m_d_2,
      m_d_3,
      m_d_4,
      m_d_5,
      m_1,
      m_2,
      m_3,
      m_4,
      m_5,
      m_6,
      m_7,
      m_8,
      m_9,
      m_10,
      m_11,
      m_12,
      m_13,
      m_14,
      m_15,
      m_16,
      m_17,
      m_18,m_19,m_20,m_21,m_22,m_23,m_24,m_25,m_26,m_27,m_28,m_29,m_30,m_31,m_32,m_33,m_34,m_35,m_36,m_37,m_38,m_39,m_40,mxx,
      index:1,
      showTab6:1,///1 2 3 4
      isShowMune:0,
      isShowDialog:false,
      isShowDialogTab:1,
      arrow_left,
      arrow_right,
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
      images:[{href:index_img1},{href:index_img1}],
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

    onError(e) {
      console.log("" + e);
      this.$message.error("copy error ");
    },
    handleScroll () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      // 设置背景颜色的透明度
      if (scrollTop) {
        this.topBannerNavBg.background = '#ffffff' // scrollTop + 多少根据自己的需求设置
      } else if (scrollTop === 0) {
        this.topBannerNavBg.background = 'transparent' // 设置回到顶部时，背景颜色为透明
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

.xxxx6{
  width: 100%;height: 900px;position: relative; background: url('../../assets/img/index_img7.png'); background-size: 100% 100%;
}

.xxxx2{
  width: 100%;height: 900px;position: relative; background: url('../../assets/img/index_img2.png'); background-size: 100% 100%;
}
.xxxxx{
  width: 10rem;height:27rem;position: relative; background: url('../../assets/img/m_12.png'); background-size: 100% 100%;

}

</style>
