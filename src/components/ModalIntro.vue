<script setup>
import { useFirstTimeStore } from '../stores/firstTimeStore';
import { ref, onMounted, computed } from 'vue';

const store = useFirstTimeStore();
const showModal = computed(() => store.showModal);
const fullText = 'We know you\'ve been eagerly waiting all year for Spotify\'s Wrapped feature, where you can proudly flaunt your impeccable music taste to the world. But let\'s be real – your kids hijacked your account, and now \"Baby Shark\" is your top song of the year. Yikes! Fear not, for Spotify Rewrapped is here to save your street cred. We let you creatively adjust your listening history so you can share a list that\'s more \"you\" and less \"nursery rhyme\". Go on, give it a spin and reclaim your musical throne. After all, what\'s a little white lie between friends?';
const displayedText = ref('');

const typeText = () => {
  let charIndex = 0;
  const typingSpeed = 40;

  const type = () => {
    if (charIndex < fullText.length) {
      displayedText.value += fullText[charIndex];
      charIndex++;
      setTimeout(type, typingSpeed);
    }
  };

  type();
};

const handleClose = () => {
  localStorage.setItem('firstVisit', 'true');
  store.setShowModal(false);
};

onMounted(() => {
  typeText();
});

</script>

<template>
  <div v-if="showModal" class="
      modal
      fixed
      inset-0
      bg-black bg-opacity-75
      flex
      justify-center
      items-center
    ">
    <div class="w-full max-w-3xl bg-white rounded-2xl border-4 border-[black] border-solid shadow-[3px_3px_0_0_rgb(206,245,108)] overflow-hidden">
      <div class="title flex items-center justify-between h-14 pl-8 bg-gradient-to-r from-[#903893] via-[#04cdfd] to-[#cef56c] text-white border-b-4 border-black border-solid text-xl font-semibold">
        Hey there, music aficionado!
      </div>
      <div class="flex flex-col p-8">
        <p class="mb-6 text-black">{{ displayedText }}</p>
        <button @click="handleClose" class="flex items-center ml-auto py-4 px-8 rounded-xl bg-black text-white font-semibold">
          <img src="/icon-fistpump.svg" class="w-8 mr-2" alt="Fist pump" />Got it!
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes blink {
  50% { opacity: 0; }
}

p:after {
  content: '';
  display: inline-block;
  width: 2px;
  height: 1em;
  vertical-align: text-bottom;
  background-color: black;
  margin-left: 2px;
  animation: blink 1s step-end infinite;
}
</style>