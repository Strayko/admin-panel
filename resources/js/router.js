import Vue from 'vue';
import VueRouter from 'vue-router';
import ExampleComponent from "./components/ExampleComponent";
import ContactsCreate from "./view/ContactsCreate";
import ContactsShow from "./view/ContactsShow";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    { path: '/', component: ExampleComponent },
    { path: '/contacts/create', component: ContactsCreate },
    { path: '/contacts/:id', component: ContactsShow },
  ],
  mode: 'history'

});
