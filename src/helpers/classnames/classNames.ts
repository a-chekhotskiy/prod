export type Modes = Record<string, boolean | string>;

export const classNames = (className: string, modes: Modes = {}, additional: string[] = []): string =>
    // eslint-disable-next-line implicit-arrow-linebreak
    [
        className,
        ...additional,
        ...Object.entries(modes)
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className),
    ].join(' ');
