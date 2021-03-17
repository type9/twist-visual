export type graphFilter = {
    groups: []
    nodes: []
    tags: []
}

export class Graph{
    data: any
    nodes: []
    links: []
    groups: {}
    tags: {}

    constructor(data){
        this.data = data;
        this.nodes = data.nodes;
        this.links = data.links;
        this.groups = this.getGroupings();
        this.tags = this.getTaggings();
    }

    getGroupings(){ //TODO
        let groups = {};
        return groups;
    }

    getTaggings(){ //TODO
        let tags = {};
        return tags;
    }

    getSubGraph(filter){
        return new SubGraph(this, filter);
    }
}

class SubGraph{
    bigGraph: Graph
    filter: graphFilter
    smallGraph: {}
    
    constructor(graph, filter: graphFilter){
        this.bigGraph = graph;
        this.smallGraph = this.applyFilter(filter)
    }

    applyFilter(filter){ //TODO
        let data = {}
        return data
    }
}