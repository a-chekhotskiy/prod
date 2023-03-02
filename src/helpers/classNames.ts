type Modes = Record<string, boolean | string>;

export const classNames = (
    className: string,
    modes: Modes,
    additional?: string[]
): string => {
    return [
        className,
        ...additional,
        Object.keys(modes).filter((key) => modes[key]),
    ].join(" ");
};

classNames("remove_btn", { hover: true, selectable: false }, ["red"]);
