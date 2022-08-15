import { mount, createLocalVue } from '@vue/test-utils'
import Komponent from '@/components/Drawer.vue'
import DrawerHeader from '@/components/DrawerHeader.vue'

import store from '@/store/store.js'
import Vuetify from 'vuetify'
import router from '@/router'

describe('Drawer.vue', () => {
    const localVue = createLocalVue()
    let vuetify

    beforeEach(() => {
        vuetify = new Vuetify()
    })

    it('Renders menu items', () => {
        const wrapper = mount(Komponent, {
            localVue,
            vuetify,
            store,
            router
        }, );
        //one in the header as well
        expect(wrapper.findAll('.v-list-item').length).toBe(wrapper.vm.menuItems.length + 1)
    })

    it('Renders menu header', () => {
        const wrapper = mount(Komponent, {
            localVue,
            vuetify,
            store,
            router
        }, );
        //one in the header as well
        expect(wrapper.findComponent(DrawerHeader).exists()).toBe(true)
    })


})