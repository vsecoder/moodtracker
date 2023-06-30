import { SignUp } from "@clerk/nextjs";
import { Group } from "@mantine/core";


export default function Page() {
    return (
        <Group mt={50} position="center">
            <SignUp />
        </Group>
    );
}
