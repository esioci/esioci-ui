<template>
  <div id="projects">
    <div class="panel panel-default">
      <div class="panel-heading">
        Projects list
      </div>
      <div class="panel-body">
        <div class="list-group">
          <a href="#" class="list-group-item" v-for="project in projects">
            <h4 class="list-group-item-heading" v-on:click="fetchBuilds(project.name)" >{{ project.name }}</h4>
          </a>
          <a href="#" class="list-group-item list-group-item-success disabled">
            <h4 class="list-group-item-heading"><span class="glyphicon glyphicon-plus"></span>  Add new project</h4>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'projects',

  data: function () {
    return {
      projects: [{ name: "default", id: "1" }],
    }
  },
  methods: {
    fetchProjects: function () {
      this.$http.get("/api/v1/default")
        .success(function (projects) {
          this.$set("projects", projects);
          console.log(projects);
        })
        .error(function (err) {
          console.log(err);
        });
    }
  },
  ready: function () {
    this.fetchProjects();
  } 
}
</script>
