<template>
    <div class="adress-item">
        <div class="adress-item-content">
            <span class="data">Name: {{item.content.name}} <br> Phone number: {{item.content.number}}</span> <hr>
        </div>
   <pre>       </pre>    <span class="delete-btn" title="delete" v-on:click.stop="onDelete"></span>
    </div>
</template>

<script>
export default {
    name: "Item",
    props: ["item"],
    methods: {
        onDelete: function() {
            this.$emit("item-delete");
        }
    }
}
</script>

<style scoped>
.adress-item {
        padding: 20px 4px;
        margin: 0 12px;
        cursor: pointer;
        border-top: 1px solid #e8e8e8;

        display: flex;
        align-items: center;
    }

    .adress-item:hover .adress-item-content {
        color: #4e4e4e;
    }

    .delete-btn {
        display: inline-block;
        width: 26px;
        height: 26px;
        background-image: url(~@/assets/icon-delete-light.png);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;

        flex-shrink: 0;
    }

    .delete-btn:hover {
        background-image: url(~@/assets/icon-delete.png)
    }

   
</style>