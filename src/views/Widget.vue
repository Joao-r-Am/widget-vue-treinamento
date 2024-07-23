<template>
  <teleport to="body">
    <component
      :is="state.component"
      @open-box="handleOpenBox"
      @close-box="handleCloseBox" />
  </teleport>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from "vue";
import Standby from "./Standby.vue";
import Box from "./Box.vue";
import useIframeControl from "../hooks/iframe";

type State = {
  component: string;
};

interface SetupReturn {
  state: State;
  handleOpenBox(): void;
  handleCloseBox(): void;
}

export default defineComponent({
  components: { Standby, Box },

  setup(): SetupReturn {
    const iframe = useIframeControl();
    const state = reactive<State>({
      component: "Standby",
    });

    onMounted(() => {
      iframe.updateCoreValueOnStore();
    });

    function handleCloseBox(): void {
      iframe.notifyClose();
      state.component = "Standby";
    }

    function handleOpenBox(): void {
      iframe.notifyOpen();
      state.component = "Box";
    }
    return {
      state,
      handleCloseBox,
      handleOpenBox,
    };
  },
});
</script>

<style></style>
