<template>
  <div class="layout">

<!--      <Header ref="headerEle" />-->

    <router-view
      ref="mainPage"
      class="content_body"

    />
  </div>
</template>

<script>

import Header from "@/views/layout/components/Header";





import {mapState} from "vuex";


export default {
  name: "layout",
  components: {

    Header
  },
  data() {
    return {
      close,

    };
  },
  computed: {
    ...mapState({
      // address: state => state.wallet.address,
      isMobile: state => state.sys.isMobile,
      // //   inviter: state => state.app.inviter,
      // language: state => state.app.language,
      // userInfo: state => state.app.userInfo
      // //   address: state => state.wallet.address,
    })
  },
  methods: {

  }
};
</script>

<style lang="scss" scoped>
.layout {

  width: 100%;
  background: #ffffff;
  //    background-size: cover;
}
.header {
  width: 100%;
  margin: 0 auto;
  //   position: fixed;
  //   top: 0;
  //   left: 0;
  z-index: 100;
  //   background: $color-bgcolor;
  //   box-shadow: 0 0.06rem 0.13rem rgba(0, 0, 0, 0.3);
}
.content_body {
  //   padding-top: 1.2rem;
}

@media screen and (max-width: 750px) {
  .content_body {
    // padding-top: 1.8rem;
  }
}
</style>
