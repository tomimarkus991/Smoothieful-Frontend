<template>
  <div class="navbar">
    <nav>
      <div class="nav-content">
        <div class="home">
          <router-link class="link" to="/"><h1>Smoothieful</h1></router-link>
        </div>
        <div class="bottom-right">
          <router-link class="link add" to="/add-smoothie">+</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "Navbar"
};
</script>
<style scoped>
.navbar {
  background-color: #242526;
  padding: 10px 0;
  margin-bottom: 20px;
}
.link {
  text-decoration: none;
  color: #e4e6eb;
}
.add {
  padding: 17px 24px 17px 24px;
  border-radius: 50px;
  background-color: #2d88ff;
}
.bottom-right {
  top: -10px;
  cursor: pointer;
  position: relative;
  float: right;
  font-size: 30px;
  margin-right: 200px;
}
.home {
  margin-left: 10px;
  width: 20px;
}
</style>
