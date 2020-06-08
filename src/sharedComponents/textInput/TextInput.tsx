import * as React from "react";
import "./TextInput.scss";
import { makeCleanClassName } from "../../utilities/utilityFunctions";

interface Props {
    className?: string;
    inputIcon?: JSX.Element;
    placeholder?: string;
    inputClassName?: string;
    type?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default class TextInput extends React.Component<Props, {}> {
    public render(): JSX.Element {
        const { placeholder, onChange, className, inputClassName, type } = this.props;
        return (
            <div
                className={makeCleanClassName([
                    classNames.textInput,
                    className
                ])}
            >
                {this.props.inputIcon}
                <input
                    placeholder={placeholder}
                    className={makeCleanClassName([inputClassName, classNames.inputStyle])}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
                    type={type}
                />

            </div>
        );
    }
}

const classNames = {
    textInput: "textInput",
    inputStyle: "inputStyle",

};
