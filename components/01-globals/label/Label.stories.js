import { storiesOf } from '@storybook/vue'

import App from '../app/App.vue'
import AlpacaLabel from './Label.vue'

storiesOf('Global/Label', module)
  .add('Default', () => ({
    components: { App, AlpacaLabel },
    template: `
      <app>
        <alpaca-label>
          Label
        </alpaca-label>
      </app>
    `
  }))
  .add('Custom tag', () => ({
    components: { App, AlpacaLabel },
    template: `
      <app>
        <alpaca-label
          tag="span"
          customClass="custom"
        >
          Custom tag label
        </alpaca-label>
      </app>
    `
  }))
  .add('Inline', () => ({
    components: { App, AlpacaLabel },
    template: `
      <app>
        <alpaca-label inline>
          Inline label
        </alpaca-label>
      </app>
    `
  }))
