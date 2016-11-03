// import Vue from 'vue'
// import Builds from '../../src/components/Builds.vue'

describe('Builds.vue', () => {
  var b = require('../../src/components/Builds.vue')
  it('should have data', function () {
    var defaultData = b.data();
    // var builds = { id: "", state: "", inserted_at: "", updated_at: ""};
    var builds = Object({ builds: [ Object({ id: '', state: '', inserted_at: '', updated_at: '' }) ] })
    //var builds = [{ id: '', state: '', inserted_at: '', updated_at: '' }];
    expect(defaultData).toEqual(builds);
    // body...
  })
  // it('should render correct contents', () => {
  //   const vm = new Vue({
  //     el: document.createElement('div'),
  //     render: (h) => h(builds)
  //   })
  //   expect(vm.$el.querySelector('panel-heading').textContent).toBe('Builds List')
  // })
})

// also see example testing a component with mocks at
// https://github.com/vuejs/vueify-example/blob/master/test/unit/a.spec.js#L22-L43
