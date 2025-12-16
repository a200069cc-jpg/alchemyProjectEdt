import {View, Image, StyleSheet, Text } from 'react-native';






export function TableComponent (){
    const styles = StyleSheet.create({
        container: {
            flex: 1, // ocupa toda la pantalla
            padding: 10,
          },
          livesContainer: {
            flexDirection: 'row',
            justifyContent: 'flex-start', // izquierda
            marginBottom: 50, // espacio debajo de los corazones
          },
          liveImage: {
            width: 50,
            height: 50,
            resizeMode: 'contain',
            marginRight: 5,
          },
          sectionParent: {
            flex: 1, 
            flexDirection: 'row',
            justifyContent: 'space-around', 
            alignItems: 'center',           
          },
          section: {
            width: 100,
            height: 100,
            backgroundColor: '#000000',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
          },
          sectionText: {
            color: '#ffff',
            fontWeight: 'bold',
          },
          sectionSettings: {
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginBottom: 50,
          },
          settings: {
            width: 70,
            height: 50,
            backgroundColor: '#E8C83A',
            justifyContent: 'center', 
            alignItems: 'center',         
            borderRadius: 10,
            paddingTop: 5,
            marginRight: 5,
          },
          settingsText: {
            color: '#000',
            fontWeight: 'bold',
            textAlign: 'center', 
          }
          
          
    })

    return(
        <View style={styles.container}>

            {/* Seccion Live*/}
            <View style={styles.livesContainer}>
                <Image 
                style={styles.liveImage}
                source={require('../assets/heart.jpg')}/>
                <Image 
                style={styles.liveImage}
                source={require('../assets/heart.jpg')}/>
                <Image 
                style={styles.liveImage}
                source={require('../assets/heart.jpg')}/>
            </View>
            
            {/* Seccion Settings*/}
            <View style={styles.sectionSettings}>
                <View style={styles.settings}>
                    <Text 
                    style={styles.settingsText}
                    adjustsFontSizeToFit
                    >Settings</Text>
                </View>
            </View>

            {/* Secciones centrales */}
            <View style={styles.sectionParent}>
                <View style={styles.section}>
                    <Text style={styles.sectionText}>Section 1</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionText}>Section 2</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionText}>Section 3</Text>
                </View>
            </View>

            
        </View>

        
    )
}
