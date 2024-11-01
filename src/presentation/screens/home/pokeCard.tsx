import { Image, Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';
import { Tag } from 'presentation/components/tag';
import { memo } from 'react';

type PokeCardProps = {
  name: string;
  tags: string[];
  image: string;
  cardColor: string;
  onPress: () => void;
};

export const PokeCard = memo(({ name, tags, image, cardColor, onPress }: PokeCardProps) => {
  return (
    <TouchableOpacity
      style={[styles.cardContainer, { backgroundColor: cardColor }]}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Text style={styles.cardTitle}>{name}</Text>
      <View style={styles.cardTagsContainer}>
        {tags.map((tag) => (
          <Tag key={tag} tag={tag} />
        ))}
      </View>
      <View style={styles.cardImageContent}>
        <View style={styles.cardImageContent}>
          <Image source={{ uri: image }} style={styles.cardImage} />
        </View>
      </View>
    </TouchableOpacity>
  );
});
