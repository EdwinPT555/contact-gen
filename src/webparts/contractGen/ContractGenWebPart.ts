import * as React from 'react';
import * as ReactDom from 'react-dom';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import ContractGen from './components/ContractGen';
import { IContractGenProps } from './components/IContractGenProps';
import { spService } from '../../spauth';

export interface IContractGenWebPartProps {
  description: string;
}

export default class ContractGenWebPart extends BaseClientSideWebPart<IContractGenWebPartProps> {

  public render(): void {
    spService.setup(this.context);
    const element: React.ReactElement<IContractGenProps> = React.createElement(
      ContractGen,
    );

    ReactDom.render(element, this.domElement);
  }

  protected async onInit(): Promise<void> {
    spService.setup(this.context);
  }
}
