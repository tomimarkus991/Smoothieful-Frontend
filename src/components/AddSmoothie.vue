<template>
  <div>
    <form @submit="e => addSmoothie(e)">
      <input type="text" v-model="smoothieName" />
      <button>Add Smoothie</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddSmoothie",
  data() {
    return {
      smoothieName: ""
    };
  },
  methods: {
    addSmoothie(e) {
      e.preventDefault();
      e.target.reset();
      this.$emit("add", { smoothieName: this.smoothieName });
    }
  }
};
</script>
