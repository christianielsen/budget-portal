<template>
  <div>
    <h2>Log In</h2>
    <form @submit.prevent="login">
      <input v-model="email" type="email" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Password" />
      <button type="submit">Log In</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex/types/index.js";

export default defineComponent({
  setup() {
    const email = ref<string>("");
    const password = ref<string>("");
    const error = ref<string | null>(null);

    const store = useStore();
    const router = useRouter();

    const login = async () => {
      try {
        await store.dispatch("logIn", {
          email: email.value,
          password: password.value,
        });
        router.push("/");
      } catch (err) {
        error.value = (err as Error).message;
      }
    };
    return { login, email, password, error };
  },
});
</script>
