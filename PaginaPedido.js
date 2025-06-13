import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import MenuBottom from "./components/MenuBottom";
import { useNavigation } from "@react-navigation/native";

export default function PaginaPedido() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
        <ScrollView>
            <View style={styles.header}>
                <View style={{marginHorizontal: 20, backgroundColor: '#fff', padding: 10, width: 50, borderRadius: 100, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <TouchableOpacity onPress={() => {navigation.navigate('Pedidos');}}>
                        <Image source={require('./assets/icon_left.png')} style={{width: 30, height: 30}} />
                    </TouchableOpacity>
                </View>
                <View style={{alignItems: 'center', backgroundColor: '#fff', width:'70%', marginRight: 20, padding: 10, borderRadius: 10}}>
                    <Text style={{fontSize: 20, fontWeight: 400}}>Rua, 100 Campo Limpo ▼</Text>
                </View>
            </View>
            <View style={styles.section_1}>
                <Text style={styles.title}>Acompanhe seu pedido</Text>
                <Image source={require('./assets/gps.png')} style={{ width: '100%', height: 280, marginTop: 20 }} />
                <View style={{ alignItems: 'center', marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', width: '90%' }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Pedido: 0024</Text>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Previsão: 20:00 - 21:00</Text>
                </View>
                <View style={{ flexDirection: 'row', width: '90%', alignItems: 'center', marginTop: 30 }}>
                    <View style={{ height: 10, width: 10, backgroundColor: '#001B3D', borderRadius: 5, marginTop: 5, marginRight: 5 }}></View>
                    <Text>Pedido aprovado.</Text>
                </View>
                <View style={{ flexDirection: 'row', width: '90%', alignItems: 'center' }}>
                    <View style={{ height: 35, width: 3, backgroundColor: '#1391EA', marginTop: -1.5, marginLeft: 2.8 }}></View>
                </View>
                <View style={{ flexDirection: 'row', width: '90%', alignItems: 'center', marginTop: -7 }}>
                    <View style={{ height: 10, width: 10, backgroundColor: '#001B3D', borderRadius: 5, marginTop: 5, marginRight: 5 }}></View>
                    <Text>Pedido sendo preparado!</Text>
                </View>
                <View style={{ flexDirection: 'row', width: '90%', alignItems: 'center' }}>
                    <View style={{ height: 35, width: 3, backgroundColor: '#1391EA', marginTop: -1.5, marginLeft: 2.8 }}></View>
                </View>
                <View style={{ flexDirection: 'row', width: '90%', alignItems: 'center', marginTop: -7, marginBottom: 20 }}>
                    <View style={{ height: 10, width: 10, backgroundColor: '#001B3D', borderRadius: 5, marginTop: 5, marginRight: 5 }}></View>
                    <Text>Saiu para rota de entrega. Aguarde...</Text>
                </View>
                <View style={styles.Itens}>
                    <View style={{ flexDirection: 'row'}}>
                        <Image
                            source={require('./assets/Feijoada.jpeg')}
                            style={{ width: 110, height: 70, borderRadius: 10 }}
                        />
                        <View style={{ flex: 1, marginLeft: 10 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Feijoada Fit</Text>
                            <Text style={{ fontSize: 16, fontWeight: '500', color: '#368212' }}>R$ 25,00</Text>
                        </View>
                            <Text style={{ fontSize: 12, color: '#555', marginTop: 5 }}>Igual a salada simples, mas essa é completa.</Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
        <MenuBottom action="pedidos" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#001B3D",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: 40,
    width: "100%",
  },
  section_1: {
    backgroundColor: "#fff",
    width: "100%",
    padding: 16,
    borderRadius: 8,
    marginBottom: 20,
    textAlign: "center",
    alignItems: "center",
  },
   Itens:{
    width: '90%', 
    marginTop: 20,
    marginBottom: 20,
    borderColor: '#000', 
    borderWidth: 0.2, 
    padding: 10, 
    borderRadius: 10, 
    boxShadow: '0 5px 5px rgba(0, 0, 0, 0.2)',
  },
});