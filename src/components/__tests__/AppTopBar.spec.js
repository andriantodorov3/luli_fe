import { mount, createLocalVue } from '@vue/test-utils'
import Komponent from '@/components/AppTopBar.vue'

import store from '@/store/store.js'
import Vuetify from 'vuetify'
import flushPromises from 'flush-promises'


import VueRouter from 'vue-router'

describe('AppTopBar.vue', () => {




    const localVue = createLocalVue()
    let vuetify

    const router = new VueRouter()

    //localVue.use(VueRouter)

    beforeEach(() => {
        vuetify = new Vuetify()
    })

    const $route = {
        name: 'route-name'
    }

    it('Click triggers drawer', async() => {
        const wrapper = mount(Komponent, {
            localVue,
            vuetify,
            store,
            router,
            mocks: {
                $route
            },
            stubs: ['router-link', 'router-view']
        });
        wrapper.vm.drawer = false;
        await flushPromises();
        await wrapper.find('#drawer-toggle-btn').trigger('click')
        expect(wrapper.vm.drawer).toBe(true)

    })

    it('Route name renders correctly', async() => {
        const wrapper = mount(Komponent, {
            localVue,
            vuetify,
            store,
            router,
            mocks: {
                $route
            },
            stubs: ['router-link', 'router-view']
        });

        expect(wrapper.find('.v-toolbar__title').text()).toBe($route.name)
    })
})