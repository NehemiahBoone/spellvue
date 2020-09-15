<template>
  <div id="spell">
    <li v-for="spell in spells" :key="spell.name">{{spell.name}}</li>
  </div>
</template>

<script>
  export default {
    mounted() {
      this.$store.dispatch('getApiSpells')
    },

    data() {
      return {
      }
    },

    methods: {
    },

    computed: {
      spells() {
        return this.$store.state.apiSpells
      }
    },
    name: 'ApiSpells'
  }
</script>


<style>
</style>