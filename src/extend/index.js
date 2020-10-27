import Vue from 'vue';

let obj = {
  template: '<div>{{msg}}<p>{{myData}}</p></div>',
  data () {
    return {
      myData: 'myData'
    }
  },
  props: {
    msg: {
      type: String,
      default: 'default'
    }
  },
  name: 'Content'
}
let objExtend;
objExtend = Vue.extend(obj);

console.log(objExtend);
// export default {
//     objExtend
// }
export {obj, objExtend};