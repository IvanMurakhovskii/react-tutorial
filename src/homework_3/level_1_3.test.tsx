import { omit } from './level_1_3';

const orderProducing = {
    state: "producing",
    sum: 1,
    workerId: 2,
    suppliesSum: 3
};

describe("omit", () => {
    it("orderProducing without workerId", () => {

        const orderProducingExpocted = {
            state: "producing",
            sum: 1,
            suppliesSum: 3
        };

        expect(omit(orderProducing, "workerId")).toEqual(orderProducingExpocted);
    });

    it("orderProducing without sum", () => {

        const orderProducingExpocted = {
            state: "producing",
            workerId: 2,
            suppliesSum: 3
        };

        expect(omit(orderProducing, "sum")).toEqual(orderProducingExpocted);
    });
});
