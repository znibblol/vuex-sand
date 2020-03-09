<template>
  <div class="row">
    <div class="col-sm-6 text-center">
      <div class="card">
        <div class="card-header bg-success text-light">
          <h3>Add post</h3>
        </div>
        <div class="card-body">
          <div class="form-group">
            <label for="title">Title</label>
            <input
              type="text"
              name="title"
              v-model="title"
              id="title"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label for="body">Body</label>
            <textarea
              name="body"
              id="body"
              cols="30"
              rows="10"
              class="form-control"
              v-model="body"
            ></textarea>
          </div>
          <button type="submit" class="btn btn-lg btn-success float-right">
            Send
          </button>
        </div>
      </div>
    </div>
    <div class="col-sm-4 offset-sm-2 text-center">
      <h3>Preview</h3>
      <div class="card">
        <div class="card-header bg-dark text-light">
          <h4>{{ title || "Title" }}</h4>
        </div>
        <div class="card-body bg-light text-dark">
          <p>{{ body || "The body of the post" }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "postAddForm",
  data() {
    return {
      title: "",
      body: ""
    };
  }
};
</script>
