<template>
  <div>
    <UserMedia />
    <div class="btns">
      <span @click="goHome">首页</span>
      <span @click="goAbout">关于</span>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import UserMedia from './components/UserMedia.vue';

@Component({
  components: {
    UserMedia,
  },
})
export default class App extends Vue {
  mounted() {
    console.log('mounted');
  }

  goHome() {
    this.$router.replace('/picture-in-picture-demo/dist/home');
  }

  goAbout() {
    this.$router.replace('/picture-in-picture-demo/dist/about');
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.btns {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
}
span {
  background-color: pink;
  padding: 10px 10px;
  color: #fff;
  color: #fff;
  background-color: #1989fa;
  border: 1px solid #1989fa;
}
span + span {
  margin-left: 10px;
}
</style>
