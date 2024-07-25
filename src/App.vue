<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import VoiceButton from './eb-h5-ui/voice-button/index.vue';
import Navbar from "./eb-h5-ui/navbar/index.vue"
import ViewMore from "./eb-h5-ui/view-more/index.vue"
import Search from "./eb-h5-ui/search/index.vue"
const clickCallback = (data)=>{
    alert(1);
}
const getFormDataFn = ()=>{}
</script>

<template>
<router-view />
<!-- <ViewMore />
<Navbar title="ceshsadada" @clickCallback="clickCallback" />
<Search />
 <voice-button @getFormDataFn="getFormDataFn" ></voice-button> -->
 <!-- <zsl-button></zsl-button> -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
