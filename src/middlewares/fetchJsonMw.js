const fetchJsonMw = ({ dispatch, getState }) => next => action => {
    const {
        types,
        fetchFunc,
        shouldFetch = () => true,
        payload = {}
    } = action;

    if (!types) {
        return next(action);
    }

    if (
        Object.prototype.toString.call(types) !== '[object Array]' ||
        types.length !== 3 ||
        !types.every(type => typeof type === 'string')
    ) {
        throw new Error('Expected an array of three string types.')
    }

    if (typeof fetchFunc !== 'function') {
        throw new Error('Expected fetchFunc to be a function.');
    }

    if(!shouldFetch(getState())) {
        return {
            status: 'resolved',
            value: undefined
        };
    }

    const [requestType, successType, failType] = types;

    dispatch(Object.assign({}, payload, {
        type: requestType
    }));

    return fetchFunc()
        // .then(response => {
        //     return new Promise(resolve => {
        //         setTimeout(() => {
        //             resolve(response);
        //         }, 1500); // for test
        //     })
        // })
        .then(response => response.json())
        .then(json => {
            console.log("***********");
            dispatch(Object.assign({}, payload, {
                type: successType,
                json,
                timestamp: Date.now()
            }));
            console.log("##dispatch");
            return {
                status: 'resolved',
                value: json
            };
        })
        .catch(error => {
            dispatch(Object.assign({}, payload, {
                type: failType,
                error
            }));
            return {
                status: 'rejected',
                value: error
            };
        })
};

export default fetchJsonMw