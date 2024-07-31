<template>
  <div>
    <h2>Sign Up</h2>
    <form @submit.prevent="register">
      <input v-model="email" type="email" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Password" />
      <button type="submit">Sign Up</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex/types/index.js";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const email = ref<string>("");
    const password = ref<string>("");
    const error = ref<string | null>(null);

    const store = useStore();
    const router = useRouter();

    const register = async () => {
      try {
        await store.dispatch("register", {
          email: email.value,
          password: password.value,
        });
        router.push("/");
      } catch (err) {
        error.value = (err as Error).message;
      }
    };

    return { register, email, password, error };
  },
});
</script>
