/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { affirmations } from "./data/affirmation.js";
import { getRandom } from "./util/random.js";
import "./App.css";

function App(props) {
  const [affirmation, setAffirmation] = useState(null);
  const [refresh, setRefresh] = useState(null);
  const { featureFlags } = props;

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    const affirmationObject = affirmations.at(randomIndex);
    setAffirmation(affirmationObject);
  }, [refresh]);

  const shareAffirmation = (e) => {
    e.preventDefault();
    const shareObj = {
      id: getRandom(1000000000000),
      affirmation,
    };

    console.log("Sharing...", shareObj);
  };

  return (
    <section id="main">
      <div className="root">
        <p className="affirmation">
          {affirmation && affirmation["affirmation"]}
        </p>
        {featureFlags?.enableSharing && (
          <div className="btn" onClick={shareAffirmation}>
            Share with your friends!
          </div>
        )}
      </div>
      {featureFlags?.enableRefresh && (
        <p onClick={() => setRefresh((prev) => !prev)}>Refresh</p>
      )}
      <div className="bottom">
        Made with <span className="heartbeat">❤️</span>
      </div>
    </section>
  );
}

export default App;
