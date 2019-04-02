<template>
  <div class="nav_top">

    <div class="nav">
      <div class="nav_left">
         <span class="nav_f_img"></span>
         <span class="nav_f_font">智能中台配置系统</span>
      </div>
      <div class="nav_right">
        <el-dropdown class="avatar-container" trigger="click">
      <div class="avatar-wrapper">
        <img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar">
        <span class="user_name">18588680143</span>
        <i class="el-icon-caret-bottom"/>
      </div>
      <el-dropdown-menu slot="dropdown" class="user-dropdown">
        <router-link class="inlineBlock" to="/">
          <el-dropdown-item>
            主页
          </el-dropdown-item>
        </router-link>
        <el-dropdown-item divided>
          <span style="display:block;" @click="logout">退出</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
      </div>

    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar'
    ])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('ToggleSideBar')
    },
    logout() {
      this.$store.dispatch('LogOut').then(() => {
        location.reload()
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.nav_top{
  position: relative;
  height: 64px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
  .nav{
    height:64px;
    width: 100%;
    background:rgb(48, 65, 86);
    position:fixed;
    z-index:1000;
    position: fixed;
     line-height: 64px;
     overflow: hidden;
     .nav_left{
       float: left;
       margin-left: 20px;
       height: 64px;
      //  background: blue;
        display: flex;
        justify-content:center;
        align-items:Center;
       .nav_f_img{
         display: inline-block;
         width: 48px;
         height: 48px;
         margin-right: 16px;
         background: red;
         background: url("../../../static/img/logo.png") center center no-repeat;
         background-size: 100% 100%;
       }
       .nav_f_font{
          height: 100%;
         font-size: 20px;
         color: #fff;
       }
     }
     .nav_right{
       float: right;
     }
  }
  .avatar-container {
    height: 64px;
    display: inline-block;
    position: absolute;
    right: 35px;
    .avatar-wrapper {
      height: 64px;
      cursor: pointer;
      position: relative;
      display: flex;
      justify-content:center;
      align-items:Center;
      .user-avatar {
        width: 40px;
        height: 40px;
        border-radius: 10px;
      }
      .user_name{
        font-size: 14px;
        color: #fff;
        margin-left: 16px;
        margin-right: 16px;
      }
      .el-icon-caret-bottom {
        position: absolute;
        right: -20px;
        top: 25px;
        font-size: 12px;
      }
    }
  }
}
</style>
