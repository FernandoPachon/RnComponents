import React from 'react';
import {View, Text, StyleSheet, SectionList} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import ItemSeparator from '../components/ItemSeparator';

interface Casas {
  casa: string;
  data: string[];
}

const casas: Casas[] = [
  {
    casa: 'DC Comics',
    data: [
      'Batman',
      'Superman',
      'Robin',
      'Acuaman',
      'Joker',
      'Linterna Verde',
      'Flash',
      'Mujer Maravilla',
      'Green Arrow',
      'Cyborg',
      'Ravem',
      'Terra',
      'Batman',
      'Superman',
      'Robin',
      'Acuaman',
      'Joker',
    ],
  },
  {
    casa: 'Marvel Comics',
    data: [
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Iron man',
      'Doctor Strange',
      'Hulk',
      'Thanos',
      'Loky',
      'Start Lord',
      'Capitan America',
      'Wolverine',
      'Pantera Negra',
      'Falcon',
      'Punisher',
      'Gamora',
    ],
  },
  {
    casa: 'Anime',
    data: [
      'Kenshin',
      'Goku',
      'Saitama',
      'Inuyasha',
      'Naruto',
      'Sasuke',
      'Itachi',
      'Killer Bee',
      'Madara',
      'Kintaro Oe',
      'Kenzo',
      'Johan liebheart',
      'Kenshin',
      'Goku',
      'Saitama',
      'Inuyasha',
      'Naruto',
    ],
  },
];
export const CustomSectionListScreen = () => {
  return (
    <View style={styles.container}>
      <SectionList
        sections={casas}
        keyExtractor={(item, index) => item + index}
        ListHeaderComponent={() => <HeaderTitle title="Section List" />}
        ListFooterComponent={() => (
          <View style={{marginBottom:70}}>
            <HeaderTitle title={'Total de casa' + casas.length} />
          </View>
        )}
        renderItem={({item}) => <Text>{item}</Text>}
        stickySectionHeadersEnabled
        renderSectionHeader={({section}) => (
          <View style={{backgroundColor: 'white'}}>
            <HeaderTitle title={section.casa} />
          </View>
        )}
        renderSectionFooter={({section}) => (
          <View style={{backgroundColor: 'white'}}>
            <HeaderTitle title={'Total'+section.data.length} />
          </View>
        )}
       SectionSeparatorComponent={ItemSeparator}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    backgroundColor: 'white',
  },
});
export default CustomSectionListScreen;
