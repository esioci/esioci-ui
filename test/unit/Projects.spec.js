import Vue from 'vue'
import Projects from '../../src/components/Projects.vue'

describe('Projects.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(Projects)
    })
    expect(vm.$el.querySelector('div.panel-heading').textContent).toMatch('Projects list')
  });

  var b = require('../../src/components/Projects.vue');
  it('should have data', function () {
    var defaultData = b.data();
    var projects = Object({ projects: [ Object({ name: '' }) ] });
    expect(defaultData).toEqual(projects);
  });
})

// also see example testing a component with mocks at
// https://github.com/vuejs/vueify-example/blob/master/test/unit/a.spec.js#L22-L43
