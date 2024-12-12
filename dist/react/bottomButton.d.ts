export type BottomButtonProps = {
    disabled?: boolean;
    progress?: boolean;
    color?: string;
    textColor?: string;
    onClick?: VoidFunction;
    text: string;
    hasShineEffect?: boolean;
};
type ButtonTypes = "main" | "secondary";
export declare const useBottomButton: ({ type, progress, disabled, color, textColor, text, onClick, hasShineEffect, }: {
    type: ButtonTypes;
} & BottomButtonProps) => void;
export {};
