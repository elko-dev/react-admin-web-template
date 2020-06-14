import * as React from 'react';
import './RoundedButton.scss';
import { makeCleanClassName } from '../../utilities/utilityFunctions';

interface Props {
  className?: string;
  handleClick?(): void;
}

class RoundedButton extends React.Component<Props, {}> {
  public render(): JSX.Element {
    return (
      <button
        className={makeCleanClassName([
          classNames.button,
          this.props.className,
        ])}
        onClick={this.props.handleClick}
      >
        {this.props.children}
      </button>
    );
  }
}

export default RoundedButton;

const classNames = {
  button: 'rounded-button',
};
