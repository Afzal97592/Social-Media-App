import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';

const {width} = Dimensions.get('window');
const CARD_WIDTH = width - 40;

const carouselData = [
  {
    id: 1,
    title: 'Instant Delivery',
    subtitle: 'Get your groceries delivered within minutes of ordering',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e',
  },
  {
    id: 2,
    title: 'Fresh Products',
    subtitle: 'Hand-picked fresh items from trusted suppliers',
    image: 'https://images.unsplash.com/photo-1543168256-418811576931',
  },
  {
    id: 3,
    title: 'Great Prices',
    subtitle: 'Best deals and offers on your daily essentials',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e',
  },
  {
    id: 4,
    title: 'Fresh Products',
    subtitle: 'Hand-picked fresh items from trusted suppliers',
    image: 'https://images.unsplash.com/photo-1543168256-418811576931',
  },
  {
    id: 5,
    title: 'Great Prices',
    subtitle: 'Best deals and offers on your daily essentials',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e',
  },
];

const App = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % carouselData.length;
      setActiveIndex(nextIndex);
      scrollViewRef.current?.scrollTo({
        x: nextIndex * CARD_WIDTH,
        animated: true,
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleDotPress = index => {
    setActiveIndex(index);
    scrollViewRef.current?.scrollTo({
      x: index * CARD_WIDTH,
      animated: true,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <ScrollView
          ref={scrollViewRef}
          horizontal
          pagingEnabled
          snapToInterval={CARD_WIDTH}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          snapToAlignment="center"
          contentContainerStyle={styles.scrollContent}
          onMomentumScrollEnd={event => {
            const newIndex = Math.round(
              event.nativeEvent.contentOffset.x / CARD_WIDTH,
            );
            setActiveIndex(newIndex);
          }}>
          {carouselData.map((item, index) => (
            <View key={item.id} style={styles.slide}>
              <Image
                source={{uri: item.image}}
                style={styles.image}
                resizeMode="cover"
              />
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.subtitle}>{item.subtitle}</Text>
            </View>
          ))}
        </ScrollView>
        <View style={styles.dotContainer}>
          {carouselData.map((_, index) => (
            <Pressable key={index} onPress={() => handleDotPress(index)}>
              <View
                style={[styles.dot, activeIndex === index && styles.activeDot]}
              />
            </Pressable>
          ))}
        </View>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    width: CARD_WIDTH,
    backgroundColor: 'white',

    borderRadius: 20,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  scrollContent: {
    alignItems: 'center',
  },
  slide: {
    width: CARD_WIDTH,
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 20,
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ddd',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#4CAF50',
    width: 20,
  },
});
