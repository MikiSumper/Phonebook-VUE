<template>
  <div id="app-container">
    <app-body v-bind:adr="address"></app-body>
    <app-footer v-on:item-add="itemAdd"></app-footer>

  </div>
</template>

<script>
  import Body from './components/Body'
  import Footer from './components/Footer'
  import Address from './model/Address'
  import AddressItem from './model/AddressItem'


  export default {
    name: 'App',
    components: {
      "app-body": Body,
      "app-footer": Footer
    },
    data: function () {
      return {
        address: new Address()
      }
    },
    methods: {
      itemAdd: function (content) {
        let item = new AddressItem(content)
        this.address.add(item)
      }
    }

  }
</script>

<style>
  body {
    background-color: #ecf2aa;
    height: 100vh;
    margin: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }

  #app-container {
    max-width: 500px;
    margin: 0 auto;
    height: 95vh;
    background-color: #849edb;
    box-shadow: 0 3px 9px rgba(0, 0, 0, 0.30),
      0 3px 9px rgba(0, 0, 0, 0.30);
    border-radius: 5px;
    transform: translate(0, -50%);
    top: 50%;
    position: relative;
    display: flex;
    flex-direction: column;
  }
</style>