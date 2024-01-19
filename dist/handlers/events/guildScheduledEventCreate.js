"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../../core");
const DiscordEventHandler_1 = require("../../structures/extended/DiscordEventHandler");
exports.default = new DiscordEventHandler_1.DiscordEventHandler({
    name: "guildScheduledEventCreate",
    version: "1.4.0",
    description: "This event is called when a schedule event is created",
    listener: async function (m) {
        const commands = this.commands.get("guildScheduledEventCreate");
        for (const command of commands) {
            core_1.Interpreter.run({
                obj: m,
                command,
                client: this,
                states: {
                    scheduledEvent: {
                        new: m,
                        old: m
                    },
                },
                data: command.compiled.code,
                args: [],
            });
        }
    },
    intents: ["GuildScheduledEvents"],
});
//# sourceMappingURL=guildScheduledEventCreate.js.map