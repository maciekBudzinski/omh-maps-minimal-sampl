/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  OmhMapsAppleMapsIOSProvider,
  OmhMapsModule,
  OmhMapView,
} from '@openmobilehub/maps-core';
import {OmhMapsGoogleMapsProvider} from '@openmobilehub/maps-plugin-googlemaps';
import {OmhMapsOpenStreetMapProvider} from '@openmobilehub/maps-plugin-openstreetmap';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

OmhMapsModule.initialize({
  gmsProvider: OmhMapsGoogleMapsProvider,
  nonGmsProvider: OmhMapsOpenStreetMapProvider,
  iosProvider: OmhMapsAppleMapsIOSProvider,
});

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <OmhMapView style={styles.map} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
  },
  map: {
    height: '100%',
    width: '100%',
  },
});

export default App;
