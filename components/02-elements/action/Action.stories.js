import {storiesOf} from '@storybook/vue'

import App from '../../01-globals/app/App.vue'
import AlpacaAction from './Action.vue'

storiesOf('Elements/Action', module)
  .add('Default', () => ({
    components: {App, AlpacaAction},
    template: `
      <app>
        <alpaca-action :button="true">Test</alpaca-action>
        <alpaca-action title="test" href="#">Test</alpaca-action>
      </app>
    `
  }))