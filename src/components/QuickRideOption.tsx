import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../theme/colors';

type Props = {
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  label: string;
  active?: boolean;
  onPress?: () => void;
};

export default function QuickRideOption({ icon, label, active = false, onPress }: Props) {
  return (
    <TouchableOpacity
      style={[styles.card, active ? styles.cardActive : styles.cardOutlined]}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <MaterialCommunityIcons
        name={icon}
        size={30}
        color={active ? colors.textOnPrimary : colors.secondary}
      />
      <Text style={[styles.label, active ? styles.labelActive : styles.labelOutlined]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    borderRadius: 16,
    marginHorizontal: 6,
  },
  cardActive: {
    backgroundColor: colors.primary,
  },
  cardOutlined: {
    backgroundColor: colors.bgWhite,
    borderWidth: 1.5,
    borderColor: colors.secondary,
  },
  label: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'center',
  },
  labelActive: {
    color: colors.textOnPrimary,
  },
  labelOutlined: {
    color: colors.textDark,
  },
});
