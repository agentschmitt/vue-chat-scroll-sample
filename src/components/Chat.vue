<template>
  <div class="chat">
    <button @click="onAdd">ADD</button>    
    <button @click="onNew(10)">NEW-10</button>
    <button @click="onNew(20)">NEW-20</button>
    <div class="content" v-scroll="messages">
      <div v-for="(m, ix) in messages" :key="ix">
        {{ m }}
      </div>
      <div class="goto" @click="onGoto()"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Chat extends Vue {
  private messages: string[] = [];

  private created(): void {
    for(var i = 0; i < 10; i++) {
      this.messages.push("test" + i);
    }
  }

  private onAdd(): void {
    let i: number = this.messages.length;
    this.messages.push("test" + i);
  }

  private onNew(count: number): void {
    this.messages = [];
    for(var i = 0; i < count; i++) {
      this.messages.push("test" + i);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.chat {
  float: left;
  position: relative;
}

.content {
  margin-top: 5px;
  border: 3px solid black;
  height: 200px;
  width: 300px;
  overflow-y: scroll;

  .goto {
    position: absolute;
    bottom: 10px;
    right: 25px;
    width: 30px;
    height: 30px;
    visibility: hidden;
  }

  &.bottom {
    border: 3px solid lightgreen;
  }

  &.scrolled {
    border: 3px solid yellow;

    .goto {
      background-color: yellow;
      visibility: visible;
    }    
  }

  &.unseen {
    border: 3px solid red;

    .goto {
      background-color: red;
      visibility: visible;
    }    
  }  
}

</style>
