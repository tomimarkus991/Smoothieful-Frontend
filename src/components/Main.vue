<template>
  <div>
    <SmoothieItem :smoothies="smoothies" :deleteSmoothie="deleteSmoothie" />
  </div>
</template>

<script>
import SmoothieItem from "./SmoothieItem";
import axios from "axios";

export default {
  name: "Main",
  components: {
    SmoothieItem
  },
  data() {
    return {
      smoothies: []
    };
  },
  methods: {
    async deleteSmoothie(id) {
      this.smoothies = this.smoothies.filter(smoothie => smoothie._id !== id);
      await axios.delete(
        `https://murmuring-tundra-54140.herokuapp.com/api/smoothies/${id}`
      );
    }
  },
  async beforeCreate() {
    let res = await axios.get(
      "https://murmuring-tundra-54140.herokuapp.com/api/smoothies"
    );
    this.smoothies = res.data;
  }
};
</script>

<style scoped></style>
