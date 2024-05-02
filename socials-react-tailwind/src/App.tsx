import Description from "./components/Description";
import "./index.css";
import profilePicture from "./assets/images/profile.jpg";
import Button from "./components/Button";

function App() {
  return (
    <>
      <div className="h-screen">
        <div className="flex justify-center items-center h-screen bg-black">
          <div className="bg-card text-center text-white w-[25rem] h-[43rem] rounded-xl">
            <Description avatar={profilePicture} alt={"Profile Picture"} width={90} />
            <Button link={"https://dryingcore.github.io/socials/"} desc={"GitHub"} />
            <Button link={"https://www.linkedin.com/in/gabriel-antunes-rocha-816b482a6/"} desc={"LinkedIn"} />
            <Button link={"https://www.instagram.com/__antunesgabriel/"} desc={"Instagram"} />
            <Button link={"https://ind3x.games/"} desc={"Ind3x Interactive"} />
            <Button link={"https://ind3x.games/"} desc={"Portfolio"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
