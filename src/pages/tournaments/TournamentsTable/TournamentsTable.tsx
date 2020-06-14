import * as React from 'react';
import './TournamentsTable.scss';
import { Tournament } from 'models/Tournament';

interface State {}

interface Props {
  tournaments: Tournament[];
}

const dateDisplayOptions = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  timeZone: 'UTC',
};

export default class TournamentsTable extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  public renderTableHeadings(): JSX.Element {
    return (
      <tr>
        <th>Name</th>
        <th>Start Date</th>
        <th>End Date</th>
        <th>Buy-In Price</th>
        <th>Buybacks</th>
        <th>Buyback Price</th>
        <th>Initial Pot %</th>
        <th>Players</th>
        <th>Payout Status</th>
      </tr>
    );
  }

  public renderTableData(): JSX.Element {
    return (
      <>
        {this.props.tournaments.map((tournament) =>
          this.renderTrailRow(tournament)
        )}
      </>
    );
  }

  public renderTrailRow(tournament: Tournament): JSX.Element {
    const startDateString = tournament.startDate.toLocaleDateString(
      undefined,
      dateDisplayOptions
    );
    const endDateString = tournament.endDate.toLocaleDateString(
      undefined,
      dateDisplayOptions
    );
    return (
      <tr key={`table row:${tournament.id}`}>
        <td>{tournament.name}</td>
        <td>{startDateString}</td>
        <td>{endDateString}</td>
        <td>{tournament.buyInPrice}</td>
        <td>{tournament.buyBacksPerTournament}</td>
        <td>{tournament.buyBackPrice}</td>
        <td>{tournament.initialPot}</td>
        <td>45</td>
        <td>{tournament.isPaidOut.toString()}</td>
      </tr>
    );
  }

  public render() {
    return (
      <div className={classNames.containerStyle}>
        <table>
          <thead>{this.renderTableHeadings()}</thead>
          <tbody>{this.renderTableData()}</tbody>
        </table>
      </div>
    );
  }
}

const classNames = {
  containerStyle: 'tournament-table-container',
};
