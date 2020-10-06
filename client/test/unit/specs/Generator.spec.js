import "es6-promise/auto"
import Vue from 'vue'
import Generator from '@/components/Generator'

describe('Generator.vue', () => {
  it('should render correct title', () => {
    const Constructor = Vue.extend(Generator)
    const vm = new Constructor().$mount()

    expect(vm.$el.querySelector('h1').textContent)
      .to.equal('Генератор кода')
  });
  it('should render correct button', () => {
    const Constructor = Vue.extend(Generator)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.btn-success').textContent)
      .to.equal('Сгенерировать код')
  });
})
