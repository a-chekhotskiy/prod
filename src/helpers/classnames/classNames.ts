type Modes = Record<string, boolean | string>;

export const classNames = (
    className: string,
    modes: Modes = {},
    additional: string[] = [],
): string => {
    return [
    className,
    ...additional,
    ...Object.entries(modes).filter(([_, value]) => Boolean(value)).map(([className]) => className),
].join(' ');

}
