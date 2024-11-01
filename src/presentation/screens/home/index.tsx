import { ActivityIndicator, FlatList, Image, SafeAreaView, Text, View } from 'react-native';

import { styles } from './styles';
import { PokeCard } from './pokeCard';
import { useHomeVm } from 'presentation/hooks/useHomeVm';
import { useCallback, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useSearchBar } from 'presentation/hooks/useSearchBar';
import { useDebounce } from 'presentation/hooks/useDebounce';
import { PokemonModel } from 'models/pokemon.model';
import { useToast } from 'presentation/components/toast';

type RootStackParamList = {
  Details: { pokemon: PokemonModel };
};

export function HomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { pokemons, loadMore, searchByName, isLoading, clearSearch, error } = useHomeVm();
  const { search } = useSearchBar({ onCancel: () => clearSearch() });

  const { toast } = useToast();

  const handleCardPress = useCallback((pokemon: PokemonModel) => {
    navigation.navigate('Details', { pokemon });
  }, []);

  const debouncedSearch = useDebounce(search, 1500);

  useEffect(() => {
    if (debouncedSearch) {
      searchByName(debouncedSearch);
    }
  }, [debouncedSearch]);

  useEffect(() => {
    if (error) {
      toast(error.message, 'destructive');
    }
  }, [error]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {error ? (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{'Ops! Algo de errado aconteceu'}</Text>
            <Text style={styles.errorSubText}>{'Tente novamente mais tarde'}</Text>
            <Image source={require('assets/images/error_img.png')} style={styles.errorImage} />
          </View>
        ) : (
          <FlatList
            data={pokemons}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => {
              return item.id.toString();
            }}
            renderItem={({ item }) => (
              <PokeCard
                name={item.name}
                tags={item.abilities}
                image={item.image}
                cardColor="rgba(255, 0, 0, 0.5)"
                onPress={() => handleCardPress(item)}
              />
            )}
            ListFooterComponent={isLoading ? <ActivityIndicator /> : null}
            columnWrapperStyle={{
              gap: 16,
            }}
            style={{
              flex: 1,
            }}
            contentContainerStyle={{
              gap: 16,
            }}
            onEndReached={() => {
              if (!isLoading) {
                loadMore();
              }
            }}
            onEndReachedThreshold={0.2}
          />
        )}
      </View>
    </SafeAreaView>
  );
}
