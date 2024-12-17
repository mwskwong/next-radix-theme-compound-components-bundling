import { Box, Popover } from "@radix-ui/themes";

export default function Home() {
  return (
    <Box>
      Hello world
      <Popover.Root>
        <Popover.Trigger>
          <button>open popover</button>
        </Popover.Trigger>
        <Popover.Content width="360px">Content</Popover.Content>
      </Popover.Root>
    </Box>
  );
}
