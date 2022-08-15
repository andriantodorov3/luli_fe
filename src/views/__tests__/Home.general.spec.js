import { mount, createLocalVue } from '@vue/test-utils'
import Komponent from '@/views/Home.vue'

import store from '@/store/store.js'
import Vuetify from 'vuetify'
import router from '@/router'
import Vue from 'vue'
import SearchResults from '@/views/SearchResults';


describe('Search Results', () => {
    const localVue = createLocalVue()
    let vuetify

    beforeEach(() => {
        vuetify = new Vuetify()
    })

    it('Results are hidden by default', async() => {
        const wrapper = mount(Komponent, {
            localVue,
            vuetify,
            store,
            router
        });

        expect(wrapper.findComponent(SearchResults).exists()).toBeFalsy();

    })


    it('Results are hidden when searchSuccess false', async() => {
        const wrapper = mount(Komponent, {
            localVue,
            vuetify,
            store,
            router
        });


        wrapper.vm.searchSuccess = false;
        await Vue.nextTick();
        expect(wrapper.findComponent(SearchResults).exists()).toBeFalsy();

    })

    it('Results are shows when searchSuccess true', async() => {
        const wrapper = mount(Komponent, {
            localVue,
            vuetify,
            store,
            router
        });

        const searchPayload = {
            end_time: 1660039860,
            funds: 100,
            start_time: 1659953460,
        }

        const searchResults = { "buy_point": 1660039817, "buy_point_price": 10, "sell_point": 1659953531, "sell_point_price": 100 };

        wrapper.vm.searchSuccess = true;
        wrapper.vm.searchPayload = searchPayload;
        wrapper.vm.searchResults = searchResults;
        await Vue.nextTick();
        expect(wrapper.findComponent(SearchResults).exists()).toBeTruthy();

    })


})



describe('Snapshot', () => {

    const localVue = createLocalVue()

    let vuetify

    beforeEach(() => {
        vuetify = new Vuetify()
    })

    it('Checks snapshot', async() => {
        const wrapper = mount(Komponent, {
            localVue,
            vuetify,
            store,
            router
        });

        expect(wrapper.element).toMatchSnapshot();
    })
});