import React,{useContext} from "react";
import {Input, Button} from "react-native-elements";
import Spacer from "./Spacer";
import {Context as LocationContext} from "../context/LocationContext";
import useSaveTrack from "../hooks/useSaveTrack";
const TrackForm =()=>{
  const  {state:{name,recording,locations}, startRecording,stopRecording,changeName} = useContext(LocationContext);
   const [saveTrack] = useSaveTrack();
   return(
      <>
      
      <Spacer>
        <Input value={name} onChange={changeName} placeholder="Enter name"/>
      </Spacer>
      <Spacer>
      { recording
         ?<Button title="Stop" onPress={stopRecording }/>
         :<Button title="Start recording" onPress={startRecording }/>
      }
      </Spacer>
      <Spacer>
      {!recording && locations.length!== 0? <Button title='Save Recording' onPress={saveTrack}/> :null}  
      </Spacer>
      </>
   )
}

export default TrackForm