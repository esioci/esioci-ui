import Vue from 'vue'
import Builds from '../../src/components/Builds.vue'

describe('Builds.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(Builds)
    })
    console.log(vm);
    expect(vm.$el.querySelector('div.panel-heading').textContent).toMatch('Builds list')
  });

  var b = require('../../src/components/Builds.vue');
  it('should have data', function () {
    var defaultData = b.data();
    var builds = Object({ builds: [ Object({ id: '', state: '', inserted_at: '', updated_at: '' }) ] })
    expect(defaultData).toEqual(builds);
  });
})

// also see example testing a component with mocks at
// https://github.com/vuejs/vueify-example/blob/master/test/unit/a.spec.js#L22-L43
