<template>
  <div id="footer">
    <input  type="text"  v-model="content.name" placeholder="Input your name in here.." name="name" autocomplete="on" />

    <input type="text"  v-model="content.number" placeholder="Input your number in here.." name="number" />

    <button  v-on:click="onClick">Add</button>
  </div>

</template>

<script>
  export default {
    name: "Footer",
    data: function () {
      return {


        content: {
          name: " ",
          number: " "
        }
      }
    },



    methods: {



      onClick: function () {


        this.$emit("item-add", this.content);
      },


    }

  };
</script>

<style>

</style>