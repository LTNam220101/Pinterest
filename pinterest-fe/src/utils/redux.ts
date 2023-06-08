import { Action } from 'interfaces';

export const COMMON_TOGGLE_LOADING = 'COMMON_TOGGLE_LOADING';


export const createReducer = <T>(success: string, failure: string, clear?: string, ...arg: Array<{
  action: string, func: (
    state: {
      success: boolean;
      response?: Record<string, unknown | string | number | null>;
      request?: Record<string, unknown | string | number | null>;
      error?: Record<string, unknown | string | number | null>;
      componentId?: string;
      fromCallback?: boolean;
    } | null,
    payload: T & { success: boolean; }) => {
      success: boolean;
      response?: Record<string, unknown | string | number | null>;
      request?: Record<string, unknown | string | number | null>;
      error?: Record<string, unknown | string | number | null>;
      componentId?: string;
      fromCallback?: boolean;
    } | null
}>) => {
  return (state: {
    success: boolean;
    response?: Record<string, unknown | string | number | null>;
    request?: Record<string, unknown | string | number | null>;
    error?: Record<string, unknown | string | number | null>;
    componentId?: string;
    fromCallback?: boolean;
  } | null = null, action: Action<T & { success: boolean; }>): {
    success: boolean;
    response?: Record<string, unknown | string | number | null>;
    request?: Record<string, unknown | string | number | null>;
    error?: Record<string, unknown | string | number | null>;
    componentId?: string;
    fromCallback?: boolean;
  } | null => {
    if (arg.length) {
      for (let index = 0; index < arg.length; index++) {
        const element = arg[index];
        if (action.type === element.action) {
          return element.func(state, action.payload);
        }
      }
    }
    switch (action.type) {
      case success:
        return { ...action.payload, success: true };
      case failure:
        return { ...action.payload, response: undefined, success: false };
      case clear:
        return null;
      default:
        return state;
    }
  };
};

export const nullAsEqual = <T>(left: T, right: T) => {
  if (left !== null && left !== right) {
    return false;
  }
  return true;
};