<template>
  <div>
    Home view {{ counter }}
    <Button @click="increament">Increase</Button>
    <Button @click="decreament">Decrease</Button>
  </div>
</template>
<script>
export default {
    computed: {
      counter(){
        return this.$store.state.count
      }
    },
    methods: {
      increament(){
        // this.$store.commit('increment')
        this.$store.dispatch('increment')
      },
      decreament(){
        this.$store.commit('decrement')
      }
    }
}
</script>
<style>
  
</style>