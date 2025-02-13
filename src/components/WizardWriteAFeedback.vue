<template>
  <div class="flex flex-col items-center justify-center w-full my-5">
    <textarea
      v-model="state.feedback"
      class="w-full rounded-lg border-2 border-gray-300 border-solid h-24 p-2 resize-none focus:outline-none"></textarea>

    <button
      :disabled="submitButtonIsDisabled"
      :class="{
        'opacity-50': state.isLoading,
        'opacity-50 bg-gray-100 text-gray-500': submitButtonIsDisabled,
        'bg-brand-main text-white': !submitButtonIsDisabled,
      }"
      @click="submitAFeedback"
      class="rounded-lg font-black mt-3 flex flex-col justify-center items-center py-2 w-full cursor-pointer focus:outline-none transition-all duration-200">
      <icon
        v-if="state.isLoading"
        name="loading"
        class="animate-spin"
        color="white" />
      <template v-else> Enviar Feedback </template>
    </button>
  </div>
</template>
<script lang="ts">
import { computed, ComputedRef, defineComponent, reactive } from "vue";
import useStore from "../hooks/store";
import useNavigation from "../hooks/navigation";
import services from "../services";
import { setMessage } from "../store";

type State = {
  feedback: string;
  isLoading: boolean;
  hasError: Error | null;
};

interface SetupReturn {
  state: State;
  submitButtonIsDisabled: ComputedRef<boolean>;
  submitAFeedback(): void;
}

export default defineComponent({
  setup(): SetupReturn {
    const store = useStore();
    const { setErrorState, setSuccessState } = useNavigation();
    const state = reactive<State>({
      feedback: "",
      isLoading: false,
      hasError: null,
    });

    const submitButtonIsDisabled = computed<boolean>(() => {
      return !state.feedback.length;
    });

    function handleError(error: Error) {
      state.hasError = error;
      state.isLoading = false;
      setErrorState();
    }

    async function submitAFeedback(): Promise<void> {
      setMessage(state.feedback);
      state.isLoading = true;
      try {
        console.log(store);
        const response = await services.feedbacks.create({
          type: store.feedbackType,
          text: store.message,
          page: store.currentPage,
          apiKey: store.apiKey,
          device: window.navigator.userAgent,
          fingerprint: store.fingerPrint,
        });

        if (response.errors) {
          setErrorState();
        } else {
          setSuccessState();
        }

        state.isLoading = false;
      } catch (error) {
        handleError(error);
      }
    }

    return {
      submitButtonIsDisabled,
      state,
      submitAFeedback,
    };
  },
});
</script>
<style></style>
