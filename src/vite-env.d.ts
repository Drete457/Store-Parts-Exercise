/// <reference types="vite/client" />
declare module 'react-quill';

/* Defining the interface of the system variables. */
interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string;
    readonly VITE_APP_PORT: number | string;
    readonly VITE_APP_BASE_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
