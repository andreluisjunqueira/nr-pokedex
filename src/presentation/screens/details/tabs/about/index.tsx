import { ScrollView, Text, View } from 'react-native';
import { DetailRow } from '../../detailRow';
import { styles } from './styles';
import { PokemonDetailModel } from 'models/pokeminDetail.model';
import { PokemonModel } from 'models/pokemon.model';
import { memo } from 'react';

export const About = memo(
  ({ pokemon, species }: { pokemon: PokemonModel; species: PokemonDetailModel }) => {
    return (
      <ScrollView contentContainerStyle={styles.aboutContainer}>
        <DetailRow label="Height" value={pokemon.height} />
        <DetailRow label="Weight" value={pokemon.weight} />
        <DetailRow label="Abilities" value={pokemon.abilities.join(', ')} />
        <DetailRow.Separator title="Breading" />
        <DetailRow label="Gender" value="Male" />
        <DetailRow label="Egg Groups" value={species.egg_groups} />
      </ScrollView>
    );
  }
);
