// Replace your-framework with the name of your framework
import { Meta, StoryObj } from "@storybook/preact";
import One from "./One";

const meta: Meta<typeof One> = {
    title: "2024/forms/one",
    component: One,
};

export default meta;
type Story = StoryObj<typeof One>;

//👇 Throws a type error it the args don't match the component props
export const Primary: Story = {
    // args: {
    //     primary: true,
    // },
};
