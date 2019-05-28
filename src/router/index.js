import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AddSmoothie from '@/components/AddSmoothie'
import EditSmoothie from '@/components/EditSmoothie'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/add-smoothie',
      name: 'AddSmoothie',
      component: AddSmoothie
    },
    {
      path: '/edit-smoothie/:smoothie_slug',
      name: 'EditSmoothie',
      component: EditSmoothie
    }
  ]
})
