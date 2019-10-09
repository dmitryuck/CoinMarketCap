import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { BitcoinElement } from '../../common/Interfaces';
import styles from './BitcoinPanel.style';

interface Props {
  data: BitcoinElement[] | null;
}

const renderElements = (elements: BitcoinElement[]) => {
  return elements.map((element: BitcoinElement, index: number) => {
    const lastUpdate = new Date(element.last_updated);
    const lastUpdateString = `${lastUpdate.getDay()}/${lastUpdate.getMonth()}/${lastUpdate.getFullYear()} ${lastUpdate.getHours()}:${lastUpdate.getMinutes()}`;

    return (
      <View key={index} style={styles.elementContainer}>
        <View style={styles.elementRow}>
          <Text style={styles.paramName}>Name:</Text>
          <Text style={styles.paramValue}>
            {element.name}
          </Text>
        </View>

        <View style={styles.elementRow}>
          <Text style={styles.paramName}>Symbol:</Text>
          <Text style={styles.paramValue}>
            {element.symbol}
          </Text>
        </View>

        <View style={styles.elementRow}>
          <Text style={styles.paramName}>Cmc Rank:</Text>
          <Text style={styles.paramValue}>
            {element.cmc_rank}
          </Text>
        </View>

        <View style={styles.elementRow}>
          <Text style={styles.paramName}>Num Market Pairs:</Text>
          <Text style={styles.paramValue}>
            {element.num_market_pairs}
          </Text>
        </View>

        <View style={styles.elementRow}>
          <Text style={styles.paramName}>Circulating Supply:</Text>
          <Text style={styles.paramValue}>
            {element.circulating_supply}
          </Text>
        </View>

        <View style={styles.elementRow}>
          <Text style={styles.paramName}>Total Supply:</Text>
          <Text style={styles.paramValue}>
            {element.total_supply}
          </Text>
        </View>

        <View style={styles.elementRow}>
          <Text style={styles.paramName}>Max Supply:</Text>
          <Text style={styles.paramValue}>
            {element.max_supply}
          </Text>
        </View>

        <View style={styles.elementRow}>
          <Text style={styles.paramName}>Last Update:</Text>
          <Text style={styles.paramValue}>
            {lastUpdateString}
          </Text>
        </View>

        <View style={styles.elementRow}>
          <View style={styles.tagsContainer}>
            { element.tags.map((tag: string, tagIndex: number) =>
            <View key={tagIndex} style={styles.tag}>
              <Text style={styles.tagText}>{tag}</Text>
            </View>) }
          </View>
        </View>

        <View style={styles.elementRow}>
          <View style={styles.quotesContainer}>
            { Object.keys(element.quote).map((qt: string, qtIndex: number) =>
              <View key={qtIndex} style={styles.quote}>
                <Text style={styles.quoteName}>{qt}</Text>
                <View style={styles.quoteRow}>
                  <Text style={styles.quoteParamName}>Price:</Text>
                  <Text style={styles.quoteParamValue}>{element.quote[qt].price}</Text>
                </View>

                <View style={styles.quoteRow}>
                  <Text style={styles.quoteParamName}>Market Cap:</Text>
                  <Text style={styles.quoteParamValue}>{element.quote[qt].market_cap}</Text>
                </View>

                <View style={styles.quoteRow}>
                  <Text style={styles.quoteParamName}>Volume 24:</Text>
                  <Text style={styles.quoteParamValue}>{element.quote[qt].volume_24h}</Text>
                </View>
              </View>
            ) }
          </View>
        </View>
      </View>
    );
  });
}

const BitcoinPanel = (props: Props) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        {props && props.data && renderElements(props.data)}
      </ScrollView>
    </View>
  );
}

export default BitcoinPanel;