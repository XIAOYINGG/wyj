const getNowFormatDate = ()=> {
    const date = new Date();
    let month = date.getMonth() + 1;
    let strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    return month + "-" + strDate
        + " " + date.getHours() + ":" + date.getMinutes();
};

export { getNowFormatDate }