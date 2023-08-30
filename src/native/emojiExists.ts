import noop from "../functions/noop"
import { ArgType, CompiledFunction, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$emojiExists",
    description: "Returns whether an emoji id exists",
    unwrap: true,
    brackets: true,
    args: [ 
        {
            name: "emoji ID",
            description: "The emoji to check",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    async execute(ctx, [ id ]) {
        return Return.success(
            CompiledFunction.IdRegex.test(id) &&
            ctx.client.emojis.cache.has(id)
        )
    },
})