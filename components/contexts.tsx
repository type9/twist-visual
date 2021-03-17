import {createContext} from 'react';

export type graphContext = {
    graphData: {},
    setGraph: ({}) => void
}
export const graphContext = createContext<graphContext>({
    graphData: {},
    setGraph: () => console.warn('no graphData provider')
});

export type subgraphContext = {
    groups: {},
    setGroups: ({}) => void
    nodes: {},
    setNodes: ({}) => void
    tags: {},
    setTags: ({}) => void
}