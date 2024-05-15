import React, { ComponentProps } from "react";
import { twMerge } from 'tailwind-merge'


interface InputPrefixProps extends ComponentProps<'div'> { }

export function InputPrefix(props: InputPrefixProps) {
    return (
        <div {...props} />
    )
}

interface InputControlProps extends ComponentProps<'input'> { }


export const InputControl = React.forwardRef<HTMLInputElement, InputControlProps>((props, ref) => {
    return (
        <input
            ref={ref}
            className="flex-1 border-0 bg-transparent p-0 outline-none placeholder-zinc-500 text-zinc-950"
            {...props}
        />
    );
});
InputControl.displayName = 'InputControl';

interface InputRootProps extends ComponentProps<'div'> { }


export function InputRoot(props: InputRootProps) {
    return (
        <div className={twMerge(
            "flex w-full items-center gap-2 rounded-lg border px-3 py-1 shadow-sm",
            "border-zinc-100 bg-white focus-within:border-emerald-500 focus-within:ring-violet-300/20",
            props.className
        )
        } {...props} />
    )
}