import Vue from 'vue';
import VueRouter from 'vue-router';
import ExampleComponent from "./components/ExampleComponent";
import ContactsCreate from "./view/ContactsCreate";
import ContactsShow from "./view/ContactsShow";
import ContactsEdit from "./view/ContactsEdit";
import ContactsIndex from "./view/ContactsIndex";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    { path: '/', component: ExampleComponent },
    { path: '/contacts', component: ContactsIndex },
    { path: '/contacts/create', component: ContactsCreate },
    { path: '/contacts/:id', component: ContactsShow },
    { path: '/contacts/:id/edit', component: ContactsEdit },
  ],
  mode: 'history'

});
