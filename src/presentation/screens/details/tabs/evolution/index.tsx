import { Image, ScrollView, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { styles } from './styles';
import { PokemonDetailModel } from 'models/pokeminDetail.model';
import { PokemonModel } from 'models/pokemon.model';
import { memo } from 'react';

export const Evolution = memo(
  ({ pokemon, species }: { pokemon: PokemonModel; species: PokemonDetailModel }) => {
    const hasNoMoreEvolutions = (length: number, current: number) => {
      return current === length - 1;
    };

    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Evolution Chain</Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            {species.evolution_chain.map((item: any, index: number) => {
              if (hasNoMoreEvolutions(species.evolution_chain.length, index)) {
                return null;
              }

              return (
                <View key={item.name} style={styles.evolutionRow}>
                  <View style={styles.evolutionItem}>
                    <View style={styles.imageBackground} />
                    <Image
                      source={{
                        uri: species.evolution_chain[index].image,
                      }}
                      style={styles.image}
                    />
                    <Text>{species.evolution_chain[index].name}</Text>
                  </View>
                  <View style={styles.evolutionArrow}>
                    <Entypo name="arrow-bold-right" size={28} color="#878787" />
                  </View>
                  <View style={styles.evolutionItem}>
                    <View style={styles.imageBackground} />
                    <Image
                      source={{
                        uri: species.evolution_chain[index + 1].image,
                      }}
                      style={styles.image}
                    />
                    <Text>{species.evolution_chain[index + 1].name}</Text>
                  </View>
                </View>
              );
            })}
          </ScrollView>
        </View>
      </View>
    );
  }
);
