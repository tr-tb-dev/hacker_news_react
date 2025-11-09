export interface Action<T = unknown> {
  type: string;
  payload?: T;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export interface ActionCreator<T = unknown> {
  (payload?: T): Action<T>;
  type: string;
}

export function makeActionCreator<T = unknown>(type: string): ActionCreator<T> {
  const fn = (payload?: T): Action<T> => ({
    type,
    payload,
  });
  Object.defineProperty(fn, 'type', { value: type, writable: false });
  return fn as ActionCreator<T>;
}
