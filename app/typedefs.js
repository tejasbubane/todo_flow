// @flow

export type TodoType = {
  id: number,
  text: string,
  completed: boolean
};

export type FilterType = "SHOW_ALL" | "COMPLETED" | "PENDING";
