import React, {Component} from 'react';
import {Link} from 'react-router';
import styles from './Home.css';
import {AppBar, Drawer, MenuItem, Menu} from 'material-ui';
import menu from '../config/menu';
import {appName} from '../config/app';


export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    }

    this.handleOpen = this.handleOpen.bind(this);
  }

  handleOpen() {
    this.setState({open: !this.state.open});
  }

  handleClose = () => this.setState({open: false});

  render() {
    let items = menu.items.map((item) => {
      let menuItem = (
        <MenuItem
          onTouchTap={() => {
              if (item.onTouchTab) {
                item.onTouchTab();
              }
              this.handleClose();
            }
          }>{item.label}</MenuItem>
      );
      if (item.link) {
        return <Link to={item.link}>{menuItem}</Link>;
      } else {
        return menuItem;
      }
    });
    return (
      <div>
        <AppBar
          title={appName}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={() => {
            this.handleOpen()
          }}
        />
        <Drawer
          open={this.state.open}
          docked={false}
          onRequestChange={(open) => this.setState({open})}>
          <AppBar title={menu.title}/>
          {items}
        </Drawer>
      </div>
    );
  }
};
