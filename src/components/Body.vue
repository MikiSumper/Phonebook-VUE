<template>
  <div id="body">
    <span class="phonebook-message">Phonebook</span>
    <all-items v-bind:adr="adr"></all-items>
  </div>
</template>

<script>
import AllItems from "./AllItems"
export default {
  name: "Body",
  components: {
    "all-items": AllItems
  },
  props: ["adr"]
 
};
</script>

<style>
.phonebook-message {
    margin: 0 auto;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-content: flex-start;
    font-size: xx-large;
    color: white;
}
.adress-item {
    padding: 20px 4px;
    margin: 0 12px;
    cursor: pointer;
    border-top: 1px solid #e8e8e8;
    display: flex;
    align-items: center;
    justify-content: center;
}
body {
    background-color: #ecf2aa;
    height: 100vh;
    margin: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    display: flex;
    flex-direction: column;
    }

#footer {
    margin-top: auto;
    margin-bottom: 50px;
}
</style>
