import { getters } from '@/store/vuex.getters.js'
import Vue from 'vue';

describe('getters', () => {
    test('get bus', () => {
        const bus = new Vue();
        const state = {
            bus: bus,
            drawer: null,
            mini: false,
        };


        const bus2 = getters.bus(state);
        expect(bus2).toBe(bus);
    })


})