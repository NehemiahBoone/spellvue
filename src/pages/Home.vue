<template>
  <div id="home" class="container">
    <div class="row">
      <div class="col-3">
        <ul>
          <apiSpells />
        </ul>
      </div>
      <div class="col-6">

      </div>
      <div class="col-3">

      </div>
    </div>
  </div>
</template>

<script>
  import ApiSpells from "../components/ApiSpells.vue"
  export default {
    name: 'Home',

    components: {
      ApiSpells
    }
  }
</script>


<style>
</style>