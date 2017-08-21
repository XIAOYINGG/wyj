const asyncMw = ({ dispatch }) => next => action => {
    const {
        type,
        ASYNC,
        payload,
        bindResolve = () => {},
        bindReject = () => {}
    } = action;

    if(!ASYNC) return next(action);

    dispatch({
        type,
        payload
    });

    return new Promise((resolve, reject) => {
        bindResolve(resolve);
        bindReject(reject);
    });
};

export default asyncMw