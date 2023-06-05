type Theme = {
  "--primary": string;
  "--primary-hover": string;
  "--primary-focus": string;
  "--primary-inverse": string;
};

type ThemesConfig = {
  [key: string]: Theme;
};

const ThemesConfig: ThemesConfig = {
  red: {
    "--primary": "#e53935",
    "--primary-hover": "#f44336",
    "--primary-focus": "rgba(229, 57, 53, 0.25)",
    "--primary-inverse": "#fff",
  },
  pink: {
    "--primary": "#d81b60",
    "--primary-hover": "#e91e63",
    "--primary-focus": "rgba(216, 27, 96, 0.25)",
    "--primary-inverse": "#fff",
  },
  purple: {
    "--primary": "#8e24aa",
    "--primary-hover": "#9c27b0",
    "--primary-focus": "rgba(142, 36, 170, 0.25)",
    "--primary-inverse": "#fff",
  },
  "deep-purple": {
    "--primary": "#5e35b1",
    "--primary-hover": "#673ab7",
    "--primary-focus": "rgba(94, 53, 177, 0.25)",
    "--primary-inverse": "#fff",
  },
  indigo: {
    "--primary": "#3949ab",
    "--primary-hover": "#3f51b5",
    "--primary-focus": "rgba(57, 73, 171, 0.25)",
    "--primary-inverse": "#fff",
  },
  blue: {
    "--primary": "#1e88e5",
    "--primary-hover": "#2196f3",
    "--primary-focus": "rgba(30, 136, 229, 0.25)",
    "--primary-inverse": "#fff",
  },
  "light-blue": {
    "--primary": "#039be5",
    "--primary-hover": "#03a9f4",
    "--primary-focus": "rgba(3, 155, 229, 0.25)",
    "--primary-inverse": "#fff",
  },
  cyan: {
    "--primary": "#00acc1",
    "--primary-hover": "#00bcd4",
    "--primary-focus": "rgba(0, 172, 193, 0.25)",
    "--primary-inverse": "#fff",
  },
  teal: {
    "--primary": "#00897b",
    "--primary-hover": "#009688",
    "--primary-focus": "rgba(0, 137, 123, 0.25)",
    "--primary-inverse": "#fff",
  },
  green: {
    "--primary": "#43a047",
    "--primary-hover": "#4caf50",
    "--primary-focus": "rgba(67, 160, 71, 0.25)",
    "--primary-inverse": "#fff",
  },
  "light-green": {
    "--primary": "#7cb342",
    "--primary-hover": "#8bc34a",
    "--primary-focus": "rgba(124, 179, 66, 0.25)",
    "--primary-inverse": "#fff",
  },
  lime: {
    "--primary": "#c0ca33",
    "--primary-hover": "#cddc39",
    "--primary-focus": "rgba(192, 202, 51, 0.25)",
    "--primary-inverse": "rgba(0, 0, 0, 0.75)",
  },
  yellow: {
    "--primary": "#fdd835",
    "--primary-hover": "#ffeb3b",
    "--primary-focus": "rgba(253, 216, 53, 0.25)",
    "--primary-inverse": "rgba(0, 0, 0, 0.75)",
  },
  amber: {
    "--primary": "#ffb300",
    "--primary-hover": "#ffc107",
    "--primary-focus": "rgba(255, 179, 0, 0.25)",
    "--primary-inverse": "rgba(0, 0, 0, 0.75)",
  },
  orange: {
    "--primary": "#fb8c00",
    "--primary-hover": "#ff9800",
    "--primary-focus": "rgba(251, 140, 0, 0.25)",
    "--primary-inverse": "#fff",
  },
  "deep-orange": {
    "--primary": "#f4511e",
    "--primary-hover": "#ff5722",
    "--primary-focus": "rgba(244, 81, 30, 0.25)",
    "--primary-inverse": "#fff",
  },
  grey: {
    "--primary": "#757575",
    "--primary-hover": "#9e9e9e",
    "--primary-focus": "rgba(117, 117, 117, 0.25)",
    "--primary-inverse": "#fff",
  },
  "blue-grey": {
    "--primary": "#546e7a",
    "--primary-hover": "#607d8b",
    "--primary-focus": "rgba(84, 110, 122, 0.25)",
    "--primary-inverse": "#fff",
  },
};

const ThemePrimaryColors: { name: string; value: string }[] = [
  { name: "red", value: "#f44336" },
  { name: "pink", value: "#d81b60" },
  { name: "purple", value: "#8e24aa" },
  { name: "deep-purple", value: "#5e35b1" },
  { name: "indigo", value: "#3949ab" },
  { name: "blue", value: "#1e88e5" },
  { name: "light-blue", value: "#039be5" },
  { name: "cyan", value: "#00acc1" },
  { name: "teal", value: "#00897b" },
  { name: "green", value: "#43a047" },
  { name: "light-green", value: "#7cb342" },
  { name: "lima", value: "#c0ca33" },
  { name: "yellow", value: "#fdd835" },
  { name: "amber", value: "#ffb300" },
  { name: "orange", value: "#fb8c00" },
  { name: "deep-orange", value: "#f4511e" },
  { name: "grey", value: "#757575" },
  { name: "blue-grey", value: "#546e7a" },
];

export type { ThemesConfig };
export { ThemePrimaryColors };
export default ThemesConfig;
