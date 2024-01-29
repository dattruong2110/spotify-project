import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isPlaying: false,
  isRepeating: false,
  currentSong: null,
  currentSongIndex: 0,
  currentlyPlaying: null,
  currentTrackDuration: 0,
  playBackState: false,
  playbackTime: 0,
  playMode: 0,
  searchTerm: "",
  searchResults: [],
};

const songSlice = createSlice({
  name: "song",
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
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
      state.currentSongIndex = action.payload;
    },
    setCurrentTrackDuration: (state, action) => {
      state.currentTrackDuration = action.payload;
    },
    setPlayMode: (state, action) => {
      state.playMode = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
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
  setIsLoading,
  setIsPlaying,
  setIsRepeating,
  setCurrentSong,
  setCurrentlyPlaying,
  setCurrentSongIndex,
  setCurrentTrackDuration,
  setPlayMode,
  setSearchTerm,
  setSearchResults,
  togglePlaybackState,
  updatePlaybackTime,
} = songSlice.actions;
export const selectIsLoading = (state) => state.song.isLoading;
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
export const selectSearchTerm = (state) => state.song.searchTerm;
export const selectSearchResults = (state) => state.song.searchResults;
export default songSlice.reducer;
