<template>
  <div class="home">
    <HomeComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeComponent from "@/components/home/Index";

export default {
  name: "Home",
  components: {
    HomeComponent,
  },
};
</script>
