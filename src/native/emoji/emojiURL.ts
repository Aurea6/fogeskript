import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$emojiURL",
    version: "1.0.0",
    description: "Returns the emoji url",
    brackets: false,
    unwrap: true,
    output: ArgType.URL,
    args: [
        {
            name: "emoji ID",
            description: "The emoji id to return its url",
            rest: false,
            type: ArgType.GuildEmoji,
            required: true,
        },
    ],
    execute(ctx, [emoji]) {
        emoji ?? ctx.emoji
        return this.success(emoji?.url)
    },
})