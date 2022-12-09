<script setup lang="ts">
import BiondButton from './components/BiondButton.vue'

const clickMe = () => {
  console.log('click')
}
</script>

<template>
  <div class="flex flex-col w-full items-center justify-center p-20 gap-y-5">
    <div class="flex gap-4">
      <o-button variant="primary">Primary</o-button>
      <o-button variant="primary" outlined>Outlined</o-button>
      <o-button variant="primary" inverted>Inverted</o-button>
      <o-button variant="primary" disabled>Disabled</o-button>
    </div>
    <div class="space-x-4">
      <o-button variant="danger" size="extra-small">Primary</o-button>
      <o-button variant="danger" size="small">Primary</o-button>
      <o-button variant="danger" size="medium">Primary</o-button>
      <o-button variant="danger" size="large">Primary</o-button>
      <o-button variant="danger" size="extra-large">Primary</o-button>
    </div>
    <div class="space-x-4">
      <o-button disabled variant="danger" size="extra-small">
        <o-icon
        override
        pack="fas" icon="circle-notch"
        customClass="w-3 h-3 mb-0.5 align-middle inline-block animate-spin"
        ></o-icon>
        <span>Loading...</span>
      </o-button>
      <o-button disabled variant="danger" size="small">
        <o-icon
        override
        pack="fas" icon="circle-notch"
        customClass="w-3.5 h-3.5 mb-0.5 align-middle inline-block animate-spin"
        ></o-icon>
        <span>Loading...</span>
      </o-button>
      <o-button disabled variant="danger" size="medium">
        <o-icon
        override
        pack="fas" icon="circle-notch"
        customClass="w-4 h-4 mb-0.5 align-middle inline-block animate-spin"
        ></o-icon>
        <span>Loading...</span>
      </o-button>
      <o-button disabled variant="danger" size="large">
        <o-icon
        override
        pack="fas" icon="circle-notch"
        customClass="w-5 h-5 mb-0.5 align-middle inline-block animate-spin"
        ></o-icon>
        <span>Loading...</span>
      </o-button>
      <o-button disabled variant="danger" size="extra-large">
        <o-icon
        override
        pack="fas" icon="circle-notch"
        customClass="w-5 h-5 mb-0.5 align-middle inline-block animate-spin"
        ></o-icon>
        <span>Loading...</span>
      </o-button>
    </div>
    <div class="space-x-4">
      <o-button variant="danger" size="extra-small">
        <o-icon
            override
            pack="fas" icon="envelope"
            customClass="w-3 h-3 mb-0.5 align-middle inline-block"
        ></o-icon>
        <span>Button text</span>
      </o-button>
      <o-button variant="danger" size="small">
        <o-icon
            override
            pack="fas" icon="envelope"
            customClass="w-3.5 h-3.5 mb-0.5 align-middle inline-block"
        ></o-icon>
        <span>Button text</span>
      </o-button>
      <o-button variant="danger" size="medium">
        <o-icon
            override
            pack="fas" icon="envelope"
            customClass="w-4 h-4 mb-0.5 align-middle inline-block"
        ></o-icon>
        <span>Button text</span>
      </o-button>
      <o-button variant="danger" size="large">
        <o-icon
            override
            pack="fas" icon="envelope"
            customClass="w-5 h-5 mb-0.5 align-middle inline-block"
        ></o-icon>
        <span>Button text</span>
      </o-button>
      <o-button variant="danger" size="extra-large">
        <o-icon
            override
            pack="fas" icon="envelope"
            customClass="w-6 h-6 mb-0.5 align-middle inline-block"
        ></o-icon>
        <span>Button text</span>
      </o-button>
    </div>    <div class="space-x-4">
      <o-button variant="danger" size="extra-small">
        <span>Button text</span>
        <o-icon
            override
            pack="fas" icon="envelope"
            customClass="w-3 h-3 mb-0.5 align-middle inline-block"
        ></o-icon>
      </o-button>
      <o-button variant="danger" size="small">
        <span>Button text</span>
        <o-icon
            override
            pack="fas" icon="envelope"
            customClass="w-3.5 h-3.5 mb-0.5 align-middle inline-block"
        ></o-icon>
      </o-button>
      <o-button variant="danger" size="medium">
        <span>Button text</span>
        <o-icon
            override
            pack="fas" icon="envelope"
            customClass="w-4 h-4 mb-0.5 align-middle inline-block"
        ></o-icon>
      </o-button>
      <o-button variant="danger" size="large">
        <span>Button text</span>
        <o-icon
            override
            pack="fas" icon="envelope"
            customClass="w-5 h-5 mb-0.5 align-middle inline-block"
        ></o-icon>
      </o-button>
      <o-button variant="danger" size="extra-large">
        <span>Button text</span>
        <o-icon
            override
            pack="fas" icon="envelope"
            customClass="w-6 h-6 mb-0.5 align-middle inline-block"
        ></o-icon>
      </o-button>
    </div>
    <div class="space-x-2">
      <o-button variant="danger" size="medium">Primary</o-button>
      <o-button variant="danger" size="medium" rounded roundedClass="rounded-full">Primary</o-button>
      <o-button variant="danger" size="medium"
                rounded roundedClass="rounded-full py-2 px-2.5">
        <o-icon
            override
            pack="fas" icon="plus"
            customClass="w-4 h-4 mb-0.5 align-middle inline-block"
        ></o-icon>
      </o-button>
      <o-button variant="danger" size="medium" labelClass="text-yellow-500 font-light">Override</o-button>
      <o-button variant="danger" size="medium" outlined>Outlined</o-button>
      <o-button variant="danger" size="medium" inverted>Inverted</o-button>
      <o-button variant="danger" size="medium" disabled>Disabled</o-button>
    </div>
    <BiondButton
        class="text-white"
        :disabled="false"
        id="cta_entrar"
        label="Entrar"
        :loading="false"
        :loading-icon="'pi pi-spin pi-spinner'"
        @click="clickMe"
    >
<!--      <template #default="defaultProps">-->
<!--        {{ defaultProps }}-->
<!--      </template>-->
<!--      <template #teste="defaultProps">-->
<!--        {{ defaultProps }}-->
<!--      </template>-->
    </BiondButton>
  </div>
</template>

<style scoped>
</style>
