<template>
    <div>
        <item
        v-for="(item) in adr.items"
        v-bind:key="item.id"
        v-bind:item="item"
        v-on:item-delete="onDelete(item)"
        ></item>
    </div>
</template>

<script>
import Item from "./Item"
export default {
    name: "AllItems",
    props:["adr"],
    components: {
        item: Item
    },
    methods: {
        onDelete: function(item) {
            this.adr.delete(item)
        }
    }
}
</script>

<style>
    margin: 0 auto;
</style>