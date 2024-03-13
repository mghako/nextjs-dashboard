import { cn } from "@/lib/utils";
import React from "react";

// {label, icon, amount, description}
const Card = (props) => {
    return (
        <CardContent>
            <section className="flex justify-between gap-2">
                <p className="text-sm">{props.label}</p>
                <props.icon className="h-4 w-4 text-gray-400" />
            </section>
            <section className="flex flex-col gap-1">
                <h2 className="text-2xl font-semibold">{props.amount}</h2>
                <p className="text-xs text-ray-500">{props.description}</p>
            </section>
        </CardContent>
    )
}



const CardContent = (props) => {
    return (
        <div {...props} className={cn("flex w-full flex-col gap-3 rounded-xl border p-5 shadow ", props.className)} />
    )
}
export {Card, CardContent};