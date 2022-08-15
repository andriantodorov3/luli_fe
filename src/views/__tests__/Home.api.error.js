import { mount, createLocalVue } from '@vue/test-utils'
import Komponent from '@/views/Home.vue'

import store from '@/store/store.js'
import Vuetify from 'vuetify'
import router from '@/router'

import { searchStocks } from '@/_api/backend'
import flushPromises from 'flush-promises'

jest.mock('@/_api/backend', () => ({
    ...(jest.requireActual('@/_api/backend')),
    searchStocks: jest.fn()
}))

describe('API Response errors', () => {

    let mockSearchResults = {
        response: {

            data: {
                statusCode: 400,
                success: false,
                error: {
                    errors: {
                        start_time: [
                            'error1',
                            'error2'
                        ],
                        end_time: [
                            'errro3'
                        ]

                    }
                }
            }
        }
    };


    searchStocks.mockRejectedValue(mockSearchResults);
    const localVue = createLocalVue()
    let vuetify

    beforeEach(() => {
        vuetify = new Vuetify()
    })

    it('Sets correct data from API when error response', async() => {
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
        flushPromises();

        expect(wrapper.vm.searchSuccess).toBeFalsy();
        expect(wrapper.vm.start_errors.length).toBe(mockSearchResults.response.data.error.errors.start_time.length);
    })

})