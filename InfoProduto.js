import React from "react";
import { 
    View,
    StyleSheet,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    ImageBackground,
 } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';

export default function InfoProdutos (){
    const navigation = useNavigation();
    const route = useRoute();
    const images = {
        Feijoada: require('./assets/Feijoada.jpeg'),
        Salada_Completa: require('./assets/Prato_2.jpeg'),
        Salada_Premium: require('./assets/Prato_1.jpeg'),
        Acai_Tradicional: require('./assets/Acai.jpeg'),
        Salada_Simples: require('./assets/salada.png'),
        PF_Proteico: require('./assets/PF.jpeg'),
        Lasanha: require('./assets/Lasanha.jpeg'),
        Hamburguer: require('./assets/Hamburger.jpeg'),
        Sorvete: require('./assets/Sorvete.jpeg'),
    };
    const descricao = {
        Feijoada: "Preparada com cortes magros, feijão preto rico em fibras, temperos naturais e zero excessos",
        Salada_Completa: "Semelhante à salada simples, mas com ingredientes extras que tornam a refeição mais completa e nutritiva.",
        Salada_Premium: "Salada Premium com ingredientes frescos e saudáveis, ideal para quem busca uma refeição leve e nutritiva.",
        Acai_Tradicional: "Açaí tradicional com granola, banana e mel.",
        Salada_Simples: "Salada simples com alface, tomate e cenoura.",
        PF_Proteico: "Prato feito proteico com arroz, feijão e peito de frango grelhado.",
        Lasanha: "Lasanha de berinjela com queijo e molho de tomate.",
        Hamburguer: "Hambúrguer artesanal com carne bovina e queijo cheddar.",
        Sorvete: "Sorvete cremoso de chocolate com cobertura de granulado.",
    };
    const Beneficios = {
        Feijoada: "● Carnes magras (menos gordura e calorias)\n● Pouco ou nenhum óleo\n● Sem embutidos pesados\n● Temperos naturais, sem excesso de sal\n● Feijão preto rico em fibras, que ajuda na saciedade",
        Salada_Completa: "● Ingredientes frescos e saudáveis\n● Opção leve e nutritiva\n● Ideal para quem busca uma refeição balanceada",
        Salada_Premium: "● Ingredientes premium selecionados\n● Sabor excepcional e apresentação sofisticada\n● Perfeita para ocasiões especiais",
        Acai_Tradicional: "● Açaí com granola, banana e mel\n● Rico em antioxidantes\n● Energético e nutritivo",
        Salada_Simples: "● Salada leve e refrescante\n● Ideal para dias quentes\n● Baixo em calorias",
        PF_Proteico: "● Rico em proteínas\n● Ajuda na saciedade\n● Ideal para dietas de emagrecimento",
        Lasanha: "● Saborosa e nutritiva\n● Feita com ingredientes frescos\n● Ideal para o almoço em família",
        Hamburguer: "● Sabor intenso e suculento\n● Feito com carne bovina de qualidade\n● Acompanhado de batatas fritas",
        Sorvete: "● Delicioso e cremoso\n● Feito com ingredientes naturais\n● Perfeito para a sobremesa",
    }
    const { produto } = route.params;
    const imageSource = images[produto.urlProduto] || require('./assets/Feijoada.jpeg');
    const descricaoProduto = descricao[produto.urlProduto] || "Descrição não disponível";
    const beneficiosProduto = Beneficios[produto.urlProduto] || "Benefícios não disponíveis";
    return(
        <View style={styles.container}>
            <ImageBackground source={imageSource} style={{width: '100%', height: 300, justifyContent: 'center', alignItems: 'center'}}>
                <View style={styles.header}>
                    <View style={{marginHorizontal: 20, backgroundColor: '#fff', padding: 10, width: 50, height: 50, borderRadius: 100, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <TouchableOpacity onPress={() => {navigation.navigate('Home');}}>
                            <Image source={require('./assets/icon_left.png')} style={{width: 30, height: 30}} />
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
            <View style={styles.section_1}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 30, paddingTop: 20 }}>
                    <Text style={{fontSize: 22, fontWeight: 600}}>{produto.nomeProduto}</Text>
                    <Text style={{fontSize: 22, fontWeight: 600, color: '#368212'}}>{produto.precoProduto}</Text>
                </View>
                <Text style={{marginHorizontal: 30, marginTop: 20}}>{descricaoProduto}</Text>
                <Text style={{marginHorizontal: 30, marginTop: 10, color: '#368212', fontSize: 16, fontWeight: 500}}>Alinhado com o seu objetivo!</Text>
                <View style={{alignItems: 'center', marginTop: 20}}>
                    <Text style={{fontSize: 16, fontWeight: 500}}>Porque escolher essa opção?</Text>
                </View>
                <View style={{marginHorizontal: 20, marginTop: 20, marginBottom: 60}}> 
                    {beneficiosProduto.split('\n').map((linha, index) => (
                        <Text key={index} style={{marginBottom: 20}}>{linha}</Text>
                    ))}
                </View>
            </View>
            <View>
                <TouchableOpacity style={{backgroundColor: '#368212', padding: 15, borderRadius: 10, marginHorizontal: 30, marginTop: 20}} onPress={() => {navigation.navigate('Carrinho');}}>
                    <Text style={{color: '#fff', fontSize: 16, textAlign: 'center'}}>Adicionar ao Carrinho</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        width: '100%',
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 50,
        paddingBottom: 250,
    },
    section_1: {
        width: '100%',
        height: 500,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderRadius: 50,
        marginTop: -45,
    },
});