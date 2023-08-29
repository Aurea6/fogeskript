import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$setGuildBanner",
    description: "Sets a guild banner, returns boolean",
    unwrap: true,
    args: [
        {
            name: "guild ID",
            rest: false,
            type: ArgType.Guild,
            required: true,
            description: "The guild to set banner on"
        },
        {
            name: "url",
            description: "The new banner",
            rest: false,
            type: ArgType.String
        }
    ],
    brackets: true,
    async execute(ctx, [ guild, banner ]) {
        return Return.success(
            await guild.setBanner(banner || null).catch(() => false) !== false
        ) 
    },
})