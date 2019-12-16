import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Dimensions, StatusBar } from 'react-native';
import PadButton from './components/PadButton';
import { AppLoading } from 'expo';
import { Audio } from 'expo-av';
import { Asset } from 'expo-asset';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

export default function App() {
  const [isReady, setIsReady] = useState(false);

  const _cacheResourcesAsync = async () => {
    const samples = [
      require('./assets/samples/00pad.mp3'),
      require('./assets/samples/01pad.mp3'),
      require('./assets/samples/02pad.mp3'),
      require('./assets/samples/03pad.mp3'),
      require('./assets/samples/04pad.mp3'),
      require('./assets/samples/05pad.mp3'),
      require('./assets/samples/06pad.mp3'),
      require('./assets/samples/07pad.mp3'),
      require('./assets/samples/08pad.mp3'),
      require('./assets/samples/09pad.mp3'),
      require('./assets/samples/10pad.mp3'),
      require('./assets/samples/11pad.mp3'),
      require('./assets/samples/12pad.mp3'),
      require('./assets/samples/13pad.mp3'),
      require('./assets/samples/14pad.mp3'),
      require('./assets/samples/15pad.mp3'),
      require('./assets/samples/16pad.mp3'),
      require('./assets/samples/17pad.mp3'),
      require('./assets/samples/18pad.mp3'),
      require('./assets/samples/19pad.mp3')
    ];

    const cacheSamples = samples.map(samples => {
      return Asset.fromModule(samples).downloadAsync();
    });
    return Promise.all(cacheSamples);
  };

  useEffect(() => {
    _cacheResourcesAsync();
  }, []);

  const padSounds = {
    pad00: require('./assets/samples/00pad.mp3'),
    pad01: require('./assets/samples/01pad.mp3'),
    pad02: require('./assets/samples/02pad.mp3'),
    pad03: require('./assets/samples/03pad.mp3'),
    pad04: require('./assets/samples/04pad.mp3'),
    pad05: require('./assets/samples/05pad.mp3'),
    pad06: require('./assets/samples/06pad.mp3'),
    pad07: require('./assets/samples/07pad.mp3'),
    pad08: require('./assets/samples/08pad.mp3'),
    pad09: require('./assets/samples/09pad.mp3'),
    pad10: require('./assets/samples/10pad.mp3'),
    pad11: require('./assets/samples/11pad.mp3'),
    pad12: require('./assets/samples/12pad.mp3'),
    pad13: require('./assets/samples/13pad.mp3'),
    pad14: require('./assets/samples/14pad.mp3'),
    pad15: require('./assets/samples/15pad.mp3'),
    pad16: require('./assets/samples/16pad.mp3'),
    pad17: require('./assets/samples/17pad.mp3'),
    pad18: require('./assets/samples/18pad.mp3'),
    pad19: require('./assets/samples/19pad.mp3')
  };

  const handlePlaySound = async note => {
    const soundObject = new Audio.Sound();

    try {
      let source = padSounds[note];
      await soundObject.loadAsync(source);
      await soundObject
        .playAsync()
        .then(async playbackStatus => {
          setTimeout(() => {
            soundObject.unloadAsync();
          }, playbackStatus.playableDurationMillis);
        })
        .catch(error => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  if (!isReady) {
    return (
      <AppLoading
        startAsync={_cacheResourcesAsync}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />

      <View style={styles.row}>
        <View style={styles.pad}>
          <PadButton
            height={HEIGHT / 4}
            onPress={() => handlePlaySound('pad00')}
          />
        </View>
        <View style={styles.pad}>
          <PadButton
            height={HEIGHT / 4}
            onPress={() => handlePlaySound('pad01')}
          />
        </View>
        <View style={styles.pad}>
          <PadButton
            height={HEIGHT / 4}
            onPress={() => handlePlaySound('pad02')}
          />
        </View>
        <View style={styles.pad}>
          <PadButton
            height={HEIGHT / 4}
            onPress={() => handlePlaySound('pad03')}
          />
        </View>
        <View style={styles.pad}>
          <PadButton
            height={HEIGHT / 4}
            onPress={() => handlePlaySound('pad04')}
          />
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.pad}>
          <PadButton
            height={HEIGHT / 4}
            onPress={() => handlePlaySound('pad05')}
          />
        </View>
        <View style={styles.pad}>
          <PadButton
            height={HEIGHT / 4}
            onPress={() => handlePlaySound('pad06')}
          />
        </View>
        <View style={styles.pad}>
          <PadButton
            height={HEIGHT / 4}
            onPress={() => handlePlaySound('pad07')}
          />
        </View>
        <View style={styles.pad}>
          <PadButton
            height={HEIGHT / 4}
            onPress={() => handlePlaySound('pad08')}
          />
        </View>
        <View style={styles.pad}>
          <PadButton
            height={HEIGHT / 4}
            onPress={() => handlePlaySound('pad09')}
          />
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.pad}>
          <PadButton
            height={HEIGHT / 4}
            onPress={() => handlePlaySound('pad10')}
          />
        </View>
        <View style={styles.pad}>
          <PadButton
            height={HEIGHT / 4}
            onPress={() => handlePlaySound('pad11')}
          />
        </View>
        <View style={styles.pad}>
          <PadButton
            height={HEIGHT / 4}
            onPress={() => handlePlaySound('pad12')}
          />
        </View>
        <View style={styles.pad}>
          <PadButton
            height={HEIGHT / 4}
            onPress={() => handlePlaySound('pad13')}
          />
        </View>
        <View style={styles.pad}>
          <PadButton
            height={HEIGHT / 4}
            onPress={() => handlePlaySound('pad14')}
          />
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.pad}>
          <PadButton
            height={HEIGHT / 4}
            onPress={() => handlePlaySound('pad15')}
          />
        </View>
        <View style={styles.pad}>
          <PadButton
            height={HEIGHT / 4}
            onPress={() => handlePlaySound('pad16')}
          />
        </View>
        <View style={styles.pad}>
          <PadButton
            height={HEIGHT / 4}
            onPress={() => handlePlaySound('pad17')}
          />
        </View>
        <View style={styles.pad}>
          <PadButton
            height={HEIGHT / 4}
            onPress={() => handlePlaySound('pad18')}
          />
        </View>
        <View style={styles.pad}>
          <PadButton
            height={HEIGHT / 4}
            onPress={() => handlePlaySound('pad19')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2d3436'
  },
  row: {
    flexDirection: 'row'
  },
  pad: {
    height: HEIGHT / 4,
    width: WIDTH / 5,
    borderWidth: 1,
    borderColor: '#2d3436'
  }
});
