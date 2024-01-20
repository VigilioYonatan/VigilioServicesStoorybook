// Replace your-framework with the name of your framework
import { Meta, StoryObj } from "@storybook/preact";
import Loaders from "./Loaders";

const meta: Meta<typeof Loaders> = {
    title: "2024/loaders/one",
    component: Loaders,
};

export default meta;
type Story = StoryObj<typeof Loaders>;

//👇 Throws a type error it the args don't match the component props
export const Primary: Story = {
    // args: {
    //     primary: true,
    // },
};
