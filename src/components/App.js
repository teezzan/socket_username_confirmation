// src/components/App.js
export default {
  name: 'App',
  data() {
   return {
      name: "teezzan"
   }
  },
// sockets: {
  //      connect: function () {
    //        console.log('socket connected')
//        },
  //      customEmit: function (data) {
 //         console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
   //     }
   // },
  template: `
    <div class="container mx-auto p-4">
      <h1>Hello World</h1>
    </div>
  `,
};
