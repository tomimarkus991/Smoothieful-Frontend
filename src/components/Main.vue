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
      await axios.delete(`http://www.leheke.ninja/api/smoothies/${id}`);
    }
  },
  async created() {
    let res = await axios.get("http://www.leheke.ninja/api/smoothies");
    this.smoothies = res.data;
  }
};
</script>

<style scoped></style>
