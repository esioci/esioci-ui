new Vue({
  el: '#esioci',

  data: {
    project: { name: ''},
    projects: [],
    build: { id: '', state: '', inserted_at: '', updated_at: ''},
    builds: []

  },

  ready: function () {
    this.fetchProjects();
    this.fetchBuilds('default');
  },

  methods: {

    fetchProjects: function () {
      var projects = [];
      this.$http.get('http://localhost:4000/api/v1/default')
        .success(function (projects) {
          this.$set('projects', projects);
          console.log(projects);
        })
        .error(function (err) {
          console.log(err);
        });
    },
    fetchBuilds: function (project) {
      var builds = [];
      this.$http.get('http://localhost:4000/api/v1/' + project + '/bld/all')
        .success(function (builds) {
          this.$set('builds', builds);
          console.log(builds);
        })
        .error(function (err) {
          console.log(err);
        });
    },
    setStatusIcon: function(status){
      switch(status) {
        case "CREATED":
          return "";
          break;
        case "COMPLETED":
          return "";
          break;
        case "RUNNING":
          return "glyphicon glyphicon-refresh glyphicon-spin";
          break;
        case "FAILED":
          return "";
          break;
        default:
          return "";
      }
    }
  }
});