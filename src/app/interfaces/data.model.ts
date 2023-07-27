export interface Results{
    violations: Violations[];
}

export interface Violations{
    id: string;
    impact: string;
    tags: string[];
    description: string;
    help: string;
    helpUrl: string;
    nodes: Node[];
}

export interface Node{
    any: unknown[];
    all: unknown[];
    none: unknown[];
    impact: string[];
    html: string;
    target: string[];
    failureSummary: string;
}