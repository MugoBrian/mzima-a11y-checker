export interface Results{
    violations?: Violations[];
}

export interface Violations{
    id: string;
    impact: string;
    tags: string[];
    description: string;
    helpUrl: string;
    nodes: Node[];
}

export interface Node{
    failureSummary: string;
    html: string;
    impact: string[];
    target: string[];
}