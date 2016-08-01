new Vue({
  el: '#esioci',

  data: {
    project: { name: ''},
    projects: []

  },

  ready: function () {
    this.fetchProjects();
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
    }
  }
});