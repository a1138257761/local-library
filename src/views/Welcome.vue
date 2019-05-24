<template>
  <el-row
    align="middle"
    class="hpct100"
    type="flex"
  >
    <el-col
      :span="13"
      class="tr"
    >
      <img
        alt="欢迎"
        class="welcome"
        src="../assets/welcome.png"
      >
    </el-col>
    <el-col :span="11">
      <div class="pl30">
        <p class="hello">Hello</p>
        <div class="tip f16 mt20">
          <p class="m0">欢迎您来到追书神器～</p>
          <p class="mt20">点击下方按钮开启您的向日葵之旅😊</p>
        </div>
      </div>
    </el-col>
    <div class="enter-home">
      <input type="button" value="进入主页" class="ipt" @click="goHome" />
    </div>
  </el-row>
</template>

<script>
export default {
  name: 'page-welcome',
  methods: {
    goHome() {
      this.$router.push('/home')
    }
  },
};
</script>

<style lang="scss" scoped>
.welcome {
  width: 100%;
}
.hello {
  font-size: r(66);
  margin: 0;
}
.tip {
}
.enter-home {
  width: 90%;
  position: fixed;
  margin: 0 r(10);
  bottom: r(30);
  .ipt {
    width: 100%;
    height: r(40);
    border-radius: r(6);
    border: none;
    outline: none;
    background-color: $deep-orange;
    color: #fff;
  }
}
</style>
