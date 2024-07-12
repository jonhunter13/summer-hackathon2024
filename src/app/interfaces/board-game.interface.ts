export interface BoardGame {
  title: string;
  description: string;
  publisher: string;
  designers: string[];
  year_published: number;
  number_of_players: 2;
  playtime: string;
  age_range: string;
  game_type_mechanics: string[];
  rating_average_score: number;
  expansion_packs_sequels: [];
  image_url: string;
  rules_url: string;
}
