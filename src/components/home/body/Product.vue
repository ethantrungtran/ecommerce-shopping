<template>
    <el-card class="product-card" :body-style="{ padding: '0px' }">
        <img :src="image" class="image" />
        <div style="padding: 14px">
            <span>{{ nameProduct }}</span>
            <div class="bottom clearfix">
                <div class="price">{{ price }}</div>
                <div class="description">
                    {{ description }}
                </div>
                <el-row :gutter="20">
                    <el-col :span="18" :offset="0">
                        <el-rate
                            v-model="rate"
                            disabled
                            show-score
                            text-color="#ff9900"
                            score-template="{value}"
                        >
                        </el-rate>
                    </el-col>
                    <el-col :span="6" :offset="0">
                        <el-button type="text" class="button"> Xem </el-button>
                    </el-col>
                </el-row>
            </div>
        </div>
    </el-card>
</template>

<script>
export default {
    data() {
        return {
            value: 0,
        };
    },
    props: {
        product: {
            type: Object,
            default: () => {},
        },
    },
    mounted() {
        this.value = this.product?.rate || 0;
    },
    computed: {
        nameProduct() {
            return this.product?.name || "";
        },
        image() {
            return this.product?.image || "";
        },
        price() {
            const price = this.product?.price || 0;
            return `$ ${price}`;
        },
        description() {
            return this.product?.description || "";
        },
        rate() {
            return this.product?.rate || 0;
        },
    },
};
</script>

<style lang="scss">
.el-card {
    margin-bottom: 16px;
    cursor: pointer;
    .el-card__body {
        .description {
            font-size: 15px;
            color: #999;
            text-align: initial;
            overflow: hidden;
            text-overflow: ellipsis;
            margin-bottom: 10px;
        }
        .price {
            font-weight: bold;
            font-size: 19px;
            line-height: 150%;
            text-align: initial;
            margin-bottom: 10px;
        }
        .el-rate {
            text-align: initial;
        }

        .bottom {
            margin-top: 13px;
            line-height: 12px;
        }

        .button {
            padding: 0;
            float: right;
        }

        .image {
            width: 100%;
            display: block;
        }

        .clearfix:before,
        .clearfix:after {
            display: table;
            content: "";
        }

        .clearfix:after {
            clear: both;
        }
    }
}
</style>
