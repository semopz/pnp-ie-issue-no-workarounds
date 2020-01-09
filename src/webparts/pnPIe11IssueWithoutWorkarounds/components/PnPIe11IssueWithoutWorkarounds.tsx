import * as React from 'react';
import styles from './PnPIe11IssueWithoutWorkarounds.module.scss';
import { IPnPIe11IssueWithoutWorkaroundsProps } from './IPnPIe11IssueWithoutWorkaroundsProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class PnPIe11IssueWithoutWorkarounds extends React.Component<IPnPIe11IssueWithoutWorkaroundsProps, {}> {
  public render(): React.ReactElement<IPnPIe11IssueWithoutWorkaroundsProps> {
    return (
      <div className={ styles.pnPIe11IssueWithoutWorkarounds }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
