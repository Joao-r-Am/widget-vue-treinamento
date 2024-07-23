import useStore from "./store";
import { setCurrentComponent, setFeedbackType } from "../store";

export interface Navigation {
  next(): void;
  back(): void;
  setErrorState(): void;
  setSuccessState(): void;
}

export default function useNavigation(): Navigation {
  const store = useStore();

  function setErrorState(): void {
    setCurrentComponent("WizardError");
  }

  function setSuccessState(): void {
    setCurrentComponent("WizardSuccess");
  }

  function next() {
    if (store.currentComponent === "WizardSelectFeedbackType") {
      setCurrentComponent("WizardWriteAFeedback");
    }
  }

  function back() {
    if (store.currentComponent === "WizardWriteAFeedback") {
      setCurrentComponent("WizardSelectFeedbackType");
      setFeedbackType("");
    }
  }

  return {
    next,
    back,
    setErrorState,
    setSuccessState,
  };
}
