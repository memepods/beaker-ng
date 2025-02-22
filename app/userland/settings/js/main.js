import { LitElement, html } from '../../app-stdlib/vendor/lit-element/lit-element.js'
import { classMap } from '../../app-stdlib/vendor/lit-element/lit-html/directives/class-map.js'
import * as QP from './lib/query-params.js'
import css from '../css/main.css.js'
import './views/general.js'
import './views/blocking.js'
import './views/log.js'
import './views/fs-audit-log.js'
import './views/network.js'
import './views/devices.js'
import './views/internals.js'
import './views/privacy.js'
import './views/info.js'
import './views/daemon-log.js'

class SettingsApp extends LitElement {
  static get properties () {
    return {
      currentSubview: {type: String}
    }
  }

  static get styles () {
    return css
  }

  constructor () {
    super()
    this.currentSubview = QP.getParam('view') || 'general'
    this.load()
  }

  async load () {
    try {
      await Promise.all(Array.from(this.shadowRoot.querySelectorAll('[loadable]'), el => el.unload()))
    } catch (e) {
      console.debug(e)
    }
    await this.requestUpdate()
    try {
      await Promise.all(Array.from(this.shadowRoot.querySelectorAll('[loadable]'), el => el.load()))
    } catch (e) {
      console.debug(e)
    }
  }

  // rendering
  // =

  render () {
    document.title = 'Settings'
    return html`
      <link rel="stylesheet" href="beaker://assets/font-awesome.css">
      <div class="subnav">${this.renderSubnav()}</div>
      <div class="subview">${this.renderSubview()}</div>
    `
  }

  renderSubnav () {
    const item = (id, icon, label) => {
      const cls = classMap({item: true, current: id === this.currentSubview})
      return html`
        <div class=${cls} @click=${e => this.onClickSubview(e, id)}><span class="fa-fw ${icon}"></span> ${label}</div>
      `
    }
    return html`
      ${item('general', 'fas fa-cog', 'General')}
      ${item('blocking', 'fas fa-ban', 'Content Blocking')}
      ${item('general-logs', 'fas fa-clipboard-list', 'Beaker Logs')}
      <hr/>
      ${item('fs-audit-log', 'fas fa-database', 'Filesystem Audit Log')}
      ${item('network', 'fas fa-share-alt', 'Hyperdrive Stats')}
      ${item('devices', 'fas fa-desktop', 'Devices')}
      ${''/*DISABLEDitem('daemon-log', 'fas fa-clipboard-list', 'Daemon Log')*/}
      <hr/>
      ${item('privacy', 'fas fa-shield-alt', 'Privacy')}
      ${item('internals', 'fas fa-code', 'Internals')}
      ${item('info', 'fas fa-info-circle', 'About')}
      <hr/>
    `
  }

  renderSubview () {
    switch (this.currentSubview) {
      case 'general':
        return html`<general-settings-view loadable></general-settings-view>`
      case 'blocking':
        return html`<blocking-settings-view loadable></blocking-settings-view>`
      case 'general-logs':
        return html`<log-settings-view loadable></log-settings-view>`
      case 'fs-audit-log':
        return html`<fs-audit-log-view loadable></fs-audit-log-view>`
      case 'network':
        return html`<network-view loadable></network-view>`
      case 'devices':
          return html`<devices-view loadable></devices-view>`
      case 'privacy':
          return html`<privacy-settings-view loadable></privacy-settings-view>`
      case 'internals':
          return html`<internals-view loadable></internals-view>`
      case 'info':
        return html`<info-settings-view loadable></info-settings-view>`
      case 'daemon-log':
          return html`<daemon-log-view loadable></daemon-log-view>`
      default:
        return html`<div class="empty"><div><span class="fas fa-toolbox"></span></div>Under Construction</div>`
    }
  }

  // events
  // =

  onClickSubview (e, id) {
    this.currentSubview = id
    QP.setParams({view: id})
    this.load()
  }
}

customElements.define('settings-app', SettingsApp)
