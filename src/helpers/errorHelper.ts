export const getErrorMessage = (error: unknown, defaultMessage: string = 'An error occurred'): string => {
  return error instanceof Error ? error.message : defaultMessage;
};
