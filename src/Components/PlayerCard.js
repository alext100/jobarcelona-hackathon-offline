import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const PlayerCard = () => {
  const { player } = useLocation().state;

  return (
    <Card>
      <Card.Title>ID: {player?.id}</Card.Title>
      <Card.Text>Red Card Continent: {player?.red_card_continent}</Card.Text>
      <Card.Text>Age: {player?.age}</Card.Text>
      <Card.Text>Nation {player?.nation}</Card.Text>
      <Card.Text>League {player?.league}</Card.Text>
      <Card.Text>Team {player?.team}</Card.Text>
      <Card.Text>Goals Selection {player?.goals_selection}</Card.Text>
      <Card.Text>Selections Nation {player?.selections_nation}</Card.Text>
      <Card.Text>Position {player?.position}</Card.Text>
      <Card.Text>Price {player?.price}</Card.Text>
      <Card.Text>Goal Champ {player?.goal_champ}</Card.Text>
      <Card.Text>Assist Champ {player?.assist_champ}</Card.Text>
      <Card.Text>Own Goal Champ {player?.own_goal_champ}</Card.Text>
      <Card.Text>Yellow Card Champ {player?.yellow_card_champ}</Card.Text>
      <Card.Text>Second Yellow Card Champ {player?.second_yellow_card_champ}</Card.Text>
      <Card.Text>Red Card Champ {player?.red_card_champ}</Card.Text>
      <Card.Text>Goal Cup {player?.goal_cup}</Card.Text>
      <Card.Text>Assist Cup {player?.assist_cup}</Card.Text>
      <Card.Text>Own Goal Cup {player?.own_goal_cup}</Card.Text>
      <Card.Text>Yellow Card Cup {player?.yellow_card_cup}</Card.Text>
      <Card.Text>Second Yellow Card Cup {player?.second_yellow_card_cup}</Card.Text>
      <Card.Text>Red Card Cup {player?.red_card_cup}</Card.Text>
      <Card.Text>Goal Continent {player?.goal_continent}</Card.Text>
      <Card.Text>Assist Continent {player?.assist_continent}</Card.Text>
      <Card.Text>Own Goal Continent {player?.own_goal_continent}</Card.Text>
      <Card.Text>Yellow Card Continent {player?.yellow_card_continent}</Card.Text>
      <Card.Text>Second Yellow Card Continent {player?.second_yellow_card_continent}</Card.Text>
    </Card>
  );
};

export default PlayerCard;

PlayerCard.propTypes = {
  player: PropTypes.shape({
    nation: PropTypes.string,
  }),
};
