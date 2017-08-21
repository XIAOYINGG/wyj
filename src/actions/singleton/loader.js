import * as actions from './definations'

const showLoader = (id) => {
    return ({
        type: actions.SHOW_LOADER,
        id
    });
};

const hideLoader = (id) => {
    return ({
        type: actions.HIDE_LOADER,
        id
    });
};

export { showLoader, hideLoader }