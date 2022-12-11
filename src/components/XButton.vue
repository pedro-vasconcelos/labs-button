<template>
  <component
      v-bind="$attrs"
      :disabled="computedDisabled"
      :is="computedTag"
      :type="computedNativeType"
      :class="rootClasses"
  >
        <span :class="elementsWrapperClasses">
            <o-icon
                v-if="iconLeft"
                :pack="iconPack"
                :icon="iconLeft"
                :size="size"
                :both="iconBoth"
                :class="iconLeftClasses"
            />
            <span
                :class="labelClasses"
                v-if="label || $slots.default">
                <slot>{{ label }}</slot>
            </span>
            <o-icon
                v-if="iconRight"
                :pack="iconPack"
                :icon="iconRight"
                :size="size"
                :both="iconBoth"
                :class="iconRightClasses"
            />
        </span>
  </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Icon from './Icon.vue'
import { getOptions } from './config'
import BaseComponentMixin from './BaseComponentMixin'
import { getValueByPath } from './helpers'

/**
 * The classic button, in different colors, sizes, and states
 * @displayName Button
 * @style _button.scss
 */
export default defineComponent({
  name: 'XButton',
  components: {
    [Icon.name]: Icon
  },
  configField: 'button',
  mixins: [
      BaseComponentMixin
  ],
  inheritAttrs: false,
  props: {
    /**
     * Color of the control, optional
     * @values primary, info, success, warning, danger, and any other custom color
     */
    variant: String,
    /**
     * Size of button, optional
     * @values small, medium, large
     */
    size: String,
    /**
     * Button label, optional when default slot
     */
    label: String,
    /**
     * Icon pack to use
     * @values mdi, fa, fas and any other custom icon pack
     */
    iconPack: String,
    /**
     * Icon name to show on the left
     */
    iconLeft: String,
    /**
     * Icon name to show on the right
     */
    iconRight: String,
    /**
     * Rounded style
     */
    rounded: {
      type: Boolean,
      default: () => { return getValueByPath(getOptions(), 'button.rounded', false) }
    },
    /**
     * Outlined style
     */
    outlined: Boolean,
    /**
     * Button will be expanded (full-width)
     */
    expanded: Boolean,
    inverted: Boolean,
    /**
     * Button type, like native
     */
    nativeType: {
      type: String,
      default: 'button',
      validator: (value: string) => {
        return [
          'button',
          'submit',
          'reset'
        ].indexOf(value) >= 0
      }
    },
    /**
     * Button tag name
     * @values button, a, input, router-link, nuxt-link (or other nuxt alias)
     */
    tag: {
      type: String,
      default: 'button'
    },
    /**
     * Button will be disabled
     */
    disabled: Boolean,
    /**  @ignore */
    iconBoth: Boolean, // This is used internally
    elementsWrapperClass: [String, Function, Array],
    rootClass: [String, Function, Array],
    outlinedClass: [String, Function, Array],
    invertedClass: [String, Function, Array],
    expandedClass: [String, Function, Array],
    roundedClass: [String, Function, Array],
    disabledClass: [String, Function, Array],
    iconClass: [String, Function, Array],
    iconLeftClass: [String, Function, Array],
    iconRightClass: [String, Function, Array],
    labelClass: [String, Function, Array],
    sizeClass: [String, Function, Array],
    variantClass: [String, Function, Array]
  },
  computed: {
    rootClasses() {
      return [
        this.resolveClass('rootClass', 'x-btn'),
        { [this.resolveClass('sizeClass', 'x-btn--', this.size)]: this.size },
        { [this.resolveClass('variantClass', 'x-btn--', this.variant)]: this.variant },
        { [this.resolveClass('outlinedClass', 'x-btn--outlined')]: this.outlined && !this.variant },
        { [this.resolveClass('invertedClass', 'x-btn--inverted')]: this.inverted && !this.variant },
        { [this.resolveClass('outlinedClass', 'x-btn--outlined-', this.variant)]: this.outlined && this.variant },
        { [this.resolveClass('invertedClass', 'x-btn--inverted-', this.variant)]: this.inverted && this.variant },
        { [this.resolveClass('expandedClass', 'x-btn--expanded')]: this.expanded },
        { [this.resolveClass('roundedClass', 'x-btn--rounded')]: this.rounded },
        { [this.resolveClass('disabledClass', 'x-btn--disabled')]: this.disabled },
      ]
    },
    labelClasses() {
      return [
        this.resolveClass('labelClass', 'o-btn__label'),
      ]
    },
    iconClasses() {
      return [
        this.resolveClass('iconClass', 'o-btn__icon'),
      ]
    },
    iconLeftClasses() {
      return [
        ...this.iconClasses,
        this.resolveClass('iconLeftClass', 'o-btn__icon-left')
      ]
    },
    iconRightClasses() {
      return [
        ...this.iconClasses,
        this.resolveClass('iconRightClass', 'o-btn__icon-right')
      ]
    },
    elementsWrapperClasses() {
      return [
        this.resolveClass('elementsWrapperClass', 'o-btn__wrapper'),
      ]
    },
    computedTag() {
      if (typeof this.disabled !== 'undefined' && this.disabled !== false) {
        return 'button'
      }
      return this.tag
    },
    computedNativeType() {
      if (this.tag === 'button' || this.tag === 'input') {
        return this.nativeType
      }
      return null
    },
    computedDisabled() {
      if (this.disabled) return true
      return null
    }
  }
})
</script>
