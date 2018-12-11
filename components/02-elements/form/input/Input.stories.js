import { storiesOf } from '@storybook/vue'

import App from '../../../01-globals/app/App.vue'
import AlpacaInput from './Input.vue'

storiesOf('Elements/Form/Input', module)
  .add('Default', () => ({
    components: { App, AlpacaInput },
    template: `
      <app>
        <alpaca-input 
          label="Default label"
          type="text"
          id="field_id"
          name="default"
          placeholder="First and last name"
        />
       </app>
    `
  }))
  .add('Textarea', () => ({
    components: { App, AlpacaInput },
    template: `
      <app>
        <alpaca-input 
          label="Textarea"
          type="text"
          id="field_id"
          name="textarea"
          tag="textarea"
          placeholder="First and last name"
        />
       </app>
    `
  }))
  .add('Hidden label', () => ({
    components: { App, AlpacaInput },
    template: `
      <app>
        <alpaca-input 
          label="Hidden label"
          type="text"
          id="field_id"
          name="hidden"
          placeholder="Hidden label"
          hiddenLabel
        />
       </app>
    `
  }))
  .add('Inline label', () => ({
    components: { App, AlpacaInput },
    template: `
      <app>
        <alpaca-input 
          label="Inline text"
          type="text"
          id="field_id"
          name="inline"
          placeholder="First and last name"
          inline
        />
       </app>
    `
  }))