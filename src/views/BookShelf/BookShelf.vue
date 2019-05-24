<template>
    <div class="book-shelf">
        <!-- 固定在头部的搜索框 -->
        <div class="search-box-fixed">
            <div class="content">
                <i class="iconfont icon-search"></i>
                <input
                    type="text"
                    class="input-search"
                    placeholder="搜索书架、书城、书友的私人书库"
                    v-model="searchText"
                    @keydown.13="searchBook"
                >
            </div>
        </div>

        <div class="occupy"></div>

        <div class="shelf-content">
            <ul class="nav-menu">
                <li
                    v-for="(item, index) of navMenu"
                    :key="item.name"
                    class="nav-item"
                    @click="addActive(index)"
                >
                    <a>{{ item.name }}</a>
                </li>
            </ul>

            <mt-swipe :auto="3000" class="banner-swiper">
                <mt-swipe-item v-for="(item, index) of swiperItems" :key="index">
                    <img :src="item.src">
                </mt-swipe-item>
            </mt-swipe>

            <div class="free-notice">
                <span class="free">全场免费</span>
                <span>还剩{{ hours }}小时{{ minutes }}分{{ seconds }}秒</span>
            </div>

            <div class="popularity">
                <div class="p-label">
                    <span>人气排行</span>
                </div>
                <div class="p-content">
                    <div
                        class="p-books"
                        v-for="item of epub"
                        :key="item._id"
                        @click="showDetail(item._id)"
                    >
                        <img src="../../../public/img/cover1.png">
                        <span>分类 {{ item.shortTitle }}</span>
                    </div>
                </div>
            </div>

            <!-- 热血爽文 -->
            <div class="blood-books" v-if="warmBloodBooks">
                <div class="p-label">
                    <span>热血文章</span>
                </div>
                <div class="b-content" v-for="item of warmBloodBooks" :key="item._id">
                    <div class="b-image">
                        <img :src="item.cover | imgFormat">
                    </div>
                    <div class="b-detail">
                        <div class="title">{{item.title}}</div>
                        <div class="short-info">{{item.lastChapter}}</div>
                        <div class="category">
                            <span class="major">{{item.majorCate}}</span>
                            <span class="minor">{{item.minorCate}}</span>
                            <div class="read-book">
                                <input type="button" value="阅读" @click="onBookClick(item._id)">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="search-box">
            <div class="search-ipt">
                <i class="iconfont icon-search"></i>
                <input type="text" v-model="keyword" placeholder="输入关键字搜索...">
            </div>
            <div class="search-click">
                <input type="button" value="搜索" @click="doSearch">
            </div>
        </div>
    </div>
</template>

<script>
import SearchBox from "../../components/SearchBox/SearchBox.vue";
export default {
    name: "BookShelf",
    components: {
        SearchBox
    },
    computed: {
        kword(val) {
            return val;
        }
    },
    data() {
        return {
            searchText: undefined,
            navMenu: [
                { name: "男频" },
                { name: "女频" },
                { name: "出版" },
                { name: "免费" },
                { name: "VIP" },
                { name: "独家" }
            ],
            swiperItems: [
                { src: require("../../../public/img/banner4.jpg") },
                { src: require("../../../public/img/banner1.jpg") },
                { src: require("../../../public/img/banner2.jpg") },
                { src: require("../../../public/img/banner3.jpg") }
            ],
            epub: undefined, // 热门书籍排行
            warmBloodBooks: undefined, // 热血爽文合集
            hours: 1,
            minutes: 0,
            seconds: 5,
            keyword: undefined,
        };
    },
    methods: {
        fillZero(v) {
            if (!v) return;
            return v < 10 ? `0${v}` : v;
        },
        async searchBook() {
            const data = await this.$http.get(
                `search?keyword=${this.searchText}`
            );
        },
        addActive(e) {
            const lis = document.getElementsByClassName("nav-item");
            lis[e].className += " nav-item-active";
        },
        showDetail(id) {
            const data = this.$http.get(`/recommend/${id}`);
        },
        onBookClick(id) {
            this.$router.push({ path: `/Details/BookInformation/${id}` });
        },
        doSearch() {
            this.$router.push({
                name: "Search",
                params: {
                    keyword: this.keyword
                }
            });
        }
    },
    async created() {
        const { data } = await this.$http.get("rank-category");
        this.epub = data.epub;
        const bloodBooks = await this.$http.get("/category-info", {
            params: {
                gender: "male",
                type: "hot",
                major: "奇幻",
                start: 0,
                limit: 20
            }
        });
        this.warmBloodBooks = bloodBooks.data.books;
        let time = this.hours * 3600 + this.minutes * 60 + this.seconds;
        // 倒计时js
        let timer = setInterval(() => {
            if (time !== 0) {
                time--;
            }
            this.hours = parseInt(time / 3600, 10);
            this.minutes = parseInt((time - this.hours * 3600) / 60);
            this.seconds = parseInt(time % 60);
        }, 1000);
        const search_box = document.getElementsByClassName(
            "search-box-fixed"
        )[0];
        search_box.style.height = 44 + "px";
    }
};
</script>

<style lang="scss" scoped>
.book-shelf {
    display: flex;
    flex-direction: column;
    flex: auto;
    background-color: rgb(241, 239, 239);
}
.ocuupy {
    width: r(10);
    height: 44px;
}
.search-box-fixed {
    width: 100%;
    height: r(44);
    background-color: rgb(81, 155, 254);
    text-align: center;
    z-index: 1002;
    .content {
        width: 95%;
        height: r(30);
        margin: 0 auto;
        border-radius: r(6);
        background-color: #fff;
        display: flex;
        margin-top: r(7);
        line-height: r(30);
        input {
            flex: auto;
            border-radius: r(6);
        }
    }
}

.nav-item-active {
    color: #fff !important;
}
.shelf-content {
    flex: auto;
    .nav-menu {
        height: r(41);
        background-color: rgb(81, 155, 254);
        display: flex;
        .nav-item {
            a {
                color: #a3cdff;
                font-size: $fz-16;
                font-weight: bold;
            }
            a:hover {
                color: #fff;
                :after {
                    width: 50%;
                    height: r(3);
                    position: absolute;
                    left: 50%;
                    bottom: 50%;
                    margin-left: -25%;
                    z-index: 4;
                    background-color: #fff;
                    border-radius: r(5);
                }
            }
            flex: auto;
            text-align: center;
            line-height: r(30);
        }
    }
}
.banner-swiper {
    height: r(150);
    background-color: lightcyan;
    img {
        width: 100%;
        height: 100%;
    }
}
.free-notice {
    height: r(50);
    line-height: r(50);
    text-align: center;
    color: rgb(130, 107, 89);
    .free {
        background-color: rgb(129, 103, 82);
        width: r(60);
        height: r(20);
        border-radius: r(6);
        padding: r(2);
        color: #fff;
        font-size: $fz-12;
        font-weight: bold;
        margin-right: r(5);
    }
}
.popularity {
    height: r(200);
    background-color: #fff;
    margin-bottom: r(10);
    .p-label {
        height: r(60);
        line-height: r(60);
        span {
            background: lightblue;
            border-radius: r(10);
            width: r(100);
            padding-left: r(20);
            margin-left: -#{r(10)};
            padding-right: r(20);
            color: #fff;
            font-weight: bold;
        }
    }
    .p-content {
        display: flex;
        overflow-x: auto;
        overflow-y: hidden;
        height: r(150);
        .p-books {
            height: 100%;
            flex: none;
            width: 34%;
            padding-left: r(10);
            img {
                width: 70%;
                display: block;
            }
        }
    }
}

.blood-books {
    background-color: #fff;
    margin-bottom: r(10);
    .p-label {
        height: r(60);
        line-height: r(60);
        span {
            background: lightblue;
            border-radius: r(10);
            width: r(100);
            padding-left: r(20);
            margin-left: -#{r(10)};
            padding-right: r(20);
            color: #fff;
            font-weight: bold;
        }
    }
    .b-content {
        display: flex;
        padding: r(15);
        border-bottom: 1px solid $font-light-color;
        .b-image {
            width: r(80);
            height: r(120);
            img {
                width: r(80);
                height: r(120);
            }
        }
        .b-detail {
            padding: r(10);
            flex: auto;
            .title {
                font-size: $fz-16;
                margin-bottom: r(22);
            }
            .short-info {
                color: #888;
                margin-bottom: r(22);
            }
            .category {
                display: flex;
                span {
                    display: inline-block;
                }
                .major {
                    border: 1px solid #90c3ee;
                    color: #90c3ee;
                    font-size: $fz-12;
                    padding: r(5);
                    border-radius: r(5);
                }
                .minor {
                    margin-left: r(10);
                    border: 1px solid #fcc29c;
                    color: #fcc29c;
                    font-size: $fz-12;
                    padding: r(5);
                    border-radius: r(5);
                }
                .read-book {
                    flex: auto;
                    text-align: right;
                    input {
                        width: r(52);
                        height: r(30);
                        background-color: #fff;
                        border: 1px solid #4f9efd;
                        color: #4f9efd;
                        border-radius: r(10);
                        margin-top: -10px;
                    }
                }
            }
        }
    }
}
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


