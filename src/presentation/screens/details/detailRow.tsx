import { View, Text, ViewBase } from 'react-native';
import { styles } from './syles';

interface DetailRowProps {
  label: string;
  value: string | number;
  powerBar?: React.ReactNode;
}

const DetailRowComponent = ({ label, value, powerBar }: DetailRowProps) => {
  return (
    <View style={styles.detailRow}>
      <View style={styles.detailRowLabel}>
        <Text style={styles.detailRowLabelText}>{label}</Text>
      </View>
      <View style={styles.detailRowValue}>
        <Text>{value}</Text>
        {powerBar}
      </View>
    </View>
  );
};

const PowerBar = ({ value = 0 }: { value?: number }) => {
  const color = value < 50 ? 'red' : 'green';

  return (
    <View style={styles.powerBarContainer}>
      <View style={[styles.powerBar, { width: `${value}%`, backgroundColor: color }]} />
    </View>
  );
};

const DetailRowSeparatorTitle = ({ title }: { title: string }) => {
  return (
    <View style={styles.detailRowSeparator}>
      <Text style={styles.detailRowSeparatorTitle}>{title}</Text>
    </View>
  );
};

const DetailRowTitle = ({ title }: { title: string }) => {
  return (
    <Text style={styles.detailRowTitle} numberOfLines={3}>
      {title}
    </Text>
  );
};

DetailRowComponent.Separator = DetailRowSeparatorTitle;
DetailRowComponent.PowerBar = PowerBar;
DetailRowComponent.Title = DetailRowTitle;
export const DetailRow = DetailRowComponent;
