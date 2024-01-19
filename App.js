/*
 * ************************************************************************************************
 * ************************************************************************************************
 * Project: talk2notes
 * File Name: App.js
 * Created Date: Wednesday, January 17th 2024, 1:16:01 pm
 * Author: Shrawan Shinde
 * -----
 * Last Modified: Wednesday, January 17th 2024, 1:16:01 pm
 * Modified By:  Shrawan Shinde
 * -----
 * Copyright (c) 2024 RajeAi
 * ************************************************************************************************
 * ************************************************************************************************
 */

import { useEffect, useState } from "react";
import "react-native-url-polyfill/auto";
import AuthScreen from "./screens/AuthScreen";
import HomeScreen from "./screens/HomeScreen";
import { supabase } from "./server/ServerInit";

// PING INFO
// curl https://api.openai.com/v1/audio/transcriptions   -H "Authorization: Bearer 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"   -H "Content-Type: multipart/form-data"   -F file="https://hijbvzqeaadvqtutbxbb.supabase.co/storage/v1/object/public/recording_files/Ethics.mp4"   -F model="whisper-1"

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then((response) => {
      if (response.data.session) {
        supabase.auth.getUser().then((data) => {
          setUser(data.data.user);
          // console.log(data);
        });
      }
    });

    return () => {};
  }, []);


  if (user) {
    return <HomeScreen user={user} setUser={setUser} />;
    // return <></>;
  } else {
    return <AuthScreen user={user} setUser={setUser} />;
  }
}

