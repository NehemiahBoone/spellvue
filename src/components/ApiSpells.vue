<template>
  <div id="spell">
    <li @click="setSpell(spell)" class="m-1" v-for="spell in spells" :key="spell.id">{{spell.name}}</li>
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
      setSpell(spell) {
        this.$store.dispatch("setSpell", spell)
      }
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