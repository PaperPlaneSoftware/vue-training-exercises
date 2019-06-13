import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter.vue'

// mounting a component and testing it's methods and internal state
describe('Counter.vue', () => {
  it('Should initialise to 42 by default', () => {
    const wrapper = shallowMount(Counter, {
      propsData: { }
    });
    expect(wrapper.vm.count).toEqual(42);
  });

  it("Should increment count by one", () => {
    const wrapper = shallowMount(Counter, {
      propsData: { initCount: 0 }
    });

    wrapper.vm.inc();
    expect(wrapper.vm.count).toEqual(1);
  });
});

// snapshot testing
describe('Counter.vue snapshot testing', () => {
  it("Snapshots should remain unchanged", () => {
    const wrapper = shallowMount(Counter, {
      propsData: { initCount: 0 }
    });

    wrapper.vm.inc();
    expect(wrapper).toMatchSnapshot();
  });
});