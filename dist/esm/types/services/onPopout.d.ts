/// <reference types="react" />
export type Direct = {
    up?: number;
    left?: number;
    right?: number;
    down?: number;
};
type Direction = "up" | "left" | "right" | "down";
type PopoutHandler = (_I: Direction) => void;
export default function onPopoutFactory(setFocusFn: React.Dispatch<React.SetStateAction<number>>, directionOpt: Direct, forwardPopoutFn?: PopoutHandler): PopoutHandler;
export {};
