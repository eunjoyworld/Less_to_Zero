import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"
import Carousel, { Pagination } from 'react-native-snap-carousel'

const SLIDER_WIDTH = Dimensions.get('window').width + 80
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

const data = [
  {
    title: 'Beautiful and dramatic Antelope Canyon',
    body: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: require('../assets/images/trash002.jpg'),
  },
  {
    title: 'Earlier this morning, NYC',
    body: 'Lorem ipsum dolor sit amet',
    illustration: require('../assets/images/trash003.jpg'),
  },
  {
    title: 'White Pocket Sunset',
    body: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration: require('../assets/images/trash001.jpg'),
  },
  {
    title: 'Acrocorinth, Greece',
    body: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: require('../assets/images/animal001.jpg'),
  },
  {
    title: 'The lone tree, majestic landscape of New Zealand',
    body: 'Lorem ipsum dolor sit amet',
    illustration: require('../assets/images/beach002.jpg'),
  },
];

const People = () => {
  const [index, setIndex] = React.useState(0)
  const isCarousel = React.useRef(null)


  return (
    <View>
      <Carousel
        layout="tinder"
        layoutCardOffset={9}
        ref={isCarousel}
        data={index}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
        renderItem={({item, index}) => (
          <View style={styles.container} key={index}>
            <Image
              source={item.illustration}
              style={styles.image}
            />
            <Text style={styles.header}>{item.title}</Text>
            <Text style={styles.body}>{item.body}</Text>
          </View>
        )}
      />
      <Pagination
        dotsLength={index.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.92)'
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: ITEM_WIDTH,
    paddingBottom: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    width: ITEM_WIDTH,
    height: 300,
  },
  header: {
    color: "#222",
    fontSize: 28,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 20
  },
  body: {
    color: "#222",
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 20
  }
})


export default People