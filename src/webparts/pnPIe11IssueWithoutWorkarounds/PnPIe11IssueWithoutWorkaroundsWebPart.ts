import '@pnp/polyfill-ie11';

import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'PnPIe11IssueWithoutWorkaroundsWebPartStrings';
import PnPIe11IssueWithoutWorkarounds from './components/PnPIe11IssueWithoutWorkarounds';
import { IPnPIe11IssueWithoutWorkaroundsProps } from './components/IPnPIe11IssueWithoutWorkaroundsProps';
export interface IPnPIe11IssueWithoutWorkaroundsWebPartProps {
  description: string;
}

export default class PnPIe11IssueWithoutWorkaroundsWebPart extends BaseClientSideWebPart<IPnPIe11IssueWithoutWorkaroundsWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IPnPIe11IssueWithoutWorkaroundsProps > = React.createElement(
      PnPIe11IssueWithoutWorkarounds,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
