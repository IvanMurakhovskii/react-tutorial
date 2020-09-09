import { filterOnlyInitialAndInWorkOrder, Order } from './level_2_1';

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

describe("filterOnlyInitialAndInWorkOrder", () => {

    it("order producing", () => {
        expect(filterOnlyInitialAndInWorkOrder(orderProducing))
            .toEqual(null);
    });

    it("order inWork", () => {
        expect(filterOnlyInitialAndInWorkOrder(orderInWork))
            .toEqual("inWork");
    });
});