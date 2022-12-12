import React from 'react'
import { View,Text,StyleSheet,SectionList } from 'react-native'
import HeaderTitle from '../components/HeaderTitle';

interface Casas {
  casa: string;
  data: string[];
}

const casas: Casas[] = [
  {
    casa: "DC Comics",
    data: ["Batman", "Superman", "Robin","Acuaman", "Joker","Linterna Verde","Flash","Mujer Maravilla","Green Arrow","Cyborg","Ravem","Terra" ]
  },
  {
    casa: "Marvel Comics",
    data: ["Antman", "Thor", "Spiderman","Antman", "Iron man","Doctor Strange", "Hulk","Thanos","Loky","Start Lord", "Capitan America","Wolverine","Pantera Negra","Falcon","Punisher","Gamora"]
  },
  {
    casa: "Anime",
    data: ["Kenshin", "Goku", "Saitama","Inuyasha","Naruto","Sasuke","Itachi","Killer Bee","Madara","Kintaro Oe","Kenzo","Johan liebheart" ]
  }
];
export const CustomSectionListScreen = () => {
  return (
<View style={styles.container}>
    
     <SectionList
        sections={casas}
        keyExtractor={(item, index)=>item + index}
        renderItem={({item})=><Text>{item}</Text>}
        stickySectionHeadersEnabled
        renderSectionHeader={({section})=> 
        <View style={{backgroundColor:"white"}}>
          <HeaderTitle title={section.casa}/>
        </View>
      }
     />
</View>
 )
};


const styles = StyleSheet.create({
    container: {
    flex: 1,
    marginHorizontal: 20,
    backgroundColor:"white"
    },
});
export default CustomSectionListScreen;
