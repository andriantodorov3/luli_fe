import { mutations } from '@/store/vuex.mutations.js'
import Vue from 'vue'

describe('mutations', () => {
    test('update Drawer', () => {
        const drawerValue = true;
        const state = {

            bus: new Vue(),
            drawer: null,
            mini: false,
        };

        mutations.updateField(state, {
            path: 'drawer',
            value: drawerValue
        });

        expect(state.drawer).toBe(drawerValue);
    })

})