type Modes = Record<string, boolean | string>;

export const classNames = (
    className: string,
    modes?: Modes,
    additional?: string[],
): string => [
    className,
    ...additional,
    Object.keys(modes).filter((key) => modes[key]),
].join(' ');
