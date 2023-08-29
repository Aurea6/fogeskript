import noop from "../functions/noop"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$memberAddRoles",
    description: "Adds roles to a member and returns bool",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull member from",
            rest: false,
            type: ArgType.Guild,
            required: true
        },
        {
            name: "user ID",
            description: "The user to add roles to",
            rest: false,
            type: ArgType.Member,
            required: true
        },
        {
            name: "roles",
            description: "The roles to add",
            rest: true,
            type: ArgType.Role,
            pointer: 0
        }
    ],
    async execute(ctx, [ guild, member, roles ]) {
        member ??= ctx.member!
        const d = await member.roles.add(roles).catch(noop)

        return Return.success(!!d)
    },
})