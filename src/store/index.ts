import { reactive, readonly } from "vue";

export type StoreState = {
  currentComponent: string;
  message: string;
  feedbackType: string;
  fingerPrint: string;
  apiKey: string;
  currentPage: string;
};

const initialState: StoreState = {
  currentComponent: "WizardSelectFeedbackType",
  message: "",
  feedbackType: "",
  fingerPrint: "",
  apiKey: "",
  currentPage: "",
};

const state = reactive<StoreState>({ ...initialState });

export function setCurrentComponent(component: string): void {
  state.currentComponent = component;
}

export function setMessage(message: string): void {
  state.message = message;
}

export function setFeedbackType(type: string): void {
  state.feedbackType = type;
}

export function setFingerPrint(print: string): void {
  state.fingerPrint = print;
}

export function setApiKey(apikey: string): void {
  state.apiKey = apikey;
}

export function setCurrentPage(page: string): void {
  state.currentPage = page;
}

export function resetStore(): void {
  setCurrentComponent(initialState.currentComponent);
  setMessage(initialState.message);
  setFeedbackType(initialState.feedbackType);
  setFingerPrint(initialState.fingerPrint);
  setApiKey(initialState.apiKey);
  setCurrentPage(initialState.currentPage);
}

export default readonly(state);
