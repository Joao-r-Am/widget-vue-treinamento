<template>
  <component
    :is="store.currentComponent"
    @select-feedback-type="handleSelectFeedbackType"
    @next="next" />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import useStore from "../hooks/store";
import { setFeedbackType, StoreState } from "../store";
import useNavigation, { Navigation } from "../hooks/navigation";
import WizardSelectFeedbackType from "./WizardSelectFeedbackType.vue";
import WizardWriteAFeedback from "./WizardWriteAFeedback.vue";
import WizardSuccess from "./WizardSuccess.vue";
import WizardError from "./WizardError.vue";

interface SetupeReturn {
  store: StoreState;
  handleSelectFeedbackType(type: string): void;
  next: Navigation["next"];
}

export default defineComponent({
  components: {
    WizardSelectFeedbackType,
    WizardWriteAFeedback,
    WizardSuccess,
    WizardError,
  },
  setup(): SetupeReturn {
    const store = useStore();
    const { next } = useNavigation();

    function handleSelectFeedbackType(type: string): void {
      setFeedbackType(type);
    }
    return {
      store,
      handleSelectFeedbackType,
      next,
    };
  },
});
</script>
<style></style>
