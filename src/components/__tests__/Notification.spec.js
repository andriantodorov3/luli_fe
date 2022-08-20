import { mount, createLocalVue } from '@vue/test-utils'
import Komponent from '@/components/Notification.vue'

import store from '@/store/store.js'
import Vuetify from 'vuetify'
import router from '@/router'
import Vue from 'vue'

describe('Notification.vue', () => {
    const localVue = createLocalVue()
    let vuetify

    beforeEach(() => {
        vuetify = new Vuetify()
    })

    it('Takes message from bus payload', async() => {
        const notificationPayload = {
            msg: 'message',
            type: 'error'
        }
        const wrapper = mount(Komponent, {
            localVue,
            vuetify,
            store,
            router
        });

        store.state.bus.$emit('shownotification', notificationPayload)
        await Vue.nextTick();
        expect(wrapper.vm.msg).toBe(notificationPayload.msg);
    })

    it('Sets autoclose from bus payload', async() => {
        const notificationPayload = {
            msg: 'message',
            type: 'error',
            autoclose: true
        }
        const wrapper = mount(Komponent, {
            localVue,
            vuetify,
            store,
            router
        });

        store.state.bus.$emit('shownotification', notificationPayload)
        await Vue.nextTick();
        expect(wrapper.vm.l_autoclose).toBe(notificationPayload.autoclose);
    })

    it('Sets autoclose from bus payload 2', async() => {
        const notificationPayload = {
            msg: 'message',
            type: 'error',
            autoclose: false
        }
        const wrapper = mount(Komponent, {
            localVue,
            vuetify,
            store,
            router
        });

        store.state.bus.$emit('shownotification', notificationPayload)
        await Vue.nextTick();
        expect(wrapper.vm.l_autoclose).toBe(notificationPayload.autoclose);
    })

    it('Sets type from bus payload', async() => {
        const notificationPayload = {
            msg: 'message',
            type: 'test-type',
        }
        const wrapper = mount(Komponent, {
            localVue,
            vuetify,
            store,
            router
        });

        store.state.bus.$emit('shownotification', notificationPayload)
        await Vue.nextTick();
        expect(wrapper.vm.l_type).toBe(notificationPayload.type);
    })


    it('Shows data on event', async() => {
        const notificationPayload = {
            msg: 'message',
            type: 'test-type',
        }
        const wrapper = mount(Komponent, {
            localVue,
            vuetify,
            store,
            router
        });

        store.state.bus.$emit('shownotification', notificationPayload)
        await Vue.nextTick();
        expect(wrapper.vm.shown).toBeTruthy();
    })

    it('Not shown by default ', async() => {
        const wrapper = mount(Komponent, {
            localVue,
            vuetify,
            store,
            router
        });

        expect(wrapper.vm.shown).toBeFalsy();
    })


    it('Hides after default timeout', async() => {
        const notificationPayload = {
            msg: 'message',
            type: 'test-type',
        }

        jest.useFakeTimers()

        const defaultTimeout = 30000;
        const wrapper = mount(Komponent, {
            localVue,
            vuetify,
            store,
            router
        });

        store.state.bus.$emit('shownotification', notificationPayload)
        await Vue.nextTick();
        jest.runTimersToTime(defaultTimeout + 1)
        expect(wrapper.vm.shown).toBeFalsy();
    })

    it('Hides after props timeout', async() => {
        const notificationPayload = {
            msg: 'message',
            type: 'test-type',
        }

        const propsData = {
            timeout: 100
        }

        jest.useFakeTimers()

        const wrapper = mount(Komponent, {
            localVue,
            vuetify,
            store,
            router,
            propsData: propsData
        });

        store.state.bus.$emit('shownotification', notificationPayload)
        await Vue.nextTick();
        jest.runTimersToTime(propsData + 1)
        expect(wrapper.vm.shown).toBeFalsy();
    })

})