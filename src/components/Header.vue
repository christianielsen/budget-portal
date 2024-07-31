<script setup lang="ts">
import { ref } from "vue";
import Menubar from "primevue/menubar";
import { useRouter } from "vue-router";

const router = useRouter();

const items = ref([
  {
    label: "Monthly",
    icon: "fa-solid fa-calendar",
    command: () => {
      router.push("/");
    },
  },
  {
    label: "Weekly",
    icon: "fa-solid fa-7",
    command: () => {
      router.push("/weekly");
    },
  },
  {
    label: "Graph",
    icon: "fa-solid fa-chart-simple",
    command: () => {
      router.push("/graph");
    },
  },
  {
    label: "Settings",
    icon: "fa-solid fa-gear",
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
