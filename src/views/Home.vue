<template>
    <div class="home">
        <router-view class="home-body"></router-view>
        <HomeMenu class="home-footer"></HomeMenu>
    </div>
</template>

<script>
import HomeMenu from "./HomeMenu/HomeMenu";
export default {
    name: "Home",
    components: { HomeMenu }
};
</script>

<style scoped lang="scss">
.home {
    display: flex;
    flex-direction: column;
    .home-body {
        flex: auto;
        overflow: auto;
        display: flex;
        flex-direction: column;
        align-items: stretch;
    }
    .home-footer {
        flex: none;
    }
}
</style>
