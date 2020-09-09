import { getUserOrderStates } from './level_1_1';

describe("getUserOrderStates", () => {
    it("initial, inWork, buyingSupplies, producing, fullfilled", () => {
        expect(getUserOrderStates(["initial", "inWork", "buyingSupplies", "producing", "fullfilled"]))
            .toEqual(["initial", "inWork", "fullfilled"]);
    });
});
