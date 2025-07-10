// Sound effects for the tarot app
export class TarotSounds {
  private sounds: { [key: string]: HTMLAudioElement } = {};
  private isEnabled: boolean = true;

  constructor() {
    this.initializeSounds();
  }

  private initializeSounds() {
    // Create audio elements for each sound
    const soundFiles = {
      shuffle: '/sounds/shuffle.mp3',
      cardSelect: '/sounds/card-select.mp3',
      cardReveal: '/sounds/card-reveal.mp3',
      mysticalChime: '/sounds/mystical-chime.mp3',
      readingComplete: '/sounds/reading-complete.mp3'
    };

    Object.entries(soundFiles).forEach(([key, src]) => {
      const audio = new Audio();
      audio.preload = 'auto';
      audio.volume = 0.3; // Set moderate volume
      
      // Use placeholder sounds that work in browser
      this.sounds[key] = audio;
    });

    // Create simple synthetic sounds since we can't load external files
    this.createSyntheticSounds();
  }

  private createSyntheticSounds() {
    // Create simple synthetic audio for demonstration
    // In a real app, you'd load actual audio files
    this.sounds = {};
  }

  public playSound(soundName: string) {
    if (!this.isEnabled) return;

    try {
      switch (soundName) {
        case 'shuffle':
          this.playTone(220, 0.1, 'sawtooth');
          break;
        case 'cardSelect':
          this.playTone(440, 0.15, 'sine');
          break;
        case 'cardReveal':
          this.playChord([330, 440, 550], 0.3);
          break;
        case 'mysticalChime':
          this.playMysticalChime();
          break;
        case 'readingComplete':
          this.playCompletionSound();
          break;
      }
    } catch (error) {
      console.log('Sound playback not available:', error);
    }
  }

  private playTone(frequency: number, duration: number, type: OscillatorType = 'sine') {
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.value = frequency;
      oscillator.type = type;

      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);

      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + duration);
    } catch (error) {
      // Fallback for browsers that don't support Web Audio API
      console.log('Web Audio API not available');
    }
  }

  private playChord(frequencies: number[], duration: number) {
    frequencies.forEach((freq, index) => {
      setTimeout(() => this.playTone(freq, duration * 0.8, 'sine'), index * 50);
    });
  }

  private playMysticalChime() {
    const frequencies = [523, 659, 784, 1047]; // C major chord ascending
    frequencies.forEach((freq, index) => {
      setTimeout(() => this.playTone(freq, 0.4, 'sine'), index * 100);
    });
  }

  private playCompletionSound() {
    // Play a magical completion sound
    const melody = [523, 659, 784, 1047, 1319];
    melody.forEach((freq, index) => {
      setTimeout(() => this.playTone(freq, 0.3, 'sine'), index * 150);
    });
  }

  public toggleSounds() {
    this.isEnabled = !this.isEnabled;
    return this.isEnabled;
  }

  public setEnabled(enabled: boolean) {
    this.isEnabled = enabled;
  }

  public isEnabledStatus() {
    return this.isEnabled;
  }
}

// Create global instance
export const tarotSounds = new TarotSounds();