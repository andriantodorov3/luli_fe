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

describe('API Response errors', () => {

    let mockSearchResults = {
        response: {

            data: {
                statusCode: 500,
            }
        }
    };


    searchStocks.mockRejectedValue(mockSearchResults);
    const localVue = createLocalVue()
    let vuetify

    beforeEach(() => {
        vuetify = new Vuetify()
    })

    /*
    let store = {
        state: {
            bus: {

            }
        }
    }
    */


    it('Sets correct data from API and kicks off notifcation through the bus when general error message', async() => {
        const wrapper = mount(Komponent, {
            localVue,
            vuetify,
            store,
            router
        });

        const busSpy = jest.spyOn(store.state.bus, '$emit')

        const searchPayload = {
            end_time: 1660039860,
            funds: 100,
            start_time: 1659953460,
        }

        await wrapper.vm.search(searchPayload);

        expect(wrapper.vm.searchSuccess).toBeFalsy();
        expect(busSpy).toHaveBeenCalled();
    })

})