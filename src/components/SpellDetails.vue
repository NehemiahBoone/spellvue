<template>
  <div id="details">
    <div class="card mt-5" v-if="currentSpell.index" :key="currentSpell.index">
      <div class="card-body text-center">
        <h1 class="card-title">{{currentSpell.name}}</h1>
        <p>{{currentSpell.desc[0]}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

    data() {
      return {
      }
    },

    methods: {
    },

    computed: {
      currentSpell() {
        return this.$store.state.currentSpell
      }
    },

    name: "SpellDetails"
  }
</script>


<style>
</style>