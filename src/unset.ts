// FILE CONTAINS WORK IN PROGRESS FUNCTIONS

/**
 * @returns {boolean} Checks if the a variable is set i.e not null/undefined
 */
export const isVarSet = (variable: any): boolean =>
  typeof variable !== "undefined" && variable !== null;

/**
 * @returns {string } Format Error into Human readable string
 */
export const formatError = (errObj: any): string => {
  const validationErrors = errObj.response?.data?.errors; // Laravel
  const compositeErrors: string[] = [];
  if (errObj.response) {
    if (validationErrors) {
      Object.keys(validationErrors).forEach((key) => {
        compositeErrors.push(...validationErrors[key]);
      });
      return compositeErrors.join("\n");
    }
    return errObj.response.data.message;
  }
  return errObj;
};

export const fullName = (user: Record<string, any>) =>
  user.last_name && user.last_name !== "-"
    ? `${user.first_name} ${user.last_name}`
    : user.first_name;

export const copyText = (text: string): void => {
  // if (process.) {
  const inputField = document.createElement("input");
  document.body.appendChild(inputField);
  inputField.style.visibility = "hidden";
  inputField.value = text;
  inputField.select();
  inputField.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(inputField.value);
  // }
};

export const toggleBodyOverflow = (shouldOverflow: boolean | undefined) => {
  if (shouldOverflow === true) document.body.classList.add("overflow-hidden");

  if (shouldOverflow === false)
    document.body.classList.remove("overflow-hidden");

  if (shouldOverflow === undefined)
    document.body.classList.toggle("overflow-hidden");
};
