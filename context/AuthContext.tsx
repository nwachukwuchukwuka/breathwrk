// import React, { createContext, ReactNode, useContext, useState } from 'react';

// type AuthContextType = {
//   isAuthenticated: boolean;
//   setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
//   isShowingSplash: boolean;
//   setIsShowingSplash: React.Dispatch<React.SetStateAction<boolean>>;
// };

// const AuthContext = createContext<AuthContextType | null>(null);

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(true);
//   const [isShowingSplash, setIsShowingSplash] = useState(true);

//   const value: AuthContextType = {
//     isAuthenticated,
//     setIsAuthenticated,
//     isShowingSplash,
//     setIsShowingSplash,
//   };

//   return (
//     <AuthContext.Provider value={value}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };  





import { Audio } from 'expo-av';
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';


const SOUND_FILE = require('../assets/sounds/forest.mp3');

        

type AuthContextType = {
  
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  isShowingSplash: boolean;
  setIsShowingSplash: React.Dispatch<React.SetStateAction<boolean>>;

  
  isPlaying: boolean;
  playSound: () => Promise<void>;
  pauseSound: () => Promise<void>;
};


const AuthContext = createContext<AuthContextType | null>(null);
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [isShowingSplash, setIsShowingSplash] = useState(true);

  
  const [isPlaying, setIsPlaying] = useState(false);
  const soundRef = useRef(new Audio.Sound());

  
  useEffect(() => {
    const setupAudio = async () => {
      try {
        await Audio.setAudioModeAsync({
          playsInSilentModeIOS: true,
          staysActiveInBackground: true,
          shouldDuckAndroid: true,
          playThroughEarpieceAndroid: false,
        });
      } catch (error) {
        console.error('Failed to set audio mode:', error);
      }
    };

    setupAudio();
    playSound();


    
    return () => {
      soundRef.current.unloadAsync();
    };
  }, []);

  
  const playSound = async () => {
    try {
      const { isLoaded } = await soundRef.current.getStatusAsync();
      if (!isLoaded) {
        await soundRef.current.loadAsync(SOUND_FILE, { isLooping: true });
      }
      await soundRef.current.playAsync();
      setIsPlaying(true);
    } catch (error) {
      console.error('Error playing sound:', error);
    }
  };

  const pauseSound = async () => {
    try {
      if ((await soundRef.current.getStatusAsync()).isLoaded) {
        await soundRef.current.pauseAsync();
        setIsPlaying(false);
      }
    } catch (error) {
      console.error('Error pausing sound:', error);
    }
  };



  
  const value: AuthContextType = {
    isAuthenticated,
    setIsAuthenticated,
    isShowingSplash,
    setIsShowingSplash,
    isPlaying,
    playSound,
    pauseSound,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};