import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BitcoinInfo = () => {
    const bitcoinData = {
        "bitcoin": {
            "usd": 27092,
            "usd_market_cap": 527244337404.75903,
            "usd_24h_vol": 11457511159.45764,
            "usd_24h_change": -0.18541637772076122,
            "last_updated_at": 1695271400
        }
    };

    return (
        <View>
            <Text style={styles.Texto}>Preço do Bitcoin (USD): {bitcoinData.bitcoin.usd}</Text>
            <Text style={styles.Texto}>Capitalização de Mercado (USD): {bitcoinData.bitcoin.usd_market_cap}</Text>
            <Text style={styles.Texto}>Volume das últimas 24 horas (USD): {bitcoinData.bitcoin.usd_24h_vol}</Text>
            <Text style={styles.Texto}>Variação das últimas 24 horas (USD): {bitcoinData.bitcoin.usd_24h_change}</Text>
            <Text style={styles.Texto}>Última atualização em: {bitcoinData.bitcoin.last_updated_at}</Text>
        </View>
    );


};
const styles = StyleSheet.create({
    Texto: {
        marginLeft: 40,
            color: "blue",
            alignItems: 'center',
            marginTop: 40,
            marginRight: 50,
        },
    }
)



export default BitcoinInfo;