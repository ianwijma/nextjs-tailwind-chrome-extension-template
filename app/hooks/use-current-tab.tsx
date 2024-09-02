import { useTabQuery } from "./use-tab-query";

export const useCurrentTab = () => {
    const { tabs } = useTabQuery({ active: true, lastFocusedWindow: true })

    const [currentTab = null] = tabs;

    return { currentTab }
}