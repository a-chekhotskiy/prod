export type Modes = Record<string, boolean | string>;

export const classNames = (className: string, modes: Modes = {}, additional: Array<string | undefined> = []): string => {
    const result = [
        className,
        ...additional.filter(Boolean),
        ...Object.entries(modes)
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className),
    ].join(' ');

    return result;
};
