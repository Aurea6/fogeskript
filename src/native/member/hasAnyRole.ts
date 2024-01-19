import { PermissionsString } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$hasAnyRole",
    version: "1.1.0",
    description: "Returns whether given member has any role",
    unwrap: true,
    aliases: [
        "$memberHasAnyRole"
    ],
    brackets: true,
    output: ArgType.Boolean,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull member from",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "user ID",
            description: "The user to check for roles",
            rest: false,
            type: ArgType.Member,
            required: true,
            pointer: 0,
        },
        {
            name: "roles",
            description: "The roles to check for",
            rest: true,
            type: ArgType.Role,
            required: true,
            pointer: 0
        },
    ],
    execute(ctx, [, member, roles]) {
        return this.success(member.roles.cache.hasAny(...roles.map(x => x.id)))
    },
})
