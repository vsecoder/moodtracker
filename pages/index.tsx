import { Group } from "@mantine/core";
import { UserButton } from "@clerk/nextjs";


export default function IndexPage() {
  return (
    <Group mt={50} position="center">
      <UserButton afterSignOutUrl="/" />
    </Group>
  );
}
