import { HeaderMiddle } from '../components/header';
import { Tiles } from '../components/tiles';

import { Container } from '@mantine/core';


export default function IndexPage() {
  return (
    <>
      <HeaderMiddle />
      <Container>
        <Tiles />

        <h1>Графики:</h1>
        <p>Будут скоро!</p>
      </Container>
    </>
  );
}
