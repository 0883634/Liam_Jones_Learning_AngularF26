export function whiteSpaceValidator(control: any) {
  if (control.value.trim() == '') {
    return {whitespace:true};
  } else {
    return null;
  }
}
