export type TToast = {
  id?: string;
  type: "info" | "success" | "warning" | "danger";
  title?: string | null;
  message: string;
};
