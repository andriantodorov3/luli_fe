import { shallowMount } from '@vue/test-utils'
import Komponent from '@/views/SearchResults.vue'
import moment from "moment";
import { target } from 'vuelidate/lib/params';

describe('SearchResults.vue', () => {
    const someTimestamp = Math.floor(Date.now() / 1000);
    const props = {
        buy_point: someTimestamp - 3600,
        sell_point: someTimestamp,
        buy_point_price: 10,
        sell_point_price: 100,
        funds: 100,
        date_format: "MMMM Do YYYY, h:mm:ss a"
    };

    it('Renders buy point correctly', () => {
        const wrapper = shallowMount(Komponent, {
            propsData: props
        })
        const target = moment.unix(props.buy_point * 1000).format(props.date_format);
        expect(wrapper.find('#buy_point_date td').text()).toMatch(`${target}`)
    })

    it('Renders sell point correctly', () => {
        const wrapper = shallowMount(Komponent, {
            propsData: props
        })
        const target = moment.unix(props.sell_point * 1000).format(props.date_format);
        expect(wrapper.find('#sell_point_date td').text()).toMatch(`${target}`)
    })

    it('Renders stocks count correctly', () => {
        const wrapper = shallowMount(Komponent, {
            propsData: props
        })

        const target = (props.funds / props.buy_point_price).toFixed(2)
        expect(wrapper.find('#stocks_count td').text()).toMatch(`${target}`)
    })

    it('Renders buy point price correctly', () => {
        const wrapper = shallowMount(Komponent, {
            propsData: props
        })

        const target = props.buy_point_price;
        expect(wrapper.find('#buy_point_price td').text()).toMatch(`${target} USD`)
    })

    it('Renders sell point price correctly', () => {
        const wrapper = shallowMount(Komponent, {
            propsData: props
        })

        const target = props.sell_point_price;
        expect(wrapper.find('#sell_point_price td').text()).toMatch(`${target} USD`)
    })

    it('Renders funds correctly', () => {
        const wrapper = shallowMount(Komponent, {
            propsData: props
        })

        const target = props.funds;
        expect(wrapper.find('#funds td').text()).toMatch(`${target} USD`)
    })

    it('Renders profit correctly', () => {
        const wrapper = shallowMount(Komponent, {
            propsData: props
        })

        const stocksCount = (props.funds / props.buy_point_price).toFixed(2)
        const target = (stocksCount * props.sell_point_price - props.funds).toFixed(2);
        expect(wrapper.find('#profit td').text()).toMatch(`${target} USD`)
    })



})