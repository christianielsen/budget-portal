<script setup lang="ts">
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { computed } from "vue";
import { auth } from "../firebase";

  setup() {
    const store = useStore();
    const router = useRouter();

    auth.onAuthStateChanged((user) => {
      store.dispatch("fetchUser", user);
    });

    const user = computed(() => {
      return store.getters.user;
    });

    const signOut = async () => {
      await store.dispatch("logOut");
      router.push("/");
    };

    return { user, signOut };
  }
</script>

<template><h1>monthly view</h1></template>

<style scoped></style>
