<template>
    <div v-for="input in inputs" :key="input.id" class="input-container">
        <label v-if="input.label">{{input.label}}</label>
        <input :type="input.type" required :class="input.class" :value="input.value"/>
    </div>
</template>

<script>
export default {
    props: {
        inputs: Object
    },
    setup () {
    
        return {
            
        }
    }
}
</script>

<style lang="css" scoped>
.input-container{
  display: grid;
}
</style>