import { useEffect, useState } from "react";

export type TabQuery = chrome.tabs.QueryInfo
export type Tab = chrome.tabs.Tab

export const useTabQuery = (tabsQuery: TabQuery) => {
    const [tabs, setTabs] = useState<Tab[]>([]);

    useEffect(() => {
        (async () => {
            if (chrome) {
                let tabs = await chrome.tabs.query(tabsQuery);
                setTabs(tabs);
            }
        })()
    }, [tabsQuery])


    return { tabs }
}