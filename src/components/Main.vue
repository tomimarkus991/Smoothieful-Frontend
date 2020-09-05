<template>
  <div>
    <AddSmoothie @add="addSmoothie" />
    <SmoothieItem :smoothies="smoothies" :deleteSmoothie="deleteSmoothie" />
  </div>
</template>

<script>
import SmoothieItem from "./SmoothieItem";
import AddSmoothie from "./AddSmoothie";
import axios from "axios";
// axios.defaults.headers.get["Content-Type"] = "application/json;charset=utf-8";
// axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";
export default {
  name: "Main",
  components: {
    SmoothieItem,
    AddSmoothie
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
    },
    async addSmoothie(payload) {
      let params = {
        name: payload.smoothieName,
        ingredients: []
      };
      let newSmoothie = await axios.post(
        "http://www.leheke.ninja/api/smoothies",
        params
      );
      this.smoothies.push(newSmoothie.data);
    }
  },
  async created() {
    let res = await axios.get("http://www.leheke.ninja/api/smoothies");
    this.smoothies = res.data;
  }
};
</script>

<style scoped></style>
