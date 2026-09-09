import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MapView, { Marker, Polyline, PROVIDER_DEFAULT } from 'react-native-maps';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../theme/colors';
import QuickRideOption from '../components/QuickRideOption';
import BottomNavBar from '../components/BottomNavBar';

// Pickup / drop-off pins — swap these for real geocoded values once
// the "Where to?" search is wired up.
const PICKUP = { latitude: 37.7702, longitude: -122.4468 };
const DROPOFF = { latitude: 37.7852, longitude: -122.4204 };

// A hand-placed zigzag so the polyline reads as a real street route
// rather than a straight line. Replace with a directions-API polyline later.
const ROUTE_POINTS = [
  PICKUP,
  { latitude: 37.7718, longitude: -122.4432 },
  { latitude: 37.7712, longitude: -122.4384 },
  { latitude: 37.7758, longitude: -122.4358 },
  { latitude: 37.7748, longitude: -122.4318 },
  { latitude: 37.7798, longitude: -122.4288 },
  DROPOFF,
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />

      {/* Search bar */}
      <View style={styles.searchWrap}>
        <TouchableOpacity style={styles.searchBar} activeOpacity={0.85}>
          <Ionicons name="search" size={20} color={colors.textOnPrimary} />
          <Text style={styles.searchText}>Where to?</Text>
        </TouchableOpacity>
      </View>

      {/* Map */}
      <View style={styles.mapWrap}>
        <MapView
          style={StyleSheet.absoluteFillObject}
          provider={PROVIDER_DEFAULT}
          initialRegion={{
            latitude: 37.778,
            longitude: -122.435,
            latitudeDelta: 0.055,
            longitudeDelta: 0.05,
          }}
        >
          <Marker coordinate={PICKUP} pinColor={colors.primary} />
          <Marker coordinate={DROPOFF} pinColor={colors.primary} />
          <Polyline
            coordinates={ROUTE_POINTS}
            strokeColor={colors.secondary}
            strokeWidth={4}
          />
        </MapView>

        {/* Floating bike badge, overlapping map + sheet */}
        <View style={styles.badge}>
          <MaterialCommunityIcons name="motorbike" size={26} color={colors.primary} />
        </View>
      </View>

      {/* Bottom sheet */}
      <View style={styles.sheet}>
        <Text style={styles.sheetTitle}>Quick-ride options</Text>
        <View style={styles.optionsRow}>
          <QuickRideOption icon="motorbike" label="Bike" active />
          <QuickRideOption icon="motorbike" label="Bike+" />
          <QuickRideOption icon="package-variant-closed" label="Parcel Delivery" />
        </View>
      </View>

      <BottomNavBar activeTab="home" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgWhite,
  },
  searchWrap: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 12,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 18,
    gap: 10,
  },
  searchText: {
    color: colors.textOnPrimary,
    fontSize: 17,
    fontWeight: '600',
  },
  mapWrap: {
    flex: 1,
  },
  badge: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: -22,
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: colors.bgWhite,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
    zIndex: 10,
  },
  sheet: {
    backgroundColor: colors.bgSheet,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: 30,
    paddingHorizontal: 16,
    paddingBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: -2 },
    elevation: 6,
  },
  sheetTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.textDark,
    marginBottom: 14,
  },
  optionsRow: {
    flexDirection: 'row',
    marginBottom: 6,
  },
});
