import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPlaying: false,
  isRepeating: false,
  currentSong: null,
  currentSongIndex: 0,
  currentlyPlaying: null,
  currentTrackDuration: 0,
  playBackState: false,
  playbackTime: 0,
  playMode: 0,
};

const songSlice = createSlice({
  name: "song",
  initialState,
  reducers: {
    setIsPlaying: (state, action) => {
      state.isPlaying = action.payload;
    },
    setIsRepeating: (state, action) => {
      state.isRepeating = action.payload;
    },
    setCurrentSong: (state, action) => {
      state.currentSong = action.payload;
    },
    setCurrentlyPlaying: (state, action) => {
      state.currentlyPlaying = action.payload;
    },
    setCurrentSongIndex: (state, action) => {
      console.log("Current Song Index Payload:", action.payload);
      state.currentSongIndex = action.payload;
    },
    setCurrentTrackDuration: (state, action) => {
      state.currentTrackDuration = action.payload;
    },
    setPlayMode: (state, action) => {
      state.playMode = action.payload;
    },
    togglePlaybackState: (state) => {
      state.playBackState = !state.playBackState;
    },
    updatePlaybackTime: (state, action) => {
      state.playbackTime = action.payload;
    },
  },
});

export const {
  setIsPlaying,
  setIsRepeating,
  setCurrentSong,
  setCurrentlyPlaying,
  setCurrentSongIndex,
  setCurrentTrackDuration,
  setPlayMode,
  togglePlaybackState,
  updatePlaybackTime,
} = songSlice.actions;
export const selectIsPlaying = (state) => state.song.isPlaying;
export const selectIsRepeating = (state) => state.song.isRepeating;
export const selectCurrentSong = (state) => state.song.currentSong;
export const selectCurrentlyPlaying = (state) => state.song.currentlyPlaying;
export const selectCurrentSongIndex = (state) => state.song.currentSongIndex;
export const selectCurrentTrackDuration = (state) =>
  state.song.currentTrackDuration;
export const selectPlayBackState = (state) => state.song.playBackState;
export const selectPlaybackTime = (state) => state.song.playbackTime;
export const selectPlayMode = (state) => state.song.playMode;
export default songSlice.reducer;
