import React, { useState } from "react";
import { Slider } from "react-native";
import styled from "styled-components";
import { LinearGradient } from "expo-linear-gradient";
import { Entypo, Feather, Ionicons, AntDesign } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";

const Background = ({ children }) => {
  return (
    <LinearGradient
      colors={["#464769", "#1B1A1F"]}
      style={{
        flex: 1,
        paddingTop: 50,
      }}
    >
      {children}
    </LinearGradient>
  );
};

const TopBar = styled.View`
  flex-direction: row;
`;

TopBar.Left = styled.View`
  flex: 1;
  padding-left: 16px;
`;

TopBar.Right = styled.View`
  flex: 1;
  padding-right: 16px;
  align-items: flex-end;
`;

TopBar.Middle = styled.View`
  flex: 2;
  align-items: center;
`;

TopBar.Title = styled.Text`
  color: white;
  text-transform: uppercase;
`;

TopBar.SubTitle = styled.Text`
  color: white;
  font-weight: bold;
`;

// =====================

const ScreenArea = styled.View`
  flex: 1;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 32px;
`;

const CoverArea = styled.View`
  flex: 4;
`;

CoverArea.Image = styled.Image`
  width: 100%;
  flex: 1;
`;

const PlayerInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

PlayerInfo.Heard = styled.TouchableOpacity``;

const PlayerAreaText = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

PlayerAreaText.Title = styled.Text`
  color: white;
  font-size: 22px;
`;

PlayerAreaText.Author = styled.Text`
  color: #bbbbbb;
  font-size: 16px;
`;

const ControlsSlider = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 28px;
`;

ControlsSlider.Slider = styled.View`
  flex-basis: 100%;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

ControlsSlider.Slider.CurrentTime = styled.Text`
  color: #bbbbbb;
`;

ControlsSlider.Slider.TotalTime = styled.Text`
  color: #bbbbbb;
`;

const ButtonReproduzir = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

ButtonReproduzir.Play = styled.TouchableOpacity``;

ButtonReproduzir.Ant = styled.TouchableOpacity`
  padding-right: 16px;
`;

ButtonReproduzir.Prox = styled.TouchableOpacity`
  padding-left: 16px;
`;

ButtonReproduzir.Repeat = styled.TouchableOpacity`
  padding-left: 48px;
`;

ButtonReproduzir.Shuffle = styled.TouchableOpacity`
  padding-right: 48px;
`;

const AudioSlider = styled(Slider)`
  flex-basis: 100%;
`;

const Icons = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 24px;
`;

Icons.Share = styled.TouchableOpacity`
  padding-right: 30px;
`;

Icons.Menu = styled.TouchableOpacity`
  padding-right: 10px;
`;

Icons.Mobile = styled.TouchableOpacity`
  padding-right: 230px;
`;

export function PlayerScreen() {
  const [segundos, setSegundos] = useState(0);

  const [isRandomActive, setIsRandomActive] = useState(false);

  const [isRepeatActive, setIsRepeatActive] = useState(false);

  const [isHeardActive, setIsHeardActive] = useState(false);

  PlayerAreaText.Title = Animatable.createAnimatableComponent(
    PlayerAreaText.Title
  );

  PlayerAreaText.Author = Animatable.createAnimatableComponent(
    PlayerAreaText.Author
  );

  return (
    <Background>
      <TopBar>
        <TopBar.Left>
          <Entypo name="chevron-thin-down" size={24} color="white" />
        </TopBar.Left>

        <TopBar.Middle>
          <TopBar.Title>tocando podcaste</TopBar.Title>
          <TopBar.SubTitle>Hipster Ponto Tech</TopBar.SubTitle>
        </TopBar.Middle>

        <TopBar.Right>
          <Feather name="more-vertical" size={24} color="white" />
        </TopBar.Right>
      </TopBar>

      <ScreenArea>
        <CoverArea>
          <CoverArea.Image
            resizeMode="contain"
            source={{
              uri: "https://via.placeholder.com/300/09f/fff.png",
            }}
          />
        </CoverArea>
        <PlayerInfo>
          <PlayerAreaText>
            <PlayerAreaText.Title
              animation="slideInLeft"
              iterationDelay="250"
              duration="250"
              easing="linear"
            >
              Miguel - Felicidade #36
            </PlayerAreaText.Title>
            <PlayerAreaText.Author
              animation="slideInLeft"
              duration="2500"
              easing="linear"
            >
              Hiptrs Ponto Tech
            </PlayerAreaText.Author>
          </PlayerAreaText>
          <PlayerInfo.Heard onPress={() => setIsHeardActive(!isHeardActive)}>
            <Ionicons
              name={isHeardActive ? "heart-sharp" : "heart-outline"}
              size={28}
              color={isHeardActive ? "#1DD65F" : "white"}
            />
          </PlayerInfo.Heard>
        </PlayerInfo>

        <ControlsSlider>
          <ControlsSlider.Slider>
            <AudioSlider
              thumbTintColor="#FFFFFF"
              minimumTrackTintColor="#1DD65F"
              maximumTrackTintColor="#777777"
              minimumValue={0}
              maximumValue={100}
              value={segundos}
              onValueChange={(value) => {
                setSegundos(value);
              }}
            />
            <ControlsSlider.Slider.CurrentTime>
              {segundos}
            </ControlsSlider.Slider.CurrentTime>
            <ControlsSlider.Slider.TotalTime>
              52:07
            </ControlsSlider.Slider.TotalTime>
          </ControlsSlider.Slider>
        </ControlsSlider>

        <ButtonReproduzir>
          <ButtonReproduzir.Shuffle
            onPress={() => setIsRandomActive(!isRandomActive)}
          >
            <Ionicons
              name="shuffle-outline"
              size={24}
              color={isRandomActive ? "#1DD65F" : "white"}
            />
          </ButtonReproduzir.Shuffle>
          <ButtonReproduzir.Ant>
            <Entypo name="controller-jump-to-start" size={36} color="white" />
          </ButtonReproduzir.Ant>
          <ButtonReproduzir.Play>
            <Ionicons name="play-circle-sharp" size={64} color="white" />
          </ButtonReproduzir.Play>
          <ButtonReproduzir.Prox>
            <Entypo name="controller-next" size={36} color="white" />
          </ButtonReproduzir.Prox>
          <ButtonReproduzir.Repeat
            onPress={() => setIsRepeatActive(!isRepeatActive)}
          >
            <Ionicons
              name="md-repeat-outline"
              size={24}
              color={isRepeatActive ? "#1DD65F" : "white"}
            />
          </ButtonReproduzir.Repeat>
        </ButtonReproduzir>

        <Icons>
          <Icons.Mobile>
            <Entypo name="tablet-mobile-combo" size={18} color="white" />
          </Icons.Mobile>
          <Icons.Share>
            <Ionicons name="share-social-outline" size={18} color="white" />
          </Icons.Share>
          <Icons.Menu>
            <AntDesign name="menu-fold" size={18} color="white" />
          </Icons.Menu>
        </Icons>
      </ScreenArea>
    </Background>
  );
}
