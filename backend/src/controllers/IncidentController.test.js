const IncidentController = require("./IncidentController")
// @ponicode
describe("IncidentController.create", () => {
    test("0", async () => {
        await IncidentController.create({ body: false, headers: { authorization: 1234567890123456789012345678901234567890 } }, "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
    })

    test("1", async () => {
        await IncidentController.create({ body: false, headers: { authorization: "zaCELgL. 0imfnc8mVLWwsAawjYr4Rx-Af50DDqtlx" } }, "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
    })

    test("2", async () => {
        await IncidentController.create({ body: true, headers: { authorization: 1234567890123456789012345678901234567890 } }, "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
    })

    test("3", async () => {
        await IncidentController.create({ body: true, headers: { authorization: "zaCELgL. 0imfnc8mVLWwsAawjYr4Rx-Af50DDqtlx" } }, "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
    })

    test("4", async () => {
        await IncidentController.create({ body: false, headers: { authorization: "someRandomApiKey" } }, "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
    })

    test("5", async () => {
        await IncidentController.create(undefined, undefined)
    })
})

// @ponicode
describe("IncidentController.delete", () => {
    test("0", async () => {
        await IncidentController.delete({ params: "https://api.telegram.org/", headers: { authorization: "someRandomApiKey", ong_id: "user_name" } }, 16)
    })

    test("1", async () => {
        await IncidentController.delete({ params: "https://api.telegram.org/bot", headers: { authorization: "zaCELgL. 0imfnc8mVLWwsAawjYr4Rx-Af50DDqtlx", ong_id: "user name" } }, 256)
    })

    test("2", async () => {
        await IncidentController.delete({ params: "https://croplands.org/app/a/confirm?t=", headers: { authorization: "someRandomApiKey", ong_id: "user123" } }, 80)
    })

    test("3", async () => {
        await IncidentController.delete({ params: "https://api.telegram.org/", headers: { authorization: "someRandomApiKey", ong_id: "user_name" } }, 2)
    })

    test("4", async () => {
        await IncidentController.delete({ params: "https://croplands.org/app/a/reset?token=", headers: { authorization: "someRandomApiKey", ong_id: "user name" } }, 11)
    })

    test("5", async () => {
        await IncidentController.delete({}, NaN)
    })
})
