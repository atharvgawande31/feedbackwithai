import {z}  from "zod";

export const acceptMessage = z.object({
    isAcceptMessages: z.boolean()
})