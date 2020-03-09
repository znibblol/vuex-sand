<template>
  <div class="row">
    <div class="col-sm-4" v-for="(post, index) in posts" :key="index">
      <div class="card mb-4">
        <div class="card-header bg-dark text-light text-center">
          <h4>{{ post.title }}</h4>
        </div>
        <div class="card-body bg-light text-dark">
          <p>{{ post.body }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FlavorShow",
  data() {
    return {
      author: {
        1: "Kaycee",
        2: "Celestina",
        3: "Theressa",
        4: "Bailey",
        5: "Evelia",
        6: "Jacquiline",
        7: "Shannon",
        8: "Jena",
        9: "Irmgard",
        10: "Greta"
      }
    };
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    }
  },
  created() {
    this.$store.dispatch("loadPosts");
  }
};
</script>

<style scoped>
.card-body {
  min-height: 120px;
}
</style>
