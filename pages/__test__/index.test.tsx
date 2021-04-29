import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import IndexPage from '../index';

describe('IndexPage', () => {
  let indexPage: ShallowWrapper;
  beforeEach(() => {
    indexPage = shallow(<IndexPage />);
  });
  test('IndexPage test', () => {
    expect(indexPage.text()).toEqual('<Layout />');
  });

  test('Layout title test', () => {
    expect(indexPage.find('Layout').props().title).toEqual(
      'Home | Next.js + TypeScript Example'
    );
  });

  test('h1 test', () => {
    expect(indexPage.find('h1').text()).toEqual('Hello Next.js 👋');
  });

  test('Link href test', () => {
    expect(indexPage.find('Link').props().href).toEqual('/about');
  });

  test('a test', () => {
    expect(indexPage.find('a').text()).toEqual('About');
  });
});
