import {
    Text,
    View,
    TextInput,
    Pressable,
    Dimensions,
    FlatList,
    Image,
    ScrollView,
    ActivityIndicator,
  } from 'react-native';
  import React, {useState, useEffect, useCallback} from 'react';
  import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
  import { styles } from './style';
  import SvgComponent1 from '../transform/SVGSEARCH';
  import SvgComponent2 from '../transform/Camera';
  import SvgComponent3 from '../transform/wishlist';
  
  
  export function Home() {
    const [dimension, setDimension] = useState(Dimensions.get('window'));
    const [selectedIndex, setSelectedIndex] = useState(0);
  
    const onChange = () => {
      setDimension(Dimensions.get('window'));
    };
  
    useEffect(() => {
      Dimensions.addEventListener('change', onChange);
    });
   
    const Images = [
      {
        url: 'https://img.freepik.com/premium-photo/eye-shadows-with-lipstick-powder-brush-table_23-2148047068.jpg',
      },
      {url: 'https://i.ibb.co/7G5qqGY/1.jpg'},
      {url: 'https://i.ibb.co/Jx7xqf4/pexels-august-de-richelieu-4427816.jpg'},
      {url: 'https://i.ibb.co/GV08J9f/pexels-pixabay-267202.jpg'},
      {url: 'https://i.ibb.co/sK92ZhC/pexels-karolina-grabowska-4210860.jpg'},
    ];
  
    const setIndex = event => {
      let viewSize = event.nativeEvent.layoutMeasurement.width;
      let contentOffset = event.nativeEvent.contentOffset.x;
      let carouselIndex = Math.floor(contentOffset / viewSize);
      setSelectedIndex(carouselIndex);
    };
  
    return (
      <View style={styles.main}>
        <View style={styles.main1}>
          <View style={styles.srcContainer}>
            <SvgComponent1
              style={styles.svg1}
            />
            <TextInput
              style={styles.inp}
              placeholder="Search what you need"
              placeholderTextColor={'#C0C0C0'}
            />
          </View>
          <Pressable android_ripple={{color: 'black'}}>
            <SvgComponent2
              style={styles.svg2}
            />
          </Pressable>
        </View>
        <View style={{width: dimension.width}}>
          <ScrollView
            horizontal
            onMomentumScrollEnd={setIndex}
            showsHorizontalScrollIndicator={false}
            style={styles.sv}
            pagingEnabled>
            {Images.map((value, key) => (
              <Image
                source={{uri: `${value.url}`}}
                style={[
                  {width: dimension?.width,},
                  styles.image
                ]}
                PlaceholderContent={<ActivityIndicator />}
              />
            ))}
            <Image
              source={require('../images/image-1.jpg')}
              style={[{width: dimension?.width},styles.image1]}
            />
          </ScrollView>
          <View style={styles.vw}>
            <Text style={styles.txt}>Discount of all types of cosmetics</Text>
            <View
              style={styles.view}>
              <Text
                style={styles.text}>
                Up to 45 %
              </Text>
            </View>
            <Text
              style={styles.text1}>
              only on the night sale 12-13 October
            </Text>
          </View>
          <View
            style={styles.view1}>
            {Images.map((val, key) => (
              <Text
                key={key}
                style={
                  key === selectedIndex ? {color: 'white'} : {color: '#888'}
                }>
                ⬤
              </Text>
            ))}
          </View>
        </View>
        <View style={styles.disc}>
          <Text style={styles.discTxt}>Discount ends in</Text>
          <Text style={styles.timer}>02</Text>
          <Text style={styles.ind}>:</Text>
          <Text style={styles.timer1}>24</Text>
          <Text style={styles.ind}>:</Text>
          <Text style={styles.timer1}>09</Text>
          <Text style={styles.sa}>See all</Text>
        </View>
        <ScrollView horizontal style={styles.sv1}>
          {/* item 1 */}
          <View
            style={styles.view2}>
            <Image source={require('../images/Rectangle21.jpg')} />
            <View style={styles.view3}>
  
            <View
              style={styles.view4}>
              <Text style={styles.nm}>Donatello</Text>
              <SvgComponent3
                style={styles.svg3}
              />
            </View>
            <Text style={styles.nm1}>Cream elegant</Text>
            <Text style={styles.pr}>$ 398.90</Text>
            <Text style={styles.pr1}>$ 402.00</Text>
            </View>
          </View>
  
          {/* item 2 */}
          <View
            style={styles.view5}>
            <Image source={require('../images/Rectangle23.jpg')} />
            <View style={styles.view6}>
            <View
              style={styles.view7}>
              <Text style={styles.nm}>Hermes</Text>
              <SvgComponent3
                style={styles.svg3}
              />
            </View>
            <Text style={styles.nm1}>Antelope </Text>
            <Text style={styles.pr}>$ 400.00</Text>
            <Text style={styles.pr1}>$ 456.00</Text>
            </View>
          </View>
  
          {/* item 3 */}
          <View
            style={styles.view5}>
            <Image source={require('../images/1234.png') } style={styles.item3}/>
            <View style={styles.view6}>
  
            <View
              style={styles.view7}>
              <Text style={styles.nm}>Dior</Text>
              <SvgComponent3
                style={styles.svg3}
              />
            </View>
            <Text style={styles.nm1}>Donker deep</Text>
            <Text style={styles.pr}>$ 134.89</Text>
            <Text style={styles.pr1}>$ 1355.89</Text>
            </View>
          </View>
  
          {/* item 4 */}
          <View
            style={{
              flexDirection: 'column',
              marginLeft: moderateScale(8, 0.1),
              height: verticalScale(150),
              width: scale(120),
            }}>
            <Image source={require('../images/Rectangle21.jpg')} />
            <View style={{backgroundColor: 'white', paddingLeft: moderateScale(5,0.1), marginRight: moderateScale(2.5,0.1)}}>
  
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: moderateScale(5, 0.1),
              }}>
              <Text style={styles.nm}>Donatello</Text>
              <SvgComponent3
                style={{marginLeft: 'auto', marginRight: moderateScale(5, 0.1)}}
              />
            </View>
            <Text style={styles.nm1}>Cream elegant</Text>
            <Text style={styles.pr}>$ 398.90</Text>
            <Text style={styles.pr1}>$ 402.00</Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.up}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.up1}>Upcoming promotion</Text>
            <Text style={styles.up3}>See all</Text>
          </View>
        </View>
        <View style={{marginLeft: moderateScale(10,0.1)}}>
          <Image source={require('../images/Rectangle26.png') } style={{height: 70, width: 70,}} />
          <Image source={require('../images/123.png')} style={{position: 'absolute', height:verticalScale(60), marginTop: moderateScale(5,0.1), marginLeft: moderateScale(6,0.1)}}/>
        </View>
      </View>
    );
  }
  
  