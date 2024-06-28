"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$enchant",
    version: "1.0.0",
    description: "Enchants a item and set the value",
    unwrap: true,
    args: [
        {
            name: "item_name",
            description: "The item name for the enchant",
            required: true,
            type: structures_1.ArgType.String,
            rest: false,
        },
        {
            name: "enchant_name",
            description: "The enchantment name to be added in xyz item",
            required: true,
            type: structures_1.ArgType.String,
            rest: false,
        },
    ],
    brackets: true,
    execute(ctx, [item_name, enchant_name]) {
        ctx.container.embed(0).setDescription("Successfully enchanted" + item_name + "by using" + enchant_name || null)
        return this.success()
    },
});
//# sourceMappingURL=enchant.js.map
