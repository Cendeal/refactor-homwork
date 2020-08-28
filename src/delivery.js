function isMAOrCT(anOrder) {
    return [
        'MA',
        'CT',
    ].includes(anOrder.deliveryState);
}

function isNYorNH(anOrder) {
    return [
        'NY',
        'NH',
    ].includes(anOrder.deliveryState);
}

function isMAOrCTOrNY(anOrder) {
    return [
        'MA',
        'CT',
        'NY',
    ].includes(anOrder.deliveryState);
}

function isMEOrNH(anOrder) {
    return [
        'ME',
        'NH',
    ].includes(anOrder.deliveryState);
}

function deliveryDate(anOrder, isRush) {
    if (isRush) {
        let deliveryTime;
        if (isMAOrCT(anOrder)) {
            deliveryTime = 1;
        } else if (isNYorNH(anOrder)) {
            deliveryTime = 2;
        } else {
            deliveryTime = 3;
        }
        return anOrder.placedOn.plusDays(1 + deliveryTime);
    } else {
        let deliveryTime;
        if (isMAOrCTOrNY(anOrder)) {
            deliveryTime = 2;
        } else if (isMEOrNH(anOrder)) {
            deliveryTime = 3;
        } else {
            deliveryTime = 4;
        }
        return anOrder.placedOn.plusDays(2 + deliveryTime);
    }
}

module.exports = {
    deliveryDate
}
