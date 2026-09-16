export interface Game {
  id: number;
  name: string;
  latestVer: number;
  releaseDate: string;
  localPlayers: number | string;
  onlinePlayers?: number | string;

}
