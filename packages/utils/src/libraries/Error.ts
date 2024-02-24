
type ErrorHandlerOption = Partial<{
  keep: boolean;
}>;

export const constTryCatch = <T>(assignDefault: () => T, assignCatch: T, withLog = true): T => {
  try {
    return assignDefault();
  }
  catch (e) {
    if (withLog) console.error(e);
    return assignCatch;
  }
};

export const errorHandler = <F extends (...args: any[]) => any, E extends (error: any, ...args: any[]) => any>(
  wrapped: F,
  reject: E,
  options: ErrorHandlerOption = {},
) => (...args: Parameters<F>): ReturnType<F | E> => {
    try { return wrapped(...args); }
    catch (e) {
      const ret = reject(e, ...args);
      if (options.keep) throw (e);
      return ret;
    }
  };

export const asyncErrorHandler = <F extends (...args: any[]) => any, E extends (error: any, ...args: any[]) => any>(
  wrapped: F,
  reject: E,
  options: ErrorHandlerOption = {},
) => async (...args: Parameters<F>): Promise<ReturnType<F | E>> => {
    try { return await wrapped(...args) as any; }
    catch (e: any) {
      const ret = await reject(e, ...args);
      if (options.keep) throw (e);
      return ret as any;
    }
  };


// LOGGER
export const errorLogger = <F extends (...args: any[]) => any>(
  wrapped: F,
  options?: ErrorHandlerOption,
) => errorHandler(wrapped, (e) => console.error(e.message), options);

export const asyncErrorLogger = <F extends (...args: any[]) => any>(
  wrapped: F,
  options?: ErrorHandlerOption,
) => asyncErrorHandler(wrapped, (e) => console.error(e.message), options);


// AVOIDER
export const errorAvoider = <F extends (...args: any[]) => any>(
  wrapped: F,
) => errorHandler(wrapped, () => {});

export const asyncErrorAvoider = <F extends (...args: any[]) => any>(
  wrapped: F,
) => asyncErrorHandler(wrapped, () => {});

// BOOLEAN
export const errorBoolean = <F extends (...args: any[]) => any>(
  wrapped: F,
) => errorHandler(wrapped, () => false);

export const asyncErrorBoolean = <F extends (...args: any[]) => any>(
  wrapped: F,
) => asyncErrorHandler(wrapped, () => false);


// DEFAULT
export const errorWithDefault = <F extends (...args: any[]) => any, V>(
  wrapped: F,
  defaultValue: V | ((error: any, ...args: any[]) => V),
  options?: ErrorHandlerOption,
) => errorHandler(wrapped,
    typeof defaultValue === 'function' ? defaultValue as ((error: any, ...args: any[]) => V) : (() => defaultValue) as (() => V),
    options,
  );

export const asyncErrorWithDefault = <F extends (...args: any[]) => any, V>(
  wrapped: F,
  defaultValue: V | ((error: any, ...args: any[]) => V),
  options?: ErrorHandlerOption,
) => asyncErrorHandler(wrapped,
    typeof defaultValue === 'function' ? defaultValue as ((error: any, ...args: any[]) => V) : (() => defaultValue) as (() => V),
    options,
  );
