<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer v-if="$q.platform.is.mobile">
      <q-tabs class="bg-indigo-6" align="justify">
        <q-route-tab
          exact
          to="/experience"
          label="Experience"
          class="text-white"
        />
        <q-route-tab
          exact
          to="/education"
          label="Education"
          class="text-white"
        />
        <q-route-tab exact to="/contact" label="Contact" class="text-white" />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",
  components: {},
  data() {
    return {};
  },
};
</script>
