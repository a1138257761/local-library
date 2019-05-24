<template>
    <div class="book-infor">
        <ZSHeader :showBack="false">
            <span slot="leftIcon">
                <i class="fa fa-angle-left easy-click" aria-hidden="true"></i>
            </span>
            {{title}}
        </ZSHeader>

        <div class="b-intr" v-if="data">
            <div class="cover">
                <img :src="data.cover | imgFormat">
            </div>
            <div class="info">
                <p class="book-name">{{data.title}}</p>
                <div class="c-red">
                    <span>{{data.author}}</span>
                    <span>{{data.minorCate}}</span>
                    <span>{{parseInt(data.wordCount/10000)}}万字</span>
                </div>
                <div class="update-time">
                    <span>{{data.updated | timeFormat}}更新</span>
                </div>
            </div>
        </div>

        <div class="read-it" v-if="data">
            <input type="button" value="加入书架" class="join-bookshelf">
            <input type="button" value="开始阅读" class="start-read" @click="startRead">
        </div>

        <div class="introduction" v-if="data">
            <p class="long-intro">{{data.longIntro}}</p>
        </div>

        <div class="hot-comment" v-if="hotComments">
            <div class="hot-comment-top">
                <h2>热门书评</h2>
                <a>更多评论</a>
            </div>
            <div class="hot-comment-list" v-for="item of hotComments" :key="item._id">
                <div class="avatar">
                    <img :src="`http://novel.juhe.im${item.author.avatar}`">
                </div>
                <div class="comment-details">
                    <p class="nickname">{{item.author.nickname}}</p>
                    <div class="stars">
                        <i class="iconfont icon-star1" v-for="i of item.rating" :key="i._id"></i>
                    </div>
                    <div class="content">
                        <p>{{item.content}}</p>
                    </div>
                    <div class="update-time">
                        <span>{{data.updated | timeFormat}}</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="search-box" v-if="data">
            <div class="search-ipt">
                <i class="iconfont icon-search"></i>
                <input type="text" v-model="searchText" placeholder="输入关键字搜索...">
            </div>
            <div class="search-click">
                <input type="button" value="搜索" @click="doSearch">
            </div>
        </div>
    </div>
</template>

<script>
import ZSHeader from "../../../components/ZSHeader/ZSHeader";
export default {
    components: {
        ZSHeader
    },
    filters: {
        timeFormat(val) {
            return val.split("T")[0];
        }
    },
    data() {
        return {
            id: undefined,
            title: "书籍详情",
            data: undefined,
            hotComments: undefined,
            searchText: undefined
        };
    },
    methods: {
        // 获取书籍评价
        async getComments(id) {
            const { data } = await this.$http.get(
                `book/short-reviews?book=${id}`
            );
            this.hotComments = data.docs.slice(0, 2);
        },
        doSearch() {
            this.$router.push({ path: `/Search/${this.searchText}` });
            // this.$router.push({
            //     name: "Search",
            //     params: {
            //         keyword: this.searchText
            //     }
            // });
        },
        startRead() {
            this.$router.push({ path: `/Details/Chapter/${this.data._id}`});
        },
    },
    // 获取书籍相关信息
    async created() {
        this.id = this.$route.params.id;
        const { data } = await this.$http.get(`/book-info/${this.id}`);
        this.data = data;
        console.log(this.data)
        this.getComments(this.data._id);
    }
};
</script>

<style lang="scss" scoped>
.book-infor {
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    flex: auto;
    overflow: auto;
}

// 书名 封面 作者等信息
.b-intr {
    display: flex;
    padding: r(20);
    .cover {
        width: r(70);
        height: r(88);
        img {
            width: 100%;
            height: 100%;
        }
    }
    .info {
        padding: r(10);
        flex: auto;
        .book-name {
            font-size: $fz-16;
            color: #222;
            margin-bottom: r(15);
        }
        .c-red {
            display: flex;
            span:first-child {
                color: #b93321;
            }
            span {
                font-size: $fz-12;
                display: inline-block;
                width: r(65);
                margin-right: r(15);
                color: #999;
            }
        }
        .update-time {
            margin-top: r(15);
            font-size: $fz-12;
            color: #999;
        }
    }
}
.read-it {
    display: flex;
    justify-content: space-between;
    padding: 0 r(20) r(20) r(20);
    input {
        width: r(150);
        height: r(44);
        border-radius: r(2);
        font-size: $fz-16;
    }
    .join-bookshelf {
        border: 1px solid #b93321;
        color: #b93321;
        background-color: #ffffff;
    }
    .start-read {
        background-color: #b93321;
        color: #ffffff;
    }
}
.introduction {
    padding: r(20);
    border-top: 1px solid #ebebeb;
    border-bottom: 1px solid #ebebeb;
    .long-intro {
        line-height: r(25);
    }
}
.hot-comment {
    display: flex;
    flex-direction: column;
    .hot-comment-top {
        height: r(40);
        justify-content: space-between;
        display: flex;
        h2,
        a {
            height: r(40);
            line-height: r(40);
            font-size: $fz-12;
            padding: 0 r(20);
        }
        h2 {
            color: #222;
        }
        a {
            color: #999;
        }
    }
    .hot-comment-list {
        padding: r(20);
        padding-left: 0;
        margin-left: r(20);
        border-bottom: 1px solid #ebebeb;
        display: flex;
        .avatar {
            height: r(35);
            img {
                width: 100%;
                height: 100%;
            }
        }
        .comment-details {
            margin-left: r(10);
            flex: auto;
            .nickname {
                font-size: $fz-12;
                color: #a58d5e;
                line-height: r(20);
            }
            .stars {
                color: rgb(241, 144, 71);
                line-height: r(20);
            }
            .content {
                line-height: r(20);
                color: #999;
                font-size: $fz-12;
            }
        }
        .update-time {
            line-height: r(20);
            color: #999;
            font-size: $fz-12;
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
