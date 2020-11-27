export interface Demonstrate {
    id?: string;
    name: string;
    desc?: string;
    html: string;
    css: string;
    js: string;
}

export interface DemonstrateItem {
    user_id: string;
    id: string;
    name: string;
    desc?: string;
    html: string;
    css: string;
    js: string;
    update_time: string;
}