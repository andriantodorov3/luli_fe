import { shallowMount } from '@vue/test-utils'
import Komponent from '@/components/Loading.vue'

describe('Loading.vue', () => {

    it('Check default content', () => {
        const text = 'Loading...';
        const wrapper = shallowMount(Komponent)
        expect(wrapper.html()).toContain(text)
    })

    it('Check default slot overload', () => {
        const text = 'some text';
        const wrapper = shallowMount(Komponent, {
            slots: {
                default: text
            }
        })
        expect(wrapper.html()).toContain(text)
    })

})