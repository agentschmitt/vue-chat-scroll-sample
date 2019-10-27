<template>
  <div id="app">
    <chat></chat>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Chat from "@/components/Chat.vue";

@Component({
  components: {
    Chat
  }
})
export default class App extends Vue {}
</script>

