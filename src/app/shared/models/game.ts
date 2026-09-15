export interface Game {
  id: number;
  name: string;
  fileSize: string;
  releaseDate: string;
  localPlayers: number | string;
  onlinePlayers?: number | string;

}
