<template>
    <el-select v-model="value" clearable placeholder="Select" class="sort">
        <el-option
            v-for="item in sorts"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        >
        </el-option>
    </el-select>
</template>

<script>
const sorts = [
    {
        label: "Price increase",
        value: "price asc",
    },
    {
        label: "Price decrease",
        value: "price desc",
    },
    {
        label: "Rate increase",
        value: "rate asc",
    },
    {
        label: "Rate decrease",
        value: "rate desc",
    },
];
export default {
    data() {
        return {
            sorts,
            value: null,
        };
    },
    watch: {
        value() {
            console.log("value", this.value);
            this.$emit("handleSort", this.value);
        },
    },
};
</script>

<style lang="scss">
.sort {
    .el-input__inner {
        height: 44px !important;
        border: 1px solid #b4b4bb;
        box-sizing: border-box;
        border-radius: 8px;
    }
}
</style>
