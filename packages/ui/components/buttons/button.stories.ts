
import type { Meta, StoryFn } from '@storybook/vue3';
import ButtonPrimary from '../../global/button/button-primary.vue';
import ButtonSecondary from '../../global/button/button-secondary.vue';
import ButtonTertiary from '../../global/button/button-tertiary.vue';

import ButtonBadge from '../../global/button/button-badge.vue';
import ButtonLink from '../../global/button/button-link.vue';
import ButtonLinkUnderlined from '../../global/button/button-link-underlined.vue';
import ButtonLinkNav from '../../global/button/button-link-nav.vue';
import ButtonTab from '../../global/button/button-tab.vue';

import ButtonSquared from '../../global/button/button-squared.vue';
import ButtonGhost from '../../global/button/button-ghost.vue';
import ButtonCircled from '../../global/button/button-circled.vue';

import IconPlay from '../../global/icon/icon-play.vue';
import { ENVIRONMENTS } from '../../../models/domains/theme';
import BaseButton from './base-button.vue';

export default {
  title: 'Button',
  component: BaseButton,
  argTypes: {
    environment: {
      control: 'select',
      options: ENVIRONMENTS,
    },
    disabled: { control: 'boolean' },
    selected: { control: 'boolean' },
    text: { control: 'text' },
  },
} as Meta<typeof BaseButton>;

const makeTemplate = (BaseButton: any): StoryFn<typeof BaseButton> => (args: any) => ({
  components: { BaseButton, IconPlay },
  template: `
  <div class="container column" :class="args.aspick('mode').mode">
    <div class="container column">
      <h2 class="storybook-text">Button Default</h2>
      <div class="container row">
        <base-button v-bind="args.asomit('text')">
          <template #default>{{ text || 'default value' }}</template>
          <template #selected>{{ text || 'selected value' }}</template>
          <template #disabled>{{ text || 'disabled value' }}</template>
        </base-button>
        <base-button class="hover" v-bind="args.asomit('text')">
          <template #default>{{ text || 'default value' }}</template>
          <template #selected>{{ text || 'selected value' }}</template>
          <template #disabled>{{ text || 'disabled value' }}</template>
        </base-button>
        <base-button v-bind="args.asomit('text')" selected>
          <template #default>{{ text || 'default value' }}</template>
          <template #selected>{{ text || 'selected value' }}</template>
          <template #disabled>{{ text || 'disabled value' }}</template>
        </base-button>
        <base-button v-bind="args.asomit('text')" disabled>
          <template #default>{{ text || 'default value' }}</template>
          <template #selected>{{ text || 'selected value' }}</template>
          <template #disabled>{{ text || 'disabled value' }}</template>
        </base-button>
      </div>
      <h2 class="storybook-text">Button With Icon</h2>
      <div class="container row">
        <base-button v-bind="args.asomit('text')">
          <template #external><icon-play class="icon" class="icon" /></template>
          <template #default>{{ text || 'default value' }}</template>
          <template #selected>{{ text || 'selected value' }}</template>
          <template #disabled>{{ text || 'disabled value' }}</template>
        </base-button>
        <base-button class="hover" v-bind="args.asomit('text')">
          <template #external><icon-play class="icon" /></template>
          <template #default>{{ text || 'default value' }}</template>
          <template #selected>{{ text || 'selected value' }}</template>
          <template #disabled>{{ text || 'disabled value' }}</template>
        </base-button>
        <base-button v-bind="args.asomit('text')" selected>
          <template #external><icon-play class="icon" /></template>
          <template #default>{{ text || 'default value' }}</template>
          <template #selected>{{ text || 'selected value' }}</template>
          <template #disabled>{{ text || 'disabled value' }}</template>
        </base-button>
        <base-button v-bind="args.asomit('text')" disabled>
          <template #external><icon-play class="icon" /></template>
          <template #default>{{ text || 'default value' }}</template>
          <template #selected>{{ text || 'selected value' }}</template>
          <template #disabled>{{ text || 'disabled value' }}</template>
        </base-button>
      </div>
      <h2 class="storybook-text">Button With Image</h2>
      <div class="container row">
        <base-button :icon="image" v-bind="args.asomit('text')">
          <template #default>{{ text || 'default value' }}</template>
          <template #selected>{{ text || 'selected value' }}</template>
          <template #disabled>{{ text || 'disabled value' }}</template>
        </base-button>
        <base-button :icon="image" class="hover" v-bind="args.asomit('text')">
          <template #default>{{ text || 'default value' }}</template>
          <template #selected>{{ text || 'selected value' }}</template>
          <template #disabled>{{ text || 'disabled value' }}</template>
        </base-button>
        <base-button :icon="image" v-bind="args.asomit('text')" selected>
          <template #default>{{ text || 'default value' }}</template>
          <template #selected>{{ text || 'selected value' }}</template>
          <template #disabled>{{ text || 'disabled value' }}</template>
        </base-button>
        <base-button :icon="image" v-bind="args.asomit('text')" disabled>
          <template #default>{{ text || 'default value' }}</template>
          <template #selected>{{ text || 'selected value' }}</template>
          <template #disabled>{{ text || 'disabled value' }}</template>
        </base-button>
      </div>
      <h2 class="storybook-text">Button Only Icon</h2>
      <div class="container row">
        <base-button v-bind="args.asomit('text')"><template #external><icon-play class="icon" /></template></base-button>
        <base-button class="hover" v-bind="args.asomit('text')"><template #external><icon-play class="icon" /></template></base-button>
        <base-button v-bind="args.asomit('text')" selected><template #external><icon-play class="icon" /></template></base-button>
        <base-button v-bind="args.asomit('text')" disabled><template #external><icon-play class="icon" /></template></base-button>
      </div>
    </div>
      <h2 class="storybook-text">Button Only Image</h2>
      <div class="container row">
        <base-button :icon="image" v-bind="args.asomit('text')"></base-button>
        <base-button :icon="image" class="hover" v-bind="args.asomit('text')"></base-button>
        <base-button :icon="image" v-bind="args.asomit('text')" selected></base-button>
        <base-button :icon="image" v-bind="args.asomit('text')" disabled></base-button>
      </div>
    </div>
    <div class="container column">
      <h2 class="storybook-text">Link Default</h2>
      <div class="container row">
        <base-button to="index" v-bind="args.asomit('text')">
          <template #default>{{ text || 'default value' }}</template>
          <template #selected>{{ text || 'selected value' }}</template>
          <template #disabled>{{ text || 'disabled value' }}</template>
        </base-button>
        <base-button to="index" class="hover" v-bind="args.asomit('text')">
          <template #default>{{ text || 'default value' }}</template>
          <template #selected>{{ text || 'selected value' }}</template>
          <template #disabled>{{ text || 'disabled value' }}</template>
        </base-button>
        <base-button to="index" v-bind="args.asomit('text')" selected>
          <template #default>{{ text || 'default value' }}</template>
          <template #selected>{{ text || 'selected value' }}</template>
          <template #disabled>{{ text || 'disabled value' }}</template>
        </base-button>
        <base-button to="index" v-bind="args.asomit('text')" disabled>
          <template #default>{{ text || 'default value' }}</template>
          <template #selected>{{ text || 'selected value' }}</template>
          <template #disabled>{{ text || 'disabled value' }}</template>
        </base-button>
      </div>
      <h2 class="storybook-text">Link With Icon</h2>
      <div class="container row">
        <base-button to="index" v-bind="args.asomit('text')">
          <template #external><icon-play class="icon" /></template>
          <template #default>{{ text || 'default value' }}</template>
          <template #selected>{{ text || 'selected value' }}</template>
          <template #disabled>{{ text || 'disabled value' }}</template>
        </base-button>
        <base-button to="index" class="hover" v-bind="args.asomit('text')">
          <template #external><icon-play class="icon" /></template>
          <template #default>{{ text || 'default value' }}</template>
          <template #selected>{{ text || 'selected value' }}</template>
          <template #disabled>{{ text || 'disabled value' }}</template>
        </base-button>
        <base-button to="index" v-bind="args.asomit('text')" selected>
          <template #external><icon-play class="icon" /></template>
          <template #default>{{ text || 'default value' }}</template>
          <template #selected>{{ text || 'selected value' }}</template>
          <template #disabled>{{ text || 'disabled value' }}</template>
        </base-button>
        <base-button to="index" v-bind="args.asomit('text')" disabled>
          <template #external><icon-play class="icon" /></template>
          <template #default>{{ text || 'default value' }}</template>
          <template #selected>{{ text || 'selected value' }}</template>
          <template #disabled>{{ text || 'disabled value' }}</template>
        </base-button>
      </div>
      <h2 class="storybook-text">Link With Image</h2>
      <div class="container row">
        <base-button to="index" :icon="image" v-bind="args.asomit('text')">
          <template #default>{{ text || 'default value' }}</template>
          <template #selected>{{ text || 'selected value' }}</template>
          <template #disabled>{{ text || 'disabled value' }}</template>
        </base-button>
        <base-button to="index" :icon="image" class="hover" v-bind="args.asomit('text')">
          <template #default>{{ text || 'default value' }}</template>
          <template #selected>{{ text || 'selected value' }}</template>
          <template #disabled>{{ text || 'disabled value' }}</template>
        </base-button>
        <base-button to="index" :icon="image" v-bind="args.asomit('text')" selected>
          <template #default>{{ text || 'default value' }}</template>
          <template #selected>{{ text || 'selected value' }}</template>
          <template #disabled>{{ text || 'disabled value' }}</template>
        </base-button>
        <base-button to="index" :icon="image" v-bind="args.asomit('text')" disabled>
          <template #default>{{ text || 'default value' }}</template>
          <template #selected>{{ text || 'selected value' }}</template>
          <template #disabled>{{ text || 'disabled value' }}</template>
        </base-button>
      </div>
      <h2 class="storybook-text">Link Only Icon</h2>
      <div class="container row">
        <base-button to="index" v-bind="args.asomit('text')"><template #external><icon-play class="icon" /></template></base-button>
        <base-button to="index" class="hover" v-bind="args.asomit('text')"><template #external><icon-play class="icon" /></template></base-button>
        <base-button to="index" v-bind="args.asomit('text')" selected><template #external><icon-play class="icon" /></template></base-button>
        <base-button to="index" v-bind="args.asomit('text')" disabled><template #external><icon-play class="icon" /></template></base-button>
      </div>
      <h2 class="storybook-text">Link Only Image</h2>
      <div class="container row">
        <base-button to="index" :icon="image" v-bind="args.asomit('text')"></base-button>
        <base-button to="index" :icon="image" class="hover" v-bind="args.asomit('text')"></base-button>
        <base-button to="index" :icon="image" v-bind="args.asomit('text')" selected></base-button>
        <base-button to="index" :icon="image" v-bind="args.asomit('text')" disabled></base-button>
      </div>
    </div>
  </div>
  `,
  setup() {
    const image = 'https://w7.pngwing.com/pngs/987/537/png-transparent-download-downloading-save-basic-user-interface-icon-thumbnail.png';

    return { args, image, text: toRef(args, 'text'), mode: toRef(args, 'mode') };
  },
});

export const Primary = makeTemplate(ButtonPrimary).bind({});
Primary.args = {
  environment: 'blue',
  disabled: false,
  selected: false,
};

export const Secondary = makeTemplate(ButtonSecondary).bind({});
Secondary.args = {
  environment: 'blue',
  disabled: false,
  selected: false,
};

export const Tertiary = makeTemplate(ButtonTertiary).bind({});
Tertiary.args = {
  environment: 'blue',
  disabled: false,
  selected: false,
};

export const Badge = makeTemplate(ButtonBadge).bind({});
Badge.args = {
  environment: 'blue',
  disabled: false,
  selected: false,
};

export const Link = makeTemplate(ButtonLink).bind({});
Link.args = {
  environment: 'blue',
  disabled: false,
  selected: false,
};

export const LinkUnderlined = makeTemplate(ButtonLinkUnderlined).bind({});
LinkUnderlined.args = {
  environment: 'blue',
  disabled: false,
  selected: false,
};

export const LinkNav = makeTemplate(ButtonLinkNav).bind({});
LinkNav.args = {
  environment: 'blue',
  disabled: false,
  selected: false,
};

export const Tab = makeTemplate(ButtonTab).bind({});
Tab.args = {
  environment: 'blue',
  disabled: false,
  selected: false,
};

export const Squared = makeTemplate(ButtonSquared).bind({});
Squared.args = {
  environment: 'blue',
  disabled: false,
  selected: false,
};

export const Ghost = makeTemplate(ButtonGhost).bind({});
Ghost.args = {
  environment: 'blue',
  disabled: false,
  selected: false,
};

export const Circled = makeTemplate(ButtonCircled).bind({});
Circled.args = {
  environment: 'blue',
  disabled: false,
  selected: false,
};
