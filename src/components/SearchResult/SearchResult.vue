<template>
    <div class="search-result">
        <div class="list-item" v-for="item of lists" :key="item._id" @click="itemClick(item._id)">
            <div class="cover">
                <img :src="item.cover | imgFormat">
            </div>
            <div class="info">
                <p class="book-name">{{item.title}}</p>
                <div class="c-red">
                    <span>{{item.author}}</span>
                    <span>{{item.cat}}</span>
                    <span>{{parseInt(item.wordCount/10000)}}万字</span>
                </div>
                <p class="description">{{item.shortIntro}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        keywords: {
            type: String || Number
        }
    },
    data() {
        return {
            loading: false,
            lists: undefined,
            allLoaded: false
        };
    },
    methods: {
      itemClick(id) {
        this.$router.push({ path: `/Details/BookInformation/${id}`});
      },
    },
    async created() {
        try {
            const { data } = await this.$http.get(
                `/search?keyword=${this.keywords}`
            );
            this.lists = data.books;
            console.log(this.lists);
        } catch (err) {
            console.log(err);
        }
    }
};
</script>

<style lang="scss" scoped>
.search-result {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
}
.list-item {
    display: flex;
    padding: r(20);
    background-color: rgb(245, 242, 237);
    border-bottom: 1px solid lightgray;
    .cover {
        width: r(58);
        height: r(72.5);
        img {
            width: r(58);
            height: 100%;
        }
    }
    .info {
        padding: r(10);
        flex: auto;
        .book-name {
            font-size: $fz-16;
            color: #222;
            margin-bottom: r(10);
        }
        .c-red {
            display: flex;
            span:first-child {
                color: #b93321;
            }
            span {
                font-size: $fz-12;
                display: inline-block;
                width: r(50);
                margin-right: r(15);
                color: #999;
            }
        }
        .description {
          font-size: $fz-12;
          color: #999;
          width: r(270);
          height: r(30);
          line-height: r(30);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
    }
}
</style>

