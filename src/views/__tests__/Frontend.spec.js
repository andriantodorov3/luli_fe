import { mount } from '@vue/test-utils'
import Komponent from '@/views/Frontend.vue'
import FaqRenderer from "@/components/FaqRenderer.vue";

describe('Frontend.vue', () => {
    it('Renders faqs', () => {
        const wrapper = mount(Komponent)
        expect(wrapper.findAllComponents(FaqRenderer).length).toBe(wrapper.vm.items.length)
    })

})