import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import Komponent from '@/components/StockSearchForm.vue'
import Loading from '@/components/Loading.vue';

import store from '@/store/store.js'
import Vuetify from 'vuetify'

import Vue from 'vue';

import flushPromises from 'flush-promises';

import VueRouter from 'vue-router'

describe('Loading checks', () => {
    it('Submit btn is disabled when loading', () => {
        const props = {
            end_errors: [],
            start_errors: [],
            loading: true,
        };

        const wrapper = shallowMount(Komponent, {
            propsData: props
        })
        expect(wrapper.find('#search-btn').attributes().disabled).toBeDefined()
    })

    it('Submit btn is NOT disabled with default form content', () => {
        const props = {
            end_errors: [],
            start_errors: [],
            loading: false,
        };

        const wrapper = shallowMount(Komponent, {
            propsData: props
        })
        expect(wrapper.find('#search-btn').attributes().disabled).not.toBeDefined()
    })


    it('Loading component exists when loading true', () => {
        const props = {
            end_errors: [],
            start_errors: [],
            loading: true,
        };

        const wrapper = shallowMount(Komponent, {
            propsData: props
        })
        expect(wrapper.findComponent(Loading).exists()).toBe(true)
    })

    it('Loading component does not exist when loading false', () => {
        const props = {
            end_errors: [],
            start_errors: [],
            loading: false,
        };

        const wrapper = shallowMount(Komponent, {
            propsData: props
        })
        expect(wrapper.findComponent(Loading).exists()).toBe(false)
    })

    it('Button has text search when not loading', () => {
        const props = {
            end_errors: [],
            start_errors: [],
            loading: false,
        };

        const wrapper = shallowMount(Komponent, {
            propsData: props
        })
        expect(wrapper.find('#search-btn').text()).toBe('Search')
    })

})

describe('Form validations', () => {

    const localVue = createLocalVue()
    let vuetify

    const router = new VueRouter()

    localVue.use(VueRouter)

    beforeEach(() => {
        vuetify = new Vuetify()
    })


    const validStartDate = '2022-08-10T20:48';
    const validEndDate = '2022-08-12T20:48';
    const validFunds = 100;

    it('Check negative funds input', async() => {
        const props = {
            end_errors: [],
            start_errors: [],
            loading: false,
        };

        const wrapper = mount(Komponent, {
            propsData: props,
            localVue,
            vuetify,
            store,
            router,

        })
        wrapper.find('#funds_input').setValue(-1);
        wrapper.find('#date_picker_start').setValue(validStartDate);
        wrapper.find('#date_picker_end').setValue(validEndDate);

        await Vue.nextTick();
        expect(wrapper.vm.formIsValid).toBeFalsy();
    })


    it('Check 0 funds input', async() => {
        const props = {
            end_errors: [],
            start_errors: [],
            loading: false,
        };

        const wrapper = mount(Komponent, {
            propsData: props,
            localVue,
            vuetify,
            store,
            router,

        })
        wrapper.find('#funds_input').setValue(0);
        wrapper.find('#date_picker_start').setValue(validStartDate);
        wrapper.find('#date_picker_end').setValue(validEndDate);

        await Vue.nextTick();
        expect(wrapper.vm.formIsValid).toBeFalsy();
    })

    it('Check 100 funds input', async() => {
        const props = {
            end_errors: [],
            start_errors: [],
            loading: false,
        };

        const wrapper = mount(Komponent, {
            propsData: props,
            localVue,
            vuetify,
            store,
            router,

        })
        wrapper.find('#funds_input').setValue(validFunds);
        wrapper.find('#date_picker_start').setValue(validStartDate);
        wrapper.find('#date_picker_end').setValue(validEndDate);

        await Vue.nextTick();
        expect(wrapper.vm.formIsValid).toBeTruthy();
    })



    it('Check invalid date order', async() => {
        const props = {
            end_errors: [],
            start_errors: [],
            loading: false,
        };

        const wrapper = mount(Komponent, {
            propsData: props,
            localVue,
            vuetify,
            store,
            router,

        })
        wrapper.find('#funds_input').setValue(validFunds);
        wrapper.find('#date_picker_end').setValue(validStartDate);
        wrapper.find('#date_picker_start').setValue(validEndDate);

        await Vue.nextTick();
        expect(wrapper.vm.formIsValid).toBeFalsy();
    })

})

describe('Form events', () => {

    const localVue = createLocalVue()
    let vuetify

    const router = new VueRouter()

    localVue.use(VueRouter)

    beforeEach(() => {
        vuetify = new Vuetify()
    })


    const validStartDate = '2022-08-10T20:48';
    const validEndDate = '2022-08-12T20:48';
    const validFunds = 100;

    it('Check form emits search for valid input', async() => {
        const props = {
            end_errors: [],
            start_errors: [],
            loading: false,
        };

        const wrapper = mount(Komponent, {
            propsData: props,
            localVue,
            vuetify,
            store,
            router,

        })
        wrapper.find('#funds_input').setValue(validFunds);
        wrapper.find('#date_picker_start').setValue(validStartDate);
        wrapper.find('#date_picker_end').setValue(validEndDate);

        await Vue.nextTick();
        expect(wrapper.vm.formIsValid).toBeTruthy();


        await wrapper.find('#search-btn').trigger('click');

        expect(wrapper.emitted()).toHaveProperty('search')
    })




})

describe('Snapshot', () => {

    const localVue = createLocalVue()
    let vuetify

    const router = new VueRouter()

    localVue.use(VueRouter)

    beforeEach(() => {
        vuetify = new Vuetify()
    })


    it('Checks snapshot', async() => {

        const props = {
            end_errors: [],
            start_errors: [],
            loading: false,
        };

        const wrapper = mount(Komponent, {
            propsData: props,
            localVue,
            vuetify,
            store,
            router,

        })

        await flushPromises();

        expect(wrapper.element).toMatchSnapshot();
    })
});