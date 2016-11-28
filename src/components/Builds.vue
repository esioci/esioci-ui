<template>
  <div id="builds">
    <div class="panel panel-default">
      <div class="panel-heading">
        Builds list
      </div>
      <div class="panel-body">
        <table class="table table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>status</th>
              <th>build start</th>
              <th>last update</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="build in builds" v-bind:class="{
              'success': build.state === 'COMPLETED',
              'warning': build.state === 'RUNNING',
              'danger': build.state === 'FAILED'
            }">
              <td>{{ build.id }}</td>
              <td><span v-bind:class="{'glyphicon glyphicon-refresh glyphicon-spin': build.state === 'RUNNING'}"></span> {{ build.state }}</td>
              <td>{{ build.inserted_at }}</td>
              <td>{{ build.updated_at }}</td>
  <!--             <td><a v-bind:href="{{ build.id }}/build_{{ build.id }}.txt"><span class="glyphicon glyphicon-file" title="get build.log"></span></a></td>
   -->            
              <td><a href="#"></a>
              <td><a href="#"><span class="glyphicon glyphicon-floppy-save" title="get artifacts"></span></a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  var Vue = require('vue');
  var VueResource = require('vue-resource');

  Vue.use(VueResource);
  export default {
    name: 'builds',
    data: function () {
      return {
        //builds: [{ id: "", state: "", inserted_at: "", updated_at: ""}],
        builds: []
      }
    },
    methods: {
      fetchBuilds: function(project) {
        this.$http.get("http://localhost:4000/api/v1/" + project + "/bld/all")
          .then((response) => {
            console.log("esio");
            this.$set(this, 'builds', response.data);
          });
      }
    },
    created: function () {
      this.fetchBuilds("default");
    },
  }
</script>
