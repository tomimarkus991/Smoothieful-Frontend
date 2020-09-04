<template>
  <div>
    <SmoothieItem :smoothies="smoothies" />
  </div>
</template>

<script>
import SmoothieItem from "./SmoothieItem";
import axios from "axios";
axios.defaults.headers.get["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";
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
    async getSmoothies() {
      const response = await axios.get("/api/smoothies");
      const data = await response.json();
      console.log(data);
    }
  },
  async created() {
    const res = await axios.get(
      "https://murmuring-tundra-54140.herokuapp.com/api/smoothies"
    );
    let data = await res.data;
    this.smoothies = data;
    console.log(this.smoothies);
  }
};
</script>

<style scoped></style>
