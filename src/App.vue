<script setup lang="ts">

const xpto = (_, context) => {
  // console.log('suffix: ' + _)
  // console.log('context: ', context)
  return ['text-pink-400', 'bg-blue-300'].join(' ')
}

</script>

<template>
  <div class="flex flex-col w-full items-center justify-center p-20 gap-y-5">
    <div class="flex gap-4">
      <XButton variant="primary">Primary</XButton>
      <XButton variant="primary" outlined>Outlined</XButton>
      <XButton variant="primary" inverted>Inverted</XButton>
      <XButton variant="primary" disabled>Disabled</XButton>
    </div>
    <div class="space-x-4">
      <XButton variant="danger" size="extra-small">Primary</XButton>
      <XButton variant="danger" size="small">Primary</XButton>
      <XButton variant="danger" size="medium">Primary</XButton>
      <XButton variant="danger" size="large">Primary</XButton>
      <XButton variant="danger" size="extra-large">Primary</XButton>
    </div>
    <div class="space-x-4">
      <XButton disabled variant="danger" size="extra-small">
        <o-icon
        override
        pack="fas" icon="circle-notch"
        customClass="w-3 h-3 mb-0.5 align-middle inline-block animate-spin"
        ></o-icon>
        <span>Loading...</span>
      </XButton>
      <XButton disabled variant="danger" size="small">
        <o-icon
        override
        pack="fas" icon="circle-notch"
        customClass="w-3.5 h-3.5 mb-0.5 align-middle inline-block animate-spin"
        ></o-icon>
        <span>Loading...</span>
      </XButton>
      <XButton disabled variant="danger" size="medium">
        <o-icon
        override
        pack="fas" icon="circle-notch"
        customClass="w-4 h-4 mb-0.5 align-middle inline-block animate-spin"
        ></o-icon>
        <span>Loading...</span>
      </XButton>
      <XButton disabled variant="danger" size="large">
        <o-icon
        override
        pack="fas" icon="circle-notch"
        customClass="w-5 h-5 mb-0.5 align-middle inline-block animate-spin"
        ></o-icon>
        <span>Loading...</span>
      </XButton>
      <XButton disabled variant="danger" size="extra-large">
        <o-icon
        override
        pack="fas" icon="circle-notch"
        customClass="w-5 h-5 mb-0.5 align-middle inline-block animate-spin"
        ></o-icon>
        <span>Loading...</span>
      </XButton>
    </div>
    <div class="space-x-4">
      <XButton variant="danger" size="extra-small">
        <o-icon
            override
            pack="fas" icon="envelope"
            customClass="w-3 h-3 mb-0.5 align-middle inline-block"
        ></o-icon>
        <span>Button text</span>
      </XButton>
      <XButton variant="danger" size="small">
        <o-icon
            override
            pack="fas" icon="envelope"
            customClass="w-3.5 h-3.5 mb-0.5 align-middle inline-block"
        ></o-icon>
        <span>Button text</span>
      </XButton>
      <XButton variant="danger" size="medium">
        <o-icon
            override
            pack="fas" icon="envelope"
            customClass="w-4 h-4 mb-0.5 align-middle inline-block"
        ></o-icon>
        <span>Button text</span>
      </XButton>
      <XButton variant="danger" size="large">
        <o-icon
            override
            pack="fas" icon="envelope"
            customClass="w-5 h-5 mb-0.5 align-middle inline-block"
        ></o-icon>
        <span>Button text</span>
      </XButton>
      <XButton variant="danger" size="extra-large">
        <o-icon
            override
            pack="fas" icon="envelope"
            customClass="w-6 h-6 mb-0.5 align-middle inline-block"
        ></o-icon>
        <span>Button text</span>
      </XButton>
    </div>
    <div class="space-x-4">
      <XButton variant="danger" size="extra-small">
        <span>Button text</span>
        <o-icon
            override
            pack="fas" icon="envelope"
            customClass="w-3 h-3 mb-0.5 align-middle inline-block"
        ></o-icon>
      </XButton>
      <XButton variant="danger" size="small">
        <span>Button text</span>
        <o-icon
            override
            pack="fas" icon="envelope"
            customClass="w-3.5 h-3.5 mb-0.5 align-middle inline-block"
        ></o-icon>
      </XButton>
      <XButton variant="danger" size="medium">
        <span>Button text</span>
        <o-icon
            override
            pack="fas" icon="envelope"
            customClass="w-4 h-4 mb-0.5 align-middle inline-block"
        ></o-icon>
      </XButton>
      <XButton variant="danger" size="large">
        <span>Button text</span>
        <o-icon
            override
            pack="fas" icon="envelope"
            customClass="w-5 h-5 mb-0.5 align-middle inline-block"
        ></o-icon>
      </XButton>
      <XButton variant="danger" size="extra-large">
        <span>Button text</span>
        <o-icon
            override
            pack="fas" icon="envelope"
            customClass="w-6 h-6 mb-0.5 align-middle inline-block"
        ></o-icon>
      </XButton>
    </div>
    <div class="space-x-2">
      <XButton variant="danger" size="medium">Primary</XButton>
      <XButton variant="danger" size="medium" rounded roundedClass="rounded-full">Primary</XButton>
      <XButton variant="danger" size="medium"
                rounded roundedClass="rounded-full py-2 px-2.5">
        <o-icon
            override
            pack="fas" icon="plus"
            customClass="w-4 h-4 mb-0.5 align-middle inline-block"
        ></o-icon>
      </XButton>
      <XButton variant="danger" size="medium" labelClass="text-yellow-500 font-light">Override</XButton>
      <XButton variant="danger" size="medium" outlined>Outlined</XButton>
      <XButton variant="danger" size="medium" inverted>Inverted</XButton>
      <XButton variant="danger" size="medium" disabled>Disabled</XButton>
    </div>
  </div>
</template>

<style scoped>
</style>
