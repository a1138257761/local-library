<template>
    <div id="app">
        <router-view class="view"></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {
            file: require('./assets/welcome.png'),
        }
    },
    // mounted() {
    //     var formData = new FormData()
    //     formData.append('files', this.file);
    //     console.log(formData.getAll('files'))
    //     this.$http.put('http://47.103.31.228:8090/userMissions/55?access_token=37660432-f0da-4144-acbe-4e3e1fb60b88',
    //         formData
    //     )
    // },
}
</script>

<style lang="scss" scoped>
#app {
    margin: 0;
    height: 100%;
    font-size: $fz-14;
    color: $font-normal-color;
    overflow: hidden;
    background-color: rgb(244, 244, 244);
    .view {
        height: 100%;
        overflow-y: auto;
    }
}
.ml5 {margin-left: r(5)}
.mr5 {margin-right: r(5)}
.mt5 {margin-top: r(5)}
.mt10 {margin-top: r(10)}
.mb5 {margin-bottom: r(5)}
</style>
