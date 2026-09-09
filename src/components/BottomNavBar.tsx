import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../theme/colors';

type Tab = {
  key: string;
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
};

const TABS: Tab[] = [
  { key: 'home', label: 'Home', icon: 'home' },
  { key: 'rides', label: 'Rides', icon: 'bicycle' },
  { key: 'wallet', label: 'Wallet', icon: 'wallet' },
  { key: 'profile', label: 'Profile', icon: 'person-circle-outline' },
];

type Props = {
  activeTab?: string;
  onTabPress?: (key: string) => void;
};

export default function BottomNavBar({ activeTab = 'home', onTabPress }: Props) {
  return (
    <View style={styles.bar}>
      {TABS.map((tab) => {
        const isActive = tab.key === activeTab;
        return (
          <TouchableOpacity
            key={tab.key}
            style={styles.tab}
            activeOpacity={0.7}
            onPress={() => onTabPress?.(tab.key)}
          >
            <Ionicons
              name={tab.icon}
              size={24}
              color={isActive ? colors.primary : colors.textGray}
            />
            <Text style={[styles.label, { color: isActive ? colors.primary : colors.textGray }]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#E2E2E2',
    paddingTop: 8,
    paddingBottom: 6,
    backgroundColor: colors.bgWhite,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
  },
  label: {
    marginTop: 2,
    fontSize: 12,
    fontWeight: '600',
  },
});
