const loggerMw = store => next => action => {
    if(!action.type) return next(action);
    console.group(action.type);
    console.info('ACTION:: ', action);
    let result = next(action);
    let nextState = store.getState();
    console.log('  NEXT:: ', nextState);
    console.groupEnd(action.type);
    return result;
};

export default loggerMw