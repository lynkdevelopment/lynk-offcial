<template>
  <el-dialog
      :visible.sync="isShow"
      :width="width"
      :before-close="handleClose"
      :show-close="showClose"
      :append-to-body="true"
      :close-on-click-modal='false'
  >
    <template slot="title" class="md_title">
      <slot name="title"></slot>
    </template>
    <template slot="default" class="md_content">
      <slot name="default"></slot>
    </template>
    <template slot="footer">
      <slot name="footer"></slot>
    </template>
  </el-dialog>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "myDialog",
  data(){
    return {

    }
  },
  props: {
    isShow: Boolean,
    showClose: {
      type: Boolean,
      default: true
    },
    width: {
      type: String,
      default: function (){
        this.isMobile?'80%':"48.4%"
      }
    },
    noClose: {
      type: Boolean,
      default: true
    },

  },

  computed:{
    ...mapState({
      isMobile: state => state.sys.isMobile,
    })
  },
  methods:{
    handleClose(){
      this.$emit("isClose", {});
    },

  }
}
</script>

<style lang="scss" scoped>
  ::v-deep .el-dialog {
    background-color: #FFFFFF;
    box-shadow: 0 0 0.16rem rgba(0, 0, 0, 0.7);
    // border-top: 0.08rem solid $color-main;
    font-size: 0.32rem;
    color: $color-text;
    border-radius:0.4rem ;
  }
  .md_title {
    color: $color-text;
    font-size: 0.32rem;
  }
  .md_content {
    color: $color-text;
    font-size: 0.24rem;
  }
  .md_gray {
    color: $color-text1;
  }
  .md_red {
    color: $color-main;
  }
  ::v-deep .el-dialog__headerbtn {
    font-size: 0.5rem;
  }


::v-deep .el-dialog__body {
  padding-top: 0.2rem;
}



</style>
