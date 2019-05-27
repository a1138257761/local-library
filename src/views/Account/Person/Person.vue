<template>
    <div class="person-infor">
        <ZSHeader :showBack="false">
            <span slot="leftIcon">
                <i class="fa fa-angle-left easy-click" aria-hidden="true"></i>
            </span>
            个人中心
        </ZSHeader>
        <div class="change-color">
            <div class="account">
                <img src="../../../../public/img/avatar.png">
                <div class="my-detail">
                    <p class="name">Kellen</p>
                </div>
            </div>
        </div>
        <div class="contain">
            <div class="masking">
                <img src="../../../../public/img/myshelf.png">
                <p>我的书架</p>
                <i class="iconfont icon-cc-right"></i>
            </div>
            <div class="masking">
                <img src="../../../../public/img/historyrecord.png">
                <p>历史记录</p>
                <i class="iconfont icon-cc-right"></i>
            </div>
            <div class="masking mt5">
                <img src="../../../../public/img/vipmember.png">
                <p>开通vip</p>
                <input type="button" value="开通" class="open-vip">
            </div>
            <div class="masking mt5">
                <img src="../../../../public/img/daycheck.png">
                <p>每日签到</p>
                <i class="iconfont icon-cc-right"></i>
            </div>
            <div class="masking mt5">
                <img src="../../../../public/img/autobuy.png">
                <p>自动购买</p>
                <mt-switch></mt-switch>
            </div>
            <div class="masking mt5">
                <img src="../../../../public/img/chargerecord.png">
                <p>充值记录</p>
                <i class="iconfont icon-cc-right"></i>
            </div>
            <div class="masking">
                <img src="../../../../public/img/purchasehistory.png">
                <p>消费记录</p>
                <i class="iconfont icon-cc-right"></i>
            </div>
            <div class="masking mt5">
                <img src="../../../../public/img/useragreement.png">
                <p>用户协议</p>
                <i class="iconfont icon-cc-right"></i>
            </div>
            <div class="masking">
                <img src="../../../../public/img/userprivacy.png">
                <p>用户隐私保护政策</p>
                <i class="iconfont icon-cc-right"></i>
            </div>
            <div class="masking">
                <img src="../../../../public/img/tortcomplaint.png">
                <p>侵权申诉指引</p>
                <i class="iconfont icon-cc-right"></i>
            </div>
        </div>
        <!-- 退出登录的按钮 -->
        <div class="log-out">
          <input type="button" value="退出登录">
        </div>
    </div>
</template>

<script>
import ZSHeader from "../../../components/ZSHeader/ZSHeader.vue";
export default {
    components: {
        ZSHeader
    }
};
</script>

<style lang="scss" scoped>
.log-out {
  width: 80%;
  margin: r(20) auto;
  input {
    width: 100%;
    height: r(40);
    font-size: $fz-16;
    background-color: rgb(185, 51, 33);
    color: $main-color-inverse;
    border-radius: r(5);
  }
}
.masking {
    display: flex;
    height: r(44);
    background-color: $main-color-inverse;
    line-height: r(44);
    padding: 0 r(10);
    justify-content: space-between;
    img {
        width: r(30);
        height: r(30);
        margin-top: r(5);
    }
    p {
        margin-left: r(5);
        flex: auto;
    }
}
.change-color {
    width: 100%;
    height: r(100);
    background: linear-gradient(left, white, rgb(248, 238, 228));
    position: relative;
    .account {
        position: absolute;
        display: flex;
        width: 100%;
        height: r(80);
        top: r(20);
        padding: 0 r(20);
        img {
            width: r(50);
            height: r(50);
            border-radius: 50%;
            display: block;
          .my-detail {
              margin-left: r(10);
              margin-top: r(10);
              flex: auto;
          }
        }
    }
}
.open-vip {
  width: r(54);
  height: r(23);
  border-radius: r(15);
  background-color: $main-color-inverse;
  border: 1px solid rgb(185, 51, 33);
  font-size: $fz-12;
  color: rgb(185, 51, 33);
  margin-top: r(10);
}
.mt5 {
    margin-top: r(5);
}
</style>
