import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import UserInfo from '../app/components/UserInfo';

storiesOf('UserInfo', module)
  .add('with name: pedro', () => (
    <UserInfo user="pedro"/>
  )).add(
   'with name: juan', () => (
      <UserInfo user="juan"/>
   ) 
);