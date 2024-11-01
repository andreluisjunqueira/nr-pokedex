import { ScrollView, Text, View } from 'react-native';
import { DetailRow } from '../../detailRow';
import { styles } from './styles';

export function Stats({ pokemon, species }: { pokemon: any; species: any }) {
  return (
    <ScrollView contentContainerStyle={styles.statsContainer}>
      {pokemon.stats.map((stat: any) => (
        <DetailRow
          label={stat.name}
          value={stat.value}
          powerBar={<DetailRow.PowerBar value={stat.value} />}
        />
      ))}
    </ScrollView>
  );
}
