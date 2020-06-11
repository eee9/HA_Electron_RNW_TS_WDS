import * as React from "react";
import { Text } from 'react-native';

import { ccc, LL } from './libs/mxlib';
import { isELEC } from './index';

const cc=console.log;

export interface HelloProps {
  compiler: string;
  framework: string;
}

export class Hello extends React.Component<HelloProps, {}> {
  render() {
    const ver = 'r07, K6B';
    ccc(ver + ', from Hello2.render() ...')
    const platform = (isELEC) ? 'Electron' : 'Web';
    return (
      <>
        <h3>{ver}</h3>
        <p>Hello from:</p>
        <p> 1. {this.props.compiler}</p>
        <p> 2. {this.props.framework}</p>
        <p> 3. {platform}</p>
        <Text>Text here</Text>
      </>
    )
  }
}