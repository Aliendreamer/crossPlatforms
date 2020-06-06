import {useContext} from "react";
import {Context as TrackContext} from "../context/TrackContext";
import {Context as LocationContext } from "../context/LocationContext";
import {navigate} from "../navigationRef";
export default ()=>{
      const {state:{name,locations},reset} = useContext(LocationContext);

   const {creatTrack } = useContext(TrackContext);
   const saveTrack = async ()=>{
       await creatTrack(name,locations);
       reset();
       navigate('TrackList');
    }

    return [saveTrack]
}