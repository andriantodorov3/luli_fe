import { mount } from '@vue/test-utils'
import Komponent from '@/components/FaqRenderer.vue'

describe('FaqRenderer.vue', () => {
    const props = {
        items: [{
            subject: "subject",
            title: "title",
            text: "text",
        }]
    }

    it('Items count matches', () => {
        const wrapper = mount(Komponent, {

            propsData: props
        })

        expect(wrapper.findAll('.v-list-item').length).toBe(props.items.length)
    })

    it('Subject matches', () => {
        const wrapper = mount(Komponent, {

            propsData: props
        })

        expect(wrapper.findAll('.v-list-item__title').at(0).text()).toBe(props.items[0].subject)
    })

    it('Title matches', () => {
        const wrapper = mount(Komponent, {

            propsData: props
        })

        expect(wrapper.findAll('.v-list-item__content .v-list-item__subtitle').at(0).text()).toBe(props.items[0].title)
    })


    it('Text matches', () => {
        const wrapper = mount(Komponent, {

            propsData: props
        })

        expect(wrapper.findAll('.v-list-item__content .v-list-item__subtitle').at(1).text()).toBe(props.items[0].text)
    })



})