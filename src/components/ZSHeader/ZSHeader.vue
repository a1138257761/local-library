<template>
    <div class="wfm-header">
        <span class="left-icon-wrap">
            <slot name="leftIcon">
                <i class="iconfont icon-fanhui" @click="back"></i>
            </slot>
        </span>
        <span class="title">
            <slot></slot>
        </span>
        <span class="right-icon-wrap">
            <slot name="rightIcon"></slot>
        </span>
    </div>
</template>

<script>
export default {
    name: "ZSHeader",

    props: {
        /* 是否显示头部返回按钮 */
        showBack: {
            type: Boolean,
            default: true
        }
    },

    methods: {
        back() {
            this.$router.goBack();
        }
    }
};
</script>

<style scoped lang="scss">
.wfm-header {
    height: r(42);
    font-size: $fz-18;
    text-align: center;
    background: rgb(185, 51, 33);
    color: $main-color-inverse;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex: none;
    position: relative;
    .title {
        font-weight: bold;
    }
    .left-icon-wrap,
    .right-icon-wrap {
        font-size: $fz-20;
        position: absolute;
        top: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        padding: 0 r(10);
    }

    .left-icon-wrap {
        left: 0;
        justify-content: flex-start;
    }

    .right-icon-wrap {
        right: 0;
        justify-content: flex-end;
    }
}
</style>
