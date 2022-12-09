<script setup lang="ts">
import { computed, useAttrs } from 'vue'


const attrs = useAttrs()

type IconPosition = 'left' | 'right' | 'bottom' | 'top'

interface ButtonProps {
  label?: string | null
  icon?: string | null
  iconPos?: IconPosition
  iconClass?: string | null
  badge?: string | null
  badgeClass?: string | null
  disabled?: boolean
  loading?: boolean
  loadingIcon?: string
  tag?: string
  type?: string
}

const props = withDefaults(defineProps<ButtonProps>(), {
    label: null,
    icon: null,
    iconPos: 'left',
    iconClass: null,
    badge: null,
    badgeClass: null,
    disabled: false,
    loading: false,
    loadingIcon: 'pi pi-spinner pi-spin',
    tag: 'button',
    type: 'button',
})

const buttonClass = computed(() => {
    return {
        'p-button p-component': true,
        'p-button-icon-only': props.icon && !props.label,
        'p-button-vertical': (props.iconPos === 'top' || props.iconPos === 'bottom') && props.label,
        'p-disabled': attrs.disabled || props.loading,
        'p-button-loading': props.loading,
        'p-button-loading-label-only': props.loading && !props.icon && props.label
    };
})

const iconStyleClass = computed(() => {
    return [
        props.loading ? 'p-button-loading-icon ' + props.loadingIcon : props.icon,
        'p-button-icon',
        props.iconClass,
        {
            'p-button-icon-left': props.iconPos === 'left' && props.label,
            'p-button-icon-right': props.iconPos === 'right' && props.label,
            'p-button-icon-top': props.iconPos === 'top' && props.label,
            'p-button-icon-bottom': props.iconPos === 'bottom' && props.label
        }
    ];
})

const badgeStyleClass = computed(() => {
    return [
        'p-badge p-component',
        props.badgeClass,
        {
            'p-badge-no-gutter': props.badge && String(props.badge).length === 1
        }
    ];
})

// const disabled = computed(() => {
//     return attrs.disabled || props.loading || props.disabled;
// })

const defaultAriaLabel = computed(() => {
    return props.label ? props.label + (props.badge ? ' ' + props.badge : '') : attrs['aria-label'];
})

console.log(attrs)

</script>
<template>
    <component
        v-bind="attrs"
        :is="tag"
        :class="buttonClass"
        :type="type"
        :aria-label="defaultAriaLabel"
        :disabled="disabled">
        <slot xpto="xpto">
            <span v-if="loading && !icon" :class="iconStyleClass"></span>
            <span v-if="icon" :class="iconStyleClass"></span>
            <span class="p-button-label">{{ label || '&nbsp;' }}</span>
            <span v-if="badge" :class="badgeStyleClass">{{ badge }}</span>
        </slot>
      <slot name="test"
            message="buttonClass"></slot>
    </component>
</template>
<style lang="scss" scoped>
::v-global(.p-button) {
    background-color: #004E42;
    //border: 1px solid #004E42;
    border: none;
    box-shadow: 0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgb(0 0 0 / 5%);
    font-size: 16px;
}
::v-global(.p-button:focus) {
    box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #004E42, 0 1px 2px 0 rgb(0 0 0 / 0%);
    border: none;
}
::v-global(.p-button:enabled:active) {
    background-color: #004744;
    border: none;
}
::v-global(.p-button:enabled:hover) {
    background-color: #006B66;
    border: none;
}
::v-global(.p-button-label) {
    text-transform: uppercase;
}
</style>
