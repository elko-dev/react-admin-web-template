export class Tournament {
    public readonly id: number;
    public readonly name: string;
    public readonly startDate: Date;
    public readonly endDate: Date;
    public readonly imageUrl: string;
    public readonly shortDescription: string;
    public readonly longDescription: string;
    public readonly facebookEventUrl: string;
    public readonly handicapDescription: string;
    public readonly buyInPrice: number;
    public readonly buyBacksPerTournament: number;
    public readonly buyBacksPerGame: number;
    public readonly buyBackPrice: number;
    public readonly percentToPayout: number;
    public readonly isPaidOut: boolean;
    public readonly initialPot: number;
    // public readonly participants: Participant[];
    // public readonly gameTypesForTournament: GameTypesForTournament[];

    public constructor(params: Partial<User> = {}) {
        const {
            id,
            name = '',
            startDate = new Date(),
            endDate = new Date(),
            imageUrl = '',
            shortDescription = '',
            longDescription = '',
            facebookEventUrl = '',
            handicapDescription = '',
            buyInPrice = 0,
            buyBacksPerTournament = 0,
            buyBacksPerGame = 0,
            buyBackPrice = 0,
            percentToPayout = 0,
            isPaidOut = false,
            initialPot = 0,
            // participants = [],
            // gameTypesForTournament = [],
        } = params;

        this.id = id!;
        this.name = name!;
        this.startDate = new Date(startDate);
        this.endDate = new Date(endDate);
        this.imageUrl = imageUrl;
        this.shortDescription = shortDescription;
        this.longDescription = longDescription;
        this.facebookEventUrl = facebookEventUrl;
        this.handicapDescription = handicapDescription;
        this.buyInPrice = buyInPrice;
        this.buyBacksPerTournament = buyBacksPerTournament;
        this.buyBacksPerGame = buyBacksPerGame;
        this.buyBackPrice = buyBackPrice;
        this.percentToPayout = percentToPayout;
        this.isPaidOut = isPaidOut;
        this.initialPot = initialPot;
        // this.participants = participants;
        // this.gameTypesForTournament = gameTypesForTournament;
    }
}