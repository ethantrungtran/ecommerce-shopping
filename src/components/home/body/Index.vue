<template>
    <div class="body">
        <el-container>
            <TopNav />
            <el-row :gutter="20">
                <el-col :span="6" :offset="0">
                    <div class="filter-category">Department</div>
                </el-col>
                <el-col :span="18" :offset="0" class="text-left">
                    <Sort @handleSort="handleSort" />
                </el-col>
            </el-row>

            <el-row :gutter="20" class="body__content">
                <el-col :span="6" :offset="0">
                    <Categories @choseCategory="handleClickCategory" />
                </el-col>
                <el-col :span="18" :offset="0">
                    <el-row :gutter="10">
                        <template v-for="(product, index) in listProduct">
                            <el-col :span="6" :offset="0" :key="index">
                                <Product :product="product" />
                            </el-col>
                        </template>
                    </el-row>
                </el-col>
            </el-row>
        </el-container>
    </div>
</template>

<script>
import TopNav from "./TopNav";
import Categories from "./Categories";
import Product from "./Product";
import Sort from "./Sort";
import axios from "axios";
export default {
    data() {
        return {
            products: [],
            categoryFilter: null,
            sortBy: null,
            sortValue: null,
        };
    },
    props: {
        search: {
            type: String,
            default: () => "",
        },
    },
    components: { TopNav, Categories, Product, Sort },
    created() {
        this.getProduct();
    },
    computed: {
        listProduct() {
            let result = this.products.filter((product) => {
                let cateFilter = true;
                let searchFilter = true;
                cateFilter = this.filterProductsByCategory(product);

                searchFilter = this.filterProductsBySearch(product);

                return cateFilter && searchFilter;
            });

            result = this.filterProductsBySort(result);

            return result;
        },
    },
    methods: {
        async getProduct() {
            const res = await axios.get(
                "http://localhost:8080/database/products.json"
            );
            console.log("res ", res.data.products);
            this.parseRes(res.data.products);
        },
        parseRes(products) {
            this.products = products;
        },
        handleClickCategory(category) {
            this.categoryFilter = category;
            console.log("category", category);
        },
        handleSort(value) {
            console.log("sort ", value);
            let arr = value.split(" ");
            this.sortBy = arr?.[0];
            this.sortValue = arr?.[1];
            console.log("sort ", arr);
        },
        filterProductsByCategory(product) {
            return this.categoryFilter
                ? product.category === this.categoryFilter
                    ? true
                    : false
                : true;
        },
        filterProductsBySort(result) {
            if (this.sortBy && this.sortValue) {
                if (this.sortBy === "price") {
                    if (this.sortValue === "asc") {
                        return result.sort(
                            (product1, product2) =>
                                product1.price - product2.price
                        );
                    } else {
                        return result.sort(
                            (product1, product2) =>
                                product2.price - product1.price
                        );
                    }
                } else if (this.sortBy === "rate") {
                    if (this.sortValue === "asc") {
                        return result.sort(
                            (product1, product2) =>
                                product1.rate - product2.rate
                        );
                    } else {
                        return result.sort(
                            (product1, product2) =>
                                product2.rate - product1.rate
                        );
                    }
                }
            }
            return result;
        },
        filterProductsBySearch(product) {
            if (this.search) {
                // console.log("prop", this.search);
                return product.name
                    .toLowerCase()
                    .includes(this.search.toLowerCase());
            }
            return true;
        },
    },
    watch: {
        search() {
            console.log("watch ", this.search);
        },
    },
};
</script>

<style lang="scss">
.body {
    .el-container {
        margin: 0px 160px;
        flex-direction: column;
    }
    .body__content {
        margin: 20px 0;
    }
    .text-left {
        text-align: initial;
    }
    .el-dropdown {
        cursor: pointer;
        padding: 10px 20px;
        border: 1px solid #9dc2ff;
        box-sizing: border-box;
        border-radius: 8px;
    }
    .filter-category {
        padding: 10px 20px;
        border: 1px solid #9dc2ff;
        box-sizing: border-box;
        border-radius: 8px;
        text-align: center;
        color: #2264d1;
    }
}
</style>
