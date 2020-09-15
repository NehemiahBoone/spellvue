<template>
  <div id="details">
    <div class="card" v-if="currentSpell.id" :key="currentSpell.id">
      <div class="card-body text-center">
        <h1 class="card-title">{{currentSpell.name}}</h1>
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