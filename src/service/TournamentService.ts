import { ApiService } from './ApiService';
import { Tournament } from 'models/Tournament';

export class TournamentService {
    private apiService = new ApiService();

    public async getTournaments(): Promise<Tournament[]> {
        const query: string = `
        query {
            getTournaments(timeFrame: all) {
            tournaments {
                id
                name
                startDate
                endDate
                imageUrl
                shortDescription
                longDescription
                facebookEventUrl
                handicapDescription
                buyInPrice
                buyBacksPerTournament
                buyBacksPerGame
                buyBackPrice
                percentToPayout
                isPaidOut
                initialPot
            }
            errors {
                message
            }
          }
        }
      `;

        try {
            const response = await this.apiService.authenticatedGqlQuery(query);
            if (response.getTournaments.errors.length > 0) {
                throw (response.getTournaments.errors);
            }
            return response.getTournaments.tournaments.map((tournament: Tournament) => new Tournament(tournament));
        } catch (error) {
            throw (error);
        }
    }
}