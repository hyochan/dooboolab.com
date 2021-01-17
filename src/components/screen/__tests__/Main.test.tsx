import 'react-native';

import React, {ReactElement} from 'react';
import {RenderAPI, render} from '@testing-library/react-native';
import {createTestElement, createTestProps} from '../../../../test/testUtils';

import Screen from '../Home';

let props: any;
let component: ReactElement;
let testingLib: RenderAPI;

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: (): Record<string, unknown> => {
      return {
        navigate: jest.fn(),
      };
    },
  };
});

describe('Render', () => {
  beforeEach(() => {
    props = createTestProps();
    component = createTestElement(<Screen {...props} />);
    testingLib = render(component);
  });

  it('renders without crashing', () => {
    const baseElement = testingLib.toJSON();

    expect(baseElement).toMatchSnapshot();
    expect(baseElement).toBeTruthy();
  });
});
