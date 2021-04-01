<template>
    <div class="header">
        <el-row :gutter="20">
            <el-col :span="4" :offset="0">
                <div class="logo">
                    <img
                        class="logo-img"
                        src="../../assets/image/logo.png"
                        alt="logo"
                    />
                </div>
            </el-col>
            <el-col :span="2" :offset="0">
                <div class="text-color">Sell on Shopka</div>
            </el-col>
            <el-col :span="2" :offset="0">
                <div class="text-color">Register</div>
            </el-col>
            <el-col :span="8" :offset="0">
                <div class="search">
                    <el-input
                        placeholder="search"
                        prefix-icon="el-icon-search"
                        v-model="search"
                    >
                    </el-input>
                </div>
            </el-col>
            <el-col :span="4" :offset="0">
                <div class="consumer">Consumer Electronics</div>
            </el-col>
            <el-col :span="2" :offset="0">
                <el-button>Sign in</el-button>
            </el-col>
            <el-col :span="2" :offset="0">
                <el-button>My account</el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import _ from "lodash";
export default {
    data() {
        return {
            search: "",
        };
    },
    watch: {
        search() {
            // console.log("search", this.search);
            this.callDebounce();
        },
    },
    methods: {
        callDebounce: _.debounce(function () {
            this.debounceA();
        }, 500),
        debounceA() {
            this.getData();
        },
        // debounce() {
        //     _.debounce(() => {
        //         this.getData();
        //     }, 500)();
        // },
        getData() {
            console.log("search", this.search);
            this.$emit("getDataSearch", this.search);
        },
    },
};
</script>

<style lang="scss">
.header {
    .el-col {
        height: 50px;
        display: flex;
        align-items: center;
        // justify-content: center;
    }
    .logo {
        margin-left: 20px;
        .logo-img {
            object-fit: contain;
            vertical-align: top;
            max-width: 150px;
        }
    }
    .text-color {
        color: #5a5b6a;
    }
    .search {
        width: 100%;
        .el-input__inner {
            border-radius: 99px;
            background-color: #ededf0;
        }
    }
    .consumer {
        color: #2264d1;
    }
    .el-button {
        width: 120px;
    }
}
</style>