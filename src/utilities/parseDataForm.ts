const parseDataForm = (
  event: HTMLFormElement
): {
  [k: string]: string;
} => Object.fromEntries(new FormData(event.target as any)) as any;

export default parseDataForm;
