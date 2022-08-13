import Vue from 'vue'
import Vuex from 'vuex'

import { state } from '@/store/vuex.state'
import { getters } from '@/store/vuex.getters'
import { mutations } from '@/store/vuex.mutations'
import { actions } from '@/store/vuex.actions'

Vue.use(Vuex)

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})