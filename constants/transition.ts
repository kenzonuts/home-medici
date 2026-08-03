/**
 * Transition duration tokens (ms).
 */
export const transition = {
  fast: 150,
  normal: 200,
  slow: 300,
} as const;

export type TransitionToken = keyof typeof transition;
