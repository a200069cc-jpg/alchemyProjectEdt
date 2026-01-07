import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ListComponent } from './components/ListComponent'
import { FilterComponent } from './components/FilterComponent';
import { ChatComponent } from './components/ChatComponent';
import { MenuComponent } from './components/MenuComponent';
import {TableComponent} from './components/TableComponents';
import { ImageBackground } from 'react-native';

import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import '@/global.css';
import { useState } from 'react';

export default function App() {
  const PlaceHolderList = [
    { id: '1', title: 'Elemento 1' },
    { id: '2', title: 'Elemento 2' },
    { id: '3', title: 'Elemento 3' },
    { id: '4', title: 'Elemento 4' },
    { id: '5', title: 'Elemento 5' },
    { id: '6', title: 'Elemento 6' },
    { id: '7', title: 'Elemento 7' },
    { id: '8', title: 'Elemento 8' },
    { id: '9', title: 'Elemento 9' },
    { id: '10', title: 'Elemento 10' },
    { id: '11', title: 'Elemento 11' },
    { id: '12', title: 'Elemento 12' },
    { id: '13', title: 'Elemento 13' },
    { id: '14', title: 'Elemento 14' },
    { id: '15', title: 'Elemento 15' },
    { id: '16', title: 'Elemento 16' },
    { id: '17', title: 'Elemento 17' },
    { id: '18', title: 'Elemento 18' },
    { id: '19', title: 'Elemento 19' },
    { id: '20', title: 'Elemento 20' },
    { id: '21', title: 'Elemento 21' },
    { id: '22', title: 'Elemento 22' },
    { id: '23', title: 'Elemento 23' },
    { id: '24', title: 'Elemento 24' },]

  
  const [slots, setSlots] = useState<(string | null)[]>([
    null,
    null,
    null,
  ]);

  const [activeElementId, setActiveElementId] = useState<string | null>(null);
  const [AreaLayout, setAreaLayout] = useState([]);
  const handleAreaLayout = (index, layout) => {
    setAreaLayout(prev => {
      const next = [...prev];
      next[index] = layout;
      return next;
    });
};

  const handleDragStart = (elementId: string) => {
    setActiveElementId(elementId);
  };


  const handleDrop = (slotIndex: number, elementId: string) => {
    setSlots(prev => {
      const next = [...prev];
      next[slotIndex] = elementId;
      return next;
    });
  };
  const handleDropRelease = (elementId, point) => {
  const slotIndex = AreaLayout.findIndex(layout =>
    layout && isInside(point, layout)
  );

  if (slotIndex === -1) return;

  setSlots(prev => {
    const next = [...prev];
    next[slotIndex] = elementId;
    return next;
  });
};

  const isInside = (point, rect) => {
  return (
    point.x >= rect.x &&
    point.x <= rect.x + rect.width &&
    point.y >= rect.y &&
    point.y <= rect.y + rect.height
  );
};
  return (
    
      <GluestackUIProvider>
      <ImageBackground
        source={require('./assets/back.png')}
        style={styles.background}
        resizeMode="stretch"
      >
      <View style={styles.container}>
      
      <View style={styles.topContainer}>
        <TableComponent slots={slots} onDrop={handleDrop} activeElementId={activeElementId} onAreaLayout={handleAreaLayout} />
        <View style={styles.menu}><MenuComponent></MenuComponent></View>
        <View style={styles.chat} > <ChatComponent ></ChatComponent></View>
 
      </View>
       
      <View style={styles.bottomContainer}>
      <FilterComponent></FilterComponent>
      <ListComponent data={PlaceHolderList}   onDragStart={handleDragStart}  onDragEnd={handleDropRelease} />
      </View>
     
    </View>
    </ImageBackground>
   </GluestackUIProvider>
  
  );
}

const styles = StyleSheet.create({
  background: {
  flex: 1,
  width:'100%',
   backgroundColor: 'transparent',
},
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  chat:{
      flex:1,
      alignSelf:"flex-end",
      justifyContent: "flex-end",
      alignItems: "center",
  },
  menu:{
    flex:1,
    alignSelf:"flex-end",
    alignItems:"center"
  },
 topContainer: {
  height: '70%',
  width: '100%',
  paddingVertical: 10,
  backgroundColor: 'transparent',
},
bottomContainer: {
  flexDirection: 'row',
  width: '100%',
  paddingVertical: 10,
  backgroundColor: 'transparent',
},

});
