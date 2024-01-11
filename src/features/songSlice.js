import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentSong: null,
  isPlaying: false,
  currentlyPlaying: null,
  currentSongIndex: null,
  playBackState: false,
  currentTrackDuration: 0,
  playbackTime: 0,
};

const songSlice = createSlice({
  name: "song",
  initialState,
  reducers: {
    setCurrentSong: (state, action) => {
      state.currentSong = action.payload;
    },
    setIsPlaying: (state, action) => {
      state.isPlaying = action.payload;
    },
    setCurrentlyPlaying: (state, action) => {
      state.currentlyPlaying = action.payload;
    },
    setCurrentSongIndex: (state, action) => {
      state.currentSongIndex = action.payload;
    },
    togglePlaybackState: (state) => {
      state.playBackState = !state.playBackState;
    },
    setCurrentTrackDuration: (state, action) => {
      state.currentTrackDuration = action.payload;
    },
    updatePlaybackTime: (state, action) => {
      state.playbackTime = action.payload;
    },
  },
});

export const {
  setCurrentSong,
  setIsPlaying,
  setCurrentlyPlaying,
  setCurrentSongIndex,
  togglePlaybackState,
  setCurrentTrackDuration,
  updatePlaybackTime,
} = songSlice.actions;
export const selectCurrentSong = (state) => state.song.currentSong;
export const selectIsPlaying = (state) => state.song.isPlaying;
export const selectCurrentlyPlaying = (state) => state.song.currentlyPlaying;
export const selectCurrentSongIndex = (state) => state.song.currentSongIndex;
export const selectPlayBackState = (state) => state.song.playBackState;
export const selectCurrentTrackDuration = (state) =>
  state.song.currentTrackDuration;
export const selectPlaybackTime = (state) => state.song.playbackTime;
export default songSlice.reducer;
