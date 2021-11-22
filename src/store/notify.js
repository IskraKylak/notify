export default {
   state: {
     messages: [],
     messagesMain: [],
   },
   mutations: {
     setMessage(state, payload) {
       state.messages = payload
     },
     setMessageMain(state, payload) {
       state.messages = payload
     }
   },
   actions: {
     setMessage ({commit}, payload) {
       // обратимся к нашему комиту и візовем мутацию setNotify в кторую передадим payload
       commit('setMessage', payload)
     },
     setMessageMain ({commit}, payload) {
       // обратимся к нашему комиту и візовем мутацию setNotify в кторую передадим payload
       commit('setMessageMain', payload)
     }
   },
   getters: {
     getMessage (state) {
       return state.messages
     },

     getMessageMain (state) {
       return state.messages
     }
   },
   modules: {
   }
}
