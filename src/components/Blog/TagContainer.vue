<template>
    <div id="tag-container">
        <Tag tag="IA"/>
        <Tag tag="Redes Sociais"/>
    </div>
</template>

<script>
import Tag from './Tag';
    export default {
        components: {
            Tag
        }
    }
</script>

<style lang="css" scoped>
    #tag-container{
        display: flex;
        width: 125rem;
        margin-bottom: 3.2rem;
    }
</style>