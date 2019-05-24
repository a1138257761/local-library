<template>
    <div class="search-page">
        <ZSHeader :showBack="false">
            <span slot="leftIcon">
                <!-- <i class="fa fa-angle-left easy-click" aria-hidden="true"></i> -->
                <i class="iconfont icon-fanhui" @click="goback"></i>
            </span>
            与“{{title}}”相关的书籍
        </ZSHeader>

        <SearchResult :keywords="title"></SearchResult>
    </div>
</template>

<script>
import ZSHeader from "../components/ZSHeader/ZSHeader.vue";
import SearchResult from "../components/SearchResult/SearchResult.vue";
export default {
    data() {
        return {
            title: undefined
        };
    },
    components: {
        ZSHeader,
        SearchResult
    },
    methods: {
        goback() {
            this.$router.go(-1);
        }
    },
    async created() {
        const { keyword } = this.$route.params;
        this.title = keyword;
    }
};
</script>

