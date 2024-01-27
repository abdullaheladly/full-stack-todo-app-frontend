import FirstComponent, { FifthComponent } from "./FirstComponent";
import ForthComponent from "./ForthComponent";
import SecondComponent from "./SecondComponent";
import ThirdComponent from "./ThirdComponent";
import LearningJS from "./LearningJS";


export default function LearningComponent(){
    return (
        <div className="LearningComponent" >
                <FirstComponent/>
     <SecondComponent/>
     <ThirdComponent/>
     <ForthComponent/>
     <FifthComponent/>
     <LearningJS/>
        </div>    
    )
}