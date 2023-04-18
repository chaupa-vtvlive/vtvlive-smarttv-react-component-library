type KeyHandler = (e: KeyboardEvent) => void;
export default class KeyServices {
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
export {};
