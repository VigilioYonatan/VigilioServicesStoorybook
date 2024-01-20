// Replace your-framework with the name of your framework
import { Meta, StoryObj } from "@storybook/preact";
import HeaderOne from "./HeaderOne";

const meta: Meta<typeof HeaderOne> = {
    title: "2024/headers/one",
    component: HeaderOne,
};

export default meta;
type Story = StoryObj<typeof HeaderOne>;

//👇 Throws a type error it the args don't match the component props
export const Primary: Story = {
    // args: {
    //     primary: true,
    // },
};
