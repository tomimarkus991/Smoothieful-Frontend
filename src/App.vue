<template>
  <div>
    <div>
      <Navbar />
    </div>
    <div class="app">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
  name: "App",
  components: {
    Navbar
  }
};
</script>
<style>
:root {
  --primary: #18191a;
  --textWhite: #e4e6eb;
  --secondary: #242526;
}

body {
  background-color: var(--primary);
  color: var(--textWhite);
  font-family: "Kumbh Sans", sans-serif;
  margin: 0;
  padding: 0;
}
.app {
  max-width: 960px;
  text-align: center;
  margin: 0px auto;
}
</style>
