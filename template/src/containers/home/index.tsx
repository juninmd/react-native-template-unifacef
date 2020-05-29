import React, { Component, } from 'react';
import { inject, observer } from 'mobx-react';

import HomeStore from '../../stores/home.store';
import { Layout } from '@ui-kitten/components';
import { ScrollView } from 'react-native';

interface Props {
  homeStore: HomeStore,
  navigation: any;
}

@inject('homeStore')
@observer
export default class Home extends Component<Props> {
  render() {
    return (
      <Layout style={{ flex: 1, backgroundColor: 'black' }}>
        <ScrollView>
        </ScrollView>
      </Layout>);
  }
}