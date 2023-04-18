/// <reference types="react" />
interface ButtonProps {
    label: string;
}
declare const Button: (props: ButtonProps) => JSX.Element;

type Handler = () => void;
declare class BackServices {
    private static instance;
    handlers: Handler[];
    defaultHandle: Handler;
    static getInstance(): BackServices;
    back: () => void;
    register: (handler: Handler) => void;
    unregister: (handler: Handler) => void;
}
declare const _default: BackServices;

type Direct = {
    up?: number;
    left?: number;
    right?: number;
    down?: number;
};
type Direction = "up" | "left" | "right" | "down";
type PopoutHandler = (_I: Direction) => void;
declare function onPopoutFactory(setFocusFn: React.Dispatch<React.SetStateAction<number>>, directionOpt: Direct, forwardPopoutFn?: PopoutHandler): PopoutHandler;

type KeyHandler = (e: KeyboardEvent) => void;
declare class KeyServices {
    defaultHandle: KeyHandler;
    registers: {
        [key: string]: KeyHandler;
    };
    priorities: {
        currentHandle?: KeyHandler;
        handles: KeyHandler[];
    }[];
    private static instance;
    private constructor();
    static getInstance(): KeyServices;
    private keyHandle;
    regHandler(id: string, keyHandle: KeyHandler): void;
    unregHandler(id: string): void;
    clearRegisters(): void;
    pushHandle: (priority: number, keyHandle: KeyHandler) => void;
    popHandle: (priority: number, keyHandle: KeyHandler) => void;
    switchHandle: (priority: number, keyHandle: KeyHandler) => void;
    stopHandle: (priority: number) => void;
}

export { Button, Direct, _default as backService, KeyServices as keyService, onPopoutFactory as onPopout };
