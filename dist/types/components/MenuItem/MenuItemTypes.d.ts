/// <reference types="react" />
import { SvgIconProps } from '@material-ui/core/SvgIcon';
export interface MenuItemProps {
    label: string | JSX.Element;
    color?: "red" | "blue";
    disabled?: boolean;
    selected?: boolean;
    onClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
    mIcon?: (props: SvgIconProps) => JSX.Element;
}
