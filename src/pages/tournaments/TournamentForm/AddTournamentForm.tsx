import * as React from 'react';
import './AddTournamentForm.scss';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

interface Props {
  toggleShowForm(): void;
}

interface State {
  name: string;
  startDate: Date;
  endDate: Date;
  imageUrl: string;
  shortDescription: string;
  longDescription: string;
  facebookEventUrl: string;
  handicapDescription: string;
  buyInPrice: number;
  numberOfBuyBacks: number;
  buyBackPrice: number;
  percentToPayout: number;
  initialPot: number;
}

export default class AddTournamentForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      name: '',
      startDate: new Date(),
      endDate: new Date(),
      imageUrl: '',
      shortDescription: '',
      longDescription: '',
      facebookEventUrl: '',
      handicapDescription: '',
      buyInPrice: 0,
      numberOfBuyBacks: 0,
      buyBackPrice: 0,
      percentToPayout: 0,
      initialPot: 0,
    };
  }

  private onInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    this.setState(({
      ...this.state,
      [e.currentTarget.name]: e.currentTarget.value,
    } as unknown) as Pick<State, keyof State>);
  };

  private onStartDateChange = (date: Date): void => {
    this.setState({ startDate: date });
  };
  private onEndDateChange = (date: Date): void => {
    this.setState({ endDate: date });
  };

  renderTextInput = (label: string, name: string): JSX.Element => {
    return (
      <div className={classNames.textInput}>
        <span>{label}</span>
        <input
          type="text"
          placeholder={label}
          value={this.state[name] || ''}
          onChange={this.onInputChange}
          name={name}
        />
      </div>
    );
  };

  renderTextAreaInput = (label: string, name: string): JSX.Element => {
    return (
      <div className={classNames.textInput}>
        <span>{label}</span>
        <textarea
          placeholder={label}
          value={this.state[name] || ''}
          onChange={this.onInputChange}
        />
      </div>
    );
  };

  renderStartDateInput = (): JSX.Element => {
    return (
      <div className={classNames.textInput}>
        <span>Start Date</span>
        <DatePicker
          selected={this.state.startDate || new Date()}
          onChange={this.onStartDateChange}
        />
      </div>
    );
  };
  renderEndDateInput = (): JSX.Element => {
    return (
      <div className={classNames.textInput}>
        <span>End Date</span>
        <DatePicker
          selected={this.state.endDate || new Date()}
          onChange={this.onEndDateChange}
        />
      </div>
    );
  };

  public render(): JSX.Element {
    return (
      <div className={classNames.wrapper}>
        <div className={classNames.form}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <img></img>

            {this.renderTextInput(
              'Facebook Event UTL (optional)',
              'facebookEventUrl'
            )}
          </div>

          <div style={{ display: 'flex' }}>
            <div style={{ width: '50%' }}>
              {this.renderTextInput('Tournament Name', 'name')}
            </div>
            {this.renderStartDateInput()}
            {this.renderEndDateInput()}
          </div>

          {this.renderTextAreaInput('Long Description', 'longDescription')}
          {this.renderTextInput('Short Description', 'shortDescription')}
          {this.renderTextAreaInput(
            'Handicap Description',
            'handicapDescription'
          )}
          <div style={{ display: 'flex' }}>
            {this.renderTextInput('Buy in Price', 'buyInPrice')}
            {this.renderTextInput('Initial pot', 'initialPot')}
            {this.renderTextInput('% to Payout', 'percentToPayout')}
          </div>
          <div style={{ display: 'flex' }}>
            {this.renderTextInput('Price per Buyback', 'buyBackPrice')}
            {this.renderTextInput('# of Buybacks', 'numberOfBuyBacks')}
          </div>
        </div>
        <div>
          <button onClick={this.props.toggleShowForm}>Cancel</button>
          <button>Submit</button>
        </div>
      </div>
    );
  }
}

const classNames = {
  wrapper: 'add-tournament-form-wrapper',
  form: 'add-tournament-form',
  textInput: 'add-tournament-form-text-input',
};
