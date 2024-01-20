// Replace your-framework with the name of your framework
import { Meta, StoryObj } from "@storybook/preact";
import Carousels from "./Carousels";

const meta: Meta<typeof Carousels> = {
    title: "2024/carousels",
    component: Carousels,
};

export default meta;
type Story = StoryObj<typeof Carousels>;

//👇 Throws a type error it the args don't match the component props
export const Primary: Story = {
    // args: {
    //     primary: true,
    // },
};
