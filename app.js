Vue.component("projects", {
  data: {
    project: { name: ""},
    projects: [],
  },
  template: '\
      <div class="panel panel-default">\
        <div class="panel-heading">\
          Projects list\
        </div>\
        <div class="panel-body">\
          <div class="list-group">\
            <a href="#" class="list-group-item" v-for="project in projects">\
              <h4 class="list-group-item-heading" v-on:click="fetchBuilds(project.name)" >{{ project.name }}</h4>\
            </a>\
            <a href="#" class="list-group-item list-group-item-success disabled">\
              <h4 class="list-group-item-heading"><span class="glyphicon glyphicon-plus"></span>  Add new project</h4>\
            </a>\
          </div>\
        </div>\
      </div>\
    </div>',
  methods: {
    fetchProjects: function () {
      var projects = [];
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
  },
});

Vue.component("builds", {
  data: {
    build: { id: "", state: "", inserted_at: "", updated_at: ""},
    builds: [],
  },
  template: '\
      <div class="panel panel-default">\
        <div class="panel-heading">\
          Builds list\
        </div>\
        <div class="panel-body">\
          <table class="table table-hover">\
            <thead>\
              <tr>\
                <th>#</th>\
                <th>status</th>\
                <th>build start</th>\
                <th>last update</th>\
                <th></th>\
                <th></th>\
              </tr>\
            </thead>\
            <tbody>\
              <tr v-for="build in builds" v-bind:class="{\
                \'success\': build.state === \'COMPLETED\',\
                \'warning\': build.state === \'RUNNING\',\
                \'danger\': build.state === \'FAILED\'\
              }">\
                <td>{{ build.id }}</td>\
                <td><span v-bind:class="{"glyphicon glyphicon-refresh glyphicon-spin": build.state === "RUNNING"}"></span> {{ build.state }}</td>\
                <td>{{ build.inserted_at }}</td>\
                <td>{{ build.updated_at }}</td>\
                <td><a href="/artifacts/{{ build.id }}/build_{{ build.id }}.txt"><span class="glyphicon glyphicon-file" title="get build.log"></span></a></td>\
                <td><a href="#"><span class="glyphicon glyphicon-floppy-save" title="get artifacts"></span></a></td>\
              </tr>\
            </tbody>\
          </table>\
        </div>\
      </div>',
  methods: {
    fetchBuilds: function (project) {
      var builds = [];
      this.$http.get("/api/v1/" + project + "/bld/all")
        .success(function (builds) {
          this.$set("builds", builds);
          console.log(builds);
        })
        .error(function (err) {
          console.log(err);
        });
    }
  },
  ready: function () {
    this.fetchBuilds("default");
  },
});

var app = new Vue({
  el: "#esioci",

});