import { Routes, Route } from "react-router-dom";
import Button from "./Button";
import Screen from "./Screen";
import "./styles.css";

/* Change debug to `true` to see the invisible Buttons */
export const debug = false;

/* Step 1
<---- UPLOAD YOU OWN IMAGE FILES INTO /public

You can use .jpg, .png, .svg
Try to make all your images roughly the same width, 
i.e. 360 pixels wide for a mobile screen
or 1200 pixels wide for a desktop screen
*/

export default function App() {
  /* Step 2

  For each Screen in your click dummy, create a new
  - Route
    - Screen

  If you want to make the screens interactive, place a Button inside the screen
  – Route
    – Screen
      – Button
      – Button

  The Button "to" parameter links to the Route "path" parameter.
  The Screen "image" parameter should be the file name in the / folder (root)
  */
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Screen image="/1.jpg">
              <Button to="/details" x="30" y="490" w="300" h="50" />
            </Screen>
          }
        />
        <Route
          path="/details"
          element={
            <Screen image="/2.jpg">
              <Button to="/details1" x="20" y="160" w="140" h="45" />
              <Button to="/details2" x="180" y="160" w="140" h="45" />
            </Screen>
          }
        />
        <Route
          path="/details1"
          element={
            <Screen image="/selection1.jpg">
              <Button to="/main1" x="25" y="525" w="300" h="60" />
            </Screen>
          }
        />
        <Route
          path="/details2"
          element={
            <Screen image="/selection2.jpg">
              <Button to="/main1F" x="25" y="525" w="300" h="60" />
            </Screen>
          }
        />

        <Route
          path="/main1F"
          element={
            <Screen image="/3.jpg">
              <Button to="/main1F" x="25" y="586" w="60" h="40" />
              <Button to="/savedF" x="125" y="590" w="60" h="40" />
              <Button to="/profile1F" x="265" y="590" w="60" h="40" />
              <Button to="/infoF" x="305" y="510" w="36" h="40" />
              <Button to="/main2F" x="25" y="40" w="280" h="450" />
            </Screen>
          }
        />
        <Route
          path="/savedF"
          element={
            <Screen image="/Saved.jpg" back="/main1F">
              <Button to="/main1F" x="25" y="586" w="60" h="40" />
              <Button to="/savedF" x="125" y="590" w="60" h="40" />
              <Button to="/profile1F" x="265" y="590" w="60" h="40" />
              <Button to="/info" x="40" y="70" w="280" h="500" />
            </Screen>
          }
        />
        <Route
          path="/saved"
          element={
            <Screen image="/Saved.jpg" back="/main1">
              <Button to="/main1" x="25" y="586" w="60" h="40" />
              <Button to="/saved" x="125" y="590" w="60" h="40" />
              <Button to="/profile1" x="265" y="590" w="60" h="40" />
              <Button to="/info" x="40" y="70" w="280" h="500" />
            </Screen>
          }
        />
        <Route
          path="/main1"
          element={
            <Screen image="/3.jpg">
              <Button to="/main1" x="25" y="586" w="60" h="40" />
              <Button to="/saved" x="125" y="590" w="60" h="40" />
              <Button to="/profile1" x="265" y="590" w="60" h="40" />
              <Button to="/info" x="305" y="510" w="36" h="40" />
              <Button to="/main2" x="25" y="40" w="280" h="450" />
            </Screen>
          }
        />

        <Route
          path="/main2F"
          element={
            <Screen image="/4.jpg">
              <Button to="/main1F" x="25" y="586" w="60" h="40" />
              <Button to="/saved" x="125" y="590" w="60" h="40" />
              <Button to="/profile1F" x="265" y="590" w="60" h="40" />
              <Button to="/infoF" x="305" y="510" w="36" h="40" />
              <Button to="/main3" x="25" y="40" w="280" h="450" />
            </Screen>
          }
        />

        <Route
          path="/main2"
          element={
            <Screen image="/4.jpg">
              <Button to="/main1" x="25" y="586" w="60" h="40" />
              <Button to="/saved" x="125" y="590" w="60" h="40" />
              <Button to="/profile1" x="265" y="590" w="60" h="40" />
              <Button to="/info" x="305" y="510" w="36" h="40" />
            </Screen>
          }
        />

        <Route
          path="/main3"
          element={
            <Screen image="/F0.jpg">
              <Button to="/main1F" x="25" y="586" w="60" h="40" />
              <Button to="/saved" x="125" y="590" w="60" h="40" />
              <Button to="/profile1F" x="265" y="590" w="60" h="40" />
              <Button to="/infoF" x="290" y="490" w="36" h="40" />
              <Button to="/profile1F" x="40" y="250" w="260" h="40" />
              <Button to="/main1F" x="40" y="292" w="260" h="40" />
            </Screen>
          }
        />

        <Route
          path="/info"
          element={
            <Screen image="/6.jpg" back="/main1">
              <Button to="/main1" x="25" y="586" w="60" h="40" />
              <Button to="/saved" x="125" y="590" w="60" h="40" />
              <Button to="/profile1" x="265" y="590" w="60" h="40" />
            </Screen>
          }
        />

        <Route
          path="/infoF"
          element={
            <Screen image="/6.jpg" back="/main1F">
              <Button to="/main1F" x="25" y="586" w="60" h="40" />
              <Button to="/savedF" x="125" y="590" w="60" h="40" />
              <Button to="/profile1F" x="265" y="590" w="60" h="40" />
            </Screen>
          }
        />

        <Route
          path="/profile1"
          element={
            <Screen image="/investorProfile.jpg">
              <Button to="/main1" x="25" y="576" w="60" h="40" />
              <Button to="/saved" x="135" y="570" w="60" h="40" />
              <Button to="/profile1" x="265" y="570" w="60" h="40" />
              <Button to="/" x="25" y="490" w="300" h="55" />
            </Screen>
          }
        />

        <Route
          path="/profile1F"
          element={
            <Screen image="/founderProfile.jpg">
              <Button to="/main1F" x="25" y="586" w="60" h="40" />
              <Button to="/step1" x="80" y="230" w="200" h="40" />
              <Button to="/savedF" x="135" y="590" w="60" h="40" />
              <Button to="/profile1F" x="265" y="580" w="60" h="40" />
              <Button to="/" x="25" y="500" w="300" h="55" />
            </Screen>
          }
        />

        <Route
          path="/step1"
          element={
            <Screen image="/F1.jpg" back="/profile1F">
              <Button to="/step2" x="30" y="550" w="300" h="55" />
            </Screen>
          }
        />
        <Route
          path="/step2"
          element={
            <Screen image="/F2.jpg" back="/step1">
              <Button to="/step3" x="30" y="550" w="300" h="55" />
            </Screen>
          }
        />
        <Route
          path="/step3"
          element={
            <Screen image="/F3.jpg" back="/step2">
              <Button to="/step4" x="30" y="560" w="300" h="55" />
            </Screen>
          }
        />
        <Route
          path="/step4"
          element={
            <Screen image="/F4.jpg" back="/step3">
              <Button to="/complete" x="30" y="550" w="300" h="60" />
            </Screen>
          }
        />
        <Route
          path="/complete"
          element={
            <Screen image="/F5.jpg" back="/step4">
              <Button to="/main1F" x="30" y="500" w="300" h="60" />
            </Screen>
          }
        />
      </Routes>
    </div>
  );
}
