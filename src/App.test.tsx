import 'react-native';
import React from 'react';
import App from './App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe("App", () => {
  describe("rendering", () => {
    it('renders correctly', () => {
      const component = renderer.create(<App />);
      const componentObject = component.toJSON();

      expect(componentObject).toBeDefined();
      expect(componentObject && componentObject.type).toEqual('View');
      expect(componentObject && componentObject.children).toHaveLength(1);
    });
  });
});