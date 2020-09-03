import { getOrderState, Order } from './level_1_2';

const orderProducing: Order = {
    state: "producing",
    sum: 1,
    workerId: 2,
    suppliesSum: 3,
    produceEstimate: new Date()
};

const orderInWork: Order = {
    state: "inWork",
    sum: 1,
    workerId: 1
};

describe("getOrderState", () => {

    it("order producing", () => {
        expect(getOrderState(orderProducing))
            .toEqual("producing");
    });

    it("order inWork", () => {
        expect(getOrderState(orderInWork))
            .toEqual("inWork");
    });
});