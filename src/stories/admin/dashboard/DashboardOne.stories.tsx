// Replace your-framework with the name of your framework
import DashboardOne from "./DashboardOne";
import { Meta, StoryObj } from "@storybook/preact";

const meta: Meta<typeof DashboardOne> = {
    title: "Admin/dashboards/One",
    component: DashboardOne,
};

export default meta;
type Story = StoryObj<typeof DashboardOne>;

//👇 Throws a type error it the args don't match the component props
export const Primary: Story = {
    args: {
        primary: true,
    },
};
