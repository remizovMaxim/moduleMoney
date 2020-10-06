import "es6-promise/auto"
import Vue from 'vue'
import List from '@/components/List'

describe('List.vue', () => {
  it('should render correct title', () => {
    const Constructor = Vue.extend(List)
    const vm = new Constructor().$mount()

    expect(vm.$el.querySelector('h1').textContent)
      .to.equal('Список сгенерированных кодов')
  })
})
