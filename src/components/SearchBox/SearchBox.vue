<template>
    <div class="search-box">
        <div class="search-ipt">
            <i class="iconfont icon-search"></i>
            <input type="text" v-model="keyword" placeholder="输入关键字搜索...">
        </div>
        <div class="search-click">
            <input type="button" value="搜索" @click="doSearch">
        </div>
    </div>
</template>

<script>
export default {
    props: {
        keyword: {
            type: Number | String
        }
    },
    methods: {
        doSearch() {
            this.$router.push({
                name: "Search",
                params: {
                    keyword: this.keyword
                }
            });
        }
    }
};
</script>

<style lang="scss" scoped>
.search-box {
    background-color: rgb(241, 241, 241);
    padding: r(20);
    display: flex;
    justify-content: space-between;
    .search-ipt {
        width: r(290);
        height: r(30);
        line-height: r(30);
        border: 1px solid #ebebeb;
        background-color: #ffffff;
        i {
            width: r(30);
            margin-right: r(5);
            margin-left: r(5);
        }
    }
    .search-click {
        flex: auto;
        input {
            float: right;
            width: 80%;
            height: 100%;
            background-color: #ffffff;
            border: 1px solid #ebebeb;
        }
    }
}
</style>
