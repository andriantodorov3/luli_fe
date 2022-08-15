import { mount, createLocalVue } from '@vue/test-utils'
import Komponent from '@/views/Home.vue'

import store from '@/store/store.js'
import Vuetify from 'vuetify'
import router from '@/router'

import { searchStocks } from '@/_api/backend'

jest.mock('@/_api/backend', () => ({
    ...(jest.requireActual('@/_api/backend')),
    searchStocks: jest.fn()
}))


describe('API Success', () => {

    let mockSearchResults = {
        statusCode: 201,
        success: true,
        data: {
            "buy_point": 1111,
            "buy_point_price": 10,
            "sell_point": 1659953531,
            "sell_point_price": 100
        }
    };


    searchStocks.mockReturnValue(mockSearchResults)
    const localVue = createLocalVue()
    let vuetify

    beforeEach(() => {
        vuetify = new Vuetify()
    })

    it('Sets correct data from API when valid response', async() => {
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

        await wrapper.vm.search(searchPayload);

        expect(wrapper.vm.searchResults).toBe(mockSearchResults.data);
        expect(wrapper.vm.searchSuccess).toBeTruthy();
        expect(wrapper.vm.start_errors.length).toBe(0);
        expect(wrapper.vm.end_errors.length).toBe(0);
    })

})