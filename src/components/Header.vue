<script setup lang="ts">
import { ref } from "vue";
import Menubar from "primevue/menubar";
import { useRouter } from "vue-router";

const router = useRouter();

const items = ref([
  {
    label: "Monthly",
    icon: "pi pi-home",
    command: () => {
      router.push("/");
    },
  },
  {
    label: "Weekly",
    icon: "pi pi-star",
    command: () => {
      router.push("/weekly");
    },
  },
  {
    label: "Graph",
    icon: "pi pi-search",
    command: () => {
      router.push("/graph");
    },
  },
  {
    label: "Settings",
    icon: "pi pi-envelope",
    command: () => {
      router.push("/settings");
    },
  },
]);
</script>

<template>
  <Menubar :model="items" class="top" />
</template>

<style scoped></style>
