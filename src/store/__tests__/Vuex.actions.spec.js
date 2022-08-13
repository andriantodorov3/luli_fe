import { actions } from '@/store/vuex.actions.js'
import Vue from 'vue';

describe('actions', () => {
    test('notifications', async() => {

        const bus = new Vue();
        const spy = jest.spyOn(bus, '$emit');
        const state = {
            bus: bus
        };

        const context = {
            state: state,
        }

        const payload = {
            type: "error",
            msg: 'test message'
        }

        actions.notification(context, payload);

        expect(spy).toHaveBeenCalled();
    })


})