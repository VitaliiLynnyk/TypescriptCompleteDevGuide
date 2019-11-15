export type Callback = () => void;

export type Events = { [keys: string]: Callback[] };
