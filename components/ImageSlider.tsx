import React, { useState, useRef } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text, Animated, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width: screenWidth } = Dimensions.get('window');

type ImageItem = {
  uri: string;
  title: string;
};

type ImageSliderProps = {
  data: ImageItem[];
  sectionTitle: string;
};

const ImageSlider: React.FC<ImageSliderProps> = ({ data, sectionTitle }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const goToNextImage = () => {
    animateImage(() => {
      const nextIndex = (currentIndex + 1) % data.length;
      setCurrentIndex(nextIndex);
    });
  };

  const goToPreviousImage = () => {
    animateImage(() => {
      const prevIndex = currentIndex === 0 ? data.length - 1 : currentIndex - 1;
      setCurrentIndex(prevIndex);
    });
  };

  const animateImage = (callback: () => void) => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start(callback);
  };

  if (data.length === 0) return null; // Handle empty data case

  const renderImage = () => (
    <Animated.View style={[styles.animatedImage, { opacity: fadeAnim }]}>
      <Image source={{ uri: data[currentIndex].uri }} style={styles.image} />
      <View style={styles.labelContainer}>
        <Text style={styles.labelText}>{data[currentIndex].title}</Text>
      </View>
    </Animated.View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>{sectionTitle}</Text>
      <View style={styles.sliderContainer}>
        <TouchableOpacity onPress={goToPreviousImage} style={[styles.arrowContainer, styles.leftArrow]}>
          <Ionicons name="chevron-back" size={24} color="#fff" />
        </TouchableOpacity>

        {renderImage()}

        <TouchableOpacity onPress={goToNextImage} style={[styles.arrowContainer, styles.rightArrow]}>
          <Ionicons name="chevron-forward" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#254287',
    marginLeft: 8,
  },
  sliderContainer: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    resizeMode: 'cover',
  },
  arrowContainer: {
    position: 'absolute',
    top: '50%',
    transform: [{ translateY: -12 }],
    padding: 8,
    zIndex: 1,
  },
  leftArrow: {
    left: 10,
  },
  rightArrow: {
    right: 10,
  },
  labelContainer: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  labelText: {
    color: '#333',
    fontSize: 14,
    fontWeight: 'bold',
  },
  animatedImage: {
    width: '100%',
  },
});

export default ImageSlider;
