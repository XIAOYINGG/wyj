import * as actions from './definations'

const showAlert = ({
    payload = { title: '操作成功', btnText: '确认' },
    bindResolve,
    bindReject
}) => {
    return {
        type: actions.SHOW_ALERT,
        ASYNC: true,
        bindResolve,
        bindReject,
        payload
    };
};

const hideAlert = () => {
    return {
        type: actions.HIDE_ALERT
    };
};

export {
    showAlert,
    hideAlert
}