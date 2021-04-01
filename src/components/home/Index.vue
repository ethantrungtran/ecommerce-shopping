<template>
    <div class="home-component">
        <Header @getDataSearch="getDataSearch" />
        <Body :search="search" />
        <Footer />
    </div>
</template>

<script>
import Header from "./HeaderHome";
import Footer from "./Footer";
import Body from "./body/Index";
export default {
    data() {
        return {
            search: "",
        };
    },
    components: { Header, Footer, Body },
    methods: {
        getDataSearch(value) {
            console.log("test1", value);
            this.search = value;
            return value;
        },
    },
};
</script>

<style></style>
