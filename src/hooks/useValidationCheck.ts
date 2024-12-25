import { Validation } from "@/types/error";
import { useState } from "react";

export default function useValidationCheck(testFn: () => Validation) {
  const [errorMessage, setErrorMessage] = useState("");
  function checkValidation() {
    const testResult = testFn();
    if (!testResult.result && testResult.errorMsg) {
      setErrorMessage(testResult?.errorMsg);
      return false;
    }
    setErrorMessage("");
    return true;
  }
  return { errorMessage, checkValidation };
}
