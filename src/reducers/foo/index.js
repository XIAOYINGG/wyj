//这个只是例子，没啥用
const defaultState = {
    count: 1
};

const foo = (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default foo;