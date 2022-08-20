import { mount } from '@vue/test-utils'
import Komponent from '@/views/Backend.vue'
import FaqRenderer from "@/components/FaqRenderer.vue";

describe('Backend.vue', () => {
    it('Renders faqs', () => {
        const wrapper = mount(Komponent)
        expect(wrapper.findAllComponents(FaqRenderer).length).toBe(1)
    })

})