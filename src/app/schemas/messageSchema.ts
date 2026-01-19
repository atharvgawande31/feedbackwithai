import {z}  from "zod";

export const mesageSchema = z.object({
     content: z
     .string()
     .min(10,  {message: "Content must be atleast 10 characters" })
     .max(300, {message : "Content not more than 300 characters "})
})