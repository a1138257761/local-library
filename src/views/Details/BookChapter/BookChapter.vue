<template>
    <div class="book-chapter">
        <ZSHeader :showBack="false">
            <span slot="leftIcon">
                <i class="fa fa-angle-left easy-click" aria-hidden="true"></i>
            </span>
            章节列表
        </ZSHeader>

        <div class="chap" v-if="chapters">
            <div class="chap-head">
                <span>目录</span>
                <span>共{{chapters.length}}章</span>
            </div>
            <div
                class="chap-list"
                v-for="(item, index) of chapters"
                :key="item._id"
                @click="getLink(item.link)"
            >
                <span>{{index + 1}}</span>
                <span>{{item.title}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import ZSHeader from "../../../components/ZSHeader";
import { imgFormat } from "../../../utils/tools";
export default {
    components: {
        ZSHeader
    },
    data() {
        return {
            currentId: undefined,
            chapters: undefined
        };
    },
    methods: {
        async getLink() {
            const { data } = await this.$http.post("/book-sources", {
                params: {
                    view: "summary",
                    book: this.currentId
                }
            });
            this.link = data[0].link;
        }
    },
    async created() {
        const { id } = this.$route.params;
        this.currentId = id;
        try {
            const { data } = await this.$http.get(
                "/book-chapters/56f8da09176d03ac1983f6cd"
            );
            this.chapters = data.chapters;
        } catch (err) {
            reject(err);
        }
    }
};
</script>

<style lang="scss" scoped>
.chap {
    display: flex;
    flex-direction: column;
    .chap-head {
        height: r(47);
        line-height: r(47);
        padding: 0 r(20);
        border-bottom: 1px solid #ebebeb;
        span:first-child {
            font-weight: bold;
            margin-right: r(5);
        }
        span:last-child {
            font-size: $fz-12;
            color: #999;
        }
    }
    .chap-list {
        height: r(50);
        line-height: r(50);
        margin-left: r(20);
        border-bottom: 1px solid lightgray;
        span {
            margin-right: r(15);
            font-size: $fz-12;
            color: #999;
        }
    }
}
</style>
