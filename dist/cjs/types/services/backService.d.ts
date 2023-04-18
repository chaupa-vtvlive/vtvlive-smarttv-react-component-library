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
export default _default;
