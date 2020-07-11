// src/main.js
import App from './components/App.js';
import VueSocketIO from 'vue-socket.io'
import SocketIO from "socket.io-client"
 


Vue.use(new VueSocketIO({
    debug: true,
    connection: SocketIO('http://localhost:3000')
})
);

new Vue({
  render: h => h(App),
}).$mount(`#app`);
