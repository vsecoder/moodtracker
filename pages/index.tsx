import { HeaderMiddle } from '../components/header';
import { Tiles } from '../components/tiles';
import { Calendar } from '../components/calendar';

import { Container } from '@mantine/core';

import { Grid } from '@mantine/core';


export default function IndexPage() {
  return (
    <>
      <HeaderMiddle />
      <Container>
        <Grid>
          <Grid.Col md={12} lg={6}><Tiles /></Grid.Col>
          <Grid.Col md={12} lg={6}><Calendar /></Grid.Col>
        </Grid>
        <h1>Графики:</h1>
        <p>Будут скоро!</p>
      </Container>
    </>
  );
}
