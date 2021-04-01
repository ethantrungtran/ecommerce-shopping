<template>
  <div class="categories">
    <el-row>
      <el-tree
        :data="data"
        :props="defaultProps"
        @node-click="handleNodeClick"
      ></el-tree>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          label: "pant",
          children: [
            {
              label: "male pant",
              children: [
                {
                  label: "jean",
                  value: "jean",
                },
                {
                  label: "short",
                  value: "short",
                },
              ],
            },
            {
              label: "female pant",
              children: [
                {
                  label: "dress",
                  value: "dress",
                },
                {
                  label: "tay",
                  value: "tay",
                },
              ],
            },
          ],
        },
        {
          label: "shirt",
          children: [
            {
              label: "male shirt",
              children: [
                {
                  label: "shirt",
                  value: "shirt",
                },
                {
                  label: "vest",
                  value: "vest",
                },
              ],
            },
            {
              label: "female shirt",
              children: [
                {
                  label: "bikini",
                  value: "bikini",
                },
                {
                  label: "coat",
                  value: "coat",
                },
              ],
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
    };
  },
  methods: {
    handleNodeClick(data) {
      if (!data.children) {
        console.log("data", data.value);
        this.$emit("choseCategory", data.value);
      }
    },
  },
};
</script>

<style>
.categories {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
}
</style>
