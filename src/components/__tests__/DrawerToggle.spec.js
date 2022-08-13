import { mount, createLocalVue } from '@vue/test-utils'
import Komponent from '@/components/DrawerToggle.vue'

import store from '@/store/store.js'
import Vuetify from 'vuetify'
import router from '@/router'
import flushPromises from 'flush-promises'

describe('DrawerToggle.vue', () => {
    const localVue = createLocalVue()
    let vuetify

    beforeEach(() => {
        vuetify = new Vuetify()
    })

    it('Activates mini mode', async() => {
        const wrapper = mount(Komponent, {
            localVue,
            vuetify,
            store,
            router
        });
        await wrapper.find('#mini-toggler').trigger('click')
        expect(wrapper.vm.mini).toBe(true)
    })

    it('Deactivates mini mode', async() => {
        const wrapper = mount(Komponent, {
            localVue,
            vuetify,
            store,
            router
        });
        wrapper.vm.mini = true;
        await flushPromises();
        await wrapper.find('#mini-toggler').trigger('click')
        expect(wrapper.vm.mini).toBe(false)
    })

    it('Has list icon when in mini mode', async() => {
        const wrapper = mount(Komponent, {
            localVue,
            vuetify,
            store,
            router
        });
        wrapper.vm.mini = true;
        await flushPromises();
        expect(wrapper.find('#mini-toggler .v-icon').classes()).toContain('mdi-format-list-bulleted');
    })

    it('Has dots icon when not in mini mode', async() => {
        const wrapper = mount(Komponent, {
            localVue,
            vuetify,
            store,
            router
        });
        wrapper.vm.mini = false;
        await flushPromises();
        expect(wrapper.find('#mini-toggler .v-icon').classes()).toContain('mdi-dots-vertical');
    })



})