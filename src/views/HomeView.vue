<template>
  <div>
    Home view {{ counter }} <br>
    <div class="btn-group">
      <Button @click="increament" class="btn-primary">Increase</Button>
      <Button @click="decreament" class="btn-primary">Decrease</Button>
    </div>
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