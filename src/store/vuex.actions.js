export const actions = {
    notification({ state }, payload) {
        state.bus.$emit('shownotification', payload);

    },

}