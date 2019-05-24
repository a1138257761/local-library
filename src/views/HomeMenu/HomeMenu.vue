<template>
    <div class="home-menu">
        <router-link
            class="menu-area"
            tag="li"
            :to="{name:item.name}"
            v-for="(item,index) in menu"
            :key="index"
        >
            <span class="menu-icon">我是icon</span>
            <span class="menu-text">{{item.name}}</span>
        </router-link>
    </div>
</template>

<script>
export default {
    name: "HomeMenu",

    data() {
        return {
            menu: [
                {
                    name: "BookShelf"
                },
                {
                    name: "Selected"
                },
                {
                    name: "ShortArticle"
                },
                {
                    name: "StackRoom"
                },
                {
                    name: "Person"
                }
            ]
        };
    }
};
</script>

<style scoped lang="scss">
.home-menu {
    display: flex;
    border-top: 1px solid lightgray;
    justify-content: space-between;
    .menu-area {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .menu-icon {
        }
        .menu-text {
        }
        &.router-link-active {
            color: $main-color;
        }
    }
}
</style>
