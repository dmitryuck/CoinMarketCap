import 'react-native';
import React from 'react';
import BitcoinPanel from './BitcoinPanel';
import CoinMarketResponseMock from '../../../tests/CoinMarketResponse.mock';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe("BitcoinPanel", () => {
  describe("rendering", () => {
    it('renders correctly', () => {
      const component = renderer.create(<BitcoinPanel data={CoinMarketResponseMock.data} />);
      const componentObject = component.toJSON();

      expect(componentObject).toBeDefined();
      expect(componentObject && componentObject.type).toEqual('View');
      expect(componentObject && componentObject.children).toHaveLength(1);
    });
  });
});