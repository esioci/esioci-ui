// Vue.component("builds", {
//   data: {
//     build: { id: "", state: "", inserted_at: "", updated_at: ""},
//     builds: [],
//   },
// /* eslint-disable quotes */
//   template: '\
//       <div class="panel panel-default">\
//         <div class="panel-heading">\
//           Builds list\
//         </div>\
//         <div class="panel-body">\
//           <table class="table table-hover">\
//             <thead>\
//               <tr>\
//                 <th>#</th>\
//                 <th>status</th>\
//                 <th>build start</th>\
//                 <th>last update</th>\
//                 <th></th>\
//                 <th></th>\
//               </tr>\
//             </thead>\
//             <tbody>\
//               <tr v-for="build in builds" v-bind:class="{\
//                 \'success\': build.state === \'COMPLETED\',\
//                 \'warning\': build.state === \'RUNNING\',\
//                 \'danger\': build.state === \'FAILED\'\
//               }">\
//                 <td>{{ build.id }}</td>\
//                 <td><span v-bind:class="{"glyphicon glyphicon-refresh glyphicon-spin": build.state === "RUNNING"}"></span> {{ build.state }}</td>\
//                 <td>{{ build.inserted_at }}</td>\
//                 <td>{{ build.updated_at }}</td>\
//                 <td><a href="/artifacts/{{ build.id }}/build_{{ build.id }}.txt"><span class="glyphicon glyphicon-file" title="get build.log"></span></a></td>\
//                 <td><a href="#"><span class="glyphicon glyphicon-floppy-save" title="get artifacts"></span></a></td>\
//               </tr>\
//             </tbody>\
//           </table>\
//         </div>\
//       </div>',
// /* eslint-enable quotes */
//   methods: {
//     fetchBuilds: function (project) {
//       this.$http.get("/api/v1/" + project + "/bld/all")
//         .success(function (builds) {
//           this.$set("builds", builds);
//           console.log(builds);
//         })
//         .error(function (err) {
//           console.log(err);
//         });
//     }
//   },
//   ready: function () {
//     this.fetchBuilds("default");
//   },
// });

// var Builds = require('./builds.vue')
// new Vue({
//   el: "#esioci",
//   render: function (createElement) {
//     return createElement(Builds)
//   }
// });
import Vue from 'vue/dist/vue'
import App from './App.vue'

new Vue({ // eslint-disable-line no-new
  el: '#app',
  render: (h) => h(App)
})