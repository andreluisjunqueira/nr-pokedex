import { Image, ImageBackground, SafeAreaView, Text, View } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { RouteProp, useNavigation } from '@react-navigation/native';

import { styles } from './syles';
import { Tag } from 'presentation/components/tag';
import { useLayoutEffect, useState } from 'react';
import { About } from './tabs/about';
import { Stats } from './tabs/stats';
import { Evolution } from './tabs/evolution';
import { useRoute } from '@react-navigation/native';
import { useDetailVm } from 'presentation/hooks/useDetailVm';

interface RouteParams {
  pokemon: {
    id: string;
    name: string;
    image: string;
    abilities: string[];
  };
}

const renderScene = (pokemon: any, species: any) =>
  SceneMap({
    first: () => <About pokemon={pokemon} species={species} />,
    second: () => <Stats pokemon={pokemon} species={species} />,
    third: () => <Evolution pokemon={pokemon} species={species} />,
  });

export function DetailsScreen() {
  const {
    params: { pokemon },
  } = useRoute<RouteProp<{ screen: RouteParams }, 'screen'>>();
  const [index, setIndex] = useState(0);
  const { pokemonSpecies } = useDetailVm({ pokemonId: pokemon.id });
  const [routes] = useState([
    { key: 'first', title: 'About' },
    { key: 'second', title: 'Stats' },
    { key: 'third', title: 'Evolution' },
  ]);

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: pokemonSpecies?.color,
      },
      headerTintColor: '#fff',
    });
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.content, { backgroundColor: pokemonSpecies?.color }]}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <View style={styles.titleWrapper}>
              <Text style={styles.title}>{pokemon.name}</Text>
            </View>
            <View style={styles.tags}>
              {pokemon.abilities.map((ability: any) => (
                <Tag key={ability} tag={ability} />
              ))}
            </View>
          </View>
          <Text style={styles.index}>#{`${pokemon.id}`.padStart(3, '0')}</Text>
        </View>
        <ImageBackground source={require('assets/images/pokeball.png')} style={styles.bgImage} />
        <View style={styles.infoContainer}>
          <View style={styles.imageWrapper}>
            <Image
              source={{
                uri: pokemon.image,
              }}
              style={styles.image}
            />
          </View>
          <TabView
            style={styles.tabView}
            navigationState={{ index, routes }}
            renderScene={renderScene(pokemon, pokemonSpecies)}
            onIndexChange={setIndex}
            renderTabBar={renderTabBar}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const renderTabBar = (props: any) => (
  <TabBar
    {...props}
    style={{ backgroundColor: 'white', elevation: 0 }}
    indicatorStyle={{ backgroundColor: '#0000ff' }}
    labelStyle={{
      color: '#000',
      width: '100%',
      fontSize: 12,
      textTransform: 'capitalize',
    }}
    bounces={false}
    activeColor="#000"
    inactiveColor="#666"
  />
);
