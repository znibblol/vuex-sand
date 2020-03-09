<template>
  <div class="col-sm-4 offset-sm-4 text-center">
    <div class="form-group">
      <label for="flavor">Favorite ice cream flavor?</label>
      <input
        type="text"
        @input="changed"
        name="flavor"
        id="flavor"
        class="form-control"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "FlavorForm",
  methods: {
    changed: function(event) {
      this.$store.commit("change", event.target.value);
    }
  }
};
</script>
