/**
 * @format
 */
import { ButtonWithoutFeedback } from '@components';
import { describe, expect } from '@jest/globals';
import {
  fireEvent,
  screen
} from '@testing-library/react-native';
import { toJSON, withThemeProvider } from '__tests__/utils/customRender';

const onPressMock = jest.fn();
const props = {
  color: 'red',
  style: { backgroundColor: 'blue' },
  text: 'Button Test',
  icon: 'home',
  iconSize: 30,
  onPress: onPressMock,
};
const Btn = () => withThemeProvider(<ButtonWithoutFeedback {...props} />)

describe('ButtonWithoutFeedback', () => {
  beforeEach(() => {
    // Mock fetch with a resolved Promise that returns sample data
    // @ts-ignore
    jest.clearAllMocks();
    // @ts-ignore
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve([])
    });
    toJSON(<Btn />)
  });
  test('Snapshot', () => {
    expect(screen).toMatchSnapshot()
  })
  test('Renders correctly', () => {
    const icon = screen.getByText(props.text)
    expect(icon).toBeTruthy()
    expect(icon.props.style).toBe(props.style)
  })
  test('Calls onPress when pressed', () => {
    const icon = screen.getByText(props.text)
    fireEvent(icon, 'press')
    expect(onPressMock).toHaveBeenCalled()
  })
})