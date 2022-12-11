import type { ComponentOptions } from 'vue';
import { defineComponent } from 'vue';
import { getOptions } from './config'
import { getValueByPath, blankIfUndefined, endsWith } from './helpers'

const _defaultSuffixProcessor = (input: string, suffix: string) => {

    if (blankIfUndefined(input).search("{variant}") !== -1 ) {
        return blankIfUndefined(input).replace(/\{variant\}/g, suffix);
    } else {
        return blankIfUndefined(input)
            .split(' ')
            .filter((cls) => cls.length > 0)
            .map((cls) => cls + suffix)
            .join(' ');
    }
}

const _getContext = (vm: ComponentOptions) => {
    const computedNames = vm.$options.computed ? Object.keys(vm.$options.computed) : []
    const computed = computedNames.filter(e => !endsWith(e, 'Classes')).reduce((o, key) => {
        o[key] = vm[key]
        return o
    }, {})
    return {props: vm.$props, data: vm.$data, computed}
}

export default defineComponent({
    isOruga: true,
    props: {
        override: Boolean
    },
    methods: {
        resolveClass(field: string, defaultValue: string, suffix: string = '') {
const debugField = undefined; //'outlinedClass';
(field === debugField) ? console.log('field: ' + field) : null;
(field === debugField) ? console.log('defaultValue: ' + defaultValue) : null;
(field === debugField) ? console.log('suffix: ' + suffix) : null;
// (field === debugField) ? console.log('this.$props: ', this.$props) : null;
(field === debugField) ? console.log('this.$props.override: ', this.$props.override) : null;
            // Verify if the component has the override attribute
            // If the attribute is set que create an empty object,
            // otherwise we will use the global config
            const config = this.$props.override === true ? {} : getOptions();
// (field === debugField) ? console.log('getOptions(): ', getOptions()) : null;
// (field === debugField) ? console.log('config: ', config) : null;
// (field === debugField) ? console.log('${this.$options.configField}.override: ' + `${this.$options.configField}.override`) : null;
            // We decide to override if the component has the override attribute, or
            // if the global config has the property "override: true"
            const override = this.$props.override || getValueByPath(config, `${this.$options.configField}.override`, false);
(field === debugField) ? console.log('override: ' + override) : null;
// (field === debugField) ? console.log('this.$options: ', this.$options) : null;
// (field === debugField) ? console.log('${this.$options.configField}.${field}.override: ' + `${this.$options.configField}.${field}.override`) : null;
            const overrideClass = getValueByPath(config, `${this.$options.configField}.${field}.override`, override);
(field === debugField) ? console.log('overrideClass: ' + overrideClass) : null;

// (field === debugField) ? console.log('path: ' + `transformClasses`) : null;
            const globalTransformClasses = getValueByPath(config, `transformClasses`, undefined);
// (field === debugField) ? console.log('globalTransformClasses: ' + globalTransformClasses) : null;

// (field === debugField) ? console.log('path: ' + `${this.$options.configField}.transformClasses`) : null;
            const localTransformClasses = getValueByPath(config, `${this.$options.configField}.transformClasses`, undefined);
// (field === debugField) ? console.log('localTransformClasses :' + localTransformClasses) : null;

// (field === debugField) ? console.log('${this.$options.configField}.${field}.class: ' + `${this.$options.configField}.${field}.class`) : null;
(field === debugField) ? console.log('${this.$options.configField}.${field}: ' + `${this.$options.configField}.${field}`) : null;
            let globalClass = getValueByPath(config, `${this.$options.configField}.${field}.class`, '')
                || getValueByPath(config, `${this.$options.configField}.${field}`, '');
(field === debugField) ? console.log('globalClass: ' + globalClass) : null;


            let currentClass = getValueByPath(this.$props, field);
// (field === debugField) ? console.log('field: ' + field) : null;
// (field === debugField) ? console.log('currentClass: ' + currentClass) : null;

// (field === debugField) ? console.log('isArray(currentClass): ' + Array.isArray(currentClass)) : null;
            // :rootClass="['text-pink-400', 'bg-blue-300']"
            if (Array.isArray(currentClass)) {
                currentClass = currentClass.join(' ');
// (field === debugField) ? console.log('currentClass: ' + currentClass) : null;
            }

            // this.resolveClass('rootClass', 'o-{*}-btn', 'xpto'),
            // defaultValue.search("{*}") 4
            // BaseComponentMixin.ts:64 defaultValue: o-xpto-btn
// (field === debugField) ? console.log('defaultValue: ' + defaultValue) : null;
            if (defaultValue.search("{*}") !== -1) {
// (field === debugField) ? console.log('defaultValue: ' + defaultValue) : null;
                defaultValue = defaultValue.replace(/\{\*\}/g, suffix);
// (field === debugField) ? console.log('defaultValue: ' + defaultValue) : null;
            } else {
                defaultValue = defaultValue + suffix;
            }
// (field === debugField) ? console.log('defaultValue: ' + defaultValue) : null;
            let context = null;
// (field === debugField) ? console.log('currentClass: ' + currentClass) : null;
// (field === debugField) ? console.log('typeof currentClass: ' + typeof currentClass) : null;
            if (typeof currentClass === "function") {
                context = _getContext(this);
// (field === debugField) ? console.log('context', context) : null;
                currentClass = currentClass(suffix, context);
// (field === debugField) ? console.log('currentClass: ', currentClass) : null;
            } else {
// (field === debugField) ? console.log('suffix: ', suffix) : null;
                currentClass = _defaultSuffixProcessor(currentClass, suffix);
// (field === debugField) ? console.log('currentClass: ', currentClass) : null;
            }
// (field === debugField) ? console.log('typeof globalClass: ' + typeof globalClass) : null;
// (field === debugField) ? console.log('globalClass: ' + globalClass) : null;
            if (typeof globalClass === "function") {
                globalClass = globalClass(suffix, context || _getContext(this));
            } else {
                globalClass = _defaultSuffixProcessor(globalClass, suffix);
(field === debugField) ? console.log('suffix: ' + suffix) : null;
(field === debugField) ? console.log('globalClass: ' + globalClass) : null;
            }

// (field === debugField) ? console.log('override: ', override) : null;
// (field === debugField) ? console.log('overrideClass: ', overrideClass) : null;
// (field === debugField) ? console.log('defaultValue: ', defaultValue) : null;
// (field === debugField) ? console.log('globalClass: ', `${blankIfUndefined(globalClass)}`) : null;
// (field === debugField) ? console.log('currentClass: ', `${blankIfUndefined(currentClass)}`) : null;
            let appliedClasses = (`${(override && !overrideClass) || (!override && !overrideClass) ? defaultValue : ''} `
                + `${blankIfUndefined(globalClass)} `
                + `${blankIfUndefined(currentClass)}`).trim().replace(/\s\s+/g, ' ');
// (field === debugField) ? console.log('appliedClasses: ' + appliedClasses) : null;

// (field === debugField) ? console.log('localTransformClasses: ' + localTransformClasses) : null;
            if (localTransformClasses) {
                appliedClasses = localTransformClasses(appliedClasses);
            }
            if (globalTransformClasses) {
                appliedClasses = globalTransformClasses(appliedClasses);
            }
(field === debugField) ? console.log('appliedClasses: ' + appliedClasses) : null;
(field === debugField) ? console.log('---------------------------------------------------') : null;
            return appliedClasses;
        }
    }
})
