import { shallowMount } from '@vue/test-utils'
import Komponent from '@/components/HomeButton.vue'

describe('HomeButton.vue', () => {
    it('Sanity check', () => {
        shallowMount(Komponent)
        return;
    })
})