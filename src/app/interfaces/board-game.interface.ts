export interface BoardGame {
  title: string;
  description: string;
  publisher: string;
  designers: string[];
  year_published: number;
  number_of_players: string;
  playtime: string;
  age_range: string;
  game_type: string[];
  average_rating: number;
  expansion_packs_sequels: string[];
  rules_link: string;
}
