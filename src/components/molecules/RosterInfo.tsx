import { Grid } from '@mui/material';
import React from 'react';
import { Character, CharacterAbility } from 'src/resources/types';
import { InfoFootnote, RosterInfoDivider, RosterInfoValue } from '../atoms';

const RosterInfo = (props: { myTeam: Character[] }): React.ReactElement => {
  const { myTeam } = props;

  const abilities: CharacterAbility[][] = myTeam.map((ability) => {
    return ability.abilities;
  });

  const powerAve =
    abilities
      .flat(1)
      .filter((ability) => {
        return ability.abilityName === 'Power';
      })
      .reduce((partialSum, val) => partialSum + val.abilityScore, 0) /
    abilities.length;

  const mobiAve =
    abilities
      .flat(1)
      .filter((ability) => {
        return ability.abilityName === 'Mobility';
      })
      .reduce((partialSum, val) => partialSum + val.abilityScore, 0) /
    abilities.length;

  const techAve =
    abilities
      .flat(1)
      .filter((ability) => {
        return ability.abilityName === 'Technique';
      })
      .reduce((partialSum, val) => partialSum + val.abilityScore, 0) /
    abilities.length;

  const survAve =
    abilities
      .flat(1)
      .filter((ability) => {
        return ability.abilityName === 'Survivability';
      })
      .reduce((partialSum, val) => partialSum + val.abilityScore, 0) /
    abilities.length;

  const energyAve =
    abilities
      .flat(1)
      .filter((ability) => {
        return ability.abilityName === 'Energy';
      })
      .reduce((partialSum, val) => partialSum + val.abilityScore, 0) /
    abilities.length;

  return (
    <Grid
      container
      spacing={0}
      sx={{ justifyContent: 'center', textAlign: 'center' }}
    >
      <Grid item md={2} xs={6}>
        <RosterInfoValue label="Power" aveValue={powerAve} />
      </Grid>
      <Grid item md={2} xs={6}>
        <RosterInfoValue label="Mobility" aveValue={mobiAve} />
      </Grid>

      <RosterInfoDivider />
      <Grid item md={2} xs={6}>
        <RosterInfoValue label="Technique" aveValue={techAve} />
      </Grid>

      <RosterInfoDivider />
      <Grid item md={2} xs={6}>
        <RosterInfoValue label="Survivability" aveValue={survAve} />
      </Grid>
      <Grid item md={2} xs={6}>
        <RosterInfoValue label="Energy" aveValue={energyAve} />
      </Grid>

      <InfoFootnote />
    </Grid>
  );
};

export default RosterInfo;
